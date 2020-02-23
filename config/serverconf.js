const path = require("path");
const methodOverride = require('method-override');
const {sequelize} = require(path.join(__dirname, '../models'));
sequelize.sync({force: false});

module.exports = {
    methodOverride
};