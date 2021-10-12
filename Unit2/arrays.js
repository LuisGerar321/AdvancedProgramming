//Create an Array

var myArray =  [1,2,3,4,5]; 
// var myArray2 = new Array(1,2,3);
//Longitud de arrys
const ln = myArray.length;
console.log(ln);


//Show Array;

console.log(myArray);

//Iterate Arrays

for(let i = 0; i<ln; i++){
        console.log(myArray[i]);
};
console.log("---");
for(let i in myArray){
        console.log(myArray[i]);
};
console.log("---");
for(let i of myArray){
        console.log(i);
}

//******Adding elements;
let data = [];
console.log(data);
const temp = 27;
data.push(temp);
data.push(12);
data.push(60);

//Insert first element
data.unshift(12);
console.log(data);
// insert multiple data
data.splice(2,0, 3,4);
console.log(data);






