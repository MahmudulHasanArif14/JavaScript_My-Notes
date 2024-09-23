
for(let i=1;i<=5;i++){
    console.log(`Hello, World! ${i}`);
}



//for of loop use hoy strings ar arrays r upre to iterate 

let str="Arif";

for(let char of str){
    console.log(char);
}



// for iterate in object and arrays ar lagin we use for in loop

//for in loop

let obj = {name: "Arif", age: 22, city: "Dhaka"};

for(let key in obj){
    console.log(key, obj[key]);
}
