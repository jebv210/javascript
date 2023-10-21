const deg = 6;

const horas = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');

setInterval(() =>{
    let tiempo = new Date();

    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    horas.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`

    
})

function calcularTiempo(){
    //trae la hora local del sistema (la hora que aparezca)

    let tiempo = new Date();

    //hace que el tiempo se convierta en horas minutos y segundos
    let hora = tiempo.getHours();
    let minutos = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();

    //debe ser aqui para que funcione y es para poner el cero extra en el lado izquierdo
    
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    if (hora > 12 ){
        hora = hora - 12;
        hora = hora < 10 ? "0" + hora : hora;
        let pantallaRelog = hora + ":" + minutos + ":" + segundos +" PM";
        let relogDigital = document.querySelector(".Reloj_digital");
        relogDigital.innerHTML = pantallaRelog;
    } else {
        hora = hora < 10 ? "0" + hora : hora;
        let pantallaRelog = hora + ":" + minutos + ":" + segundos  + " AM";
        let relogDigital = document.querySelector(".Reloj_digital");
        relogDigital.innerHTML = pantallaRelog;
    }

}

setInterval(calcularTiempo, 1000);