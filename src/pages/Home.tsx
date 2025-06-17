import { useEffect, useState } from "react";
import { getGrandmasters } from "../api/chessApi";
import { Link } from "react-router-dom";

const PAGE_SIZE = 20;

export function Home() {
  const [players, setPlayers] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(players.length / PAGE_SIZE);

  useEffect(() => {
    getGrandmasters().then(setPlayers);
  }, []);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentPlayers = players.slice(startIndex, startIndex + PAGE_SIZE);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-black">
      <h1 className="text-2xl font-bold mb-4 " > Chess.com Grandmasters</h1>

      <ul className="space-y-2">
        {currentPlayers.map((player) => (
          <li key={player}>
            <Link to={`/profile/${player}`} className="text-blue-600 underline">
              {player}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-green-400 rounded disabled:opacity-50"
        >
           Previous
        </button>

        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-green-400 rounded disabled:opacity-50"
        >
          Next 
        </button>
      </div>
    </div>
  );
}
