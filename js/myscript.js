//Chiedere all’utente di inserire una parola

const userInput = prompt("inserisci una parola")



function isThisPalindrome(wordFunction){

    for( let i=wordFunction.length; i=0; i--){
        let reverse = ""
        reverse = reverse + wordFunction.charAt(i)   
    }

    if (wordFunction == reverse){
        return true
    }else{
        return false
    }
}