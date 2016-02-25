var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var randemoji = require('emoji-random');
var emoji = require('node-emoji');

var express = require('express');
var app = new express();

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, 
  { noInfo: true, publicPath: config.output.publicPath }
));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(__dirname + '/dist'));

var socketio = require('socket.io');
var http = require('http');
var port = 3000;

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

var server = http.createServer(app).listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> " + emoji.get(randemoji.random()) + "  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var io = socketio.listen(server);
var _stream;

io.on('connection', function(socket) {
  startStream(socket, 'javascript');

  socket.on('twitter:update:search', function(term) {
    _stream.destroy();
    startStream(socket, term);
  });
});

function startStream(socket, term) {
  client.stream('statuses/filter', { track: term }, function(stream) {
    _stream = stream;
    stream.on('data', function(tweet) {
      socket.emit('tweet', tweet);
    });
   
    stream.on('error', function(error) {
      throw error;
    });
  });
}