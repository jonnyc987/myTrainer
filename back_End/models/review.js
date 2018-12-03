const bookshelf = require('./bookshelf')

const Review = bookshelf.Model.extend({
  tableName: 'reviews'
})

module.exports = Review