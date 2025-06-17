import type { ChessComPlayer } from "./types";

export const getGrandmasters = async (): Promise<string[]> => {
  const res = await fetch('https://api.chess.com/pub/titled/GM');
  const data = await res.json();
  return data.players;
};


export const getPlayer = async (username: string): Promise<ChessComPlayer> => {
  const res = await fetch(`https://api.chess.com/pub/player/${username}`);
  return res.json();
};