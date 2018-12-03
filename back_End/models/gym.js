const bookshelf = require('./bookshelf')

const Gym = bookshelf.Model.extend({
  tableName: 'gyms'
})

module.exports = Gym

