// NOTES FOR FIRST HALF OF EXPRESS INTRO 

const express = require("express");
// STEP 1 - IMPORTING EXPRESS MODULE

// npm i morgan
// STEP 1 - FOR MORGAN
const logger = require("morgan");
// REQUIRE MORGAN - MIDDLEWARE

// STEP 1 - FOR EJS
//
const path = require("path");

const app = express();
// STEP 2 - CALLING EXPRESS

// STEP 2 - FOR EJS
// __dirname IS A PATH
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// STEP 2 - FOR MORGAN
app.use(logger("dev"));
// MIDDLEWARE FOR MORGAN
// LOGGER TELLS WHAT PATH IM ON
// WHAT REQUEST IM MAKING

// POST REQUEST
// GIVES ABILITY TO PARSE JSON()
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
// TELLS THE APP WHERE TO SERVE UP STATIC FILES

// MESSAGE TO TEST SERVER
// app.get("/", (req, res) => {
//   res.send("Hello class");
// });

// LIST STYLE FOR EJS DISPLAY
app.get("/", function (request, response) {
  response.render("index", {
    user: null,
    teams: [{ team: "lakers" }, { team: "knicks" }, { team: "magic" }],
  });
});

// LESSON 1
// MOST COMMON DATA TYPES
// STEP 4 - OBJECT OF DATA TYPES
// GET REQUEST THAT IS JSON()
app.get("/", (req, res) => {
  res.render("index", { user: null });
  // res.json({})
  //   res.json({
  //     name: "hamster", // STRING
  //     friends: ["tommy", "geo", "john"], // OBJECT
  //     food: {
  //       food1: "candies", // ARRAY
  //       food2: "burgers",
  //     },
  //     boolean1: true, // BOOLEAN
  //     boolean2: false,
  //     number: 123, // NUMBERS
  //   });
});

// LESSON 1
// NON DYNAMIC VERSION
// app.get("/t-shirt", (req, res) => {
//   res.json({
//     price: 100,
//     type: "t-shirt",
//   });
// });

// app.get("/pants", (req, res) => {
//   res.json({
//     price: 100,
//     type: "pants",
//   });
// });

//LESSON 1
// DYNAMIC VERSION
app.get("/:product", (req, res) => {
  // REQ.PARAMS IS GIVEN TO US TO EXTRACT THE VALUE
  // REQ.PARAMS IS AN OBJECT
  console.log(req.params);
  res.json({
    price: 100,
    type: req.params.product,
  });
});

// LESSON 2
// NESTED PARAMS - BAKED INTO EXPRESS AND NODE
app.get("/:product/:id/:color", (req, res) => {
  console.log(req.params); // req.params is an object
  res.json({
    price: 100,
    type: req.params.product,
    id: req.params.id,
    color: req.params.color,
  });
});

// POST REQUEST - CREATING A PATH
app.post("/create-product", (req, res) => {
  console.log(req.body);
  res.json({
    data: req.body,
  });
});

// STEP 3 - EJS TO RENDER HOME PAGE
app.get("/", (req, res) => {
  res.render("index");
});

// STEP 3 - FUNCTION FOR RUNNING SERVER
app.listen(3000, () => {
  console.log(`Server is running on PORT: ${3000}`);
});