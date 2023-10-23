let esqueleto = "off";
let esqueletoStop = document.getElementById("esqueletoquieto");
let botonSonido = new Audio('./sound/botonbailar.mp3');
let botonAudio = new Audio('./sound/audio.mp3');

function bailar(){
    if(esqueleto == "off") {
        esqueleto="on";
        esqueletoStop.classList.add("on");
        console.log("on");
        esqueletoStop.addEventListener('click', ()=>{
            botonAudio.play();
        })
        esqueletoStop.addEventListener('click', ()=>{
            botonSonido.play();
        })
    } else {
        esqueletoStop.classList.remove("on");
        esqueleto="off";

        esqueletoStop.addEventListener('click',()=>{
            botonAudio.pause();
        })
        console.log("off");
        
    }
}