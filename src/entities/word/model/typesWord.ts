export type WordLevel = 'easy' | 'medium' | 'hard';

export interface Word {
  id: string;
  english: string;
  translation: string;
  imageUrl?: string;
  transcription: string;
  level: WordLevel;
}
