import express from 'express';
import * as UserController from '@controllers/user.controller'

export const userRouter = express.Router();

userRouter.get('/users', UserController.getAllUsers)

