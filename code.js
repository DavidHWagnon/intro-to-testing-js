// helloWorld function 
function helloWorld(input) {
    if(input === true){
        return "Hello, World!"
    }
    else{
        return "Hello, " + input + "!";
    }

}
function isFive(input){
    if(parseFloat(input)==5){
        return true;
    }
    else{
        return false;
    }
}

function isEven(input){
    if(typeof input == 'boolean'){
        return false;
    }
    if(input%2 === 0){
        return true;
    }
    else {
        return false;
    }
}

function isVowel(input){
    if(typeof input == 'number'){
        return false;
    }
    if(input == undefined){
        return false;
    }
    if(input.toString().toLowerCase() === "a"||input.toString().toLowerCase() === "e"||input.toString().toLowerCase() === "i"||input.toString().toLowerCase() === "o"||input.toString().toLowerCase() === "u"){
        return true;
    }
    else{
        return false;
    }
}
function add(input, put){
    if(Number.isNaN(input)&&Number.isNaN(put)){
        return NaN;
    }
    else{
        return parseFloat(input)+parseFloat(put);
    }
}
//addOne
//function addOne(input){
//     return input + 1;
// }