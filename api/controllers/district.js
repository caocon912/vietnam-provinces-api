'use strict'
const db = require('./../db')

module.exports = {
    getAll: (req, res) => {
        let sql = "SELECT * FROM districts WHERE province_code = ?"
        db.query(sql, [req.params.province_code], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    getById: (req, res) => {
        let sql = "SELECT * FROM districts WHERE code = ? AND province_code = ?"
        db.query(sql,[req.params.district_code, req.params.province_code], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    }
}

