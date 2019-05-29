const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.engine('.hbs', require('express-handlebars')({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

require('./routes')(app)





    require('./config').sync()
    .then(_ => {app.listen(process.env.PORT || 5000)
     console.log("Listening")
    }
    
    )
    .catch(e => console.log(e))
  