//Global Scope
var myVar = 100;
let myLet = undefined;
const myConst = 3.1416;


console.log(`myVar: ${myVar}, myLet: ${myLet}, myConst: ${myConst}, hoistedVariable: ${hoistedVariable}`);
//Hoisting

var hoistedVariable = 25; // Var Hoisted

//Local Scope!
function aFunctionBlock(){
        if (true) { //Execution Context
                console.log(myVar);
                var myVar =  50;
                console.log(myVar);
        };
};
aFunctionBlock();


