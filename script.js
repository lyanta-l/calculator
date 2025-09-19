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