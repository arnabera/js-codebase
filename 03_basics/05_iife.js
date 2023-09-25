// Immediately Invocked Function Expression (IIFE) ==> used to avoid the polution of global scope 

//(expression)(excution)

(function greeting(){
    //this is example of named iife
    console.log(`Hi Arnab!!! Goodmornig....`);
})();

(()=>{
    console.log(`Hi Arnab !!!! have a good day`)
})();

// Note : To run two consicutive iife there must rneed a ";" for before the secof iife

((name)=>{
    console.log(`Hi ${name} !!!! have a good day`)
})("Arnab") // This is the way to pass arguments in iffe