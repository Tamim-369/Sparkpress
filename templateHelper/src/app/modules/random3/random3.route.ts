import express from 'express';
import { Random3Controller } from './random3.controller';
import { USER_ROLES } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { Random3Validation } from './random3.validation';

const router = express.Router();

router.post(
  '/create',
  // change the role according to your preferences
  // auth(USER_ROLES.ADMIN),
  validateRequest(Random3Validation.createRandom3ZodSchema),
  Random3Controller.createRandom3
);
router.get('/', Random3Controller.getAllRandom3s);
router.get('/:id', Random3Controller.getRandom3ById);
router.patch(
  '/:id',
  // change the role according to your preferences
  // auth(USER_ROLES.ADMIN),
  validateRequest(Random3Validation.updateRandom3ZodSchema),
  Random3Controller.updateRandom3
);
router.delete('/:id', auth(USER_ROLES.ADMIN), Random3Controller.deleteRandom3);

export const Random3Routes = router;
