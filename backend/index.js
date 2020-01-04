const express = require('express');
const morgan = require('morgan');
const app = express();
const { mysql } = require('./database');


//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api', require('./routes/user.routes'))

//Starting server
app.listen(app.get('port'), ()=>{
    console.log("Server on port: ", app.get('port'))
})