//EX 1
function createArrayWirhSteps(a, b , step){
    let result = [a];
    for(let i = 1; result[i-1] + step <= b; i++){
        result.push(result[i - 1] + step)
    }
    return result
}
//EX 2
function getOccurenceofSymbol(str, symbol){
    let occurence = 0;
    if(str.includes(symbol)){
        for(let i = 0; i < str.length; i++){
            if(str[i] === symbol){
                occurence++;
            }
        }
    }
    return occurence;
}
//EX 3
function isPalindrome(str){
    if(!str){
        return 'No';
    }
    for(let i = 0; i <= Math.floor(str.length / 2); i++){
        if(str[i] !== str[str.length - i - 1]) {
            return 'No';
        }
    }
    return 'Yes';
    
}
//EX 4
function findMaximum(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}
//EX 5
function productOfTwoNeighbors(arr){
    let result = [];
    for(let i = 1; i < arr.length; i++){
        result.push(arr[i - 1] * arr[i])
    }
    return result;
}
//EX 6 
function replace(str, firstSymb, newSymb){
    let result = '';
    for(let i = 0; i < str.length; i++){
        str[i] === firstSymb ? result += newSymb : result+= str[i]
    }
    return result;
}
//EX.7
function pattern(n){
    let result = 1;
    console.log(result);
    for(let i = 1; i < n; i++){
        result = result * 10 + (i + 1)
        console.log(result)
    }
    for(let j = n; j > 1; j--){
        result = Math.trunc(result/10)
        console.log(result);
    }
}
