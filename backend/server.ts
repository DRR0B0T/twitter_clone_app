import {UserCtrl} from "./controllers/UserController";
import {registerValidations} from "./validations/register";
import './core/db'
const express = require('express');
const dotenv = require('dotenv')

const app = express();

dotenv.config()

app.use(express.json())

app.get('/users', UserCtrl.index)
app.post('/users', registerValidations , UserCtrl.create)
// app.patch('/users', UserCtrl.update)
// app.delete('/users', UserCtrl.delete)

app.listen(process.env.PORT, (): void=>{

  console.log('SERVER RUNNING!')
})