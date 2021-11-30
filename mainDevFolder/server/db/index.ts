import * as mysql from 'mysql';
import database_Function from './clients/query_clients'




const mysqlAccess = mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    user:'me',
    password:'password',
    database:'Nutrientmap'
})

export const Query = (query:string,values?:Array<string|number>)=>{
    return new Promise<Array<any>>((resolve,reject)=>{
        mysqlAccess.query(query,values,(err,results) =>{
            if(err) return reject(err)
            return resolve(results);


        })
    })
};

export default database_Function;