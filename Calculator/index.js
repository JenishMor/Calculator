console.log('This is js file of project 8');

let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let displayValue = '';

for (let item of buttons) {
    item.addEventListener('click', (e) => {
        buttonValue = e.target.innerText;
        // console.log('value of button is', buttonValue);

        if (buttonValue == 'C') {
            displayValue = "";
            display.value = displayValue;
        }
        else if (buttonValue == '=') {
            display.value = eval(displayValue);     //eval is js function which evaluate any term
        }
        else {
            displayValue += buttonValue;
            display.value = displayValue;
        }
    })
}

let swithBtn = document.getElementById('switch');
let btn = document.querySelectorAll('button');
let equal = document.getElementById('equal');
let cbtn = document.getElementById('cBtn');
for(let btns of btn){
    swithBtn.addEventListener('click', (e) => {
        if (swithBtn.checked == true) {
            // console.log('Checked');
            btns.style.backgroundColor = 'black';
            btns.style.color = 'white';
            equal.style.backgroundColor = 'rgb(194, 10, 194)';
            cbtn.style.backgroundColor = 'orange';
        }
        else {
            // console.log('unchecked');
            btns.style.backgroundColor = 'white';
            btns.style.color = 'black';
            equal.style.backgroundColor = 'rgb(194, 10, 194)';
            cbtn.style.backgroundColor = 'orange';
        }
    })
}

