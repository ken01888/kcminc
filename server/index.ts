import * as express from 'express';
import * as cors from 'cors';
import * as path from 'path';


const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static('public'))





app.listen(3000)