// src/api/cloudflareStream.ts

const API_TOKEN = process.env.REACT_APP_CLOUDFLARE_STREAM_API_TOKEN;
const ACCOUNT_ID = process.env.REACT_APP_CLOUDFLARE_ACCOUNT_ID;

export const uploadVideo = async (videoFile: File) => {
  const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/stream`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ file: videoFile }),
  });

  return response.json();
};

export const getVideoDetails = async (videoId: string) => {
  const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/stream/${videoId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
    },
  });

  return response.json();
};