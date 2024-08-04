// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //is semocolan ka boht mahatva hai yaha

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// when we want imidiat execution of a function and reduce globle scope pollution then we use it