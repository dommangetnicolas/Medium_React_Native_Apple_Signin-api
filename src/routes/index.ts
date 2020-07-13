import { Router } from 'express';
import { appleAuth } from '../controllers/authController';

const router = Router();

router.route('/auth/apple').post(appleAuth);

export default router;
