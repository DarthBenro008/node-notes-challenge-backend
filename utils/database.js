const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-database','root','toor',{
    dialect:'mysql',
    host:'localhost',
    logging:true
})

module.exports.sequelize


