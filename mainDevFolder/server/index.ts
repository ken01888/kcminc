import * as express from 'express';
import * as cors from 'cors';
import clientDate from './db/clients';


const app = express();

app.use(cors())
app.use(express.json())
app.use(clientDate)







app.listen(4000)