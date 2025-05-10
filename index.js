
const express = require("express");
const path = require("path")
const expressLayouts = require("express-ejs-layouts");
const app = express();

const port = process.env.PORT || 5500;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Use express-ejs-layouts
app.use(expressLayouts);

app.set("layout", "./layouts/layout");

// Serve static files from the public folder
app.use(express.static("public"));

// Use static routes from a separate file
app.use(require("./routes/static"));

// Home route
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

// Start server
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
