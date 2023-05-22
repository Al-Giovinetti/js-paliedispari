//Chiedere all’utente di inserire una parola per sapere se è un palindromo oppure no

const userInput = prompt("inserisci una parola")

if(isThisPalindrome(userInput)){
    console.log("E' un palindromo")
}else{
    console.log("non è un palindromo")
}


/**Lets you know if a word is a palindrim
 * 
 * @param wordA word entered by user
 * @returns if it's a palindrome it's true else it's folse
 */
function isThisPalindrome(wordA){
    let reverse = ""

    for( let i=wordA.length; i>=0; i--){
        reverse = reverse + wordFunction.charAt(i)
        console.log(reverse)   
    }

    if (wordA == reverse){
        return true
    }else{
        return false
    }
}