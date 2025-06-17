import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlayer } from "../api/chessApi";
import type { ChessComPlayer } from "../api/types";
import { Clock } from "../components/clock";
import { PlayerInfo } from "../components/Playerinfo";

export function Profiles() {
  const { username } = useParams();
  const [profile, setProfile] = useState<ChessComPlayer | null>(null);

  useEffect(() => {
    if (username) {
      getPlayer(username).then(setProfile);
    }
  }, [username]);

  if (!profile) return <p className="p-4">Loading...</p>;

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
       
          <div className="flex-1">
           <PlayerInfo profile={profile} />
            <div className="mt-4 flex  justify-center">
              <Clock lastOnline={profile.last_online} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
