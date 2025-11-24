const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn= document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'


plusBtn.onclick = function() {
 action = '+'
}

minusBtn.onclick = function() {
    action = '-'
}
 
function PrintResult(result){ //смена цвета результата 
     if(result < 0 ) {
        resultElement.style.color = "red"
        resultElement.style.borderColor = "red"
    } else {
        resultElement.style.color = "green"
        resultElement.style.borderColor = "green"
    }
    resultElement.textContent = result
}
 
submitBtn.onclick = function() {
        if(action == '+') {
    const sum =  Number(input1.value)  + Number(input2.value)
    PrintResult(sum)

    resultElement.textContent = sum
    } else if(action == '-'){
    const sum =  Number(input1.value)  - Number(input2.value)
    PrintResult(sum)
}

} 

