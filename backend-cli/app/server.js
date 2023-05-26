const express=require('express')
const app=express()
//const sequelize=require('./database/dbConfig')
//const routes=require('./routes/routes')
const {connection} = require('./database/db');
const PORT=process.env.PORT  ||  3000


//app.use(express.urlencolded({extended:true}))
app.use(express.json())
//app.use('/prueba-tecnica',routes)




app.get('/',(req,res)=>{
	
	res.send("hola mundo");
 
	})


app.listen(PORT,()=>{
	
console.log(`Corriendo puerto en http//:localhost:${PORT}`)
   connection.sync({ force: false }).then(() => {
        console.log("Nos hemos conectado a la base de datos");
    }).catch(error => {
        console.log('Se ha producido un error', error);
    })
 

})