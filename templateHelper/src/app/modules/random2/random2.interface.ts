import { Model, Types } from 'mongoose';

export type IRandom2 = {
  field1: string;
  field2: Array<string>;
  field3: Types.ObjectId;
  field4: Date;
  field5: [Types.ObjectId];
  field6: Array<number>;
  field7: Array<Date>;
  field8: Date
};

export type Random2Model = Model<IRandom2>;
