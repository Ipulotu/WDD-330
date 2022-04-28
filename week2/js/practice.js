

/* Eloquent JavaScript Chapter 2   */ 

//Looping a triangle
let line = "#";
for(i= 0; i <7; i++ ){
    console.log(line)
    line +="#"
}

//FizzBuzz
for (i = 0; i<=100; i++){
    if (i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i)
    }
}


/* Eloquent JavaScript Chapter 3   */ 

//Minimum
function min(num1, num2){
    if(num1<num2){
        return num1
    }
    else{
        return num2
    }
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//Recursion
function isEven(number){
    if (number > 0){
        return isEven(-number)
    }
    else if(number % 2 == 0)
        return true
    else return false
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false


/* Eloquent JavaScript Chapter 4   */ 

//The sum of a range
function range(start, end, change = 1){
    let array = []
    if (change<0){
        for(i = start; i>=end; i +=change)
    array.push(i);
    }
    else{
        for(i = start; i<=end; i +=change){
            array.push(i);
        }
    }
    return array;
}

function sum(array){
    let total = 0
    array.forEach(number =>{
    total += number;
    })
    return total
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


//Deep comparison 
function arrayToList(array) {
    let list = null;
    for (i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  
  function listToArray(list) {
    let array = [];
    for (item = list; item; item = item.rest) {
        array.push(item.value);
      }
    return array;
  }
  
  function prepend(value, list) {
    return {value, rest: list};
  }
  
  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20