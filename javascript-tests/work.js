function divider(title) {
    console.log("====================================");
    console.log(title);
    console.log("====================================");
}

divider("Person");

var person = {
    firstName:"Xue",
    lastName:"Meng",

    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
};

console.log(person.firstName);
console.log(person.lastName);
console.log("====================================");
console.log(person.fullName());

divider("Calculator");

var calculator = {
    operand01: person.firstName.length,
    operand02: person.lastName.length,

    add: function(){
        return (this.operand01 + this.operand02);
    },

    subtract: function(){
        return (this.operand01 - this.operand02);
    },

    multiply: function(){
        return (this.operand01 * this.operand02);
    },

}


console.log("====================================");
console.log("operand01 = " + calculator.operand01);
console.log("operand02 = " + calculator.operand02);
console.log("Add: " + calculator.add());
console.log("Subtract: " + calculator.subtract());
console.log("Multiply: " + calculator.multiply());

