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