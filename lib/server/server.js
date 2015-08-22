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

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _sharedRoutes = require("../shared/routes");

var _sharedRoutes2 = _interopRequireDefault(_sharedRoutes);

var app = (0, _express2["default"])();

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

app.use('/public', _express2["default"]["static"]('public'));

// set up Jade
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/*', function (req, res) {
  _reactRouter2["default"].run(_sharedRoutes2["default"], req.url, function (Handler, state) {
    var html = _react2["default"].renderToString(_react2["default"].createElement(Handler, null));
    res.render('index', { html: html });
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});