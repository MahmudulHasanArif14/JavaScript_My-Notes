//argument is a obj in js which can be access inside of the function it will print all the argument that we havepass in the function


function sum(a, b) {

    return a + b;
}


console.log(sum(1, 2));// etat jodi amra next call e user 2 r besi argument pass delay tokon to sob argument jaito nay so e ketre argument object lagbo amrar


function sub(a, b) {

    let substraction=arguments[0];
    for(let i=1;i<arguments.length;i++){
     substraction=substraction-arguments[i]; 
    }
    return substraction;

}

console.log(sub(7,5,1,1));