import { NextFunction, Request, Response } from "express";

function logger(req: Request, res: Response, next: NextFunction) {
    console.log("Request: ", req.url);
    next();
}

export default logger;