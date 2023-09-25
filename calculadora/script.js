let displayValue = ''; //valor do display é nulo

function mostra(value) {
    // Atribue à variavel o numero clicado 
    displayValue += value; 
   
    // Mostra o valor da variavel no visor
    document.getElementById('display').value = displayValue;
}

function LimpaDisplay() {
    displayValue = ''; 
    document.getElementById('display').value = displayValue;
}

function calcular() {
    // Recupere a expressão do visor
    const expressao = document.getElementById('display').value;
        
    // Avalie a expressão usando a função eval()
    const result = eval(expressao);
        
    // Exiba o resultado no visor
    document.getElementById('display').value = result;
    }