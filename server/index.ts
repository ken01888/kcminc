import * as express from 'express';
import * as cors from 'cors';
import * as path from 'path';


const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.get('/',(req,res)=>{
    console.log('heldlhhddhhttofgrsffds ddf')
    res.sendStatus(200)
})





app.listen(3000)