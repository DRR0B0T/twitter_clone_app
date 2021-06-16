import * as express from express;
const app = express();

app.get('/hello',(_, res: express.Response) =>{
  res.send('hello')
})

app.listen(8888, ()=>{

  console.log('SERVER RUNNED')
})