import Square from './Square';

export default function Board({ squares, onClick, winningLine }) {
    return (
        <div className="grid grid-cols-3 gap-3 p-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700">
            {squares.map((square, i) => (
                <Square
                    key={i}
                    value={square}
                    onClick={() => onClick(i)}
                    isWinningSquare={winningLine && winningLine.includes(i)}
                />
            ))}
        </div>
    );
}
