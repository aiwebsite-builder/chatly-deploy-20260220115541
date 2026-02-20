import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-gray-100 max-w-2xl space-y-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center justify-center mb-4 text-emerald-400"
        >
          <Sparkles size={48} strokeWidth={2} />
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-sky-400">
          Welcome!
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 font-light max-w-prose mx-auto">
          We're thrilled to have you here. Explore and enjoy your stay.
        </p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          // In a real app, this would navigate or trigger an action
          onClick={() => alert("Let's get started!")}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}

export default App;