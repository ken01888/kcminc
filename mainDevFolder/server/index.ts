import * as express from 'express';
import * as cors from 'cors';
import Nutrientmap from './db/nutrientmap';
import * as fetch from 'isomorphic-fetch';


const app = express();

app.use(cors())
app.use(express.json())
app.use(Nutrientmap)

// app.post('/post', async (req,res) =>{
//     let firstdata= req.body[0]

//     const data = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${firstdata}&pageSize=11&api_key=tz8FikxFkSfY7V5vpSChMeqgxthoR9ILcvLtA0Ya`)
//     const item = await data.json()

//     item.foods[0].foodNutrients.map((i:any)=>{console.log(i)})

//     res.send(item)
// })

// app.use('/', async (req,res)=>{
//     let brandName= 'McDouble'
//     const data = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${brandName}&pageSize=11&api_key=tz8FikxFkSfY7V5vpSChMeqgxthoR9ILcvLtA0Ya`)
//     const reply=await data.json();
//   console.log(req.headers)
//     reply.foods.map((i:any)=>{
//         res.json({fdc:i.fdcId,description:i.description,foodNutrients:i.foodNutrients})

//     })
// })

app.post('/',(req,res)=>{
    console.log(req)
    res.json(req.body)
})












app.listen(4000)


