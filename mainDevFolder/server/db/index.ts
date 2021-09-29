import * as mysql from 'mysql';
import database_Function from './clients/query_clients'




const mysqlAccess = mysql.createPool({
    host:'localhost',
    port:3306,
    user:'ken',
    password:'password',
    database:'mindspace'
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