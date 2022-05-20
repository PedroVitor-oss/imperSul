const Sequelize = require('sequelize');
// conecsão com banco de dados
const sequelize = new Sequelize('pessoas','root','1234',{
    host:'localhost',
    dialect:'mysql',
});
module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
}