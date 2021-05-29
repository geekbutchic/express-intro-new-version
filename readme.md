# Notes - Intro to Express

## `Terminal Commands`
How to setup.

* STEP 1. - CREATE `mkdir` express-intro

* STEP 2. - ENTER TERMINAL COMMAND `nmp init` 
To Note: `npm init <initializer> can be used to set up a new or existing npm package.`

* STEP 3. - CHANGE THE ENTRY POINT TO `app.js` INSTEAD OF INDEX.JS.

* STEP 4. - CREATE FILE `app.js`

* STEP 5. - INSTAL MODULE LIBRARY `npm i express`

## `TERMINAL SETUP COMPLETE`

### BEGIN IN `app.js`

### `SETUP PAGE 5 STEPS`

STEP 1 - REQUIRE IN EXPRESS MODULES
```javascript
const express = require("express");
```

STEP 2 - CALL FUNCTION
```javascript
call express();
```

STEP 3 - TELLS US OUR SERVER IS UP
```javascript
app.listen(3000, () => {
  console.log(`Server is running on PORT: ${3000}`);
});
```
STEP 5 - RUN `nodemon app.js`

===============================================

## `Beginning app.js`
* SERVER HAS GET REQUEST ABILITY
* SECOND ARGUMENT IS PATH WE GAVE "/"
* CALL BACK FUNCTION - INHERENTLY IN NODE AND EXPRESS 
* REQUEST & RESPONSE
* REQUEST = POST & PUT 
* REQUEST -> PARSING DATA THAT COMES IN 
* RESPONSE -> DATA WE SEND OUT 

## `LESSON 1 SIMPLE GET REQUEST`

CAN ALSO BE SEEN IN POSTMAN - GET REQUEST SHOULD SHOW LOCAL HOST 3000 - "HELLO CLASS"

``` javascript
// SHOULD PRINT "HELLO CLASS" IN localhost:3000"
app.get("/", (req, res) => {
  res.send("Hello class");
  // RESPOND.SEND("HELLO CLASS")
});

SHOULD SEE `"HELLO CLASS"` IN BROWSER
```

`DATA TYPES THAT CAN BE USED`

`RES.JSON({WILL BE USED A LOT})`
```javascript
app.get("/", (req, res) => {
  res.json({
    name: "hamster", // STRING 
    friends: ["tommy", "geo", "john"], // OBJECT 
    food: {
      food1: "candies", // ARRAY
      food2: "burgers",
    },
    boolean1: true, // BOOLEAN 
    boolean2: false,
    number: 123, // NUMBERS
  });
});
// localhost:3000/api
```
## `LESSON 2 - NON DYNAMIC VERSION VS DYNAMIC VERSION`

`NON DYNAMIC VERSION - STATIC JSON`

```JAVASCRIPT
// NON DYNAMIC VERSION
app.get("/t-shirt", (req, res) => {
  res.json({
    price: 100,
    type: "t-shirt",
  });
});
// localhost:3000/t-shirt

app.get("/pants", (req, res) => {
  res.json({
    price: 100,
    type: "pants",
  });
});
// localhost:3000/pants
```
## `DYNAMIC VERSION`
* RES IS WHAT WE SEND BACK
* REQ IS WHAT IS COMING INTO SERVER
* `/:product` CALLED PARAMETERS
* CREATES OBJECT CALLED { product: "hat" }
* WE PASS IN THE VALUE IN THE BROWSER
* `localhost:3000/hat`
```JAVASCRIPT
app.get("/:product", (req, res) => {
  console.log(req.params);
  res.json({
    price: 100,
    type: req.params.product,
  });
});
// localhost:3000/hat 
// terminal { product: "hat" }
// localhost:3000/jersey
// terminal {product: "jersey"}
```

## `DYNAMIC VERSION WITH NESTED PARAMS`

THE INPUT COMES FROM THE LOCAL HOST 3000
* `/:product/:id`
```JAVASCRIPT
// NESTED PARAMS - BAKED INTO EXPRESS AND NODE
app.get("/:product/:id/:color", (req, res) => {
  // key <-> value  
  console.log(req.params);
  res.json({
    price: 100,
    type: req.params.product, // req.params given 
    id: req.params.id, // by express 
    color: req.params.color
  });
});
// localhost:3000/shirt/1/red
// Terminal Object 
// { product: 'shirt', id: '1', color: 'red' }
```
## `MIDDLEWARE`

NPM MORGAN
`TELLS US WE ARE MAKING A GET REQUEST`

`COMMAND T` TO OPEN NEW SERVER 

OR `CANCEL SERVER` TO BEGIN DOWNLOADING MORGAN

RUN `npm i morgan` IN TERMINAL TO DOWNLOAD PACKAGES

ADD MIDDLEWARE BELOW TO COMPLETE MORGAN ->

COMMAND R TO REFRESH LOCAL HOST 30000
```JAVASCRIPT
// TOP OF PAGE
const logger = require("morgan");
// REQUIRE MORGAN

app.use(logger("dev"));
// LOGGER TELLS US WHAT PATH IM ON 
// WHAT REQUEST IM MAKING 
```

## POST REQUEST

```JavaScript 
app.post("/create-product", (req, res) => {
  console.log(req.body);
  res.json({
    data: req.body,
  });
});
// POSTMAN
// POST -> BODY -> RAW -> JSON 
```
```JAVASCRIPT
// NEED FOR POST REQUEST
// CANNOT READ JSON() WITHOUT
app.use(express.json());

// POSTMAN
// POST -> BODY -> RAW -> JSON 

// PHOTO IN LIBRARY OF EXAMPLE FOR POSTMAN
```

## `REQUIRING IN EJS`

TERMINAL ENTER 

`npm i ejs`

FOLLOWED BY ->
```javascript
// STEP 1 - FOR EJS
const path = require("path")

// STEP 2 - FOR EJS
// JOINS PATH + DIRECTORY
app.set("views", path.join(__dirname, "views"));
// `__dirname` IS A DIRECT PATH
// "views" -> FOLDER

app.set("view engine", "ejs");
```
NEXT CREATE A FOLDER CALLED `views`

FOLLOWED BY A FILE IN `views` CALLED 
`index.ejs`

```JAVASCRIPT
// STEP 3 - TO TEST EJS

app.get("/", (req, res) => {
res.render("index")
});
// localhost:3000
```
TEST BY WRITING `HOME PAGE` IN INDEX.EJS

===========================================

## `LESSON TWO CONTINUED ON EXPRESS`

======= ADDING STYLE.CSS TO EJS ============

`STEP 1` - ADD LINK TO `APP.JS`
```javascript
app.use(express.static(path.join(__dirname, "public")));
// TELLS THE APP WHERE TO SERVE UP STATIC FILES
```
`STEP 2` - CREATE FOLDER CALLED `PUBLIC` FOLDER 

`STEP 3` - CREATE FOLDER CALLED `STYLESHEET`

`STEP 4` - CREATE FILE CALLED `STYLE.CSS`

======= ADDING JAVASCRIPT FILES TO EJS =========

`STEP 1` - CREATE A FOLDER CALLED `javascripts` 
AND MAKE SURE IT'S PLACED IN `public` FOLDER.

`STEP 2` - CREATE A FILE CALLED `methods.js`

`STEP 3` - ADD SCRIPT TAG 

```JAVASCRIPT
<script src="/javascripts/methods.js"></script>
```

======== ADDING IMAGES IN EJS ================

`STEP 1` - CREATE A FOLDER IN `PUBLIC` CALLED `IMAGES`.

STEP 2 - ADD `JPEG` IMAGES.

STEP 3 - ADD IMAGE TAG 
```JAVASCRIPT
<img src="/images/BMW.jpeg" alt="car">
// EXAMPLE SHOWS BMW DREAM CAR
```

========= ADDING EJS LANGUAGE ===============

`STEP 1` - ADD INTO APP.JS FUNCTION
```JAVASCRIPT
app.get("/", (req, res) => {
    res.render("index", {user: null});
    // res.render("index", { user: Master George };
});
```
`STEP 2` - ADD SYNTAX INTO EJS FILE
```JAVASCRIPT
    <hr />
    <% if (user) { %>
      <div>
        Welcome back <%- user -%>
      </div>
      <% } else { %>
        <div>Please login</div>
        <% } %>
          <hr />
```
IF `NULL` IS GIVEN `PLEASE LOGIN` DISPLAYS.

IF `USER NAME IS GIVEN`- NAME WILL BE PRINTED.

=========== ADDS BULLET LIST FOR EJS ===========
`STEP 1` - ADD BULLET LIST EJS SYNTAX
```JAVASCRIPT
          <hr />
          <ul>
            <% teams.forEach(function(item) { %>
              <li>
                <%- item.team -%>
              </li>
              <% }); %>
          </ul>
          <hr />
```

`STEP 2` - IN `APP.JS` ADD 
```JAVASCRIPT 
// LIST STYLE FOR EJS DISPLAY
app.get("/", function (request, response) {
  response.render("index", {
    user: null,
    teams: [{ team: "lakers" }, { team: "knicks" }, { team: "magic" }],
  });
});
```

=========================================================
# LESSON TWO 

// CREATED `APP-1.JS` AND MOVED ALL OF THE FIRST LESSON NOTES 
// CREATED A FOLDER CALLED `ROUTES` 
// CREATED A FILE IN ROUTES CALLED `TEAM.JS`

SETUP `APP.JS` AS FOLLOWS

STEP 1
```JAVASCRIPT
const express = require("express");
const logger = require("morgan");
const path = require("path");
const teamRouter = require("./routes/team");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//MIDDLEWARE
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/team", teamRouter);
app.listen(3000, function () {
  console.log(`Server is running on PORT: ${3000}`);
});
```
STEP 2 

CREATE SETUP `TEAM.JS` FILE
```JAVASCRIPT
const express = require("express");
const router = express.Router();

let teamArray = [
  {
    id: 1,
    name: "lakers",
  },
  {
    id: 2,
    name: "knicks",
  },
  {
    id: 3,
    name: "nets",
  },
];

router.get("/", function (req, res) {
  res.json({
    data: teamArray,
  });
});


// EXPORTING FILE
module.exports = router;
```
### CODE BREAKDOWN 

```JAVASCRIPT
// IF A DOT IS PRESENT . IT MEANS WE CREATED THE FILE
// TOP OF APP.JS
const teamRouter = require("./routes/team");
//BELOW ON APP.JS
app.use("/api/team", teamRouter);
// localhost:3000/api/team
```
PATH / API / TEAM 

`SHOULD PULL UP AN ARRAY OF ALL THE TEAMS`

================ REQ QUERY ====================

NEXT WE `CONSOLE.LOG(REQ.QUERY)`

```JAVASCRIPT
router.get("/", function (req, res) {
  console.log(req.query);  
  res.json({
    data: teamArray,
  });
});
// localhost:3000/api/team?name=bulls
```
IN TERMINAL WE SHOULD SEE `{ name: "bulls" }`

`To Note:` REQ.QUERY IS AN OBJECT 

NOW CREATE A FUNCTION THAT WILL EXTRACT THAT SINGLE QUERY.

`STEP 1` - WRITE THE FUNCTION

```JAVASCRIPT
router.get("/", function (req, res) {
  console.log(req.query)  
  if (req.query.name) {
    let foundTeam;
    teamArray.forEach((item) => {
      if (item.name === req.query.name) {
        foundTeam = item;
      }
    });
    if (!foundTeam) {
      res.json({ message: "Sorry, team not found!" });
    } else {
      res.json({ foundTeam: foundTeam });
    }
  } else {
    res.json({ data: teamArray });
  }
});
// localhost:3000/api/team?name=bulls
```

THIS SHOULD SHOW ON OUR PAGE 

```JAVASCRIPT
{
    "data": {
        "id": 1,
        "name": "bulls"
    }
}
```
THEY KEY TO QUERY DATA IS TO INPUT 
```JAVASCRIPT
// localhost:3000/api/team
GIVES BACK FULL TEAM ARRAY

// localhost:3000/api/team?name=bulls 
GIVES BACK QUERY 

// localhost:3000/api/team?name=celtics
MESSAGE TEAM NOT FOUND
```

=========== ANOTHER WAY TO QUERY DATA ============

GETTING A TEAM BY ID

`STEP 1` - WRITE FUNCTION 

```JAVASCRIPT
router.get("/get-team-by-id/:id", (req, res) => {
  const id = req.params.id;

  res.json({ data: id });
});
// localhost:3000/api/team/get-team-by-id/1
{
    "data": "1"
}
```
`ANY NUMBER ENTERED AT END WILL BE ATTACHED`
{
    "data": "number"
}

========= EDGE CASING ==========================

CONTINUED TO ACCOUNT FOR STRING TO NUMBER - IN BROWSER IT'S A NUMBER BUT CONVERTED TO A STRING.

```JAVASCRIPT
router.get("/get-team-by-id/:id", function (req, res) {
  // CONVERTING NUMBER TO STRING
  const id = Number(req.params.id);
  // INITIALIZE FOUND TEAM VARIABLE
  let foundTeam;
  // LOOPING THROUGH TEAM OF ARRAY
  teamArray.forEach((item) => {
    // CHECKING IF ITEM.ID EQUALS TO ID  
    if (item.id === id) {
      // SET FOUND TEAM TO ITEM  
      foundTeam = item;
    }
  });
    // SENDS MESSAGE IF QUERY IS NOT AVAILABLE
  if (!foundTeam) {
    res.json({ message: "Team ID you are looking for does not exist!" });
  }
  res.json({
    foundTeam,
  });
});
// localhost:3000/api/team/get-team-by-id/5
```
SHOULD RETURN THIS MESSAGE 
{
    `"message": "Team ID you are looking for does not exist!"`
}

================ QUERY TEAM BY NAME ====================

QUERY BY NAME 

`STEP 1` - CREATE FUNCTION THAT CAN QUERY BY NAME

```JAVASCRIPT
router.get("/get-team-by-name/:name", function (req, res) {
  const name = req.params.name;
  let foundTeam;
  teamArray.forEach(function (element) {
    if (element.name === name) {
      foundTeam = element;
    }
  });

  if (!foundTeam) {
    res.json({ message: "SORRY TEAM NOT FOUND - CHECK YOUR TEAM NAME." });
  } else {
    res.json({ foundTeam });
  }
});
// localhost:3000/api/team/get-team-by-name/bulls
```
IF NAME IS INCORRECT MESSAGE WILL APPEAR

{ `"message": "SORRY TEAM NOT FOUND - CHECK YOUR TEAM NAME."` }

=========== CREATE POST REQUEST - ADDING TO TEAM ARRAY ==============

WILL BE USING POSTMAN 

`STEP 1` - CREATE FUNCTION TO MAKE SURE PATH IS HIT

```JAVASCRIPT
// POST REQUEST - ADD TO TEAM ARRAY
router.post("/create-team", function (req, res) {
  res.json({ message: "Path hit!" });
});
```

`STEP 2` - ENTER INTO POSTMAN
```JAVASCRIPT
// localhost:3000/api/team/create-team
```
`TO NOTE` 

* `api/team` IS STATIC
* MESSAGE SHOULD PRINT OUT `"PATH HIT"`
* CHECK TO MAKE SURE `POST` IS SELECTED `BODY` IS RAW IN `JSON` FORMAT.

`STEP 3` - RECREATE OBJECT IN POSTMAN

FUNCTION 
```JAVASCRIPT
router.post("/create-team", function (req, res) {
  res.json({ message: req.body });
});
```
`STEP 3.A`

POSTMAN
```JAVASCRIPT
// TOP 
{
    "id": 4,
    "name": "bulls"
}
// THIS SHOULD BE THE BODY OF THE OBJECT
// BELOW
{
    "message": {
        "id": 4,
        "name": "bulls"
    }
}
// FINAL OBJECT ONCE SENT IT HIT
```
`STEP 4` 

NEXT FUNCTION

```JAVASCRIPT
router.post("/create-team", function (req, res) {
// STEP 1 PUSH INTO ARRAY
    teamArray.push(req.body)

    res.json({ teamArray })
    
});
// localhost:3000/api/team/create-team
```
```JAVASCRIPT
// TOP
{
    "id": 4,
    "name": "bulls"
}
// BELOW 
{
    "teamArray": [
        {
            "id": 1,
            "name": "lackers"
        },
        {
            "id": 2,
            "name": "knicks"
        },
        {
            "id": 3,
            "name": "nets"
        },
        {
            "id": 4,
            "name": "bulls"
        }
    ]
}
```
`TO NOTE:` 
* ID SHOULD NOT BE HARD CODED BY US.
* WILL NEED TO INSTALL `UUID` FOR RANDOM ID NUMBERS.

========== NEW ARRAY WITH UUID REQUIRED IN =============
`STEP 1` - INSTAL `npm i uuid` IN TERMINAL.

`STEP 2` - REQUIRE IN `UUID` TOP OF PAGE.

```JAVASCRIPT
const uuidv4 = require("uuid").v4;
// CALL UUID ID 
let teamArray = [
  {
    id: uuidv4(),
    name: "lakers",
  },
  {
    id: uuidv4(),
    name: "knicks",
  },
  {
    id: uuidv4(),
    name: "nets",
  },
];
// FUNCTION WITH UUID
router.post("/create-team", function (req, res) {
// STEP 1 PUSH INTO ARRAY
    teamArray.push(req.body)

    res.json({ teamArray })

});
// localhost:3000/api/team/
```
SHOULD SHOW NEW ARRAY WITH UNIQUE UUID NUMBERS
```JAVASCRIPT
// RESULTS FROM BROWSER
{
  "data": [
    {
      "id": "39016e88-d62b-4ba5-bd6b-42f2ab69a922",
      "name": "lakers"
    },
    {
      "id": "e24aed8e-d16d-4d33-bbfd-3250e9dcaf27",
      "name": "knicks"
    },
    {
      "id": "49c4e884-a603-4619-9bfd-01bef067ffe5",
      "name": "nets"
    }
  ]
}
//localhost:3000/api/team/
```
============= QUERY BY UUID =================

`STEP 1` - MAKE SURE EVERYTHING IS SETUP IN PREVIOUS STEPS.

`STEP 2` - WRITE NEW FUNCTION THAT DOES NOT CONVERT STRING TO NUMBER.

```JAVASCRIPT
// QUERY BY ID WITH - UUID
router.get("/get-team-by-id/:id", function (req, res) {
  const id = req.params.id
  // INITIALIZE FOUND TEAM VARIABLE
  let foundTeam;
  // LOOPING THROUGH TEAM OF ARRAY
  teamArray.forEach((item) => {
    //checking if item.id equals to id
    if (item.id === id) {
      //set foundTeam to item
      foundTeam = item;
    }
  });

  if (!foundTeam) {
    res.json({ message: "Team ID you are looking for does not exist!" });
  }

  res.json({
    foundTeam,
  });
});
// localhost:3000/api/team/get-team-by-id/ + plus unique id
``
```JAVASCRIPT
{
  "foundTeam": {
    "id": "fd91da03-2137-409b-8d74-9bd17f29d7c7",
    "name": "lakers"
  }
}
// THE ID WILL BE UNIQUE ONCE CALLED 
```
`TO NOTE`

* TO SEE FULL UUID OF TEAM OF ARRAY ENTER 

```JAVASCRIPT
// localhost:3000/api/team
{
  "data": [
    {
      "id": "fd91da03-2137-409b-8d74-9bd17f29d7c7",
      "name": "lakers"
    },
    {
      "id": "7215e6fb-39d1-4a8f-ae81-d6d1af27be0a",
      "name": "knicks"
    },
    {
      "id": "5ed566de-f6ef-477c-93f4-17c5826a145d",
      "name": "nets"
    }
  ]
}
THIS WILL SHOW THE UNIQUE UUID FROM HERE WE CAN PULL THE ID TO BE CALLED IN THE BROWSER WITH -> 
//localhost:3000/api/team/get-team-by-id/ + plus unique id
```

========== POST REQUEST WITH UUID ==================

`STEP 1` - FOLLOW PREVIOUS STEPS FOR SETUP.

`STEP 2` - WRITE FUNCTION.

```JAVASCRIPT
// ONCE UUID IS INSTALLED NEW FUNCTION IS WRITTEN
router.post("/create-team", function (req, res) {
  let newTeamObj = {
    id: uuidv4(),
    name: req.body.name,
  };

  teamArray.push(newTeamObj);

  res.json({ teamArray });
});
```

`STEP 3` - POSTMAN REMOVE ID IN BODY.
```JAVASCRIPT
// POSTMAN SCREEN
// localhost:3000/api/team/create-team
{
    //"id": 4, <-> REMOVE IN POSTMAN
    "name": "bulls"
}
// TOP 
// BELOW
{
    "teamArray": [
        {
            "id": "998d3650-117a-47e0-981e-4954002e4ff4",
            "name": "lakers"
        },
        {
            "id": "02cf91c4-59c8-44e8-beac-cba7fffbbc71",
            "name": "knicks"
        },
        {
            "id": "71ec7275-57d2-42f2-bc28-f7eff0762f3a",
            "name": "nets"
        },
        {
            "id": "415a319c-6041-4b15-b529-c1e67fbb5ff0",
            "name": "bulls"
        }
    ]
}
// NEW ARRAY WITH UNIQUE UUID
// REMEMBER THE UUID WILL CHANGE 
```
=========== REFACTOR OF FUNCTION WITH UUID ==============

ISSUE: WHEN HIT SEND ON POSTMAN `BODY` SUBMITS THE INFORMATION AGAIN. NEED TO REFACTOR THE FUNCTION TO READ IF TEAM HAS ALREADY BEEN SUBMITTED.

```JAVASCRIPT
// EXAMPLE OF ERROR IN POSTMAN 
{
    "teamArray": [
        {
            "id": "92e0d5b4-b99c-4c77-af5a-92562b36968b",
            "name": "lakers"
        },
        {
            "id": "50864042-0aea-45f3-827b-cc172df558c5",
            "name": "knicks"
        },
        {
            "id": "78936ace-af14-4fa3-a3f8-47969b759d9b",
            "name": "nets"
        },
        {
            "id": "d89a0603-2b5a-48f6-afbb-98c044264e41",
            "name": "bulls"
        },
        {
            "id": "edaf0753-2ec1-4227-b1fb-4d7aa8613dd8",
            "name": "bulls"
        },
        {
            "id": "b7d59a29-3ede-40d3-8ccb-eae8e031181f",
            "name": "bulls"
        }
    ]
}
```
==================== REVIEW ============================

`REVIEW HOW TO QUERY A TEAM?`
* SIMPLE `GET` REQUEST
```JAVASCRIPT
router.get("/", function (req, res) {
  if (req.query.name) {
    let foundTeam;
    teamArray.forEach((item) => {
      if (item.name === req.query.name) {
        foundTeam = item;
      }
    });
    if (!foundTeam) {
      res.json({ message: "Sorry, team not found!" });
    } else {
      res.json({ foundTeam: foundTeam });
    }
  } else {
    res.json({ data: teamArray });
  }
});
//localhost:3000/api/team?name=knicks
// REMEMBER NEED A QUESTION MARK 
```
GET TEAM BY `ID`
```JAVASCRIPT
router.get("/get-team-by-id/:id", function (req, res) {
  //converted to a number because the incoming data is a string
  //this is before uuid because we have to convert the id to a number
  //const id = Number(req.params.id);
  //uuidv4 version
  const id = req.params.id;
  //initialize a foundTeam variable
  let foundTeam;
  //looping through the array of TeamArray
  teamArray.forEach((item) => {
    //checking if item.id equals to id
    if (item.id === id) {
      //set foundTeam to item
      foundTeam = item;
    }
  });
  //if no team is found
  if (!foundTeam) {
    //send a message back
    res.json({
      message:
        "The team ID you are looking for does not exists please check ID",
    });
  } else {
    //send found team back
    res.json({
      foundTeam,
    });
  }
});
//localhost:3000/api/team/get-team-by-id/d526cda1-c206-4b2e-b479-8384c50c03e7
// REMEMBER ID WILL ALWAYS BE DIFFERENT WITH UUID
```
`QUERY DATA BY NAME`
```JAVASCRIPT
router.get("/get-team-by-name/:name", function (req, res) {
  const name = req.params.name;
  let foundTeam;
  teamArray.forEach(function (element) {
    if (element.name === name) {
      foundTeam = element;
    }
  });
  if (!foundTeam) {
    res.json({ message: "Sorry, team not found. Check your team name" });
  } else {
    res.json({ foundTeam });
  }
});
// localhost:3000/api/team/get-team-by-name/lakers
// SIMILAR TO ID BUT REQUIRES NAME INSTEAD WITHOUT TEAM ? NAME
```
`CREATE TEAM - POST REQUEST`

`STEP 1` CREATE FUNCTION
```JAVASCRIPT
router.post("/create-team", function (req, res) {
  let newTeamObj = {
    id: uuidv4(),
    name: req.body.name,
  };
  teamArray.push(newTeamObj);
  res.json({ teamArray });
});

```
`STEP -2` POSTMAN 

* CREATE NEW TAB
* CLICK POST + BODY + JSON
* ADD: `localhost:3000/api/team/create-team`
* ADD: IN BODY `{ "name": "bulls" }`

TO NOTE FUNCTION CAN ONLY ADD EVEN IF TEAM ALREADY EXISTS

============== CREATE TEAM WITH UUID REFACTOR ================

NEW FUNCTION THAT DOES NOT ADD SAME TEAM AGAIN
```JAVASCRIPT
router.post("/create-team", function (req, res) {
  // res.json({message: "path hit!"})
  let newTeamObj = {
    id: uuidv4(),
    name: req.body.name,
  };
  let isFound;
  teamArray.forEach((item) => {
    if (newTeamObj.name === item.name) {
      isFound = true;
    }
  });
  if (isFound) {
    res.json({ message: "team already exists" });
  } else {
    teamArray.push(newTeamObj);
    res.json({ teamArray });
  }
});
// localhost:3000/api/team/create-team
```
`STEP 1` - CREATE FUNCTION
* CREATE NEW TAB
* CLICK POST + BODY + JSON
* ADD: `localhost:3000/api/team/create-team`
* ADD: IN BODY `{ "name": "bulls" }`

WILL NOT ADD SAME TEAM SENDS MESSAGE "TEAM ALREADY EXISTS"

===================== PUT REQUEST ===========================

```JAVASCRIPT
router.put("/update-team/:name", function (req, res) {
  let canUpdate = false;
  let foundTeam;
  teamArray.forEach(function (item) {
    if (item.name === req.params.name) {
      canUpdate = true;
      foundTeam = item;
    }
  });
  if (canUpdate) {
    //CHECK IF incoming name already exists in the array!
    let isFound = teamArray.findIndex(
      (item) => item.name === req.body.updatedName
    );
    if (isFound > -1) {
      res.json({ message: "Cannot update because already team exists" });
    } else {
      foundTeam.name = req.body.updatedName;
      res.json({ foundTeam });
    }
  } else {
    res.json({ message: "Team not found! Cannot update!" });
  }
});
```