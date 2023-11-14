let papa = document.getElementById("santa");
let titulo = document.querySelector(".titulo");
let iniciar = document.querySelector(".iniciar");
let detener = document.querySelector(".detener");


let Sonido = new Audio('./sound/allWant.mp3');



function obtenerTiempoFaltante(fechaLimite){
    let ahora = new Date();

    let TiempoFaltante = (new Date(fechaLimite)-ahora + 1000) / 1000;//para adelantarlo 1 segund ya que en el proceso va a ver un retrsao

//conversiones 

    let segundosFaltantes = ('0' + Math.floor(TiempoFaltante % 60)).slice(-2);

    let minutosFaltantes = ('0' + Math.floor(TiempoFaltante / 60 % 60)).slice(-2);

    let horasFaltantes = ('0' + Math.floor(TiempoFaltante / 3600 % 60)).slice(-2);
    
    let diasFaltantes = ('0' + Math.floor(TiempoFaltante / (3600 * 24))).slice(-2);

    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        TiempoFaltante,

    }
};

//console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00 GMT-0500'));

function cuentaRegreiva(TiempoFaltante,reloj,mensaje) {
    const e = document.getElementById(reloj);

    const tiempoActual = setInterval( () => {
        let t = obtenerTiempoFaltante(TiempoFaltante);
        

        e.innerHTML = `
            <div class="tiempo">${t.diasFaltantes}</div>
            <div class="tiempo"> ${t.horasFaltantes}</div>
            <div class="tiempo">${t.minutosFaltantes}</div>
            <div class="tiempo">${t.segundosFaltantes}</div>`;
        
        if(t.TiempoFaltante < 1){
            clearInterval(tiempoActual)
            e.innerHTML = `
            <div class="tiempo">00</div>
            <div class="tiempo">00</div>
            <div class="tiempo">00</div>
            <div class="tiempo">00</div>`;  
            
            iniciar.addEventListener('click', ()=>{
                Sonido.play()
            });

            detener.addEventListener('click', ()=>{
                Sonido.pause()
            });


            if( mensaje == "!Feliz navidad¡"){
                Sonido.play(); 
                papa.classList.add("on"); 
                titulo.innerHTML = mensaje  
                
            }
            
        }
    }, 1000)

};




cuentaRegreiva('Nov 14 2023 12:09:00 GMT-0500', 'cuentaRegresiva', '!Feliz navidad¡');

