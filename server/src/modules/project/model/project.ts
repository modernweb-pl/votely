import { Document } from 'mongoose';
import { Question } from './question';

export interface Project extends Document {
  userId: string;
  title: string;
  description: string;
  questions: Question[];
}
