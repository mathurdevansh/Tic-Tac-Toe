import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DifficultySelector from '../components/DifficultySelector';
import { motion } from 'framer-motion';

export default function Home() {
    const [difficulty, setDifficulty] = useState('Medium');
    const navigate = useNavigate();

    const startGame = () => {
        navigate(`/game?difficulty=${difficulty}`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-8"
            >
                Tic Tac Toe <br /> <span className="text-3xl md:text-5xl text-white">AI Challenge</span>
            </motion.h1>

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-800/50 p-8 rounded-3xl backdrop-blur-sm border border-gray-700 shadow-2xl max-w-md w-full"
            >
                <h2 className="text-xl text-gray-300 mb-6">Select Difficulty</h2>
                <DifficultySelector difficulty={difficulty} setDifficulty={setDifficulty} />

                <button
                    onClick={startGame}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xl font-bold rounded-xl shadow-lg transition transform hover:scale-[1.02]"
                >
                    Start Game
                </button>
            </motion.div>
        </div>
    );
}
