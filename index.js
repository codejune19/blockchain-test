
function toMultipy (a,b) {
    const multiFormula = a*b
    return multiFormula
}

function toDivide ( b, c) {
    const diviFormula= b/c
    return diviFormula.toFixed(2)
}

function onClickMultiply(){
    const firstNumber = document.
    getElementById("first").value

    const secondNumber = document.getElementById("second").value

    const result = document.getElementById('result')
    
    const output = toMultipy(firstNumber, secondNumber)

    result.innerText = output

}