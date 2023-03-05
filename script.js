//1. Do the below programs in anonymous function & IIFE 

//a. Print odd numbers in an array
// Solution: 1 (Anonymous Function):
var arr=[1,2,3,4,5,6,7,8,9];
var res=[];
var odd=function(arr){
for (var i=0; i<arr.length; i++){
if (arr[i]%2!=0){
  res.push(arr[i]);
}
}
return res;
}
console.log(odd(arr));

// Solution: 2 (IIFE Function):
var res=[];
(function(arr){
for (var i=0; i<arr.length; i++){
if (arr[i]%2!=0){
  res.push(arr[i]);
}
}
console.log(res);
}) ([1,2,3,4,5,6,7,8,9]);

// *****************************************************

//b. Convert all the strings to title caps in a string array
// Solution: 1 (Anonymous Function):
var string="india is our country"
var titlecase=function(string){
  var sentence = string.toLowerCase().split(" ");
  for(var i = 0; i< sentence.length; i++){
     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }

return sentence.join(" ");
}
console.log(titlecase(string));
 
// Solution: 2 (IIFE Function):
(function(string) {
  var sentence = string.toLowerCase().split(" ");
  for(var i = 0; i< sentence.length; i++){
     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
console.log(sentence.join(" "));
})("india is our country");

// *****************************************************
//c. Sum of all numbers in an array
// Solution: 1 (Anonymous Function):
var arr=[1,2,3,4];
var sum=0;
var summation=function(arr){
for (var i=0; i<arr.length; i++){
sum=sum+arr[i]
}
return sum;
}
console.log(summation(arr));

// Solution: 2 (IIFE Function):
var sum=0;
(function(arr){
for (var i=0; i<arr.length; i++){
sum=sum+arr[i];
}
console.log(sum);
}) ([1,2,3,4]);

// *****************************************************
//d. Return all the prime numbers in an array
// Solution: 1 (Anonymous Function):
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];
var isPrime=function(num) {
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);

// Solution: 2 (IIFE Function):
const result1 = []; 

(function(nums) {
  
  function isPrime(num) {
    if (num < 2) return false;

    for (let k = 2; k < num; k++){
      if (num % k == 0){
        return false;
      }
    }
    return true;
  }

  
  nums.forEach(function (element) {
    const item = isPrime(element);
    if (item) {
      result1.push(element);
    }
  })

})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); 

console.log(result1); 

// *******************************************************
//e. Return all the palindromes in an array 
// Solution: 1 (Anonymous Function):
const array = ['mom', 'dad', 'abcde', 'racecar', 'momom', 'sister', 'radar'];

let namePalindrome=function(arrar) {
  return array.filter((curr, idx, arr) => {
    const splitArr = curr.split('');
    const reversedString = splitArr.reduceRight((prev, curr) => ( prev + curr ), '');
    if (curr === reversedString) return curr;
  })
}
console.log(namePalindrome(array));


// Solution: 2 (IIFE Function):
const palindromes = (function(palin) {
  return palin.filter((curr, idx, arr) => {
    const splitArr = curr.split('');
    const reversedString = splitArr.reduceRight((prev, curr) => ( prev + curr ), '');
    return curr === reversedString;
  });
})(['mom', 'dad', 'abcde', 'racecar', 'momom', 'sister', 'radar']);

console.log(palindromes);

// *******************************************************
//f. Return median of two sorted arrays of the same size. 
// Solution: 1 (Anonymous Function):
var array11= [12,13,14];
var array12=[15,16,17];
var Median= function(a,b){
var res=[...array11, ...array12]
var i=res.length/2;
var j=i-1;
var median = res[i]+res[j]*(1/2);
return median;
}

console.log(Median(array11, array12));

// Solution: 2 (IIFE Function):

(function(a,b){
  var res=[...a, ...b]
  var i=res.length/2;
  var j=i-1;
  var median = res[i]+res[j]*(1/2);
  console.log(median);
  }) ([12,13,14],[15,16,17]);

// *******************************************************
// g. Remove duplicates from an array
// Solution: 1 (Anonymous Function):
var arr = ["apple", "mango", "apple", 
            "orange", "mango", "mango"];
      
    function removeDuplicates(arr) {
        return arr.filter((item, 
            index) => arr.indexOf(item) === index);
    }
      
    console.log(removeDuplicates(arr));
// Solution: 2 (IIFE Function):
     
   const dups= (function(arr) {
        return arr.filter((item, 
            index) => arr.indexOf(item) === index);

    })(["apple", "mango", "apple", 
    "orange", "mango", "mango"])
      
    console.log(dups);

   
  // *******************************************************

// h. Rotate an array by k times
// Solution: 1 (Anonymous Function):
var a = [1,2,3,4,5];
var d = 3
var rotLeft = function (a, d) {
    const removed = a.splice(0,d);
    return [...a, ...removed];
}
console.log(rotLeft(a,d));

// Solution: 2 (IIFE Function):

(function rotLeft(a, d) {
  const removed = a.splice(0,d);
  console.log([...a, ...removed]);
})([1,2,3,4,5], 3);
  // *******************************************************
  // ARROW FUNCTION Programs
 // a. Print odd numbers in an array in arrow function
 const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = arr3.filter((num) => num % 2 !== 0);
console.log(oddNumbers);
  // *******************************************************
  //b. Convert all the strings to title caps in a string array 
  const stringArray1 = ["hello world", "this is a test", "javascript is awesome"];

  const titleCapsArray = stringArray1.map((str) => {
    return str.split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  });
  
  console.log(titleCapsArray);
    // *******************************************************
  //c. Sum of all numbers in an array 
  const numArray = [1, 2, 3, 4, 5];

  const sum1 = numArray.reduce((total, num) => {
    return total + num;
  }, 0);
  
  console.log(sum1);
      // *******************************************************
  //d. Return all the prime numbers in an array 
  const numerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const is_Prime = (num) => {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return num !== 1;
}

const primeNumbers = numerArray.filter(isPrime);

console.log(primeNumbers);
    // *******************************************************
// e. Return all the palindromes in an array 
    const stringArray = ["hello", "world", "racecar", "level", "test"];

const isPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

const palindromeArray = stringArray.filter(isPalindrome);

console.log(palindromeArray);
  // *******************************************************




