const initializeEndpoints = (app) => {
  
  
    app.all('/*', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header("Access-Control-Allow-Headers", "X-Requested-With,     Content-Type");
        next();
    });

  /**
 * @swagger
 *
 * /login:
 *   post:
 *     description: Login to the application
 *     tags: [Users]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           type: string
 *           $ref: '#/definitions/login'
 *           example:
 *             Post_True
 *       400:
 *         description: Bad request. User ID must be an integer and bigger than 0.
 *       401:
 *         description: Authorization information is missing or invalid.
 *       404:
 *         description: A user with the specified ID was not found.
 */
app.post('/login', (req, res) => {
    // Your implementation comes here ...
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
    // res.writeHead(200, {'Content-Type': 'text/plain'}); 
    
    var controller_of_argument = require('./Controller/PostUser.js');
    c = new controller_of_argument();

	var username=req.body.username;
    var password=req.body.password;
    
    c.controller(username,password,function(row){

        res.end(row);
       
    });
    
  });

  /**
   * @swagger
   * /users:
   *   get:
   *     description: Returns users
   *     tags:
   *      - Users
   *     produces:
   *      - application/json
   *     responses:
   *       200:
   *         description: users
   *         schema:
   *           type: array
   *           $ref: '#/definitions/User'
   *           example:
   *             [{"id":1,"username":"s","password":"1"}]
   */
  
  app.get('/users', (req, res) => {
    // res.json({
    //   username: 'garret',
    // });
    var controller_of_argument = require('./Controller/GetUser.js');
    c = new controller_of_argument();
    
    c.controller(function(row){
      
        res.end(row);
    });
  });
}

module.exports =initializeEndpoints;