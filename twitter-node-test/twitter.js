var Twitter = require('twitter');
var express = require('express');
var app = express();
if (app.get('env') == 'development'){
require('dotenv').config();
}

var client = new Twitter({
  consumer_key: '7DiQSZ9CrUOAfCKE9R34DCKgq',
  consumer_secret: process.env.TWITTER,
  access_token_key: '20353842-Pt4Ct2gVPwYfGJukA5lBg62mwPRBvV3Y72vgERC5M',
  access_token_secret: process.env.TWITTERACCESS
});

var params = {screen_name: 'urubuz'};

setTimeout(function(){
  unfriendThisPerson();
}, 30000);
friendThisPerson();

function unfriendThisPerson(){
  console.log("now unfriending...")
  client.post('friendships/destroy', {'screen_name': 'neymarjr'}, function(error, tweets, response){
    console.log(response);  // Raw response object.
    if(error) throw error;
  });
}

function friendThisPerson(){
  console.log("making friends");
  client.post('friendships/create', {'screen_name': 'neymarjr'}, function(error, tweets, response){
    console.log(response);  // The favorites.
    if(error) throw error;
  });
}

client.get('statuses/user_timeline', params, function(error, tweets, response){

  if (!error) {
    console.log(tweets);
  }
});
