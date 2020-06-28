// Name: Hamna Kazmi
// Roll No: WM3857

function getNum(num) {
    var res = document.getElementById("res");
    if (res.value == null || res.value == 0)
        res.value = num;
    else
        res.value += num;
}

function sqRoot() {
    res.value = Math.sqrt(res.value);
}

function expo() {
    res.value = Math.exp(res.value);
}

function evalResult() {
    var res = document.getElementById("res");
    res.value = eval(res.value);
}

function sq() {
    var res = document.getElementById("res");
    res.value = res.value * res.value;
}

function signChange() {
    var res = document.getElementById("res");
    if (res.value.slice(0, 1) == "-") {
        res.value = res.value.replace("-", "");
    }
    else {
        res.value = "-" + res.value;
    }
}

function DivByOne() {
    var res = document.getElementById("res");
        res.value = 1/res.value;
}

function del() {
    var res = document.getElementById("res");
    var a = res.value;
    res.value = a.slice(0, -1);
}
