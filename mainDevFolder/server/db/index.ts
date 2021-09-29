import * as mysql from 'mysql';
import database_Function from './clients/query_clients'




const mysqlAccess = mysql.createPool({
    // host:'host connection',
    // port:port to listen on,
    // user:'database username',
    // password:'your password',
    // database: name of database
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