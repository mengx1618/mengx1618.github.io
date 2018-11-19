function loader() {
    const getNamesButton = document.getElementById("getNames");
    const FunctionButton = document.getElementById("getFunctionObject");

    getNamesButton.onclick = function() {
        const Name = myObject.getName();
        const getNamesDiaply = document.getElementById("getNamesDisplay");
        getNamesDiaply.textContent = name;

        const FullName = myObject.getFullName();
        const getFullNameDisplay = document.getElementById("getFullNameDisplay");
        getFullNameDisplay.textContent = FullName;
    }

    const FunctionObject = new FunctionObject();
    console.log(FunctionObject.getFullName());

}
window.onload = loader;

const myObject = {
    firstName: 'Xue',
    lastName: "Meng",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
}

function FunctionObject() {
    const firstName = "Xue";
    const lastName = "Meng";

    const getName = () => {
        return "Function Object";
    }

    FunctionObject.prototype.getFullName = () => {
        return this.firstName + " " + this.lastName;
    }
}


console.log(myObject.firstName);
console.log(myObject["firstName"]);
console.log(myObject.getName());
console.log(myObject.getFullName);