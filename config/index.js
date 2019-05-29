const Sequelize = require('sequelize')

module.exports = new Sequelize('mysql://root:Reboot@2019@localhost:3306/burger_db')



//  if (process.env.JAWSDB_URL) {
//    sequelize = mysql.createConnection(process.env.JAWSDB_URL)
//  }
//  else 
//  {
  