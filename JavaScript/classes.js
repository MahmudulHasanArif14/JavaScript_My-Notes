//classes are template for creating similar typo object 


class ToyotaCar{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }



    setBrand(brand){
        this.brandName=brand;
        //! etay korbo jokon toyotaCar classuse kori kunu object create kora oibo tokon oi object o jodi ei function call kori tokon ei function oi object o brandName e new variable auto create kori value jeta argument o pass krmu seta ono dibo.
    }



}


//by using this class we can add this class properties and method to other object to create new object like this

let fortune=new ToyotaCar();

fortune.setBrand("fortuner");

// alert(fortune.brandName);



let Audi=new ToyotaCar();

Audi.setBrand("audi");

// alert(Audi.brandName);




//new class create korram constructor r lagin


//! Consturctor oilo class r modde akta special typo function jokon amra class use kori object create krmu auto constructor oi object r lagin hoijay create r e constructor function auto run kore i mean call na dilew jebla object create kormu loga log ou constructor function o jeta ace eta run krbo output aibo er lagin eta special function


class PremioCar{


    constructor(brandName){
        console.log("Created A Premio Car Object using this class brandName",brandName);
    }


    
    // ei constructor auto run oibo call na korlew

    setBrand(brandName){
        this.brand=brandName;
    }
}


let newCar=new PremioCar("lexus");

newCar.setBrand("lexus");

// console.log("brand=",newCar.brand);
























