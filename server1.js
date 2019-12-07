var express        =         require("express");
var bodyParser     =         require("body-parser");
const app = express();


app.post('/2',function(req, res) {
    const stringval = req.param("y")
    //console.log("post stringval: " + stringval);
    return res.send(stringval + "\n");
});


app.post('/1', function(req, res) {
  var numeric = req.param("y");
  //console.log("post data: " + numeric);
  return res.send("" + numeric + "\n");
});

app.get('/get', function(req, res) {
  return res.send("This is GET" + "\n");
});

app.listen(5000, function(){
  console.log("Started on PORT 5000");
})
