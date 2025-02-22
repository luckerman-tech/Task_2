let parent = document.getElementById('parent');
let inp = document.getElementById('input');
let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let umnozh = document.getElementById('umnozh');
let delen = document.getElementById('delen');
let eq = document.getElementById('eq');
let ac = document.getElementById('clear');
let back = document.getElementById('back');
let hist = document.getElementById('hist');
let block = document.getElementById('block');
let close = document.getElementById('close');
zero.addEventListener('click', function () {
    buttonClicked(zero);
});
one.addEventListener('click', function () {
    buttonClicked(one);
});
two.addEventListener('click', function () {
    buttonClicked(two);
});
three.addEventListener('click', function () {
    buttonClicked(three);
});
four.addEventListener('click', function () {
    buttonClicked(four);
});
five.addEventListener('click', function () {
    buttonClicked(five);
});
six.addEventListener('click', function () {
    buttonClicked(six);
});
seven.addEventListener('click', function () {
    buttonClicked(seven);
});
eight.addEventListener('click', function () {
    buttonClicked(eight);
});
nine.addEventListener('click', function () {
    buttonClicked(nine);
});
plus.addEventListener('click', function () {
    buttonClicked(plus);
});
minus.addEventListener('click', function () {
    buttonClicked(minus);
});
umnozh.addEventListener('click', function () {
    buttonClicked(umnozh);
});
delen.addEventListener('click', function () {
    buttonClicked(delen);
});
eq.addEventListener('click', function () {
    buttonClicked(eq);
});
ac.addEventListener('click', function () {
    buttonClicked(ac);
});
back.addEventListener('click', function () {
    buttonClicked(back);
});
hist.addEventListener('click', function () {
    buttonClicked(hist);
});
close.addEventListener('click', function () {
    block.style.display = 'none';
    parent.style.display = 'flex';
});
function addOutput(text) {
    if (inp.value.length < 30) {
        inp.value += text;
    };
};
function addHistory(expression) {
    let action = document.createElement('div');
    action.style.fontSize = 'larger';
    action.innerText = expression;
    block.append(action);
};
let flag = false;
let notzero = false;
let doublezero = false;
let doubleeq = false;
function buttonClicked(button) {
    if (button != eq) {
        doubleeq = false;
    };
    let lastChar = inp.value.slice(-1);
    if (button == minus) {
        if (flag == true) {
            inp.value = '';
            flag = false;
        };
        if (lastChar != '-') {
            addOutput(button.innerText);
            notzero = false;
            doublezero = false;
        };
    }
    else if ((button == plus || button == umnozh || button == delen)) {
        if (lastChar != '' && lastChar != '+' && lastChar != '-' && lastChar != '*' && lastChar != '/' && flag == false) {
            addOutput(button.innerText);
            notzero = false;
            doublezero = false;
        };
    }
    else if (button == eq) {
        if (lastChar != '+' && lastChar != '-' && lastChar != '*' && lastChar != '/' && doubleeq == false) {
            let prev = inp.value;
            if (inp.value.includes('/0')) {
                inp.value = 'Ошибка!';
                addHistory(prev + ' = ' + inp.value);
            }
            else {
                let res = eval(inp.value);
                res = Math.round(res*1000000)/1000000;
                inp.value = res;
                addHistory(prev + ' = ' + res);
            };
            doubleeq = true;
            flag = true;
            notzero = false;
            doublezero = false;
        };
    }
    else if (button == ac) {
        inp.value = '';
        flag = false;
        notzero = false;
        doublezero = false;
    }
    else if (button == back) {
        if (lastChar == '0' && notzero == false && doublezero == true) {
            doublezero = false;
        };
        if (flag == false) {
            inp.value = inp.value.slice(0, -1);
            if (inp.value.slice(-1) == '0' && notzero == false && doublezero == false) {
                doublezero = true;
            };
            if (inp.value.slice(-1) == '' || inp.value.slice(-1) == '+' || inp.value.slice(-1) == '-' || inp.value.slice(-1) == '*' || inp.value.slice(-1) == '/') {
                notzero = false;
            };
        };
    }
    else if (button == hist) {
        block.style.display = 'block';
        parent.style.display = 'none';
    }
    else if (button == zero) {
        if (flag == true) {
            inp.value = '';
            flag = false;
        };
        if (notzero == true || doublezero == false) {
            addOutput(button.innerText);
            doublezero = true;
        };
    }
    else {
        if (flag == true) {
            inp.value = '';
            flag = false;
        };
        if (notzero == false && doublezero == true) {
            inp.value = inp.value.slice(0, -1);
            doublezero = false;
        };
        addOutput(button.innerText);
        notzero = true;
    };
};