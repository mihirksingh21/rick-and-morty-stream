// src/components/EpisodeList.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoDetails } from '../api/cloudflareStream';
import VideoPlayer from './VideoPlayer';

const EpisodeList: React.FC = () => {
  const { seasonNumber } = useParams<{ seasonNumber: string }>();
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    // Fetch episodes based on the season number (this could be from a local array or another API)
    const fetchEpisodes = async () => {
      // Mock data; replace this with actual data fetching logic
      setEpisodes([{ id: '1', name: 'Pilot' }, { id: '2', name: 'Lawnmower Dog' }]);
    };

    fetchEpisodes();
  }, [seasonNumber]);

  return (
    <div>
      <h2>Episodes for Season {seasonNumber}</h2>
      <ul>
        {episodes.map(episode => (
          <li key={episode.id}>
            <h3>{episode.name}</h3>
            <VideoPlayer videoId={episode.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;