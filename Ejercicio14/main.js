const inputTarjeta = document.querySelector('#inputTarjeta');
const inputFecha = document.querySelector('#inputFecha');
const inputCVV = document.querySelector('#inputCVV');

const mascaraNumero = "####-####-####-####";
const mascaraFecha = "##/##";
const mascarCVV = "###";

let TarjetaNumero = [];
let FechaNumero = [];
let CvvNumero = [];

inputTarjeta.addEventListener('keydown', (e)=>{
    if(e.key === "Tap"){
        return;
    };
    e.preventDefault();
    ingresoDatos(mascaraNumero, e.key, TarjetaNumero)
    inputTarjeta.value = TarjetaNumero.join("")
});

inputFecha.addEventListener("keydown", (e)=>{
    if(e.key === "Tab"){
        return;
    };
    e.preventDefault();
    ingresoDatos(mascaraFecha, e.key, FechaNumero);
    inputFecha.value = FechaNumero.join("")
});

inputCVV.addEventListener("keydown", (e)=>{
    if(e.key === "Tab"){
        return;
    };
    e.preventDefault()
    ingresoDatos(mascarCVV, e.key, CvvNumero);
    inputCVV.value = CvvNumero.join("")
});

function ingresoDatos(mascara, key, arreglo){
    let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if(key == "Backspace" && arreglo.length > 0){
        arreglo.pop();
        return;
    }
    if(numeros.includes(key) && arreglo.length + 1 <= mascara.length){
        if(mascara[arreglo.length] === "-" || mascara[arreglo.length] === "/"){
            arreglo.push(mascara[arreglo.length], key)
        }else{
            arreglo.push(key)
        }
    }
}
