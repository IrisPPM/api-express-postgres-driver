const { Pool, DatabaseError } = require("pg")

const connect = new Pool ({
    host: "babar.db.elephantsql.com",
    user: "pyijcxjv",
    password: "xaq-XClTmmH2ZPI3V6-_GNJcFrRJmcXh",
    database:"pyijcxjv",
    port:"5432"
})

module.exports = connect