//1)extractValue
//Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.
  
//Had to look at solution

function extractValue(arr, key){
    return arr.reduce(function(accm, next){
    accm.push(next[key]);
    return accm;
    }, []);
}

//2)vowelCount
//Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

//Had to look at solution

function vowelCount(str){
    const vowels = "aeiou";
    return str.split('').reduce(function(accm,next){
        let lowerCased = next.toLowerCase()
        if(vowels.indexOf(lowerCased) !== -1){
            if(accm[lowerCased]){
                accm[lowerCased]++;
            } else {
                accm[lowerCased] = 1;
            }
        }
        return accm;
    }, {});
}



//3)addKeyAndValue
//Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

//Had to look at solution

function addKeyAndValue(arr, key, value){
return arr.reduce(function(accm, next, idx){
accm[idx] [key] = value;
return accm;
},arr)
}

//4)partition
//Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray.

//Had to look at solution

function isEven(val){
    return val % 2 === 0;
  }

function partition(arr, callback){
    return arr.reduce(function(accm,next){
        if(callback(next)){
            accm[0].push(next);
        } else {
            accm[1].push(next);
        }
        return accm;
    }, [[],[]]);
}
