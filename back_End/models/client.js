const bookshelf = require('./bookshelf')

const Client = bookshelf.Model.extend({
  tableName: 'clients'
})

module.exports = Client

