const  Burger = require('../models/burgers.js')

module.exports = app => {



  app.get('*', function (req, res) {
    Burger.findAll()
    .then(orders =>  {    
      res.render("index", {
        burger: orders
     })})
    .catch(e => console.log(e))
      
  })


  app.get('/burgers', function (req, res) {
    Burger.findAll()
    .then(results =>  {
      console.log(results.JSON())
      res.render("index", results.toJSON())})
    .catch(e => console.log(e))
  
  })


  app.post('/burgers', (req, res) => {
    Burger.create(req.body)
      .then(_ => {
        console.log('Burger Added')
        res.sendStatus(200)})
      .catch(e => console.log(e))
  })
  // PUT A burger
  app.put('/burgers/:id', (req, res) => {
    console.log(req.body)

    Burger.update(req.body, { where: { id: req.params.id } })
      .then(_ => {
        console.log('Burger Updated')
        res.sendStatus(200)})
      .catch(e => console.log(e))
  })

  
  // app.get("*", function(req, res) {
  // urgers.all(function(data) {
  //     var burgersObject = {
  //       orders: data
  //     };
  //     res.render("index", burgersObject);
  //   });
  // });

  // app.get("/burgers", function(req, res) {
  //   burgers.all(function(data) {
  //     var burgersObject = {
  //       orders: data
  //     };
  //     res.render("index", burgersObject);
  //   });
  // });


//   // Add New Burger Order
// app.post('/burgers', (req, res) => {   
//    burgers.create(req.body.burger_name, function(result) {
//     // Send back the ID of the new quote
//     console.log("Burger Added!")
//     res.send('ok')
//   });
// })

 

//  // Update
//    app.put('/burgers/:id', (req, res) => {   
//     burgers.update(req.params.id, function(result) {     
//       console.log('Upated')
//       res.send('updated')
//      })
//      })


}
