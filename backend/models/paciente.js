'user strict';
//Importamos los datos de la conexión
var conn=require('../database');
//Importamos el paquete mysql
const mysql = require('mysql'),
//Creamos la conexión a nuestra base de datos con los datos almacenados en conn
connection = mysql.createConnection(
	conn
);

//Task object constructor
var paciente = {
    
};


paciente.add =  function (paciente, callback) {
    if (connection) 
	{

        var sql = "INSERT INTO `oncologico`.`pacientes` (`ci`, `nombre1`, `nombre2`, "+
        "`apellido1`, `apellido2`, `tlf`, `fecha_nac`, `procedencia`, `referencia`, `Lic`, `antec_madre`"+
        ", `antec_padre`, `antec_otros`, `N_emb`, `emb_cont`, `emb_cesar`, `peso_nac`, `talla_nac`,"+
        " `semanas`, `comp_nac`, `comp_mat`) VALUES "+
        "("+connection.escape(paciente.ci) + ", "+connection.escape(paciente.nombre1) +
        ", "+connection.escape(paciente.nombre2) +", "+
        ""+connection.escape(paciente.apellido1) +", "+connection.escape(paciente.apellido2) +", "+
        ""+connection.escape(paciente.tlf) +", "+connection.escape(paciente.fecha_nac) +", "+
        ""+connection.escape(paciente.procedencia) +", "+connection.escape(paciente.referencia) +", "+
        ""+connection.escape(paciente.Lic) +", "+connection.escape(paciente.antec_madre) +", "+
        ""+connection.escape(paciente.antec_padre) +", "+connection.escape(paciente.antec_otros) +", "+
        ""+connection.escape(paciente.N_emb) +", "+connection.escape(paciente.emb_cont) +", "+
        ""+connection.escape(paciente.emb_cesar) +", "+connection.escape(paciente.peso_nac) +", "+
        ""+connection.escape(paciente.talla_nac) +", "+connection.escape(paciente.semanas) +", "+
        ""+connection.escape(paciente.comp_nac) +", "+connection.escape(paciente.comp_mat) +")"
		connection.query(sql, function(error, rows) 
		{
			if(error)
			{
				throw error;
			}
			else
			{
				callback(null, rows);
			}
		});
	} 
};


module.exports= paciente;