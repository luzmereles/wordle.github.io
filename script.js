let intentos = 6;
let diccionario = ['APPLE', 'GREEN', 'PIZZA', 'PISTA'];
Math.floor(Math.random() * 10) + 1;
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
const INPUT = document.getElementById("guess-input");
const valor = INPUT.value;

const BOTON=document.getElementById("guess-button")
BOTON.style.color = "black";
BOTON.addEventListener("click", intentar)

function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!😀</h1>")
        return
    }
    for (let i in palabra){
        if (INTENTO[i]===palabra[i]){
            console.log(INTENTO[i], "VERDE")
        } else if( palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "AMARILLO")
        } else {
            console.log(INTENTO[i], "GRIS")
        }
    }
		intentos--
    if (intentos==0){
        terminar("<h1>PERDISTE!😖</h1>")
        
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ 
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
        } else if( palabra.includes(INTENTO[i]) ) { 
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';
        } else {      
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}
