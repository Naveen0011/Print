var mongoose = require('mongoose');
var schema = mongoose.Schema;

var temp = new schema({
    todo : String,
    isDone : Boolean
});

var Todos = mongoose.model("Todos",temp);

module.exports = Todos;