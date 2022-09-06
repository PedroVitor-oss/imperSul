const Sequelize = require('sequelize');
const senhas = require("../public/js/senhas.js")
// conecsão com banco de dados
//mysql://b753c8670bc720:0fecf53b@us-cdbr-east-06.cleardb.net/heroku_27e9fb24f303c5e?reconnect=true
const sequelize = new Sequelize(senhas.bdName,'b753c8670bc720','0fecf53b',{
    host:'us-cdbr-east-06.cleardb.net',
    dialect:'mysql',
});
module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
}