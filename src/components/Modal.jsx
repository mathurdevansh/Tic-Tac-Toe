import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ isOpen, onClose, title, children }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-sm w-full border border-gray-700"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4 text-center">{title}</h2>
                        <div className="text-gray-300 mb-8 text-center text-lg">{children}</div>
                        <button
                            onClick={onClose}
                            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-bold shadow-lg transition transform hover:scale-[1.02]"
                        >
                            Play Again
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
