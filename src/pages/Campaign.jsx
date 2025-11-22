import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Campaign() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!user) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-2xl text-white mb-4">Please Login to play Campaign Mode</h2>
                <button onClick={() => navigate('/login')} className="px-6 py-2 bg-blue-600 text-white rounded-lg">Login</button>
            </div>
        );
    }

    const levels = [
        { level: 1, name: 'Rookie', difficulty: 'Easy', pointsReq: 0 },
        { level: 2, name: 'Challenger', difficulty: 'Medium', pointsReq: 100 },
        { level: 3, name: 'Master', difficulty: 'Hard', pointsReq: 300 },
        { level: 4, name: 'Grandmaster', difficulty: 'Expert', pointsReq: 600 },
    ];

    return (
        <div className="max-w-4xl mx-auto mt-10 p-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-2">Campaign Mode</h1>
                <p className="text-xl text-gray-400">Current Level: <span className="text-blue-400 font-bold">{user.currentLevel}</span> | Points: <span className="text-yellow-400 font-bold">{user.points}</span></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {levels.map((lvl) => {
                    const isUnlocked = user.points >= lvl.pointsReq;
                    const isCurrent = user.currentLevel === lvl.level;

                    return (
                        <motion.div
                            key={lvl.level}
                            whileHover={isUnlocked ? { scale: 1.03 } : {}}
                            className={`p-6 rounded-2xl border-2 transition-all relative overflow-hidden
                ${isUnlocked
                                    ? 'bg-gray-800 border-blue-500/50 shadow-lg shadow-blue-500/10'
                                    : 'bg-gray-900 border-gray-800 opacity-60 grayscale'}
              `}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{lvl.name}</h3>
                                    <p className="text-blue-400 font-semibold">{lvl.difficulty}</p>
                                </div>
                                <div className="text-3xl font-black text-gray-700">#{lvl.level}</div>
                            </div>

                            <p className="text-gray-400 mb-6 text-sm">
                                {isUnlocked ? 'Unlocked' : `Unlock at ${lvl.pointsReq} points`}
                            </p>

                            <button
                                onClick={() => isUnlocked && navigate(`/game?difficulty=${lvl.difficulty}&mode=campaign`)}
                                disabled={!isUnlocked}
                                className={`w-full py-3 rounded-xl font-bold transition
                  ${isUnlocked
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-lg'
                                        : 'bg-gray-800 text-gray-500 cursor-not-allowed'}
                `}
                            >
                                {isUnlocked ? 'Play Level' : 'Locked'}
                            </button>

                            {isCurrent && (
                                <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-bl-lg">
                                    CURRENT
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
