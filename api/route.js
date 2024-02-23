'use strict';
module.exports = function(app) {
    let province    = require('./controllers/province');
    let district    = require('./controllers/district');
    let ward        = require('./controllers/ward');  
    
    app.route('/p/')
        .get(province.getAll)
    app.route('/p/:province_code')
        .get(province.getById)
 
    app.route('/d/:province_code')
        .get(district.getAll)
    app.route('d/:province_code/:district_code')
        .get(district.getById)

    app.route('/w/:district_code')
        .get(ward.getAll)
    app.route('w/:district_code/:ward_code')
        .get(ward.getById)
};