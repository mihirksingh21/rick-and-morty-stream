
export interface Episode {
    id: string;
    name: string;
    season: number;
    duration: number; // Duration in seconds
    videoId: string; // Cloudflare Stream video ID
  }
  
  export interface Season {
    number: number;
    episodes: Episode[];
  }