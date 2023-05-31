import {Request, Response, Router} from "express";
import {query} from "express-validator";

export const testingRouter = Router()

testingRouter.delete('/all-data', query('person').notEmpty(), (req: Request, res: Response) => {
    res.status(204).send()
})