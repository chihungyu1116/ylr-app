import express from "express";  
import React from "react";  
import Router from "react-router";  
import mysql from "mysql";

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'app'
});

connection.connect(function (err) {
  if (err) {
    console.log('Error connecting database ... \n\n');
  } else {
    console.log('Database is connected ... \n\n');
  }
})
 
app.use('/public', express.static('public'));

// set up Jade
app.set('views', './views');  
app.set('view engine', 'jade');
 
// app.get('/attractions/:id', function (req, res) {
//   let id = req.params.id
//   connection.query(`select * from attractions where id = ${id}`, req.body, function (err, rows, fields) {
//     connection.end();

//     if (err) {
//       throw err;
//     } else {
//       console.log('solution', rows);
//     }
//   })
// });

import routes from "../shared/routes";
 
app.get('/*', function (req, res) {
  Router.run(routes, req.url, (Handler, state) => {

    console.log('handler(******',Handler)
    console.log('state *****', state)
    // let html = React.renderToString(<Handler/>);
    // res.render('index', { html: html });
  });
});

 
var server = app.listen(3000, function () {  
  var host = server.address().address;
  var port = server.address().port;
 
  console.log('Example app listening at http://%s:%s', host, port);
});