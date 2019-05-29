const Sequelize = require('sequelize')

module.exports = new Sequelize('mysql://root:Reboot@2019@localhost:3306/burger_db')



  if (process.env.JAWSDB_URL) {
    module.exports = new Sequelize('mysql://ifel61iqkh02i48y:xafuveyl2hjfaku6@l7cup2om0gngra77.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/l03o751ixnob7va4')
  }
  else 
  {

    module.exports = new Sequelize('mysql://root:Reboot@2019@localhost:3306/burger_db')

  }