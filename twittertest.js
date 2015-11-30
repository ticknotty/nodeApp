var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: 'iCZiVuuAcGbCLLYApLjJ2lEnG',
    consumer_secret: 'FqoozsOOILOt2ARcwLHGRc6Xgp9Ae9aHn4XUS4tGCxMK3eV8Nm',
    access_token_key: '406454042-wXmgdav9vDqkeLnEdq6krbjgEnNyiU0yya9mllbx',
    access_token_secret: 'fRl4H6ZDVlr49Cko0hKaS0kwIbqj1o5y6bdVzxpals3HI'
});

client.get('search/tweets', {q: 'lolcat'}, function(error, tweets){
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    client.get('search/tweets', {q: 'lolcats'}, function(error, tweets){
        //response.end(JSON.stringify(tweets));
        var json = [];
        for (var i =0; i < tweets.statuses.length; i++){
            json.push({name: tweets.statuses[i].user.name, text: tweets.statuses[i].text});
        }
        response.end(JSON.stringify(json));
    });
}).listen(port);

