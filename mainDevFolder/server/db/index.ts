import * as mysql from 'mysql';


const mysqlAccess = mysql.createPool({
host:'',
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
mysqlAccess.query('')