let a;
let b;
let operatorY;
let resultado;
function numberAdd(number){
    var visor = document.getElementById('visor');
    var numberClick = visor.innerHTML;
    let maxdigits = 13
    visor.innerHTML = ''
    if(visor.innerHTML.length >= maxdigits){
        alert('numero excedido')
        return
    }
        let numberY = numberClick === '0' ? number.toString() : numberClick + number;
        visor.innerHTML = numberY
        a = numberY
}

function operatorAdd(operator){
    operatorY = operator
    var visor = document.getElementById('visor');
    visor.innerHTML = ''
    b = a
    a = undefined
}
function equal(){
    if(a != undefined){
        if(operatorY === '-'){
            resultado = (b - a)
        }else if(operatorY === "*"){
            resultado = (b * a)
        }else if(operatorY === "+"){
            resultado = parseInt(a) + parseInt(b)
        }else if(operatorY === "/"){
            if(b % a === 0){
                resultado = (b / a)
            }else{
                resultado = (b / a).toFixed(2)
            }
        } 
        var visor = document.getElementById('visor');
        visor.innerHTML = (resultado)
        return ((a = resultado)(b = undefined));
    }else{
        return
    }
}
function deleteNumber(){
    var visor = document.getElementById('visor');
    var numberInt = (visor.innerHTML).split('');
    let length = numberInt.length
    numberInt.splice((length - 1), 1);
    let newNumber = numberInt.join('');
    visor.innerHTML = newNumber;
    a = newNumber
}
function decimalsAdd(){
    if(a.includes(".")){
    }else{
        a += '.'
    }
    var visor = document.getElementById('visor');
    visor.innerHTML = a
}



