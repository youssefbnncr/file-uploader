const express = require('express');
const session = require('express-session');

const app = express();

require('dotenv').config();

const path = require('path');
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "src");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.render('home');
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
