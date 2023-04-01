const express = require("express")
const route = require("./shoppingRoutes")
const app = express()


app.use("/" ,route)
















module.exports = app;