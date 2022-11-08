function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmKm = parseFloat(valor);
    var valorEmAnosLuz = valorEmKm / 9460536068;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "É " + valorEmAnosLuz + " Anos/Luz";
  
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  