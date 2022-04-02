import knex from 'knex';
import config from './config.js';
const db = (knex)(config);

;(async function() {
  try {
    // console.log(db.select().table('users'))
    db.select().table('users')
    .where({ username: 'maria88' })
    .select('password')
    .then(function(result) {
      console.log(result)
    })
    .catch(function(error) {
      console.log(error);
    });
    

  } catch (e) {
    console.log()
  } finally {
  }
})()