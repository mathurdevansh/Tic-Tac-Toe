import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import History from './History';

export default function Profile() {
    const { user } = useContext(AuthContext);

    if (!user) return <div className="text-center text-white mt-20">Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto mt-10 p-4">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700 mb-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-lg">
                        {user.username.charAt(0).toUpperCase()}
                    </div>
                    <div className="text-center md:text-left flex-grow">
                        <h1 className="text-4xl font-bold text-white mb-2">{user.username}</h1>
                        <p className="text-gray-400 text-lg mb-4">Level {user.currentLevel} • {user.points} Points</p>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-gray-900/50 p-4 rounded-xl text-center">
                                <div className="text-2xl font-bold text-green-400">{user.wins}</div>
                                <div className="text-xs text-gray-500 uppercase">Wins</div>
                            </div>
                            <div className="bg-gray-900/50 p-4 rounded-xl text-center">
                                <div className="text-2xl font-bold text-blue-400">{user.matchesPlayed}</div>
                                <div className="text-xs text-gray-500 uppercase">Matches</div>
                            </div>
                            <div className="bg-gray-900/50 p-4 rounded-xl text-center">
                                <div className="text-2xl font-bold text-yellow-400">{user.currentLevel}</div>
                                <div className="text-xs text-gray-500 uppercase">Level</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <History />
        </div>
    );
}
