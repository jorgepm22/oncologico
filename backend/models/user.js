'user strict';
var connection = require('../database');
var sha256 = require('js-sha256');
//Importamos los datos de la conexión
var conn=require('../database');
//Importamos el paquete mysql
var mysql = require('mysql'),
//Creamos la conexión a nuestra base de datos con los datos almacenados en conn
connection = mysql.createConnection(
	conn
);

//Task object constructor
var user = {
    
};


user.authenticate =  function (username, password, callback) {
    if (connection) 
	{
        var sql = "select id from users where email = " + connection.escape(username) +
        " and password = " + connection.escape(sha256(password)) ;
        console.log(sql)
		connection.query(sql, function(error, rows) 
		{
			if(error)
			{
				throw error;
			}
			else
			{
                console.log(rows)
				callback(null, rows);
			}
		});
	} 
};


module.exports= user;