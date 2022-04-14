const { response } = require('express');
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan'); 

const server = express(); 

server.use(express.json())
server.use(helmet())
server.use(morgan('dev'))

// function f(a,b){
//     return new Promise((resolve, reject) => {
//         if(a + b === 7 ){
//             reject('we dont like seven')
//         }
//         setTimeout(() => resolve(a + b), 1000); 
//     }); 
// }

server.get('/', async (req,res, next) => {
    // try{
    //     let result = await f(4,3)
    //     res.status(200).json(result) 
    // } catch(err){
    //     res.status(500).json(err)
    // }
    
    // .then(result => {
        
    // })
    // .catch(err => {
    //     res.status(500).json(err)
    // })
    res.json({MESSAGE: process.env.MESSAGE})
    // res.send('hello world')
})




module.exports = server