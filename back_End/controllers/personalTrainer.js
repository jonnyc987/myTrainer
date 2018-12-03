const PersonalTrainer = require("../models/personalTrainer");

module.exports = {
  getPersonalTrainers: () => {
    return new Promise((resolve, reject) => {
      PersonalTrainer.fetchAll().then(personalTrainers => {
        resolve(
          personalTrainers.models.map(
            personalTrainer => personalTrainer.attributes
          )
        );
      });
    });
  },
  addPersonalTrainers: (
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
  ) => {
    return new Promise((resolve, reject) => {
      new PersonalTrainer({
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
      })
        .save()
        .then(personalTrainer => {
          resolve(personalTrainer.attributes);
        });
    });
  },
};
