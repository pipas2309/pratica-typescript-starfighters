import { Request, Response, NextFunction } from "express";
import battleSchema from "../schemas/battles.js";

export default function battleValidation(req: Request, res: Response, next: NextFunction) {
    const body = req.body;
    let validate = battleSchema.validate(body, { abortEarly: false });

    if(validate.error) {
        return res.status(422).send(validate.error.details);
    }

    next();
}