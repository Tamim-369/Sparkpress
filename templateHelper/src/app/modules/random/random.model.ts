import { Schema, model } from 'mongoose';
import { IRandom, RandomModel } from './random.interface';

const randomSchema = new Schema<IRandom, RandomModel>({
  field1: { type: String, required: true },
  field2: { type: Schema.Types.ObjectId, ref: 'fields', required: true },
  field3: [{ type: Schema.Types.ObjectId, ref: 'Model'},]
}, { timestamps: true });

export const Random = model<IRandom, RandomModel>('Random', randomSchema);
