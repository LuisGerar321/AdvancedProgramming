function passPrimitive(name) { 
        name = 'Jerry';
}
let person = 'Tom';
passPrimitive(person);
console.log(`Hi, my name is ${person}.`);

function passObject(settings) { 
        settings.on = true;
}let conf = { device: 'microwave', on: false };
passObject(conf);
console.log(conf);