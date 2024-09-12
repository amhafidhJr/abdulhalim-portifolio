export interface BlogPost {
  id: string; // Update this from 'number' to 'string'
  title: string;
  description: string;
  readMinutes: string;
  status: string;
  date: string;
  paragraphs: { text: string }[];
}
