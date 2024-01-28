//Unknown type

function multiByTwo(number: unknown){
    if (typeof number === "number"){
        return number * 2;
    }
    
return "Plz provide a valid number"
}
console.log(multiByTwo(number : 4));
console.log(multiByTwo(number :"DATA"));
 
