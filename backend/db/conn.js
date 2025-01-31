const mongoose = require("mongoose")

require("dotenv").config

mongoose.set("strictQuery", true)

async function main (){
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.brkoe.mongodb.net/`);

    console.log("Conectado com Sucesso!")
}

main().catch((err) => console.log(err));

module.exports = main;