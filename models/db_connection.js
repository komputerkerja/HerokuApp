const knex = require('knex');

const dbConnect = knex({
    client: 'sqlite',
    connection: {
        filename: './database/tags.sqlite'
    }
})

module.exports = dbConnect;