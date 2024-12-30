import express from "express";

// express is a top level function call which creates a express application
let app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/home", (req, res) => {
  res.send("Home Pahe");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});


export default app;


