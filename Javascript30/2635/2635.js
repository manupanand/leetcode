/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let inputArray=arr;
    let temp=[];
    
    for(let i=0;i<inputArray.length;i++){
         temp.push(fn(inputArray[i],i));
    }
    
    let newArray=temp
    return newArray;
};
// function plusOne(n){
//     n=n+1;
//     return n;
// }
// function plusI(n,i){
//     n=n+i;
//     return n;
// }
// let arr=[1,2,3];
// const mapArray=map(arr,plusOne);
// console.log(mapArray)
// const mapArray2=map(arr,plusI);
// console.log(mapArray2)