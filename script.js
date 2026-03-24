function outputInputField() {
  let textInputEl = document.getElementById('input_1');
  let textInput = textInputEl.value;
  res = textInput == '' ? 'Вы ничего не ввели!' : textInput
  textInputEl.value = '';
  alert(res);
}

function replaceText(btn) {
    let textInputEl = document.getElementById('input_2');
    textInput = textInputEl.value;
    textInputEl.value = '';
    res = textInput == '' ? 'Замени на текст из поля' : textInput
    btn.textContent = res;
}
function replaceTextColorRed() {
    let elemOl = document.getElementById('ol')
    elemOl.style.color = 'red';
}
function replaceTextColorGreen() {
    let elemOl = document.getElementById('ol')
    elemOl.style.color = 'green';
}

function squareNumber() {
    let input_3 = document.getElementById('input_3');
    input_3_text = input_3.value;
    input_3.value = '';
    res = isNaN(Number(input_3_text)) || Number(input_3_text)=='' ? 'В поле не число':input_3_text**2
    alert(res);
}

function replaceInput() {
let buff;
let input_4 = document.getElementById('input_4');
let input_5 = document.getElementById('input_5');
buff = input_5.value;
input_5.value = input_4.value;
input_4.value = buff;

}
function btn_6() {
    document.getElementById('input_6').disabled = false;
    document.getElementById('input_7').disabled = true;
}

function btn_7() {
    document.getElementById('input_6').disabled = true;
    document.getElementById('input_7').disabled = false;
}

