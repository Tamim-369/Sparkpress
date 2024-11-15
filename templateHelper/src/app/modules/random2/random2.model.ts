import { Schema, model } from 'mongoose';
import { IRandom2, Random2Model } from './random2.interface';

const random2Schema = new Schema<IRandom2, Random2Model>({
  field1: { type: String, required: true },
  field2: {type: [String], required: true },
  field3: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  field4: { type: Date, required: true },
  field5: [{ type: Schema.Types.ObjectId, ref: 'Product'},],
  field6: {type: [Number], required: true },
  field7: {type: [Date], required: true },
  field8: { type: Date, required: true }
}, { timestamps: true });

export const Random2 = model<IRandom2, Random2Model>('Random2', random2Schema);
