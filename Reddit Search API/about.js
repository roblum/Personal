$(document).ready(function(){
    console.log('doc ready');

    $('#submit').click(function(){
    	searchBox = $('#textBox').val();
        var searchTerm = {
            q: searchBox,
			jsonp: 'process'
        };
        search(searchTerm);
    });
});

function search(searchTerm) {
    console.log('searching for ');
    console.dir(searchTerm);

     $.ajax({
        url:'http://www.reddit.com/r/subreddits/search.json?' + $.param(searchTerm),
        dataType: 'jsonp'
    });
}

function process(data){
	$.each(
      data.data.children,
      function (i, item) {
      	$("ul#redditPosts").addClass("borderClass")
        $("#redditPosts").append('<h2>SubReddit: ' + item.data.subreddit + '</h2>');
        $("#redditPosts").append('<p class="link">' + item.data.url + '</p>');
        $("#redditPosts").append('<p>' + item.data.selftext + '</p>');
        $("#redditPosts").append('<hr><br />');
      }
    )
}