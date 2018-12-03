
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('gyms', function (table) {
        table.increments('id').primary(); 
        table.string('name').notNullable().unique()
        table.string('gymAddress').notNullable()
        table.string('image')
        table.string('latitude').notNullable()
        table.string('longitude').notNullable()
    })
    .createTableIfNotExists('personalTrainers', function (table) {
        table.increments('id').primary(); 
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.string('gender').notNullable();
        table.string('city').notNullable();
        table.integer('gym').references('gyms.id')
        table.string('bio').notNullable();
        table.string('trainingDays').notNullable();
        table.string('trainingTime').notNullable();
        table.string('trainingGoals').notNullable();
        table.string('trainingMotivation').notNullable();
        table.string('trainingMonths').notNullable();
        table.string('trainerImage').notNullable();
    })
    .createTableIfNotExists('clients', function (table) {
        table.increments('id').primary(); 
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.string('gender').notNullable();
        table.string('dOB').notNullable();
        table.string('city').notNullable();
        table.string('telephone');
        table.string('trainingDays').notNullable();
        table.string('trainingTime').notNullable();
        table.string('trainingGoals').notNullable();
        table.string('trainingMotivation').notNullable();
        table.string('trainingMonths').notNullable();
    })
  };
  
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('personalTrainers', 'clients', 'gyms')
  };

