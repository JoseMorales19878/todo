const express=require('express')
const app=express()
const sequelize=require('./database/dbConfig')
const routes=require('./routes/routes')

//app.use(express.urlencolded({extended:true}))
app.use(express.json())
app.use('/prueba-tecnica',routes)



const port=8000

app.get('/',(req,res)=>{
	
	res.send("hola mundo");
 
	})


app.listen(port,()=>{
	
console.log(`Corriendo puerto ${port}`)
sequelize
 

})