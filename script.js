const form = document.getElementById("calculadora");
const error = document.getElementById("error");
const aux1 = document.getElementById("aux1");
const aux2 = document.getElementById("aux2");
const aux3 = document.getElementById("aux3");
const aux4 = document.getElementById("aux4");
const aux5 = document.getElementById("aux5");
const aux6 = document.getElementById("aux6");
const boton = document.getElementById("boton");

function click() {
  const datos = document.getElementById("peso").value;
  if (datos > 0) {
    if (datos <= 30){
        error.style.display = "none";
        let solucion = calculo(datos);
        let mantenimiento = solucion / 24;
        aux1.innerHTML= (solucion).toFixed(3) + ' cc/dia'
        aux2.innerHTML = (mantenimiento).toFixed(3) + "  cc/hr";
        aux3.innerHTML = (mantenimiento * 1.5).toFixed(3) + "  cc/hr  " + "     m/m2";
        aux1.style.display = "block";
        aux2.style.display = "block";
        aux3.style.display = "block";
        aux4.style.display = "none";
        aux5.style.display = "none";
        aux6.style.display = "none";

    }else {
        error.style.display = "none";
        let solucion = calculo(datos);
        let mantenimiento = solucion*1500
        aux1.textContent='SC * 1500cc:  ' +(mantenimiento).toFixed(3) + "  cc/dia";
        //`SC * 1500cc:  ${(mantenimiento).toFixed(3)}  cc/dia`;
        aux2.textContent = (mantenimiento/24).toFixed(3) + "  cc/hr";
        aux3.textContent = ((mantenimiento/24) * 1.5).toFixed(3) + "  cc/hr  " + "     m/m2";
        mantenimiento = solucion*2000
        aux4.textContent ='SC * 2000cc:  ' +(mantenimiento).toFixed(3) + "  cc/dia ";
        aux5.textContent = (mantenimiento/24).toFixed(3) + "  cc/hr";
        aux6.textContent = ((mantenimiento/24) * 1.5).toFixed(3) + "  cc/hr  " + "     m/m2";
        aux1.style.display = "block";
        aux2.style.display = "block";
        aux3.style.display = "block";
        aux4.style.display = "block";
        aux5.style.display = "block";
        aux6.style.display = "block";

    }

  } else {
    error.style.display = "block";
    aux1.style.display = "none";
    aux2.style.display = "none";
    aux3.style.display = "none";
    aux4.style.display = "none";
    aux5.style.display = "none";
    aux6.style.display = "none";
  }
}
boton.addEventListener("click", click);

function calculo(peso) {
  let valorKG = peso;
  valorKG = parseInt(valorKG);
  console.log(typeof valorKG);
  if (valorKG <= 10) {
    aux = valorKG * 100;
  } else if (valorKG <= 20) {
    aux = 1000 + (valorKG - 10) * 50;
  } else if (valorKG > 20 && valorKG <= 30) {
    aux = 1500 + (valorKG - 20) * 20;
  } else {
    aux = (valorKG * 4 + 7) / (valorKG + 90);
    console.log(aux)
  }

  return aux;
}
