import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { Random3Service } from './random3.service';

const createRandom3 = catchAsync(async (req: Request, res: Response) => {
  const result = await Random3Service.createRandom3(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Random3 created successfully',
    data: result,
  });
});

const getAllRandom3s = catchAsync(async (req: Request, res: Response) => {
  const search: any = req.query.search || '';
  const page = req.query.page || null;
  const limit = req.query.limit || null;

  const result = await Random3Service.getAllRandom3s(search as string, page as number | null, limit as number | null);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Random3s fetched successfully',
    data: result,
  });
});

const getRandom3ById = catchAsync(async (req: Request, res: Response) => {
  const result = await Random3Service.getRandom3ById(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Random3 fetched successfully',
    data: result,
  });
});

const updateRandom3 = catchAsync(async (req: Request, res: Response) => {
  const result = await Random3Service.updateRandom3(req.params.id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Random3 updated successfully',
    data: result,
  });
});

const deleteRandom3 = catchAsync(async (req: Request, res: Response) => {
  const result = await Random3Service.deleteRandom3(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Random3 deleted successfully',
    data: result,
  });
});

export const Random3Controller = {
  createRandom3,
  getAllRandom3s,
  getRandom3ById,
  updateRandom3,
  deleteRandom3,
};
