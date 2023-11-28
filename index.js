const generate_btn= document.getElementById('generate-btn');
const copyHex = document.getElementById('copy-btn');
const copy_RGB = document.getElementById('copy-RGB');
const resetBtn = document.getElementById('resetBtn');
const color_Box = document.getElementById('color-box');
const colorCode = document.getElementById('colorCode'); 


let color_code = '';


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
    const hexColor = '';
    color_Box.style.backgroundColor = hexColor;
    colorCode.innerHTML = '';
}

function CopyHEX() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hexChars[Math.floor(Math.random() * 16)] 
        
    };
}

function RGB() {
    
}