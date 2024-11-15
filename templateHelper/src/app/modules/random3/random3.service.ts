import { StatusCodes } from 'http-status-codes';
import ApiError from '../../../errors/ApiError';
import { Random3 } from './random3.model';
import { IRandom3 } from './random3.interface';

const createRandom3 = async (payload: IRandom3): Promise<IRandom3> => {
  const result = await Random3.create(payload);
  if (!result) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Failed to create random3!');
  }
  return result;
};

const getAllRandom3s = async (search: string, page: number | null, limit: number | null): Promise<IRandom3[]> => {
  const query = search ? { $or: [{ field1: { $regex: search, $options: 'i' } },
        { field2: { $regex: search, $options: 'i' } },
        { field3: { $regex: search, $options: 'i' } },
        { field4: { $regex: search, $options: 'i' } },
        { field5: { $regex: search, $options: 'i' } },
        { field6: { $regex: search, $options: 'i' } },
        { field7: { $regex: search, $options: 'i' } },
        { field8: { $regex: search, $options: 'i' } }] } : {};
  let queryBuilder = Random3.find(query);

  if (page && limit) {
    queryBuilder = queryBuilder.skip((page - 1) * limit).limit(limit);
  }

  return await queryBuilder;
};


const getRandom3ById = async (id: string): Promise<IRandom3 | null> => {
  const result = await Random3.findById(id);
  if (!result) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Random3 not found!');
  }
  return result;
};

const updateRandom3 = async (id: string, payload: IRandom3): Promise<IRandom3 | null> => {
  const isExistRandom3 = await getRandom3ById(id);
  if (!isExistRandom3) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Random3 not found!');
  }
  const result = await Random3.findByIdAndUpdate(id, payload, { new: true });
  if (!result) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Failed to update random3!');
  }
  return result;
};

const deleteRandom3 = async (id: string): Promise<IRandom3 | null> => {
  const isExistRandom3 = await getRandom3ById(id);
  if (!isExistRandom3) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Random3 not found!');
  }
  const result = await Random3.findByIdAndDelete(id);
  if (!result) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Failed to delete random3!');
  }
  return result;
};

export const Random3Service = {
  createRandom3,
  getAllRandom3s,
  getRandom3ById,
  updateRandom3,
  deleteRandom3,
};
