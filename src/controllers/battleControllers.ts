import { Request, Response } from 'express';
import battleService from '../services/battleService.js';

async function battleControllers(req: Request, res: Response) {
    const firstUser: string = req.body.firstUser;
    const secondUser: string = req.body.secondUser;

    const result = await battleService(firstUser, secondUser);

    res.status(202).send(result)
}

export default battleControllers;