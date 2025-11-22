export default function DifficultySelector({ difficulty, setDifficulty }) {
    const levels = ['Easy', 'Medium', 'Hard', 'Expert'];

    return (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
            {levels.map((level) => (
                <button
                    key={level}
                    onClick={() => setDifficulty(level)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
            ${difficulty === level
                            ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105'
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'}
          `}
                >
                    {level}
                </button>
            ))}
        </div>
    );
}
