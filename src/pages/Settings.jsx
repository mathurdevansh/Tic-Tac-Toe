import { Link } from 'react-router-dom';

export default function Settings() {
    return (
        <div className="max-w-md mx-auto mt-10 p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Settings</h2>

            <div className="space-y-8">
                <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-lg">Sound Effects</span>
                    <div className="w-14 h-8 bg-blue-600 rounded-full relative cursor-pointer shadow-inner">
                        <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full shadow-md"></div>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-lg">Dark Mode</span>
                    <div className="w-14 h-8 bg-blue-600 rounded-full relative cursor-pointer shadow-inner">
                        <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full shadow-md"></div>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center">
                <Link to="/" className="text-blue-400 hover:text-blue-300 font-semibold transition">Back to Home</Link>
            </div>
        </div>
    );
}
