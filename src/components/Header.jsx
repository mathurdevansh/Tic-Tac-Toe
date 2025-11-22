import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="p-4 bg-gray-900 text-white flex justify-between items-center shadow-lg border-b border-gray-800">
      <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Tic Tac Toe AI
      </Link>
      <nav className="flex items-center space-x-6">
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/campaign" className="hover:text-blue-400 transition">Campaign</Link>
        <Link to="/leaderboard" className="hover:text-blue-400 transition">Leaderboard</Link>
        <Link to="/history" className="hover:text-blue-400 transition">History</Link>

        {user ? (
          <div className="flex items-center gap-4">
            <Link to="/profile" className="flex items-center gap-2 hover:bg-gray-800 px-3 py-1 rounded-lg transition">
              <span className="text-sm text-gray-300 font-semibold">
                {user.username} <span className="text-yellow-500">({user.points} pts)</span>
              </span>
            </Link>
            <button onClick={logout} className="text-sm bg-red-500/10 text-red-400 px-3 py-1 rounded hover:bg-red-500/20 transition">
              Logout
            </button>
          </div>
        ) : (
          <div className="space-x-4">
            <Link to="/login" className="text-gray-300 hover:text-white transition">Login</Link>
            <Link to="/signup" className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition font-semibold">Sign Up</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
