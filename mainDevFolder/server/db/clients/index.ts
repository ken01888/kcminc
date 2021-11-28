import { data } from 'autoprefixer'
import * as express from 'express'
import database_Function from './query_clients'

const app = express()

app.all('/client_suite', async (req, res, error) => {
  switch (req.method) {
    case 'GET':
      const new_Data = await database_Function.allMessages()
      new_Data.map(i => {
        console.log(i)
      });
      res.json(new_Data)
      
      break;
    case 'POST':

      await database_Function.insertMessages(req.body)
      res.send(req.method)
      break;

    case 'PUT':
      await database_Function.updateMessages(req.body, req.body.id)
      res.send(200)
      break;

    case 'DELETE':
      await database_Function.deleteMessages(req.body.id)
      res.send(req.method)
      break;

    default:

      res.send()
      break;
  }
})

export default app
