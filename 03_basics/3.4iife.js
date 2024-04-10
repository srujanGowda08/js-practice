// Immediately Invoked Function Expression (IIFE)


(function chai (){
    console.log('DB connected');
})(); //semicolon is required to invoke the function immediately

((name)=>{
    console.log(`DB CONNECTED two ${name}`);
})("srujan")
