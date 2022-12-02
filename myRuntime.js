// 1) Sum Zero 

 function sumZero(array){
    for(let i = 0; i < array.length; i++){
        for(let j = array.length -1; j >= 0; j--){
            if (array[i] + array[j] == 0){
                return true
            } else {
                return false
            }
        }
    }
 }

 // Runtime guess: 1ms
 // runtime results: 66.5 μs

// 2) Unique Characters

function uniqueCharacters(word){
    result = null;
    for(let i = 0; i < word.length; i++){
        for(let j = i + 1; j < word.length; j++){
            if (word[i] == word[j]){
                result = 'duplicates found'
            } else {
                result = 'unique'
            }
        }
    }
    return result
}


// Runtime guess: 1ms
// Runtime results:48.6 μs

// 3) Pangram Sentence

function pangramSentence(sentence){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newAlphabet = alphabet.split('');
    
    let result = null;
    for(let i = 0; i < newAlphabet.length; i++){
        if(sentence.includes(newAlphabet[i])){
            result = 'true'
        } else {
            result = 'false'
        }
    }
    return result
}

// Runtime guess?: 10ms
// Runtime results:47.2 μs

// 4) Longest Word

function find_longest_word(array){
    let result = null
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i].length > array[j].length){
                result = array[i]
            } else {
                result = array[j]
            }
        }
    }
    return result
}

// Runtime guess: 2ms
// Runtime results 76.7 μs

const perf = require('execution-time')();

perf.start();                     // Starts timer
sumZero([1, 2, -2, 3]);
let sumZeroResults = perf.stop();  // Stops timer and save time results

perf.start();                     // Starts timer
uniqueCharacters('hello');
let uniqueResults = perf.stop();  // Stops timer and save time results

perf.start();                     // Starts timer
pangramSentence('the quick brown fox jumps over the lazy dog');
let pangramResults = perf.stop();  // Stops timer and save time results

perf.start();                     // Starts timer
find_longest_word(['dog', 'tree', 'supermonkey', 'monkey']);
let longestWordResults = perf.stop();  // Stops timer and save time results


