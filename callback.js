//  Function that will print a string after a random amount of time
function printString(string){
    setTimeout(
        () => {
            console.log(string);
        }, 
        Math.floor(Math.random() * 100) + 1
    );
};

// print the letters A, B, C
function printAll(){
    printString("A");
    printString("B");
    printString("C");
};
// A, B, and C print in a different and random order each time you call printAll!
// console.log(`printAll()`);
// printAll();

// ====================
// Now fix it with a callback
const printStringCallback = (string, callback) => {
    setTimeout(
        () => {
            console.log(string);
            callback();
        }, 
        Math.floor(Math.random() * 100) + 1
    );
};
const printCallback = () => {
    printStringCallback("A", () => {
        printStringCallback("B", () => {
            printStringCallback("C", () => {
            })
        })
    })
};
// Now it will always print in order
console.log(`printCallback()`);
printCallback();