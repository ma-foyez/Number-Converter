const binary1 = document.getElementById('binary');
const octal = document.getElementById('octal');
const hexa = document.getElementById('hexa');
const convert = document.getElementById('convert');

function binary(e){
    e.preventDefault();

    const number = document.getElementById('number').value;

    if(number === ''){
        alert('Please Enter a Number');
    }else if(number < 0){
        alert('Please Enter a Positive Number');
    }else{
        binary1.style.visibility = 'visible';
        octal.style.visibility = 'visible';
        hexa.style.visibility = 'visible';
    }

    //Converting into Binary
    binaryNumber = Number(number).toString(2);
    binary1.innerText = binaryNumber;

    //converting into octal
    octalNumber = Number(number).toString(8);
    octal.innerText = octalNumber;

    //converting into hexa-decimal
    hexaDecimal = Number(number).toString(16);
    hexa.innerText = hexaDecimal;
    
}
convert.addEventListener('click', binary);