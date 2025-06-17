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
    <div className="p-4 max-w-2xl">
      <PlayerInfo profile={profile} />
      <Clock lastOnline={profile.last_online} />
    </div>
  );
}