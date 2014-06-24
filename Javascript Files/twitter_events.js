<a href="https://twitter.com/twitterapi" class="twitter-follow-button" data-show-count="false" data-lang="en">Follow @twitterapi</a>

// Log any kind of Web Intent event to Google Analytics
// Category: "twitter_web_intents"
// Action: Intent Event Type
// Label: Identifier for action taken: tweet_id, screen_name/user_id, click region
 
// First, load the widgets.js file asynchronously
window.twttr = (function (d,s,id) {
  var t, js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
  js.src="https://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
  return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
}(document, "script", "twitter-wjs"));
 
// Define our custom event handlers
function clickEventToAnalytics (intentEvent) {
  if (!intentEvent) return;
  var label = intentEvent.region;
  pageTracker._trackEvent('twitter_web_intents', intentEvent.type, label);
}
 
function tweetIntentToAnalytics (intentEvent) {
  if (!intentEvent) return;
  var label = "tweet";
  pageTracker._trackEvent('twitter_web_intents', intentEvent.type, label);
}
 
function favIntentToAnalytics (intentEvent) {
  tweetIntentToAnalytics(intentEvent);
}
 
function retweetIntentToAnalytics (intentEvent) {
  if (!intentEvent) return;
  var label = intentEvent.data.source_tweet_id;
  pageTracker._trackEvent('twitter_web_intents', intentEvent.type, label);
}
 
function followIntentToAnalytics (intentEvent) {
  if (!intentEvent) return;
  var label = intentEvent.data.user_id + " (" + intentEvent.data.screen_name + ")";
  pageTracker._trackEvent('twitter_web_intents', intentEvent.type, label);
}
 
var followed = function(){
alert('user followed');
}

// Wait for the asynchronous resources to load
twttr.ready(function (twttr) {
  // Now bind our custom intent events
  twttr.events.bind('click', followed);
//  twttr.events.bind('tweet', tweetIntentToAnalytics);
 // twttr.events.bind('retweet', retweetIntentToAnalytics);
  //twttr.events.bind('favorite', favIntentToAnalytics);
 // twttr.events.bind('follow', followed);
});

