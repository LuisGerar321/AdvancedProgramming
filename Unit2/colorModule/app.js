// I want to creae a .txt file
const fs = require("fs");
const chalk = require("chalk");


const initialMessage =  chalk.blue("App running...");

console.log( initialMessage );



//Crear un archivo en la base de datos local!
fs.writeFileSync("./db/dataInfomation.txt", "Server Information");
console.log( chalk.green("dataInfomation was created successfully!") );

