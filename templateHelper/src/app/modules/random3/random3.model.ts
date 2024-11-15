import { Schema, model } from 'mongoose';
import { IRandom3, Random3Model } from './random3.interface';

const random3Schema = new Schema<IRandom3, Random3Model>({
  field1: { type: String, required: true },
  field2: {type: [String], required: true },
  field3: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  field4: { type: Date, required: true },
  field5: [{ type: Schema.Types.ObjectId, ref: 'Product'},],
  field6: {type: [Number], required: true },
  field7: {type: [Date], required: true },
  field8: { type: Number, required: true }
}, { timestamps: true });

export const Random3 = model<IRandom3, Random3Model>('Random3', random3Schema);
