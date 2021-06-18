import dotenv = require('dotenv')
dotenv.config()


import {UserCtrl} from "./controllers/UserController";
import {registerValidations} from "./validations/register";
import './core/db'
import express = require('express');


const app = express();

app.use(express.json())

app.get('/users', UserCtrl.index)
app.post('/users', registerValidations , UserCtrl.create)
app.get('/verify', registerValidations , UserCtrl.verify)
// app.patch('/users', UserCtrl.update)
// app.delete('/users', UserCtrl.delete)

app.listen(process.env.PORT, (): void=>{
  console.log('SERVER RUNNING!')
})