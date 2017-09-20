var express=require('express');
var bodyParser=require('body-parser');

var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(express.static(__dirname+'/public'));

// app.get('/',function(req,res){
    // res.send('fuck the king')
// });

app.use('/user',require('./routers/users.js'));

// app.listen(8888,function(req,res){
//     console.log(req,res);
// });

let server=app.listen(8888,function(){
    let host=server.address().address;
    let port=server.address().port;
    console.log('nodeServer listening at http://',host,port)
})

// let server=app.listen(8888,function(){
//     let host=server.address().address;
//     let port=server.address().port;
//     console.log('nodeServer listening at http://',host,port)
// })