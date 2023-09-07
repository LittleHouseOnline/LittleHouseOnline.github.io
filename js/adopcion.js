let emergente=0;




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
