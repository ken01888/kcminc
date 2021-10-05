import * as express from 'express';
import * as cors from 'cors';
import clientDate from './db/clients';


const app = express();

app.use(cors())
app.use(express.json())
app.use(clientDate)

app.use('/',(req,res)=>{
    res.status(200).json({first_name:"kenneth"})
})







app.listen(4000)