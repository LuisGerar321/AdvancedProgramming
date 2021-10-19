const student = {
        name: "Pedro",
        age: 19,
        greeting: function(menssage) {
                console.log(`this is equal: ${JSON.stringify(this)}`);
                console.log(`${menssage} soy ${this.name} y tengo ${this.age}`);
        },
};

const cpyStudent = {...student};
cpyStudent.name = "Fernando";
console.log(student);
console.log(cpyStudent);