const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'password', // 必要に応じて変更
    database: 'todo_app'  // 必要に応じて変更
  }
});

module.exports = knex;