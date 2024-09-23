// akta object re r ek object o access kora oilo prototype 

const employee={
    calTax(){
        console.log("There tax is 10%");
    },
};


//akn jodi ei employee object r function re ami onno object o access kortam chai tokon ami prototype banaymu like this


const newEmployee={
    salary:5000,
}

//to create prototype use where we wanna connect the prototype newEmployee.__prototype__=employee


newEmployee.__prototype__=employee;//now we can access calTax function in newEmployee function


const arr={
    calTax(){
        console.log("There tax is 20%");//although caltax already define but if we call it we will get this value 20% tax coz its priority is most 
    },
}

arr.__prototype__=employee;
