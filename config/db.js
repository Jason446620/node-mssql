const sql = require('mssql')
const config = {
    user: 'username',
    password: 'pwd',
    server: '***sqlserver.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
    database: 'yourdb',
    "options": {
        "encrypt": true,
        "enableArithAbort": true
    }
}

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}