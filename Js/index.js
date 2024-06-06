let inputOne=document.getElementById("num1")
let inputTwo=document.getElementById("num2")
let inputResultado=document.getElementById("Resultad")

function sumaDosNumeros(){
    let suma=parseInt(inputOne.value)+parseInt(inputTwo.value)
    inputResultado.value=suma
}

function restaDosNumeros(){
    let resta=parseInt(inputOne.value)-parseInt(inputTwo.value)
    inputResultado.value=resta  
}

function multiplicacionDosNumeros(){
    let multiplicacion=parseInt(inputOne.value)*parseInt(inputTwo.value)
    inputResultado.value=multiplicacion  
}

function divisionDosNumeros(){
    let division=parseInt(inputOne.value)/parseInt(inputTwo.value)
    inputResultado.value=division    
}