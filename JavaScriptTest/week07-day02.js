function ShowMessage(message)
{
    console.log("========================");
    console.log("== " + message);
    console.log("==========================");
}

ShowMessage("Operation test")

let result = 1 + 2 * 3;

console.log(result);


ShowMessage("for loop");


for (let i = 0; i < 7; i ++)
{
    console.log(i);
}

ShowMessage("while loops");

let looper = 10;

while (looper < 15)
{
    console.log(looper++);
}

ShowMessage("do-while loop");

do {
    console.log(looper++);
} while (looper < 15);