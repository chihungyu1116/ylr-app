import express from "express";  
import React from "react";  
import Router from "react-router";  
import mysql from "mysql";
import _ from "underscore";

const app = express();

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'app'
// });

// // Data Logic

// connection.connect(function (err) {
//   if (err) {
//     console.log('Error connecting database ... \n\n');
//   } else {
//     console.log('Database is connected ... \n\n');
//   }
// })

// app.get('/attractions/:id', function (req, res) {
//   let id = req.params.id
//   connection.query(`select * from attractions where id = ${id}`, req.body, (err, rows, fields) => {
//     if (err) {
//       throw err;
//     } else {
//       res.json(rows)
//     }
//   })
// });
 
app.use('/public', express.static('public'));

// set up Jade
app.set('views', './views');  
app.set('view engine', 'jade');
 
import routes from "../shared/routes";

app.get('/*', (req, res) => {
  Router.run(routes, req.url, (Handler, state) => {
    if(state.routes.length){
      let html = React.renderToString(<Handler/>);
      res.render('index', { html: html });  
    }
  });
});



var server = app.listen(3000, () => {  
  var host = server.address().address;
  var port = server.address().port;
 
  console.log('Example app listening at http://%s:%s', host, port);
});