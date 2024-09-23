// object is the collection of different values

const student={

    fullName:"Arif",
    age:12,
    roll:12,


};

console.log(student["age"]);//to access age 
console.log(student.age)// second way to access



let employee={

        name:"rahim",
        age:12,
        printAge:function(){
            console.log("Age =",this.age);// this function is called method and here this keyword means we are trying to access on this object age var or properties.
        }

};

