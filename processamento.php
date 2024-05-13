<?php
// Verifica se os inputs foram enviados via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém os valores dos inputs
    $input1 = $_POST["valor"];
    $input2 = $_POST["parcelas"];
    
    // Calcula a soma
    $soma = $input1 + $input2;
    
    // Calcula a subtração
    $subtracao = $input1 - $input2;
    
    // Calcula a multiplicação
    $multiplicacao = $input1 * $input2;
    
    // Verifica se o segundo input é diferente de zero antes de calcular a divisão
    if ($input2 != 0) {
        // Calcula a divisão
        $divisao = $input1 / $input2;
    } else {
        // Define a divisão como "Indefinido" se o segundo input for zero
        $divisao = "Indefinido";
    }
    
    // Exibe os resultados
    echo "<h2>Resultados:</h2>";
    echo "Soma: " . $soma . "<br>";
    echo "Subtração: " . $subtracao . "<br>";
    echo "Multiplicação: " . $multiplicacao . "<br>";
    echo "Divisão: " . $divisao . "<br>";
}
?>