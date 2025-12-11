export interface Post {
  id: string;
  title: string;
  slug: string;
  section: SectionType;
  date: string;
  content: string; // HTML or Markdown content
  description?: string;
}

export type SectionType = 
  | 'essays'
  | 'proofs'
  | 'combat'
  | 'cinematics'
  | 'aesthetics'
  | 'problem-packs'
  | 'derivations'
  | 'datasets'
  | 'one-formula'
  | 'paradoxes'
  | 'impossible'
  | 'fiction'
  | 'about';

export interface NavLink {
  label: string;
  path: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}