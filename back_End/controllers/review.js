const Review = require("../models/review");

module.exports = {
  addReview: (
    user,
    position,
    goodFeature,
    noFeature,
  ) => {
    return new Promise((resolve, reject) => {
      new Review({
        user,
        position,
        goodFeature,
        noFeature,
      })
        .save()
        .then(review => {
          resolve(review.attributes);
        });
    });
  },
};