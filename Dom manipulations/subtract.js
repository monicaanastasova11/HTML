function subtract() {
    var firstNumeber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;

    var result = firstNumeber - secondNumber;
    document.getElementById('result').innerHTML=result;
}
