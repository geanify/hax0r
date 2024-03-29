const express = require("express")
const bodyParser = require("body-parser");
const app = express();


let penis = '';

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(penis)
})

app.post("/str-exec", (req,res)=> {
  console.log(req.body)
  penis = req.body.test;
  res.send(req.body);
})


app.listen(8080);
//
//  var body = {
// test: '<script>alert("haxor")</script>'
// }
//
// fetch("/str-exec", {
//   method: "POST",
//  headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
// 	body: JSON.stringify(body),
// })
//

