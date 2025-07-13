import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const KrishnaBot = ({ musicPlaying, toggleMusic, petalsActive, togglePetals }) => {
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content: 'Radhe Radhe! 🙏 Main Krishna Bot hoon. Aaj aapko dharmik guidance aur life advice mein kaise madad kar sakta hoon?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceOutputEnabled, setVoiceOutputEnabled] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Audio elements
  const audioRef = useRef(null);
  const recognitionRef = useRef(null);
  
  // Initialize speech recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'hi-IN';
      
      recognitionRef.current.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            transcript += event.results[i][0].transcript;
          }
        }
        setInput(prev => prev + transcript);
      };
      
      recognitionRef.current.onend = () => setIsListening(false);
      recognitionRef.current.onerror = () => setIsListening(false);
    }
    
    // Clean up
    return () => {
      recognitionRef.current?.stop();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Speak with ElevenLabs API
  const speakWithElevenLabs = async (text) => {
    if (!voiceOutputEnabled) return;
    
    try {
      setIsSpeaking(true);
      
      // Call ElevenLabs API
      const response = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${import.meta.env.VITE_ELEVEN_VOICE_ID}`,
        {
          method: 'POST',
          headers: {
            'xi-api-key': import.meta.env.VITE_ELEVEN_API_KEY,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: text,
            model_id: "eleven_multilingual_v2",
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.75,
            }
          })
        }
      );
      
      if (!response.ok) throw new Error('ElevenLabs API error');
      
      // Create audio from response
      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      
      // Stop any previous audio
      if (audioRef.current) {
        audioRef.current.pause();
        URL.revokeObjectURL(audioRef.current.src);
      }
      
      // Play new audio
      audioRef.current = new Audio(audioUrl);
      audioRef.current.play();
      
      // Clean up when done
      audioRef.current.onended = () => {
        setIsSpeaking(false);
        URL.revokeObjectURL(audioUrl);
      };
      
    } catch (error) {
      console.error('ElevenLabs error:', error);
      setIsSpeaking(false);
    }
  };

  const messagesContainerRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading, isListening]);
  // Send message to Gemini API
  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Optimized prompt for VERY short responses (1 sentence max)
      const prompt = `
You are Krishna. Respond in Hinglish with:
1. Strictly to the point ans what is asked by the user 
2. Focus on spiritual guidance
3. Use simple words
4. End with emoji

User: ${input.trim()}
`;

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 50, // Very short responses
            },
          }),
        }
      );
      
      if (!res.ok) throw new Error('API Error');
      
      const data = await res.json();
      const text = data.candidates?.[0]?.content.parts[0]?.text || 
        'Mujhe samajh nahi aaya, Arjun. Phir se try karo?';
      
      // Add new message
      const botMessage = { role: 'bot', content: text };
      setMessages(prev => [...prev, botMessage]);
      
      // Speak the response
      speakWithElevenLabs(text);
      
    } catch (e) {
      console.error(e);
      setMessages(prev => [
        ...prev,
        {
          role: 'bot',
          content: 'Oho! Kuch technical dikkat ho gayi. Thoda baad mein try karo, Arjun.'
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert('Voice recognition is not supported in your browser. Try Chrome or Edge.');
      return;
    }
    
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setIsListening(true);
      setInput('');
      recognitionRef.current.start();
    }
  };

  const toggleVoiceOutput = () => {
    setVoiceOutputEnabled(v => !v);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

    return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex flex-col h-full">
      {/* Header with reduced spacing */}
      <div className="flex items-center mb-1">
        <div className="bg-blue-500 text-white p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </div>
        <h2 className="text-lg font-bold ml-2 text-gray-800 dark:text-white">
          Chat with Krishna Bot
        </h2>
      </div>

      <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
        Spiritual guidance + life advice in playful Hinglish 🌟
      </p>

      {/* Combined Controls */}
      <div className="flex flex-wrap gap-1 mb-2">
        <button
          onClick={togglePetals}
          className="px-2 py-1 text-xs bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded flex items-center"
        >
          <span className="mr-1">{petalsActive ? '🌺' : '🌸'}</span>
          {petalsActive ? 'Hide' : 'Petals'}
        </button>
        
        <button
          onClick={toggleMusic}
          className="px-2 py-1 text-xs bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded flex items-center"
        >
          {musicPlaying ? '🔇 Music' : '🔊 Music'}
        </button>
        
        <button
          onClick={toggleVoiceInput}
          className={`px-2 py-1 text-xs rounded flex items-center ${
            isListening
              ? 'bg-red-500 text-white animate-pulse'
              : 'bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-800 dark:hover:bg-indigo-700 text-indigo-800 dark:text-indigo-100'
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-3 w-3 mr-1"
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 2c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            <path d="M19 10v1c0 3.87-3.13 7-7 7s-7-3.13-7-7v-1c0-.55-.45-1-1-1s-1 .45-1 1v1c0 4.97 4.03 9 9 9s9-4.03 9-9v-1c0-.55-.45-1-1-1s-1 .45-1 1z" />
          </svg>
          {isListening ? 'Listening...' : 'Voice'}
        </button>
        
        <button
          onClick={toggleVoiceOutput}
          className={`px-2 py-1 text-xs rounded flex items-center ${
            voiceOutputEnabled
              ? 'bg-green-500 text-white'
              : 'bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-800 dark:hover:bg-indigo-700 text-indigo-800 dark:text-indigo-100'
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-3 w-3 mr-1"
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
          {voiceOutputEnabled ? 'Sound On' : 'Sound Off'}
        </button>
      </div>

      {/* Messages Container with strict height limit */}
      <div 
        ref={messagesContainerRef} 
        className="flex-grow overflow-y-auto mb-2 pr-1 custom-scrollbar"
        style={{ 
          maxHeight: '35vh', // Reduced max height
          minHeight: '120px' // Minimum height
        }}
      >
        <div className="space-y-2"> {/* Tighter spacing */}
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex ${
                m.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[90%] rounded-xl p-2 text-sm ${
                  m.role === 'user'
                    ? 'bg-indigo-100 dark:bg-indigo-900 text-gray-800 dark:text-indigo-100 rounded-br-none'
                    : 'bg-yellow-100 dark:bg-yellow-900/50 text-gray-800 dark:text-yellow-100 rounded-bl-none'
                }`}
              >
                <div className="font-semibold text-xs mb-0.5 flex items-center">
                  {m.role === 'user' ? 'You' : (
                    <>
                      <span>Krishna Bot</span>
                      <span className="ml-1 text-xxs bg-blue-500 text-white px-1 py-0.5 rounded-full">
                        Divine
                      </span>
                    </>
                  )}
                </div>
                <div className="whitespace-pre-wrap">{m.content}</div>
              </div>
            </motion.div>
          ))}
          {isListening && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-red-100 dark:bg-red-900/50 text-gray-800 dark:text-red-100 rounded-2xl rounded-bl-none p-4 max-w-[80%]">
                <div className="flex items-center">
                  <div className="flex space-x-1 mr-2">
                    <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse delay-100"></div>
                    <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse delay-200"></div>
                  </div>
                  <div>Listening... Speak now</div>
                </div>
              </div>
            </motion.div>
          )}
          
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-yellow-100 dark:bg-yellow-900/50 text-gray-800 dark:text-yellow-100 rounded-2xl rounded-bl-none p-4 max-w-[80%]">
                <div className="flex items-center">
                  <div className="text-sm mr-2">Krishna soch rahe hain...</div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-600 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-600 animate-bounce delay-100"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-600 animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Section with fixed height */}
      <div className="mt-auto border-t border-gray-200 dark:border-gray-700 pt-2">
        <div className="flex">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message to Krishna..."
            className="flex-grow border border-gray-300 dark:border-gray-600 rounded-l-lg p-2 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
            rows={2}
            disabled={isLoading || isListening}
            style={{ minHeight: '80px' }} // Fixed minimum height
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim() || isListening}
            className={`bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-r-lg flex items-center text-sm ${
              isLoading || !input.trim() || isListening
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
          >
            <span>Send</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>

        <p className="mt-1 text-xxs text-gray-500 dark:text-gray-400">
          Chat with Krishna Bot for divine wisdom
        </p>
      </div>
    </div>
  );
};

export default KrishnaBot;