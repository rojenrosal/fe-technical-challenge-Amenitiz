import type { ChessComPlayer } from "../api/types";


type Props = {
  profile: ChessComPlayer;
};

export function PlayerInfo({ profile }: Props) {
  return (
    <div className="space-y-2">
        <div className="flex justify-center">
        {profile.avatar && (
        <img
          src={profile.avatar}
          alt={`${profile.username}'s avatar`}
          className="w-24 h-24 rounded-full"
        />
      )}
      </div>
      
      <h2 className="text-2xl font-bold">{profile.username}</h2>

      

      <p><strong>Name:</strong> {profile.name || "N/A"}</p>
      <p><strong>Title:</strong> {profile.title || "N/A"}</p>
      <p><strong>FIDE Rating:</strong> {profile.fide ?? "N/A"}</p>
      <p><strong>Country:</strong> {profile.country}</p>
      <p><strong>Location:</strong> {profile.location || "N/A"}</p>
      <p><strong>Status:</strong> {profile.status}</p>
      <p><strong>League:</strong> {profile.league || "N/A"}</p>
      <p><strong>Followers:</strong> {profile.followers}</p>
      <p><strong>Streamer:</strong> {profile.is_streamer ? "Yes" : "No"}</p>
      <p><strong>Verified:</strong> {profile.verified ? "Yes" : "No"}</p>
      <p><strong>Community Contributor:</strong> {profile.is_community_contributor ? "Yes" : "No"}</p>
      <p><strong>Chess.com URL:</strong> <a href={profile.url} target="_blank" className="text-blue-600 underline">{profile.url}</a></p>

      <p><strong>Joined:</strong> {new Date(profile.joined * 1000).toLocaleDateString()}</p>

      {profile.streaming_platforms?.length > 0 && (
        <div>
          <strong>Streaming Platforms:</strong>
          <ul className="list-disc ml-5">
            {profile.streaming_platforms.map((platform, idx) => (
              <li key={idx}>{platform}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
