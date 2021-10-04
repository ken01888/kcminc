import { data } from 'autoprefixer'
import * as express from 'express'
import database_Function from './query_clients'

const app = express()

app.all('/client_Suite', async (req, res) => {
  switch (req.method) {
    case 'GET':
      const new_Data = await database_Function.allClients()
      new_Data.map(i=>{
          console.log(i.id)
      });
      res.send(200)
      break;
    case 'POST':
      const newData = await database_Function.insertMessage(req.body)
      console.log(newData)
      res.send(req.method)
      break;

    case 'PUT':
        res.send(req.method)
      break;

    case 'DELETE':
        res.send(req.method)
      break;

    default:
        res.send()
      break;
  }
})

export default app
