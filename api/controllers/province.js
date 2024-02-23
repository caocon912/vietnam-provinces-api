'use strict'
const db = require('./../db')

module.exports = {
    getAll: (req, res) => {
        let sql = "SELECT * FROM provinces"
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    getById: (req, res) => {
        console.log(req.params.province_code)
        let sql = "SELECT * FROM provinces WHERE code = ?"
        db.query(sql,[req.params.province_code], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    }
}

