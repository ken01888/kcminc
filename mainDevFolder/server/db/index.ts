import * as mysql from 'mysql';
import database_Function from './clients/query_clients'




const mysqlAccess = mysql.createPool({
    host:'test-connection-aws-rds.cf2pfdin25py.us-east-1.rds.amazonaws.com',
    port:3306,
    user:'admin',
    password:'4#MiSgh!4',
    database:'TEMPLATE'
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