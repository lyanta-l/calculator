const add = function (last, next) {
    last = +last;
    next = +next;
    return last + next;
}

const subtract = function (last, next) {
    last = +last;
    next = +next;
    return last - next;
}

const multiply = function (last, next) {
    last = +last;
    next = +next;
    return last * next;
}

const divide = function (last, next) {
    last = +last;
    next = +next;
    return last / next;
}

const operate = function (operator, last, next) {
    switch (operator) {
        case "add":
            return add(last, next);
        case "subtract":
            return subtract(last, next);
        case "multiply":
            return multiply(last, next);
        case "divide":
            return divide(last, next);
        default:
            console.log("somthing wrong");
    }
}

let last = '';
let display = '';
let operator = '';
let shouldResetDisplay = false;

const displayScreen = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (shouldResetDisplay) {//如果进行了运算在点击数字先清空
            display = '';
            shouldResetDisplay = false;
        }
        display += button.textContent;//存储输入的数字在display里并显示
        displayScreen.textContent = display;
    })
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.id);
        if (operator !== '') {
            equalButton.click(); // 直接触发等号的点击事件来完成运算！
        }
        last = display;
        operator = button.id;
        shouldResetDisplay = true;
    });
});

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => {
    if (last === '' || operator === '') return;
    if(shouldResetDisplay) return;
    let next = display;
    last = operate(operator, last, next);
    displayScreen.textContent = last;
    display = last;
    operator = '';

    shouldResetDisplay = true;
});

const percentButton = document.querySelector("#percent");
percentButton.addEventListener("click",()=>{
    if(display != ''){
        +display;
        display /=100;
        display.toString();
        displayScreen.textContent = display;
    }
})

const clearButton = document.querySelector(".ac");
clearButton.addEventListener("click",()=>{
    display = '';
    displayScreen.textContent = '0';
    last = '';
    operator = '';
})