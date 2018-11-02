
app.set('view engine','ejs');

page_name = "hello world!";

app.get('/',function(req,res){
	res.render('index', {c_params: page_name});
})