
import { Crown } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md py-4 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <Crown className="w-6 h-6 text-yellow-400" />
          Chess.com Grandmasters
        </Link>
        <p className="text-sm text-gray-400 mt-2 sm:mt-0 sm:ml-4">
          A list of all officially titled Grandmasters 
        </p>
      </div>
    </nav>
  );
}
