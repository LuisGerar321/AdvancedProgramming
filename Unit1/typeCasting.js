var myInt = 24;
var myFloat = 3.1416;
var  myString = "24.5";
var myNull = null;


//TypeCasting:  explicit  using Global Function!
console.log(typeof myFloat);
myFloat = String(myFloat)
console.log(typeof myFloat);

myString = Number(myString);
console.log(myString);



//Falsy Value!
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(myNull));
console.log(Boolean(false));

//True Values//
console.log(Boolean("Luis"));
console.log(Boolean(5));
console.log(Boolean({key:"5"}));
console.log(Boolean( [] ));

console.log(typeof myNull);

console.log( isNaN(  Number("5x")  )   );

// TypeCasting Expli Methods


console.log( Number.parseInt(myString) );
console.log( Number.parseFloat(myString) );

// TypeCasting Coersion implicit:

var result = "hola " + "mundo";
var resultNumbersStringAdd  =  2 +  "22";
var resultNumbersStringRemainder  =  2 - "22";
console.log( resultNumbersStringRemainder);

