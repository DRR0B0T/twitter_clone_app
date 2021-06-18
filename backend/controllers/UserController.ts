
import {UserModel, UserModelInterface} from "../models/UserModel";
import {validationResult} from "express-validator";
import {generateMD5} from "../utils/generateHash";
import {sendEmail} from "../utils/sendEmail";
import express = require("express");

class UserController {
  async index(_: any, res: express.Response): Promise<void> {
    try {
      const users = await UserModel.find({}).exec()

      res.json ({
        status: 'success',
        data: users
      })
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error
      })
    }
  }

  async create( req: express.Request, res: express.Response): Promise<void>{
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        res.status(400).json({ status: 'error', errors: errors.array() })
        return
      }
      const data: UserModelInterface = {
        email: req.body.email,
        username: req.body.username,
        fullname: req.body.fullname,
        password: req.body.password,
        confirmHash: generateMD5(process.env.SECRET_KEY || Math.random().toString()),
      }

      const user = await UserModel.create(data)

      sendEmail({
        emailFrom: "admin@twitter.com",
        emailTo: data.email,
        subject: "Подтверждение почты twitter",
        html: `Для того, чтобы подтвердить почту перейдите по адресу 
        <a href="http://localhost:${process.env.PORT || 8888}
        /signup/verify?hash=${data.confirmHash}">по этой ссылке</a>`,
      },
    (err: Error | null) => {
        if (err){
          res.status(500).json({
            status: 'error',
            message: err
          });
        } else {
          res.json({
            status: 'success',
            data: user,
          });
        }
      },
    );
    } catch (error) {
      res.status(500).json({
        status: 'Ошибка добавления',
        message: error
      });
    }
  }

  async verify(req: any, res: express.Response): Promise<void> {
    try {
      const hash = req.qurey.hash
      if (!hash) {
        res.status(400).send()
        return
      }
      const users = await UserModel.find({ confirmHash: hash }).exec()

      res.json ({
        status: 'success',
        data: users
      })
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error
      })
    }
  }

}

export const UserCtrl = new UserController()