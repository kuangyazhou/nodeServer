var express=require('express');
var router=express.Router();

router.all('/list',function(req,res){
    console.log(req.method,+"/br"+req.baseUrl,+"/br"+req.path);
    res.send('hello');
});

router.get('/fb',function(req,res){
    res.status(403).send('forbidden');
});

router.get('/t',function(req,res){
    res.contentType('application/javascript');
    res.sendFile('/ok.js',{root:__dirname+'./../public'});
});

router.get('/m',function(req,res){
    res.json({a:1,b:[true,'ok']});
})

module.exports=router;