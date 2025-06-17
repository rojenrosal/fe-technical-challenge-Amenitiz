import { useEffect, useState } from "react";
import { getGrandmasters } from "../api/chessApi";
import { Link } from "react-router-dom";
import { Pagination } from "../components/Pagination";


const PAGE_SIZE = 21;

export function Home() {
  const [players, setPlayers] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(players.length / PAGE_SIZE);

  useEffect(() => {
    getGrandmasters().then(setPlayers);
  }, []);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentPlayers = players.slice(startIndex, startIndex + PAGE_SIZE);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <main className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold mb-4 text-white">
          Grandmaster List 
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentPlayers.map((player) => (
            <li key={player}>
              <Link
                to={`/profile/${player}`}
                className="block bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition shadow-md"
              >
                <p className="text-lg font-semibold text-yellow-300">{player}</p>
                <span className="text-sm text-gray-400">View profile →</span>
              </Link>
            </li>
          ))}
        </ul>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </main>
  );
}
