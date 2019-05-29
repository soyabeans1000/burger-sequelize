const Sequelize = require('sequelize')
const connection = require('../config')

class Burger extends Sequelize.Model {}

  Burger.init({
  burger_name: Sequelize.STRING,
  eaten: Sequelize.BOOLEAN
}, { sequelize: connection, modelName: 'burgers' })

module.exports = Burger
