const express =require('express');
const mongoose=require('mongoose');


const app=express();

//Bodyparser Middleware
app.use(express.json());

//DB Config
const db=require('./config/keys').mongoURI;

//Connect to Mongo
//Promise Base
mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true },()=>console.log('connected to Db'))

//Use Routes
app.use('/api/items',require('./routes/api/items'));
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));


const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server started on port ${port} `));
