import { motion } from 'framer-motion';

export default function Square({ value, onClick, isWinningSquare }) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-20 h-20 sm:w-24 sm:h-24 text-4xl sm:text-5xl font-bold flex items-center justify-center rounded-xl shadow-md transition-all duration-200
        ${value === 'X' ? 'text-blue-400 bg-gray-800' : value === 'O' ? 'text-purple-400 bg-gray-800' : 'bg-gray-700/50 hover:bg-gray-700'}
        ${isWinningSquare ? 'ring-4 ring-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.5)]' : ''}
      `}
            onClick={onClick}
            disabled={value !== null}
        >
            {value && (
                <motion.span
                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                    {value}
                </motion.span>
            )}
        </motion.button>
    );
}
