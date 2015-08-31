import express from 'express';  
import React from 'react';  
import Router from 'react-router';  
import mysql from 'mysql';
import _ from 'underscore';
import Promise from 'promise';


const app = express(); 
app.use('/public', express.static('public'));

// set up Jade
app.set('views', './views');  
app.set('view engine', 'jade');
 
import routes from '../shared/routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const fetchData = (state) => {
  console.log(state.routes, state.params, state.query);
}

app.use((req, res, next) => {
  Router.run(routes, req.url, (Handler, state) => {
    if(state.routes.length){
    
      fetchData(state);
      
      const store = {};//createStore;
      const initialState = {};//store.getState();
      const html = React.renderToString(//<Handler/>);
        <Provider store={store}>
          {() => <Handler/>}
        </Provider>
      );

      res.render('index', { html: html, initialState: initialState });  
    } else {
      next();
    }
  });
});


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'app'
});

// Data Logic

connection.connect(function (err) {
  if (err) {
    console.log('Error connecting database ... \n\n');
  } else {
    console.log('Database is connected ... \n\n');
  }
})

app.post('/attractions/:id', function (req, res) {
  const id = req.params.id
  connection.query(`select * from attractions where id = ${id}`, req.body, (err, rows, fields) => {
    if (err) {
      throw err;
    } else {
      res.json(rows)
    }
  })
});

const server = app.listen(3000, () => {  
  const host = server.address().address;
  const port = server.address().port;
 
  console.log('Example app listening at http://%s:%s', host, port);
});