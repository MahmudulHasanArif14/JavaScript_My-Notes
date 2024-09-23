function sum(e,f){
    console.log(e+f);
}




function calculator(a,b,sumCallback){
    sumCallback(a,b);

}


// calculator(5,3,sum);//here sum is a callback 
//or we can dow like this


calculator(5,3,(a,b)=>{
    console.log(a+b); // arrow function diya o krtm pari
})