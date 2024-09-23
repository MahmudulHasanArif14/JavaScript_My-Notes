//suppose akta database thaki amrar data fetch kori ana lagbo jetar time lage 2s fetch krte to amra akta function lektam pari ino jate 2s pore e function run kore  so do that


function getData(id){
    setTimeout(()=>{
        console.log("After 2s Data is",id);
    },2000);
}

// eita paililam 2s e data 

//! akn ami date olan caier jetat data1 aibo 2s pore then data2 aibo 4s pore bade date3 aibo 6s pore olan korte oile kita krmu jodi cinta kri function aktar por r ekta call korle aibo but elan oito nay example


function dat(d){
    setTimeout(()=>{
        console.log(d);
    },2000)
}

// dat(2);//2s
// dat(3);//2s
// dat(4);//2s

//sobgula kintu 2s e aicce to ei khetre kita koron jay tokon amra use krmu callback 



function info(inf,nextinf){

    setTimeout(()=>{
        console.log(inf);
        if(nextinf){
           nextinf();
        }

    },2000);
}


info(2,()=>{ // ei arrow function immediate run oito nay 2s pore run oibol
    info(3,()=>{
        info(4,()=>{
            info(5);// elan akta callback r bitore r akta callback create korte korte ak somoy eta buja tough oi jay jar lagin jokon tough hoi jay bujte tokon etare kowa oy callback hell 
        });
    });
});// nextinf data pass krte direct ei function re info(4)diya data pass kora jaibo na coz callback o function elan pass kora jay na tai amra use krmu arrow function jar bitre call dimu function re IF i wanna get another data after more 2s then same as well i have to pass on callback the function.