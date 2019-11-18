import { Schema } from 'mongoose';

export const QuestionSchemaName = 'Question';

export const QuestionSchema = new Schema({
  title: String,
  answers: [String],
});

export const questionModel = {
  name: QuestionSchemaName,
  schema: QuestionSchema,
};
