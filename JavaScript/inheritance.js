// inheritance means inherit values from parents that mean when we want to access one class properties to another class to inherit we use extends keyword

class parent{

    start(){
        console.log("this is a parent");
    }
}


//here the child class will have the method and properties of parent classes 
class child extends parent{
}

let inhobj=new child();

inhobj.start();// although we didn't define any  method known as function in the child class but as it inherit properties from parents so we can get the start() function from here.



class parent1 {

    constructor(name){
        console.log("Hello");
        this.name=name;
        console.log(name);
    }

}



class child1 extends parent1{

    //if i want to use the constructor of child1 or wanna call the constructor i have to use super keyword so it call the parent1 constructor otherwise itwill through a error


    constructor(name){
        super(name);
        // if i wanna pass this name argument to the parent i have to pass this argument in the super function then the parent will have this value
        console.log("i am the constructor of child1 and i will not run without super keyword");
       
        
    }

    eat(){
        console.log("he is eating");
    }


}

let ar=new child1("rahim");
