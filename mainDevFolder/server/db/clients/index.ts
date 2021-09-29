import { data } from 'autoprefixer';
import * as express from 'express';
import database_Function from './query_clients'



const app = express();

app.all('/client_Suite', async (req, res) => {
    switch (req.method) {
        case 'GET':
            const new_Data = await database_Function.allClients();
            console.log(new_Data[0])
            res.send(req.method)
            break;

        default:
            break;
    }
});

export default app;