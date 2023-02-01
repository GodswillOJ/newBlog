const express = require("express");
const app = express();
app.set("view engine", "ejs");
//Middleware
app.use("/assets", express.static("assets"));
app.use(express.urlencoded({extended: true}));
//Home route
app.get("/", (req, res)=>{
    res.render("index");
});
// Add Blogs
app.get('/AddBlogs', (req, res) =>{
    res.render('AddBlogs', {Username: "Maxwell"})
})

// Success 
app.post('/success', (req, res)=>{
    console.log(req.body)
    const user = req.body.username;
    res.render('success', {data: user})
})

app.get('/Register', (req, res) =>{
    console.log(req.body)
    res.render("Register")
})

app.get('/Login', (req, res) =>{
    console.log(req.body)
    res.render("Login")
})

//Listener
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Godswill::${PORT}`);
})