import { Model, Types } from 'mongoose';

export type IRandom = {
  field1: string;
  field2: Types.ObjectId;
  field3: [Types.ObjectId]
};

export type RandomModel = Model<IRandom>;
