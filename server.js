var Twitter = require('twitter');
var http = require('http')
var port = process.env.PORT || 1337;

var client = new Twitter({
    consumer_key: 'uXl8060AfB6TtVZOjUPbPqiuU',
    consumer_secret: 'qWYtc0c6wskWp9OvP63LcFTxnGexfhCjLAfN7gKgcwW7zfcSdv',
    access_token_key: '14812487-6rIZpOfDmMBGFybfd26Cpe86kGw64MLGaZLaimuFN',
    access_token_secret: 'efrJVLugBwFeAVnWSx1Cx6Z8N8IJlSB3js7XjW4KUYiuc'
});

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    client.get('search/tweets', {q: 'lolcats'}, function(error, tweets){
        console.log(tweets);
    });

}).listen(port);

