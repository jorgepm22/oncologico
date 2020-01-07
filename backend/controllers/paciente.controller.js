const pacienteCtrl = {};
const pacienteM = require('../models/paciente');
var dateFormat = require('dateformat');

pacienteCtrl.add = (req, res) => {
    var paciente = JSON.parse( req.query.paciente );
    paciente.fecha_nac = paciente.fecha_nac.toString().slice(0, 9);
    pacienteM.add(paciente, function(error, datos)
    {
      if (typeof datos !== 'undefined' && datos.affectedRows == 1)
      {
        res.status(200).json(datos);
      }
      else
      {
        res.status(404).json({"Mensaje":"No existe"});
      }
    });
}

module.exports = pacienteCtrl;