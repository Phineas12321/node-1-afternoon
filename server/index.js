const express = require('express')
const products = require('../products.json')
const getProducts = require('./getProducts')
const getProduct =require('./getProduct')

let app = express()

const port = 3000

app.get('/api/products', getProducts)

app.get('/api/product/:id', getProduct)

app.listen(3000, ()=>{console.log('server running on 3000')})