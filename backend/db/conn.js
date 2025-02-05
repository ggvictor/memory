const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

main().catch((err) => console.log(err));

async function main (){
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.6wafq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

    console.log("Conectado com Sucesso!")
}

main().catch((err) => console.log(err));

module.exports = main;