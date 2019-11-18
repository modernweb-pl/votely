import { Schema } from 'mongoose';
import { Project } from './project';
import { QuestionSchema } from './question.schema';

export const ProjectSchemaName = 'Project';

export const ProjectSchema = new Schema({
  userId: String,
  title: String,
  description: String,
  questions: [QuestionSchema],
});

export const projectModel = {
  name: ProjectSchemaName,
  schema: ProjectSchema,
};
