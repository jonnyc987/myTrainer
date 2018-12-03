const bookshelf = require('./bookshelf')

const PersonalTrainer = bookshelf.Model.extend({
  tableName: 'personalTrainers'
})

module.exports = PersonalTrainer