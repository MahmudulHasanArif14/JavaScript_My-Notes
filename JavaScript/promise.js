
//promise one typo object in js

//created a var with name promise here new keyword using we created this promises object from Promise class and we pass one function where 2 handler available one is resolve if work done succesfully another  one is reject if there some error present we use it 
// let promise=new Promise((resolve,reject)=>{

//     console.log("this is a Promise");
//     // resolve(123);// resolve js promises dara auto create function jetat ja value dimu ta result o dekaybo and state fullfilled hoijibo

//     reject("some error paisi mara ka");// jodi reject oy tokon error dekaytam pari reject function diya ja auto js o create hooy and error tha dekaybo ja pass krmu value and state oibo rejected.
// });


//ekane amra promise create krsi but generally amra promise create kori nnay api thaki promise r value lloiya ai



// api re jodi req dey olan data amrare dey promise return kore
function getData(id){
    
    //call korar sate sate dibo promise status pending result aibar bade success dibo
    return new Promise((resolve,reject)=>{

        //akta promise return kore 
        setTimeout(()=>{
                //result jodi pailai te amra resolve lekidimu
               // resolve("success");//ja print oibo

            //jodi promise return kore na data dey na tokon reject aibo so do that we can write


            //console.log(id);
            reject("errorr");// akn promise state 8s por rejected hoijibo and return krbo error mesg jeta reject function r bitre leksi

            //ebave amra promise create kri


        },8000);



    });
}

// let finalVal=getData(123);// getdata pass korar bade promise return krbo pending bade 8sec por jokon data pailimu tokon logalog success dibo resolve disi kri exicuted hoibar bad dekay done


//! promise kilan use kore>?

const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("promise is now");
        // resolve("123");// dori fst e resolve kri pataylo 
        reject("404");// reject kri disi akn then function run oito nay kunudin
    });
}



// promise o resolve aile then function cholbo r reject aile catch func cholbo  

let promise=getPromise();

promise.then((res)=>{
    console.log(res);// amra resolve o ja disi ta ou res parameter o access krtm parmu
});


promise.catch((err)=>{
    console.log(err);// jodi reject o kicchu thake tokon eta run krb
});