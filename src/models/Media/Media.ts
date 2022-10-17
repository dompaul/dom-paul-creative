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

export type MediaType = 'image' | 'video';
