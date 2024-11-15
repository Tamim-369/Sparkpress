import express from 'express';
import { Random2Controller } from './random2.controller';
import { USER_ROLES } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { Random2Validation } from './random2.validation';

const router = express.Router();

router.post(
  '/create',
  // change the role according to your preferences
  // auth(USER_ROLES.ADMIN),
  validateRequest(Random2Validation.createRandom2ZodSchema),
  Random2Controller.createRandom2
);
router.get('/', Random2Controller.getAllRandom2s);
router.get('/:id', Random2Controller.getRandom2ById);
router.patch(
  '/:id',
  // change the role according to your preferences
  // auth(USER_ROLES.ADMIN),
  validateRequest(Random2Validation.updateRandom2ZodSchema),
  Random2Controller.updateRandom2
);
router.delete('/:id', auth(USER_ROLES.ADMIN), Random2Controller.deleteRandom2);

export const Random2Routes = router;
