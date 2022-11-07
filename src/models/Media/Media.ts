export interface Video {
  id: number;
  title: string;
  summary?: string;
  src: string;
  publish: string;
  type: MediaType;
  active?: boolean;
}

export interface Photo {
  id: number;
  title: string;
  summary?: string;
  src: string;
  publish: string;
  type: MediaType;
  active?: boolean;
}

export interface Instagram {
  caption?: string;
  id?: number;
  media_type: string;
  media_url?: string;
  permalink?: string;
  thumbnail_url?: string;
  timestamp?: number;
  username?: string;
}

export type MediaType = "image" | "video";
