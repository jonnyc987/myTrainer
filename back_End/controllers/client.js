const Client = require("../models/client");

module.exports = {
  getClients: () => {
    return new Promise((resolve, reject) => {
      Client
        .fetchAll()
        .then(clients => {
            resolve(clients.models.map(client => client.attributes));
        });
    });
  },
  addClient: (
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
  ) => {
    return new Promise((resolve, reject) => {
      new Client({
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
      })
        .save()
        .then(client => {
          resolve(client.attributes);
        });
    });
  },
};
