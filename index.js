const generate_btn= document.getElementById('generate-btn');
const copyHex = document.getElementById('copy-btn');
const copy_RGB = document.getElementById('copy-RGB');
const resetBtn = document.getElementById('resetBtn');
const color_Box = document.getElementById('color-box');
const colorCode = document.getElementById('colorCode'); 





function GenerateBtn() {
    const hexChars = "0123456789ABCDEF";
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hexChars[Math.floor(Math.random() * 16)] 
        
    };

    // displaying the colors in the color box
    color_Box.style.background = hexColor

    // displaying the colour code
    colorCode.innerHTML = hexColor

    colorCode.style.color = hexColor



}

function ResetBtn() {
    // const hexColor = '';
    color_Box.style.backgroundColor = '';
    colorCode.innerHTML = '';
}

function CopyHEX() {
    // Get the text content of the colorCode element
    let copyHexCode = colorCode.innerHTML;


    // Create a temporary input element
    const input = document.createElement('input');
    input.value = copyHexCode;


    // Append the input element to the body
    document.body.appendChild(input);


    // Select the text in the input element
    input.select();


     // Copy the selected text to the clipboard
    document.execCommand('copy');


    
    // Remove the temporary input element
    document.body.removeChild(input);

    alert('Hex code copied to clipboard' + copyHexCode)
}

function RGB() {
    
}