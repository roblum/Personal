var express 	= require('express')
	,fs 		= require('fs')
	,request 	= require('request')
	,cheerio 	= require('cheerio')
	,app     	= express();

app.get('/scrape', function(req, res){
	
	url = 'http://newyork.craigslist.org/search/sss?query=aerospoke&sort=rel';

	request(url, function(error, response, html){
		if(!error){
			console.log(html);
			var $ = cheerio.load(html);

			var price, itemName;
			var json = { price : "", itemName : ""};

			$('meta[name=description]').filter(function(){
		        var data = $(this);
		        console.log(data)
		        itemName = data.attr('content');
		        json.itemName = itemName;
	        })

		}

        fs.writeFile('search_results.json', JSON.stringify(json, null, 4), function(err){

        	console.log('File successfully written!');

        })

        res.send('Scrape complete')
	})
})

app.listen('8081')
console.log('Running on port 8081');
exports = module.exports = app;