 document.addEventListener("DOMContentLoaded", () => {
  const calcular = document.getElementById("boton");

  calcular.addEventListener("click", () => {
    
    let longitud = document.getElementById("long").value;
    let ancho = document.getElementById("ancho").value;

    if((longitud >= 0 && longitud <=9) && (ancho >= 0 && ancho <=9) ){
    let area = 0;
    let perimetro = 0;
    let diagonal = 0;
        area = parseFloat(longitud) * parseFloat(ancho);
        perimetro = parseFloat(longitud*2)+(ancho*2);
        diagonal=Math.sqrt(Math.pow(longitud,2)+Math.pow(ancho,2))
        document.getElementById("mensaje").innerHTML = "Area del rectangulo : "+area;
        document.getElementById("mensajePerimetro").innerHTML = "Perimetro del rectangulo: "+ perimetro;
        document.getElementById("mensajeDiagonal").innerHTML = "Diagonal del rectangulo:" + diagonal.toFixed(2);
    }else{
        document.getElementById("mensajeDiagonal").innerHTML = "Por favor introduzca valores validos";
    }
  });
});
