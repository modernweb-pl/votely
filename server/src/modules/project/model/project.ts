import { Document } from 'mongoose';

export interface Project extends Document {
  userId: string;
  title: string;
  description: string;
}
