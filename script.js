//Task1 
function isPrime(arr) {
    if (arr.length === 0) {
        console.log("Array is empty.");
        return false;
    }
    const num = arr[0];
    if (num < 2) {
        console.log("First element is not prime.");
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log("First element is not prime.");
            return false;
        }
    }
    console.log("First element of the array is " + num );
    console.log("First element " + num + " is prime");
    return true;
}
const array = [3, 25, 10, 22, 45]; 
isPrime(array); 

// Task 2

var array1 = [3,3,4,3,4,24,42,3,24,4,7,9,3];
var counts = {}; //count occurrence of item 
var compare = 0; //compare using stored value
var mostFrequent; //store most frequent item
(function(array){
    var len = array.length; 
   for(var i = 0; i< len; i++){
       var element = array[i];

       if(counts[element] === undefined){
           counts[element] = 1;
       }else{
           counts[element] = counts[element] + 1;
       }
       if(counts[element] > compare){
             compare = counts[element];
             mostFrequent = array1[i];
       }
    }
  console.log( "The most freequent element is " + mostFrequent);
})(array1);


//Task 3

for(let i=0; i <= 15; i++){
    if(i%2==0){
        console.log("The number "+ i + " is even");
    }
    else{
        console.log("The number "+ i + " is odd");
    }
}


//Task 4
function sumsqrt(num){
    let sum = 0;
    for(let i=0; i<num.length; i++){
        sum+= num[i] * num[i] ;
    }
    return sum;
}
let num =  [5,7,20,27,2,5,2];
const result = sumsqrt(num);
console.log("The sum of squares of the elements of an array is= " + result);