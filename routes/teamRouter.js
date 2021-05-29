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

module.exports = router;
