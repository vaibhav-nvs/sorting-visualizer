const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("client"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.listen(port,function(req,res){
  console.log("server is started");
});