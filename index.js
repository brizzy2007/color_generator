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
    const colorText = color_Box.style.backgroundColor;
  const hexCode = rgbToHex(colorText);
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = hexCode;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert(`Color copied to clipboard: ${hexCode}`)
   
}
 function rgbToHex(rgbColor) {
     const regex = /rgb\((\d+), (\d+), (\d+)\)/;
     const matches = regex.exec(rgbColor);
     const r = parseInt(matches[1]);
     const g = parseInt(matches[2]);
     const b = parseInt(matches[3]);
     return "#" + componentToHex(r) + componentToHex(g) +componentToHex(b);
 }

 function componentToHex(c) {
     const hex = c.toString(16);
     return hex.length == 1 ? "0" + hex : hex;
 }
function RGB() {
    const colorText = color_Box.style.backgroundColor;
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = colorText;
    tempInput.select();
    document.execCommand('copy')
    document.body.removeChild(tempInput);
    alert(`Color copied to clipboard: ${colorText}`)
}