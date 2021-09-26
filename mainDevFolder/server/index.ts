import * as express from 'express';
import * as cors from 'cors';
import * as path from 'path';


const app = express();

app.use(cors())
app.use(express.json())
app.get('/get',(req,res)=>{
    console.log(req)
    res.json('server is running on port 4000')
})





app.listen(4000)