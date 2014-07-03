var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
	
	url = 'http://www.amazon.com/Storm-QuickFire-Rapid-Tenkeyless-Mechanical/dp/B007VDKLLM/ref=sr_1_4?ie=UTF8&qid=1404393374&sr=8-4&keywords=quick+fire+rapid';

	request(url, function(error, response, html){
		if(!error){
			//console.log(html);
			var $ = cheerio.load(html);

			var price, itemName;
			var json = { price : "", itemName : ""};

			$('meta[name=description]').filter(function(){
		        var data = $(this);
		        console.log(data)
		        itemName = data.attr('content');
		        json.itemName = itemName;
	        })

			$('#actualPriceValue b.priceLarge').filter(function(){
		        var data = $(this);
		        console.log(data)
		        price = data.text();
		        json.price = price;
	        })

		}
        // To write to the system we will use the built in 'fs' library.
        // In this example we will pass 3 parameters to the writeFile function
        // Parameter 1 :  output.json - this is what the created filename will be called
        // Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
        // Parameter 3 :  callback function - a callback function to let us know the status of our function

        fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

        	console.log('File successfully written!');

        })

        // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
        res.send('Check your console!')
	})
})

app.listen('8081')
console.log('Running on port 8081');
exports = module.exports = app;