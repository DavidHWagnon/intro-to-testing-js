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

    if(input == "a"||input=="A"||input == "e"||input=="i"||input=="o"||input=="u"){
        return true;
    }
    else{
        return false;
    }
}
//addOne
//function addOne(input){
//     return input + 1;
// }