/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {

    const functionObject={
        value:init,
        increment:function (){
        
            return this.value+=1;
        },
        decrement: function (){
            return this.value-=1;
        },
        reset:function(){
            this.value= init;
            return this.value;
        }
    }
    
    
    
    

    return functionObject ;
}
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
const counter = createCounter(5);
console.log(counter.reset());