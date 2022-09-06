const Sequelize = require('sequelize');
const senhas = require("../public/js/senhas.js")
// conecsão com banco de dados
// mysql://b2d87d059167b7:850bf5a0@us-cdbr-east-06.cleardb.net/heroku_b9e5958297b1f74?reconnect=true
const sequelize = new Sequelize('heroku_b9e5958297b1f74','b2d87d059167b7','850bf5a0',{
    host:'us-cdbr-east-06.cleardb.net',
    dialect:'mysql',
});
module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
}