/**
 
Create a function that calculate the number of goats in a given array, the true means the goat exist else the goat does not exist

Data : 
[true, true, true, true ,
true, false, true, false,
true, false, false, true ,
true, true, true, true ,
false, false, true, true]

Verify also if we have a null or undefined in a given array
 */

let thing = [true, true, true, true ,
    true, false, true, false,
    true, false, false, true ,
    true, true, true, true ,
    false, false, true, true,null,undefined]


function countExist(data){

     return data.filter((item) => {

        if(item !== undefined || item !== null){

            if(item === true ){

                return true;
            }
        }
         
     }).length
}



function countExistance(data){

       let result = data.reduce((a,c) => {

            return a+(c==true) 
       },0)

       console.log(result);
}


/**
 * Remove from the start and the begining 
 * 
 * Create a function that remove the first and the last character of 
 * a given string
 */


function removeFromStartAndBehind(str){

          return str.slice(1, -1)
}



/**
 * 
 * Double letters 
 * 
 * Create a function that take a string as an argument and return the double of each 
 * caracter of the string
 */

function doubleCharacter(str){

      let result = [...str];

      return result.map(caracter => {
            return caracter + caracter
      }).join('');

}

console.log(doubleCharacter('tijani abdellatif hello'));


/**
 * 
 * Remove duplicated numbers from an arary and sort it
 * 
 *  create a function that take an aray of numbers and remove duplication and sort it from descending
 */

/**
 * Solution 1 high complexity 
 */


let nums = [1, 2, 3, 4, 5,150,5,22,147,12,5,22,100,150];


function removeDuplicate(arr){
      return [...new Set(arr)].sort((a,b) => b-a);
}

function removeDuplicate2(arr){

       
      let unique = arr.filter((element,index) => {
          return arr.indexOf(element) === index
      })
      return unique.sort((a,b) => b-a)
}


function removeDuplicate3(arr){

      let unique =  [];

      for(let i = 0; i < arr.length; i++){

           if(unique.indexOf(arr[i]) === -1){

              unique.push(arr[i]);
           }
      }

      return unique.sort((a,b) => a - b);
}

console.log(removeDuplicate3(nums))


/**
 * 
 * @param {*} array 
 * @returns 
 * Bubble sort 
 * explanation 
 * compare two adjacent element 
 * and swap them until we found a leave condition 
 * it means we will not overide the current element but just make it in temporary 
 * state
 */
function bubbleSort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }

  console.log(bubbleSort(nums));