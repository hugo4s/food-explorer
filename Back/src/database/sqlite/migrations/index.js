const sqliteConnection = require('./../../sqlite')
const createUsers = require('./createUsers')

async function migrationsRun() {
    const schemas = [
        createUsers
    ].join('');

    sqliteConnection()
    .then(db => db.exec(schemas))
    .catch(error => console.error(errror))
}

module.exports = migrationsRun;