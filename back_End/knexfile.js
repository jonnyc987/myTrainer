module.exports = {
  client: 'pg',
      connection: process.env.DATABASE_URL || {
      database: 'capstone_project',
      user:     'JonnyCaron',
      password: ''
  }
};
