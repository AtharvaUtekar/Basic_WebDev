//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt turpis eget magna lacinia, at tincidunt urna pulvinar. Fusce viverra, tellus nec tristique volutpat, turpis dui rhoncus dui, sed tincidunt sapien felis a ligula. Nullam rutrum lacus massa, eget bibendum elit lobortis vitae. Vestibulum lacus enim, imperdiet ut cursus eget, aliquet vel nunc. Vivamus accumsan eget nulla porttitor dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut vulputate fringilla erat sed iaculis. Fusce a cursus sem. Praesent vestibulum scelerisque sem, vitae laoreet purus luctus eget.";
const aboutContent = "Nullam malesuada urna nibh. In aliquam dignissim vestibulum. Curabitur sagittis ante mi, et fringilla lorem venenatis et. Duis fringilla mauris sem, at venenatis nulla egestas eget. Aliquam felis dui, laoreet in varius sit amet, consectetur vitae elit. Morbi et lectus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at ante nec elit ornare egestas quis eu mauris. Donec quis venenatis augue.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];

app.get('/', function(req, res){
    
    res.render("home", { startingContent: 
    homeStartingContent, 
    posts: posts 
  });
});

app.get('/about', function(req, res){
    
  res.render("about", { aboutContent: aboutContent });
});

app.get('/contact', function(req, res){
    
  res.render("contact", { contactContent: contactContent });
});

app.get('/compose', function(req, res){
    
  res.render("compose");
});

app.post('/compose',(req,res)=>{
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody    
  };

  posts.push(post);
  res.redirect("/");

});

app.get("/posts/:postName", function (req, res) {
  const reqTitle = _.lowerCase(req.params.postName);
  posts.forEach(function (post) {
    const storedTitle = _.lowerCase(post.title);
    if(storedTitle === reqTitle) { 
      res.render("post", { 
        title: post.title, 
        content: post.content
      });
       
    }
    
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
