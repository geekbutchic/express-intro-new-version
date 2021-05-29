const express = require("express");
const router = express.Router();
const uuidv4 = require("uuid").v4;

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

// QUERY START CODE
router.get("/", function (req, res) {
  console.log(req.query);
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

// QUERY FINAL CODE - GET ITEM BY: ID
// router.get("/get-team-by-id/:id", function (req, res) {
//   // CONVERTING NUMBER TO STRING
//   const id = Number(req.params.id);
//   // INITIALIZE FOUND TEAM VARIABLE
//   let foundTeam;
//   // LOOPING THROUGH TEAM OF ARRAY
//   teamArray.forEach((item) => {
//     //checking if item.id equals to id
//     if (item.id === id) {
//       //set foundTeam to item
//       foundTeam = item;
//     }
//   });

//   if (!foundTeam) {
//     res.json({ message: "Team ID you are looking for does not exist!" });
//   }

//   res.json({
//     foundTeam,
//   });
// });

// QUERY BY ID WITH - UUID
router.get("/get-team-by-id/:id", function (req, res) {
  const id = req.params.id;
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

// QUERY BY NAME
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

// POST REQUEST - ADD TO TEAM ARRAY - NON UUID VERSION
// router.post("/create-team", function (req, res) {
//   // STEP 1 PUSH INTO ARRAY
//   teamArray.push(req.body);

//   res.json({ teamArray });
// });

// ONCE UUID IS INSTALLED - UUID VERSION
router.post("/create-team", function (req, res) {
  let newTeamObj = {
    id: uuidv4(),
    name: req.body.name,
  };

  teamArray.push(newTeamObj);

  res.json({ teamArray });
});

// EXPORTING FILE
module.exports = router;
