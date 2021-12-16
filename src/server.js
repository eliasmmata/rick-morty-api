const app = express();

app.use(express.static(__dirname+'/dist/angular-rick-morty'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/angular-rick-morty/index.html'));
});

app.listen(process.env.PORT || 8080);

// test