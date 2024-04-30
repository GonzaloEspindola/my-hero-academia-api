import express from 'express';
import characterRoutes from './characterRoutes';
const router = express.Router();

router.use('/characters', characterRoutes);

export default router;
