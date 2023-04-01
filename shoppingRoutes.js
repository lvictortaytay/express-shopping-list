const express = require("express")
const routes = new express.Router()
const {items , inventory}  = require("./fakeDb")







routes.get("/" , function(req, resp){
    resp.send("this is the home page")
})

routes.get("/items" , function(req, resp){
    resp.json({items})
})



routes.get("/items/:name" , function(req, resp){
    const item = items.find(u => u.name === req.params.name)
    resp.json({item})
})


routes.patch("/items/:name" , function(req, resp){
    const item = items.find(u => u.name === req.params.name)
    item.name = "new one"
    resp.json({updated:{item}})
})


routes.delete("/items/:name" , function(req, resp){
    const item = items.find(u => u.name === req.params.name)
    items.splice(item , 1)
    resp.json({message:"deleted"})
})





routes.post("/items" , function(req, resp){
    let name = req.query.name
    let price = +req.query.price
    const newItem = {name : name , price : price}
    items.push(newItem)
    resp.status(201).json({newItem})
})







module.exports = routes