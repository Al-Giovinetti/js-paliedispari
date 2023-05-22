//Ex Palindromo con funzione collegata

const textPali = document.getElementById("pali-text");
const btnVerify1 = document.querySelector("button");
const outputPali = document.querySelector ("p.output1");

btnVerify1.addEventListener("click",function(){
    if(isThisPalindrome(textPali.value)){
        outputPali.innerHTML=("è un palindromo");
    }else{
        outputPali.innerHTML=("non è un palindromo");
    }
    textPali.value="";
}
)

//Ex pari o Dispari con funzione collegata

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userInputNumber = prompt ("Dammi un numero da 1 a 5")
const userInputChoice = prompt ("pari o dispari")
console.log("hai scelto" + userInputNumber)
// Il Computer randomizza un numero da 1 a 5
const botRandomNumber = getRandomNumber()
    console.log("Numero bot = " + botRandomNumber)

// Usiamo la funzione per sapere se abbiamo vinto

let thisRandomSum = getRandomSum(userInputNumber,userInputChoice,botRandomNumber)
console.log(thisRandomSum)




// FUNCTION//

/**Lets you know if a word is a palindrome
 * 
 * @param wordA word entered by user
 * @returns if it's a palindrome it's true else it's folse
 */
function isThisPalindrome(wordA){
    let reverse = ""

    for( let i=wordA.length; i>=0; i--){
        reverse = reverse + wordA.charAt(i)
        console.log(reverse)   
    }

    if (wordA == reverse){
        return true
    }else{
        return false
    }
}

/** From back a random Number between 1 / 5
 * 
 * @returns  random Number 1/ 5
 */
function getRandomNumber(){
    let randomNumber= Math.floor((Math.random()* (5-1+1)+1))
    return randomNumber
}

/**Sum two values and give the result specifying even or odd 
 * 
 * @param userNumber choose a number from 1 to 5 
 * @param userChoice choose even or odd
 * @param botNumber random number by bot 
 */
function getRandomSum(userNumber,userChoice,botNumber){
    let randomSum = parseInt(botNumber) + parseInt(userNumber)
    console.log(randomSum)
    if((randomSum % 2 == 0 ) && (userChoice==="pari")){
        console.log(userChoice)
        return "hai vinto"
    }else if((randomSum % 2 != 0) && (userChoice==="dispari")){
        console.log(userChoice )
        return "hai vinto"
    }else{
        return "hai perso"
    }
}