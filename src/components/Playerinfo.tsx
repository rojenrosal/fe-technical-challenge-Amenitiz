import type { ChessComPlayer } from "../api/types";
import { Info } from "./Info";

type Props = {
  profile: ChessComPlayer;
};

export function PlayerInfo({ profile }: Props) {
  return (
    <div className="space-y-4 text-gray-800">

        <div className="flex justify-center">
        {profile.avatar && (
        <img
          src={profile.avatar}
          alt={`${profile.username}'s avatar`}
          className="w-24 h-24 rounded-full"
        />
      )}
      </div>

      <div>
        <h2 className="text-3xl font-bold text-blue-700 mb-1">{profile.username}</h2>
        <p className="text-sm text-gray-500">{profile.name || "No real name provided"}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
        <Info label="Title" value={profile.title || "N/A"} />
        <Info label="FIDE Rating" value={profile.fide ?? "N/A"} />
        <Info label="Country" value={profile.country} />
        <Info label="Location" value={profile.location || "N/A"} />
        <Info label="Status" value={profile.status} />
        <Info label="League" value={profile.league || "N/A"} />
        <Info label="Followers" value={profile.followers.toLocaleString()} />
        <Info label="Streamer" value={profile.is_streamer ? "Yes" : "No"} />
        <Info label="Verified" value={profile.verified ? "Yes" : "No"} />
        <Info label="Community Contributor" value={profile.is_community_contributor ? "Yes" : "No"} />
        <Info
          label="Chess.com Profile"
          value={
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {profile.url}
            </a>
          }
        />
        <Info
          label="Joined"
          value={new Date(profile.joined * 1000).toLocaleDateString()}
        />
      </div>

   
      {profile.streaming_platforms?.length > 0 && (
        <div>
          <h3 className="font-semibold">Streaming Platforms:</h3>
          <ul className="list-disc list-inside ml-2">
            {profile.streaming_platforms.map((platform, idx) => (
              <li key={idx}>{platform}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}