import dotenv = require('dotenv')
dotenv.config()


import {UserCtrl} from "./controllers/UserController";
import {registerValidations} from "./validations/register";
import './core/db'
import express = require('express');
import {passport} from "./core/passport";


const app = express();

app.use(express.json())
app.use(passport.initialize())

app.get('/users', UserCtrl.index)
app.get('/users/:id', registerValidations , UserCtrl.show)
app.get('/auth/verify', registerValidations , UserCtrl.verify)
app.post('/auth/register', registerValidations , UserCtrl.create)
app.post('/auth/login', passport.authenticate('local'), UserCtrl.afterLogin);
// app.patch('/users', UserCtrl.update)
// app.delete('/users', UserCtrl.delete)

app.listen(process.env.PORT, (): void=>{
  console.log('SERVER RUNNING!')
})