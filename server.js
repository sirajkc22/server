
const cors = require( 'cors')
const express =require('express')
const app = express()

app.use(cors())
const port =3002


const flats =[
    {
        title: 'House for Sale',
        price:'RS500000'
        
    },
 { 
    title: 'House for Rent',
        price:'RS100000'
 }, 
 { 
    title: 'land for Sale',
        price:'RS1000000',
 }, 
 { 
    title: 'land for rent',
        price:'RS10000',
 }  
]
const elec=[
    {
        name:'Iphone 13 Pro Max',
        price:'Rs 13000000'
    },
    {
        name:'Del Inspiron 1500 series',
        price:'Rs 90,0000'
    },
    {
        name:'LG 4K TV',
        price:'Rs 15000000'
    },
]
const dress=[
    {
        name:'Mens Jeans',
        price:'Rs 1300'
    },
    {
        name:'Dress',
        price:'Rs 5000'
    },
    {
        name:'Nike-Airforce',
        price:'Rs 5000'
    },
    {
        name:'Jacket',
        price:'Rs 3000'
    },
    {
        name:'T-shirt',
        price:'Rs 500'
    },
    {
        name:'Hoodie',
        price:'Rs 4000'
    },
]
const ball=[
    {
        name:'Basketball',
        price:'Rs 3300'
    },
    {
        name:'Cricket Bat',
        price:'Rs 5000'
    },
    {
        name:'Dumbell',
        price:'Rs 6000'
    },
    {
        name:'Mountain Bike',
        price:'Rs 30000'
    },
    {
        name:'Batmintan Bat',
        price:'Rs 1000'
    },
    {
        name:'Football boot',
        price:'Rs 4000'
    },
]
app.get('/',(req,res)=>{
   res.send('welcome') 
})
app.post('/',(req,res)=>{
    console.log('create body',req.body)
    res.send('welcome') 

 })
app.get('/flats',(req,res)=>{
    res.send(flats) 
 })
 app.get('/elec',(req,res)=>{
    res.send(elec) 
 })
 app.get('/dress',(req,res)=>{
    res.send(dress) 
 })
 app.get('/ball',(req,res)=>{
    res.send(ball) 
 })
app.listen(port,()=>{
    console.log('yor api is listining')
}) 
