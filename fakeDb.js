const express = require("express")




global.items = [
    {name : "chips" , price:3.99},
    {name : "coca cola" , price:1.99}
]

global.inventory = [
    {name : "watermelon" , price:5.99},
    {name : "hersheys" , price:1.99},
    {name : "cake" , price:4.99},
    {name : "comb" , price:.99}
]


module.exports = {items , inventory}