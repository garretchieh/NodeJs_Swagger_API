module.exports = function (){
    var databasesql = require('./sql.js');
    this.controller = function (username,password,CallbackResult){
        
		var sql="INSERT INTO `user` (`id`, `username`,`password`) VALUES (NULL, '"+username+"', '"+password+"');"
		databasesql.query(sql,function (err,res) {
            
            if(err) {
                console.log("error: ", err);
                CallbackResult(null, err);
               }
            else{   
                CallbackResult("Post_True");
            }
        });     
    }
}

