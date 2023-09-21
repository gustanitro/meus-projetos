let displayValue = '';

function mostra(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function LimpaDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}