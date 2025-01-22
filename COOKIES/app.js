import express from "express";
import cookirePaarser from "cookie-parser";

let app = express();

app.use(cookirePaarser());

// setting the cookie
app.get("/set-cookie", (req, res) => {
  res.cookie("name", "yuke"),
    {
      maxAge: 2 * 60 * 1000,
      httpOnly: true,
    };
  res.send("cookie set");
});

// getting the cookie
app.get("/get-cookie", (req, res) => {
  res.send(req.cookies);
  res.send("cookie getted");
});

// updating the cookie
app.get("/update-cookie", (req, res) => {
  res.cookie("name", "yukesh");
  res.send("cookie updated");
});

// deleting the cookie
app.get("/delete-cookie", (req, res) => {
  res.clearCookie("name");
  res.send("cookie deleted");
});

export default app;
