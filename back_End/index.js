const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || process.argv[2] || 9090;
const cors = require("cors");
const ClientController = require("./controllers/client");
const PersonalTrainerController = require("./controllers/personalTrainer");
const GymController = require("./controllers/gyms");
const ReviewController = require("./controllers/review");

app.use(bodyParser.json());
app.use(cors());

app.post("/review", (req, res) => {
  const {
    user,
    position,
    goodFeature,
    noFeature,
  } = req.body;
  ReviewController.addReview(
    user,
    position,
    goodFeature,
    noFeature,
  ).then(gyms => res.json(gyms));
});

app.get("/gym", (req, res) => {
  GymController.getGyms().then(gyms => res.json(gyms));
});

app.post("/client", (req, res) => {
  const {
    name,
    gymAddress,
    image,
    latitude,
    longitude
  } = req.body;
  GymController.addGym(
    name,
    gymAddress,
    image,
    latitude,
    longitude
  ).then(gyms => res.json(gyms));
});

app.get("/client", (req, res) => {
  ClientController.getClients().then(clients => res.json(clients));
});

app.post("/client", (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    gender,
    dOB,
    city,
    telephone,
    trainingDays,
    trainingTime,
    trainingGoals,
    trainingMotivation,
    trainingMonths
  } = req.body;
  ClientController.addClient(
    email,
    password,
    firstName,
    lastName,
    gender,
    dOB,
    city,
    telephone,
    trainingDays,
    trainingTime,
    trainingGoals,
    trainingMotivation,
    trainingMonths
  ).then(clients => res.json(clients));
});

app.get("/personalTrainer", (req, res) => {
  PersonalTrainerController.getPersonalTrainers().then(personalTrainers =>
    res.json(personalTrainers)
  );
});

app.post("/personalTrainer", (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    gym,
    gender,
    city,
    bio,
    trainingDays,
    trainingTime,
    trainingGoals,
    trainingMotivation,
    trainingMonths,
    trainerImage
  } = req.body;
  PersonalTrainerController.addPersonalTrainers(
    email,
    password,
    firstName,
    lastName,
    gym,
    gender,
    city,
    bio,
    trainingDays,
    trainingTime,
    trainingGoals,
    trainingMotivation,
    trainingMonths,
    trainerImage
  ).then(trainers => res.json(trainers));
});



app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});

module.exports = app;




