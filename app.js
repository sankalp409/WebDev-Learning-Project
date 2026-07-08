const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const listings = require("./routes/listings.js");
const reviews = require("./routes/review.js");
const app = express();
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const session = require("express-session");
const flash = require("connect-flash");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongo_url);
}

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.listen(3000, () => {
  console.log("Your Server is Online");
});

app.get("/", (req, res) => {
  res.send("This is your Home Page");
});

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");

  next();
});

app.use("/listings", listings);
app.use("/listings/:id", reviews);

// Catch-all for 404 Not Found - must be before the final error handler
app.use((req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});
// Error handling middleware (MUST be at the end)
app.use((err, req, res, next) => {
  let { status = 500, message = "something went wrong" } = err;
  res.status(status).render("error.ejs", { message });
});
