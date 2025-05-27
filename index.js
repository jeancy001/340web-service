
const express = require("express");
const path = require("path")
const expressLayouts = require("express-ejs-layouts");
const app = express();

const port = process.env.PORT || 5500;
const errorRoutes = require("./routes/errorRoutes");

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

app.use("/", errorRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).render("errors/error", {
    title: "404 Not Found",
    message: "The page you are looking for does not exist."
  });
});

// 500 error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("errors/error", {
    title: "500 Server Error",
    message: "Something went wrong on our end. Please try again later."
  });
});


// Start server
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
