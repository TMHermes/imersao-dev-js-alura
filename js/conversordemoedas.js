function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNum = parseFloat(valor);
    var valorEmReal = valorEmDolarNum * 5;
    var valorEmBitcoin = valorEmDolarNum * 41.958;
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var elementoValorBitcoin = document.getElementById("valorBitcoin");
  
    var valorConvertido = "É R$" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  
    var valorBitcoin = "É B$" + valorEmBitcoin;
    elementoValorBitcoin.innerHTML = valorBitcoin;
  }
  
  // revisao
  // function, button, type, document, getElementById, innerHTML
  