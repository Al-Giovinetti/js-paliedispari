//Chiedere all’utente di inserire una parola

const userInput = prompt("inserisci una parola")

if(isThisPalindrome(userInput)){
    console.log("E' un palindromo")
}else{
    console.log("non è un palindromo")
}



function isThisPalindrome(wordFunction){
    let reverse = ""

    for( let i=wordFunction.length; i>=0; i--){
        reverse = reverse + wordFunction.charAt(i)
        console.log(reverse)   
    }

    if (wordFunction == reverse){
        return true
    }else{
        return false
    }
}