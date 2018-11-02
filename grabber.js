var needle = require("needle");
var cheerio = require("cheerio");

url = "https://vk.com/durov";

needle.get(url,function(error,res){
	if (error) {
		throw(error);
	}

	var for_cheerio = cheerio.load(res.body);
	var for_alert = for_cheerio(".page_name").text();

	console.log(for_alert);
});
