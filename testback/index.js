const express = require("express");

const app = express();

const port = 8000;

app.get("/",(req,res) => {
    return res.send("homepage");
});

const admin = (req,res) => {
    return res.send("admin dashboard")
};

const isAdmin = (req,res,next) => {
    console.log("isAdmin is running");
    next();
};

const isLoggedIn = (req,res,next) => {
    console.log("isLoggedIn is running");
    next();
};



app.get("/admin",isLoggedIn,isAdmin,admin);

app.get("/login",(req,res) => {
    return res.send("You are visiting login route");
});
app.get("/signout",(req,res) => {
    return res.send("You are signed out");
});
app.get("/hitesh",(req,res) => {
    return res.send("Hitesh uses instagram");
});
app.get("/signup",(req,res) => {
    return res.send("This is signup route");
});
app.listen(port, ()=> {
    console.log("Server is up and running...")
});


// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))