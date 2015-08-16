"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _mysql = require("mysql");

var _mysql2 = _interopRequireDefault(_mysql);

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

var _sharedRoutes = require("../shared/routes");

var _sharedRoutes2 = _interopRequireDefault(_sharedRoutes);

var app = (0, _express2["default"])();

var connection = _mysql2["default"].createConnection({
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
});

app.use('/public', _express2["default"]["static"]('public'));

// set up Jade
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/*', function (req, res) {
  _reactRouter2["default"].run(_sharedRoutes2["default"], req.url, function (Handler, state) {

    console.log('handler(******', Handler);
    console.log('state *****', state);
    // let html = React.renderToString(<Handler/>);
    // res.render('index', { html: html });
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});