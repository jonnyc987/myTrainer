
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('reviews', function (table) {
        table.increments('id').primary(); 
        table.string('user');
        table.string('position')
        table.string('goodFeature')
        table.string('noFeature')
    })
  };
  
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('reviews')
  };
