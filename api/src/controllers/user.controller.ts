import { NextFunction, Request, Response } from "express";
import User, { IUser } from "@/models/User.model";


export function getAllUsers(req: Request, res: Response, next: NextFunction) {
    User.find( { }, (err: Error, users: IUser[]) => {
        if(err) res.status(500).send(err);
        res.send(users)
      });
}
