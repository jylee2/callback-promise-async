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
// Now fix it with a Promise
const printStringPromise = (string) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log(string);
                resolve();
            }, 
            Math.floor(Math.random() * 100) + 1
        );
    });
};
// Now print the letters A, B, C in order
const printAllPromise = () => {
    printStringPromise("A")
    .then( () => {
        return printStringPromise("B");
    })
    .then( () => {
        return printStringPromise("C");
    })
};
// Now it will always print in order
console.log(`printAllPromise()`);
printAllPromise();