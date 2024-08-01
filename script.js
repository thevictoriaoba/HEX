
const hexadecimalNumberSystem = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

let button = document.getElementById("button")
let firstColorBox = document.getElementById("first-color-box")
let firstHexCode = document.getElementById("first-hex-code")


let secondColorBox = document.getElementById("second-color-box")
let secondHexCode = document.getElementById("second-hex-code")


let thirdColorBox = document.getElementById("third-color-box")
let thirdHexCode = document.getElementById("third-hex-code")

let fourthColorBox = document.getElementById("fourth-color-box")
let fourthHexCode = document.getElementById("fourth-hex-code")

let fifthColorBox = document.getElementById("fifth-color-box")
let fifthHexCode = document.getElementById("fifth-hex-code")

let sixthColorBox = document.getElementById("sixth-color-box")
let sixthHexCode = document.getElementById("sixth-hex-code")



function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * hexadecimalNumberSystem.length)
    return randomNumber
}


button.addEventListener("click", function(){
    
    let hexCodeForFirstBox = "#"
    
    for(let myFirstloop =0; myFirstloop < 6; myFirstloop++){
         hexCodeForFirstBox += hexadecimalNumberSystem[generateRandomNumber()]
        
    }

    firstColorBox.style.backgroundColor = hexCodeForFirstBox
    firstHexCode.textContent = hexCodeForFirstBox

 /* second box */


    let hexCodeForSecondBox = "#"
    for(let mySecondloop =0; mySecondloop < 6; mySecondloop++){
        hexCodeForSecondBox += hexadecimalNumberSystem[generateRandomNumber()]
       
   }

   secondColorBox.style.backgroundColor = hexCodeForSecondBox
   secondHexCode.textContent = hexCodeForSecondBox

   /* third box */

   let hexCodeForThirdBox = "#"

   for(let myThirdloop =0; myThirdloop < 6; myThirdloop++){
    hexCodeForThirdBox += hexadecimalNumberSystem[generateRandomNumber()]
   
}

thirdColorBox.style.backgroundColor = hexCodeForThirdBox
thirdHexCode.textContent = hexCodeForThirdBox

/* fourth box */

let hexCodeForFourthBox = "#"

   for(let myFourthloop =0; myFourthloop < 6; myFourthloop++){
    hexCodeForFourthBox += hexadecimalNumberSystem[generateRandomNumber()]
   
}

fourthColorBox.style.backgroundColor = hexCodeForFourthBox
fourthHexCode.textContent = hexCodeForFourthBox
 

/* fifth box */

let hexCodeForFifthBox = "#"

   for(let myFifthloop =0; myFifthloop < 6; myFifthloop++){
    hexCodeForFifthBox += hexadecimalNumberSystem[generateRandomNumber()]
   
}

fifthColorBox.style.backgroundColor = hexCodeForFifthBox
fifthHexCode.textContent = hexCodeForFifthBox


/* sixth box */


let hexCodeForSixthBox = "#"

   for(let mySixthloop =0; mySixthloop < 6; mySixthloop++){
    hexCodeForSixthBox += hexadecimalNumberSystem[generateRandomNumber()]
   
}

sixthColorBox.style.backgroundColor = hexCodeForSixthBox
sixthHexCode.textContent = hexCodeForSixthBox
})











function getRandomColor() {
    // Generate a random hexadecimal color
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function applyRandomColors() {
    // Get all elements with the class 'colorfulDiv'
    const divs = document.querySelectorAll('.colorfulDiv');
    divs.forEach(div => {
        const color = getRandomColor();
        div.style.backgroundColor = color;
        div.querySelector('span').textContent = color; // Set the color code as the text content
    });
}

// Apply random colors and codes when the page loads
window.onload = applyRandomColors;