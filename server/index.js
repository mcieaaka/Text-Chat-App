const express = require('express');
var app = express();
const passport = require("passport");
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
var User = require("./models/User");

//DqfAOzgQadYFYuIL
mongoose.connect("mongodb+srv://Harshit:DqfAOzgQadYFYuIL@textchatapp.ef8gl.mongodb.net/TextChatApp?retryWrites=true&w=majority")
require("./passport-setup.js");


app.use(
    require("express-session")({
      secret: "chatapp",
      resave: false,
      saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());

const isLoggedIn = (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.redirect("/");
    }
  };


app.get(
    "/login",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  
  app.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/failed" }),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect("/home");
    }
  );

app.get("/failed", (req, res) => {
    res.redirect("/");
  });

app.get("/",(req,res)=>{
    res.send("Heyyyy");
});

app.get("/home",isLoggedIn,(req,res)=>{
    res.send("Heyyyy logged in");
});

app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
    req.session.destroy();
});


var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Text Chat Sever at 3000");
})