
function crearTarjetas(){
    let valor1 = recuperarFloat("textDesde");
    let valor2 = recuperarFloat("textHasta");
    let valor3 = recuperarFloat("textSalto");
;    let contenido ="";
    let divarjetas = document.getElementById("divTarjetas");
    for(let i = valor1; i<=valor2; i+=valor3){
        contenido = contenido + "<div class='item'>" + i + "</div>";
        console.log(contenido);
        divarjetas.innerHTML = contenido;
    }
    
}







 
