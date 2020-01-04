const userCtrl = {};
const user = require('../models/user');
const sha256 = require('js-sha256');

userCtrl.auth = (req, res) => {
    var username = req.query.username;
    var password = req.query.password;
    console.log(password)  
    user.authenticate(username, password, function(error, datos)
    {
     
        console.log(datos[0])
      if (typeof datos !== 'undefined' && datos.length > 0)
      {
        res.status(200).json(datos[0]);
      }
      else
      {
        res.status(404).json({"Mensaje":"No existe"});
      }
    });
}

module.exports = userCtrl;