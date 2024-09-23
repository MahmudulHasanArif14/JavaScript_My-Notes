//variable can be declare by let,const,var

let alrt=document.querySelector(".alert");
let edit=document.querySelector(".edit");
let text=document.querySelector(".text");
alrt.addEventListener("click",al);
edit.addEventListener("click",ed);

function al(){

    alert("Hey this is alert");

}

function ed(){

let name=prompt("Enter your data");//this will take input from user 

text.innerHTML="Your name is: "+name;

}





//for in loop

//creating object.
let animal={
   name:"Animal",
   age:20,
   color:"red"
};



//let key mane object r key means value gula dorbo

for (let key in animal) {
    console.log(key)//sob variable name gula show krbo 
    console.log(animal[key])//sob variable value show krbo ekane .notation use krte partam na
}

//for in loop in arrays

let ar=["arif","karine","jamel","rahim"];


for (let index in ar) {

    console.log(index);
    console.log(ar[index]);


}



//for of loop


for (let randomname of ar){

    console.log(ar);

}


let num=2;
//template literal
console.log(`template literal using console ${num}`);


let nam="arif";

console.log(nam.indexOf("i"));



//creating object

let subjec={
    name:"math",
    no:3
};

console.log(subjec.name);//math r value dekar lagin use korsi

console.log(subjec["no"]);//no r value using []



//object

let course={
    lecture:10,
    title:"Js",

//! nested object

    notes:{
        name:"book"
    },

  //!: r ager etare koy property object r 

   //object r bitre function use krle etare koy method
    enroll(){

        console.log("enroll");
    }
}

course.enroll()
console.log(course.title)

//object r bahire theke data add krte

course.new=333;





//factory function for object



function createcourse(){

 return {
    lecture:10,
    title:"Js",
    //nested object
    notes:{
        name:"book"
    },
    //: r ager etare koy property object r 

    //object r bitre function use krle etare koy method
    enroll(){

        console.log("enroll");
    }
}
}

document.write("Hello")
