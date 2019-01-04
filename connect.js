var mysql=require('mysql');





module.exports= function(){
var conn=mysql.createConnection({

host:'sql12.freesqldatabase.com',
user:'sql12272611',
password:'5AS12kFcCt',
database:'sql12272611'
});

conn.connect(function(error){

if(error) throw error;
console.log("connected");	
});


return conn;
}