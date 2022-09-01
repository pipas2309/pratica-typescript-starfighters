import { Router } from "express";

import battlesRouter from './battlesRouter.js';

const router = Router();

router.use(battlesRouter);

export default router;