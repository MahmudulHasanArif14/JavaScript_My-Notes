// foreach loop is a method used for array and string 

// "abc".toLowerCase();// here toLowerCase() is a method which only works with string method works with a specific data type thats what the different between method and fucntion.function re object r loge associate kori dile etare koy method

//arrname.forEach(function name which is said to be a callBack Function) 
//IN js function can be pass as a parameter and we can return the value of any function as well.    


// function abc(){
//     console.log("A function");
// }

// function myFunc(abc){
//     return abc;// this is valid
// }

//a callback is a function passed as an argument to another function

let arr = [1, 2, 3, 4, 5, 6];

//forEach e ei val r number re pass krbo array er every element ak ak kori

arr.forEach(function printVal(val) { //value at each index val mean

    console.log(val);

})

//generally for each er bitorer function re arrow function akare leki amra


arr.forEach((value) => {

    console.log("Function Values Are: ", value);


});
//foreach use hoy every element indivudially access r lagin


//forEach er 3 ta parameter(value,index,arr) index will print ind, arr will print arr full not mandatory all parameter pass kora eta only array r upre kaj kore not for string


//!higer order function forEach holo higher order function/method kowa jay. Higher order function sei function je function onno akta function re parameter hisabe ney or onno function ke return kore value hisabe


//we can write in this format as well


let num=[12,13,15,16];


let calsquare=(val)=>{
    console.log(val*val);
}


num.forEach(calsquare);























