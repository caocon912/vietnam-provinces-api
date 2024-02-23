'use strict'
const db = require('./../db')

module.exports = {
    getAll: (req, res) => {
        let sql = "SELECT * FROM wards WHERE district_code = ?"
        db.query(sql, [req.params.district_code], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    getById: (req, res) => {
        let sql = "SELECT * FROM wards WHERE code = ? AND district_code = ?"
        db.query(sql,[req.params.ward_code, req.params.district_code], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    }
}

