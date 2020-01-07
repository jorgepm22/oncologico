'user strict';
const sha256 = require('js-sha256');
const jwt = require('jsonwebtoken')
//Importamos los datos de la conexión
var conn=require('../database');
//Importamos el paquete mysql
const mysql = require('mysql'),
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
		var tokenData = {
			user: this.username,
			pass: this.password
		}

		var token = jwt.sign(tokenData, 'Secret Password', {
			expiresIn: 60 * 60 * 24 * 90 // expires in 24 hours
		 })

        var sql = "select id from users where email = " + connection.escape(username) +
        " and password = " + connection.escape(sha256(password));
		connection.query(sql, function(error, rows) 
		{
			if(error)
			{
				throw error;
			}
			else
			{
                var sqlUpdate = "update users set remember_token = " + connection.escape(token) +
				"where email = " + connection.escape(username) + " and password = "
				+ connection.escape(sha256(password));
				if (rows[0]!==undefined)
				{
					connection.query(sqlUpdate, function(error, rows) 
					{
						if(error)
						{
							throw error;
						}
					});
				}
				callback(null, token);
			}
		});
	} 
};


module.exports= user;