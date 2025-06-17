export interface ChessComPlayer {
  avatar?: string; 
  player_id: number;
  "@id": string; 
  url: string; 
  username: string;
  followers: number;
  country: string;
  location: string;
  last_online: number; 
  joined: number; 
  status: "staff" | "premium" | "closed" | "mod" | "standard"; 
  is_streamer: boolean;
  verified: boolean;
  league?: string; 
  streaming_platforms: string[]; 
  name?: string; 
  title?: string; 
  fide?: number; 
  localization?: string; 
  is_community_contributor?: boolean;
}