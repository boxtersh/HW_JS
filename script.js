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

let square = document.getElementById('square');
square.addEventListener('mouseover', (event) => {
    let heading = document.getElementById('heading');
    heading.textContent = 'Наведено';
});

square.addEventListener('mouseout', (event) => {
    let heading = document.getElementById('heading');
    heading.textContent = '';
});

let btn = document.getElementById('btnTask5');
let img = document.getElementById('imgTask5');
btn.addEventListener('click', (event) => {
    attributeImg = img.getAttribute("src");
    value = attributeImg=="/image/img_1.png"? "/image/img_2.png":"/image/img_1.png";
    img.setAttribute("src", value);
});

let input = document.getElementById('inputTask6');
let btnTask6 = document.getElementById('btnTask6');
let ul = document.getElementById('ulTask6');
btnTask6.addEventListener('click', () => {
    let value = input.value.trim();
    if (value) {
    let li = document.createElement('li');
    li.textContent = value;
    ul.append(li);
    input.value = '';
    }
    else {alert('Вы не создали заметку');}
});

let inputTask7 = document.getElementById('inputTask7');
let btnTask7 = document.getElementById('btnTask7');
btnTask7.addEventListener('click', () => {
    inputTask7.after(document.createElement('input'));
    inputTask7.after(document.createElement('br'));
    inputTask7.after(document.createElement('br'));
});

let btnTask8 = document.getElementById('btnTask8');
let olTask8 = document.querySelector('#btnTask8+ol');
btnTask8.addEventListener('click', () => {
    if (olTask8.lastElementChild) {
    olTask8.lastElementChild.remove();
    }
    btnTask8.disabled = !olTask8.lastElementChild;
});

let listLi = document.querySelectorAll('#ulTask9 li');
listLi.forEach(elm => {
    elm.addEventListener('click', function() {
    this.remove();
    });
});
