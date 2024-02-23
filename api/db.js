'use strict'

const mysql = require('mysql')

var db_config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}

var connection

function handleDisconnect() {
    connection = mysql.createConnection(db_config)  // Recreate the connection, since
                                                    // the old one cannot be reused.

    connection.connect(function(err) {              // The server is either down
        if (err) {                                  // or restarting (take a while sometimes)
            console.log("Error connecting to DB:", err)
            setTimeout(handleDisconnect, 2000)      // A delay before attempting to reconnect to
                                                    // avoid a hot loop, and to allow our code script
                                                    // to process asynchronous requests in the meantime
        }
    })

    connection.on("error", function(err) {
        console.log("DB error:", err)
        if (err.code === "PROTOCOL_CONNECTION_LOST") { // Connection to the MYSQL server is usually
            handleDisconnect()                         // lost due to either server restart, or connection
        } else {                                       // idle timeout (the wait_timeout server variable configures this)
            throw err
        }
    })
}

handleDisconnect()
module.exports = connection