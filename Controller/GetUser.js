module.exports = function (){
    var databasesql = require('./sql.js');
    this.controller = function (CallbackResult){
        
		var sql="SELECT * from `user` ;"
		databasesql.query(sql,function (err,res) {
            
            if(err) {
                console.log("error: ", err);
                CallbackResult(null, err);
               }
            else{   
                console.log('tasks : ', res); 
                CallbackResult(JSON.stringify(res));
            }
        });     
    }
}

