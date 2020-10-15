var Todo = require('./model');
var parser = require('body-parser');

module.exports = app => {
    app.use(parser.json());
    app.use(parser.urlencoded({extended:true}));
    app.get("/",(req,res)=>{
        Todo.find(function(err,result){
            if(err) throw err;
            res.send(result);
        });
    });
    app.post("/api",(req,res)=>{
        Todo.insertMany({todo : req.body.todo,
            isDone : req.body.isDone},(err,result)=>{
                if(err) throw err;
                res.send(result);
            });
    });
    app.post("/erase",(req,res)=>{
        Todo.findByIdAndDelete(req.body._id,(err,result)=>{
            if(err) throw err;
            res.send(result);
        });
    });    
}