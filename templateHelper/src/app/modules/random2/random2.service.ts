import { StatusCodes } from 'http-status-codes';
import ApiError from '../../../errors/ApiError';
import { Random2 } from './random2.model';
import { IRandom2 } from './random2.interface';

const createRandom2 = async (payload: IRandom2): Promise<IRandom2> => {
  const result = await Random2.create(payload);
  if (!result) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Failed to create random2!');
  }
  return result;
};

const getAllRandom2s = async (search: string, page: number | null, limit: number | null): Promise<IRandom2[]> => {
  const query = search ? { $or: [{ field1: { $regex: search, $options: 'i' } },
        { field2: { $regex: search, $options: 'i' } },
        { field3: { $regex: search, $options: 'i' } },
        { field4: { $regex: search, $options: 'i' } },
        { field5: { $regex: search, $options: 'i' } },
        { field6: { $regex: search, $options: 'i' } },
        { field7: { $regex: search, $options: 'i' } },
        { field8: { $regex: search, $options: 'i' } }] } : {};
  let queryBuilder = Random2.find(query);

  if (page && limit) {
    queryBuilder = queryBuilder.skip((page - 1) * limit).limit(limit);
  }

  return await queryBuilder;
};


const getRandom2ById = async (id: string): Promise<IRandom2 | null> => {
  const result = await Random2.findById(id);
  if (!result) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Random2 not found!');
  }
  return result;
};

const updateRandom2 = async (id: string, payload: IRandom2): Promise<IRandom2 | null> => {
  const isExistRandom2 = await getRandom2ById(id);
  if (!isExistRandom2) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Random2 not found!');
  }
  const result = await Random2.findByIdAndUpdate(id, payload, { new: true });
  if (!result) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Failed to update random2!');
  }
  return result;
};

const deleteRandom2 = async (id: string): Promise<IRandom2 | null> => {
  const isExistRandom2 = await getRandom2ById(id);
  if (!isExistRandom2) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Random2 not found!');
  }
  const result = await Random2.findByIdAndDelete(id);
  if (!result) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Failed to delete random2!');
  }
  return result;
};

export const Random2Service = {
  createRandom2,
  getAllRandom2s,
  getRandom2ById,
  updateRandom2,
  deleteRandom2,
};
