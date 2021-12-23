console.log("This is Calculator console.log");
const display = document.getElementById('display');
const button = document.querySelectorAll('button');

for (item of button) {
    item.addEventListener('click', (e) => {
        let inputVal = e.target.innerText;
        if (inputVal == 'X') {
            inputVal = '*';
            display.value += inputVal;
        }
        else if (inputVal == 'C') {
            display.value = '';
        }
        else if (inputVal == '=') {
            display.value = eval(display.value);
        }
        else {
            display.value += inputVal;
        }
    });
}