import * as express from 'express';
import * as cors from 'cors';
import clientDate from './db/clients';
import * as fetch from 'isomorphic-fetch';


const app = express();

app.use(cors())
app.use(express.json())
app.use(clientDate)

app.use('/', async (req,res)=>{
    const data = await fetch('https://api.nal.usda.gov/fdc/v1/foods/search?query=Chick-fil-a&pageSize=11&api_key=tz8FikxFkSfY7V5vpSChMeqgxthoR9ILcvLtA0Ya')
    const reply = await data.json();
    res.json(reply)
})








app.listen(4000)