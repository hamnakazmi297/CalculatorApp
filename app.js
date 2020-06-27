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

function evalResult(){
    var res = document.getElementById("res");
    res.value = eval(res.value);
}


function del(res){
    var res = document.getElementById("res");
    res.value = res.slice(0,-1);
}
