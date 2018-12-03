const Gym = require("../models/gym");

module.exports = {
    getGyms: () => {
      return new Promise((resolve, reject) => {
        Gym.fetchAll().then(gyms => {
          resolve(
            gyms.models.map(
              gym => gym.attributes
            )
          );
        });
      });
    },
}
