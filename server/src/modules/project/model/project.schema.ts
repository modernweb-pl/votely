import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
});
