/*Complete the solution so that it returns true if the first argument(string) passed in 
ends with the 2nd argument (also a string).
Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
solution('abcdca', 'dca') // returns false */

console.log("Hola mundo")

function compareString(string1, string2)
{
    let result = false
    let actualPosition = 0
    let index = 0
    let stringExtracted = string1.slice(index, string2.length)
    console.log(stringExtracted)
    if(stringExtracted.localeCompare(string2) == 0){
        result = true 
        console.log(result)
        return result
        
    }
    else{
        if (index == string1.length - string2.length){
            console.log(result)
            return result
        }
        else{
            index =+ 1
            let newString = string1.slice(index, string1.length) 
            compareString(newString, string2)
        }
        
    }
    
    
}
compareString("roger", "op")


function split(str, index){
    let result = [str.slice(0,index), str.slice(index)]
    return result
}

console.log(split("abcd", 2))
//console.log(split(2))