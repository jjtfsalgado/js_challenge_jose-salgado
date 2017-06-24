
var express = require('express');
var app = express();

if (!process.env.PORT) {
  var path = require('path');
  var config = require('./webpack.config');
  var webpack = require('webpack');
  var compiler = webpack(config);


  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:'+PORT);
});
