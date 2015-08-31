'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _promise = require('promise');

var _promise2 = _interopRequireDefault(_promise);

var _sharedRoutes = require('../shared/routes');

var _sharedRoutes2 = _interopRequireDefault(_sharedRoutes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var app = (0, _express2['default'])();
app.use('/public', _express2['default']['static']('public'));

// set up Jade
app.set('views', './views');
app.set('view engine', 'jade');

var fetchData = function fetchData(state) {
  console.log(state.routes, state.params, state.query);
};

app.use(function (req, res, next) {
  _reactRouter2['default'].run(_sharedRoutes2['default'], req.url, function (Handler, state) {
    if (state.routes.length) {

      fetchData(state);

      var store = {}; //createStore;
      var initialState = {}; //store.getState();
      var html = _react2['default'].renderToString( //<Handler/>);
      _react2['default'].createElement(
        _reactRedux.Provider,
        { store: store },
        function () {
          return _react2['default'].createElement(Handler, null);
        }
      ));

      res.render('index', { html: html, initialState: initialState });
    } else {
      next();
    }
  });
});

var connection = _mysql2['default'].createConnection({
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
});

app.post('/attractions/:id', function (req, res) {
  var id = req.params.id;
  connection.query('select * from attractions where id = ' + id, req.body, function (err, rows, fields) {
    if (err) {
      throw err;
    } else {
      res.json(rows);
    }
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});