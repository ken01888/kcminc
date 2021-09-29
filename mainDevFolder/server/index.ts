import * as express from 'express';
import * as cors from 'cors';


const app = express();

app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.json('listening on port 4000 for backend server')
})






app.listen(4000)