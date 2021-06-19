const express = require ('express');
const mongoose = require('mongoose')
const passport = require('passport')
const authRoutes = require('./routes/auth');
const cors = require('cors');
const morgan = require('morgan');
const keys = require('./config/keys')
const app = express();

mongoose.connect(keys.mongoURI)
  .then(()=>{console.log("MB connected.")})
  .catch(error=>console.log(error))

app.use(passport.initialize())
  
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'));
app.use(cors())
app.use('/api/auth',authRoutes)

module.exports = app