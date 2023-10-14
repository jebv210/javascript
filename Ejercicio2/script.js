function calcularTiempo(){
    //trae la hora local del sistema (la hora que aparezca)

    let tiempo = new Date();

    //hace que el tiempo se convierta en horas minutos y segundos
    let hora = tiempo.getHours();
    let minutos = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();

    //debe ser aqui para que funcione y es para poner el cero extra en el lado izquierdo
    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    let pantallaRelog = hora + ":" + minutos + ":" + segundos;
    let relogDigital = document.querySelector(".Reloj");
    relogDigital.innerHTML = pantallaRelog;

}

setInterval(calcularTiempo, 1000);