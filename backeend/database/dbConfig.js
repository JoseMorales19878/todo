const {Sequelize}=require('sequelize')
const {database}=require('./config')


const sequelize = new Sequelize(
    database.database, 
	database.username,
	database.password,
	{
       host:database.host,
       dialect: 'mysql'
	}

)

sequelize.sync({ force: false }).then(() => {
        console.log("Nos hemos conectado a la base de datos");
    }).catch(error => {
        console.log('Se ha producido un error', error);
    })

module.exports=sequelize