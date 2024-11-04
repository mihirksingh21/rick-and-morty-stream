// src/components/VideoPlayer.tsx

import React, { useEffect, useState } from 'react';
import { getVideoDetails } from '../api/cloudflareStream';
import styled from 'styled-components';

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const VideoTitle = styled.h3`
  margin-bottom: 10px;
`;

const VideoElement = styled.video`
  width: 100%;
  max-width: 800px; /* Set a maximum width for larger screens */
  height: auto; /* Maintain aspect ratio */
`;

interface VideoPlayerProps {
  videoId: string; // Cloudflare Stream video ID
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const [videoDetails, setVideoDetails] = useState<any>(null); // Replace 'any' with a specific type if you have one
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const details = await getVideoDetails(videoId);
        setVideoDetails(details);
      } catch (error) {
        console.error('Error fetching video details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoDetails();
  }, [videoId]);

  if (loading) {
    return <div>Loading video...</div>;
  }

  if (!videoDetails || !videoDetails.playbackUrl) {
    return <div>Video not available.</div>;
  }

  return (
    <VideoContainer>
      <VideoTitle>{videoDetails.name}</VideoTitle>
      <VideoElement controls>
        <source src={videoDetails.playbackUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoElement>
    </VideoContainer>
  );
};

export default VideoPlayer;