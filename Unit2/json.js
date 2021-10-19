const device = {
        sensorModel: "HC04",
        count: 0,
        date: new Date(),
};


console.log(device.date.getFullYear(), typeof device);

const deviceJSON =  JSON.stringify(device);
console.log(deviceJSON, typeof deviceJSON);
// Crear un JSON desde code//

const myJson =  '{"name": "Luis", "edad": 24, "friends": ["Rafa", "Angelo"], "isMannager": false}';
console.log(myJson, typeof myJson);

// Manipular JSON format.7
//Convertir un JSON a un objecto de JS;
const myObj =  JSON.parse(myJson);
console.log(myObj.name);