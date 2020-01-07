const userCtrl = {};
const user = require('../models/user');

userCtrl.auth = (req, res) => {
    console.log(req.query)
    var username = req.query.username;
    var password = req.query.password;
    console.log(password)  
    user.authenticate(username, password, function(error, datos)
    {
      if (typeof datos !== 'undefined' && datos.length > 0)
      {
        res.status(200).json(datos);
      }
      else
      {
        res.status(404).json({"Mensaje":"No existe"});
      }
    });
}

module.exports = userCtrl;