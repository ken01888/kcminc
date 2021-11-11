import * as express from 'express';
import * as cors from 'cors';
import clientDate from './db/clients';
import * as fetch from 'isomorphic-fetch';


const app = express();

app.use(cors())
app.use(express.json())
app.use(clientDate)

app.use('/', async (req,res)=>{
    let brandName= 'apple'
    // const data = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${brandName}&pageSize=11&api_key=tz8FikxFkSfY7V5vpSChMeqgxthoR9ILcvLtA0Ya`)
    // const reply=await data.json();
    console.log(req)
    res.json('listening on port 4000')
})








app.listen(4000)