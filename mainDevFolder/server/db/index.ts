import * as mysql from 'mysql';
import database_Function from './query_functions'




const mysqlAccess = mysql.createPool({
host:'kenneth Cunningham 11',
user:'',
password:'',
database:''
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