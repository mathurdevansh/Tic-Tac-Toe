import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Welcome() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6"
            >
                Tic Tac Toe <br /> <span className="text-4xl md:text-6xl text-white">AI Master</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-300 mb-12 max-w-2xl"
            >
                Challenge our AI, climb the ranks, and become the ultimate Tic Tac Toe champion.
                Unlock new levels and track your progress.
            </motion.p>

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6"
            >
                <Link
                    to="/login"
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-xl font-bold rounded-xl shadow-lg transition transform hover:scale-105"
                >
                    Login to Play
                </Link>
                <Link
                    to="/signup"
                    className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white text-xl font-bold rounded-xl shadow-lg border border-gray-700 transition transform hover:scale-105"
                >
                    Create Account
                </Link>
            </motion.div>
        </div>
    );
}
