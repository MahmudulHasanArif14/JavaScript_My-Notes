function myNew() {
    console.log("This is a function");
}
myNew();// function invoke or calling 

function sum(a, b) {
    console.log(a + b);
}

sum(2, 5);


function mult(a, b) {
    console.log("before return");
    return a * b;
    // return r pore akane kichu lekle kam krto nay output aito nay

    console.log("after return");
}

let res = mult(5, 2);
console.log(res);


// arrow function function lekar compact style like choto kore lekar typo

// arrow function akta var e store kora lage const diya then const varname=(parameter)=>{ do something}
const arrowfunSum=(a,b)=>{
    return a+b;
};
//part of modern js
console.log(arrowfunSum(3,5));


