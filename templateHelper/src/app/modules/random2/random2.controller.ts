import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { Random2Service } from './random2.service';

const createRandom2 = catchAsync(async (req: Request, res: Response) => {
  const result = await Random2Service.createRandom2(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Random2 created successfully',
    data: result,
  });
});

const getAllRandom2s = catchAsync(async (req: Request, res: Response) => {
  const search: any = req.query.search || '';
  const page = req.query.page || null;
  const limit = req.query.limit || null;

  const result = await Random2Service.getAllRandom2s(search as string, page as number | null, limit as number | null);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Random2s fetched successfully',
    data: result,
  });
});

const getRandom2ById = catchAsync(async (req: Request, res: Response) => {
  const result = await Random2Service.getRandom2ById(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Random2 fetched successfully',
    data: result,
  });
});

const updateRandom2 = catchAsync(async (req: Request, res: Response) => {
  const result = await Random2Service.updateRandom2(req.params.id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Random2 updated successfully',
    data: result,
  });
});

const deleteRandom2 = catchAsync(async (req: Request, res: Response) => {
  const result = await Random2Service.deleteRandom2(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Random2 deleted successfully',
    data: result,
  });
});

export const Random2Controller = {
  createRandom2,
  getAllRandom2s,
  getRandom2ById,
  updateRandom2,
  deleteRandom2,
};
