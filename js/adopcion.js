let emergente=0;
let formulario=0;



function ventanaEmergente() {
    let ventana=document.getElementById("ventana_emergente");
    emergente++;

    if(emergente%2!=0){
        ventana.style.transform="translateX(0%)";
    }
    else{
        ventana.style.transform="translateX(100%)";
    }
}


function formulario_movimiento() {
    let formulario_parte2=document.getElementById("segunda_parte");
    formulario++;

    if(formulario%2!=0){
        document.getElementById("primera_foto").style.opacity="0";
        document.getElementById("segunda_foto").style.transform="translateX(0%)";
        document.getElementById("segunda_foto").style.opacity="1";
        document.getElementById("primera_parte").style.opacity="0";
        formulario_parte2.style.transform="translateX(0%)";
        formulario_parte2.style.opacity="1";
    }
    else{
        document.getElementById("segunda_foto").style.opacity="0";
        document.getElementById("segunda_foto").style.transform="translateX(-150%)";
        document.getElementById("primera_parte").style.opacity="1";
        formulario_parte2.style.transform="translateX(150%)";
        formulario_parte2.style.opacity="0";
        document.getElementById("primera_foto").style.opacity="1";
    }
}