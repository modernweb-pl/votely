import { Schema } from 'mongoose';
import { Project } from './project';

export const ProjectSchemaName = 'Project';

export const ProjectSchema = new Schema({
  userId: String,
  title: String,
  description: String,
});

export const projectModel = {
  name: ProjectSchemaName,
  schema: ProjectSchema,
};
