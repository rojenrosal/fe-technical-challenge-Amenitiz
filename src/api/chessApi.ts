import type { ChessComPlayer } from "./types";

export const getGrandmasters = async (): Promise<string[]> => {
  try {
    const res = await fetch("https://api.chess.com/pub/titled/GM");

    if (!res.ok) {
      throw new Error(`Failed to fetch grandmasters: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data.players;
  } catch (error) {
    console.error("Error fetching grandmasters:", error);
    return []; 
  }
};

export const getPlayer = async (username: string): Promise<ChessComPlayer> => {
  try {
    const res = await fetch(`https://api.chess.com/pub/player/${username}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch player ${username}: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error(`Error fetching player "${username}":`, error);
    throw error; 
  }
};
