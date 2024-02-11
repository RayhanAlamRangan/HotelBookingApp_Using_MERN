




const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
dotenv.config();
const mongoose=require('mongoose');

const app=express();
const UserRoutes=require('./src/Routes/Users');
const AuthRoutes=require('./src/Routes/Auth')

mongoose.connect(process.env.MONGO_URI).then(()=>{

    console.log('Database Connection Successfully')
}).catch((error)=>{


    console.log(error);
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.get('/api/Users', UserRoutes);
app.get('/api/Auth', AuthRoutes);

app.listen(7000,()=>{

    console.log('Server Running On 7000')
})
