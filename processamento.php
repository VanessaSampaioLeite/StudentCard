<?php
// Verifica se os inputs foram enviados via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém os valores dos inputs
    $valor = $_POST["valor"];
    $parcelas = $_POST["parcelas"];
    

    
    //programa de milhas

    $milhas = 35/500 * $valor;
    
    //programa de pontos

    $pontos = (9/100) * $valor;


    //programa de cashback

    $cashback = 0.05 * $valor;


    //descontos em compras


    $descontos = $valor * 0.001; 

    
    
    // Exibe os resultados
    echo "<h2>Veja suas vantagens:</h2>";
    echo "Desconto de: " . $descontos . " centavo(s). <br>";
    echo "Cashback de: " . $cashback . " centavo(s). <br>";
    echo "Milhas aéreas ganhas: " . $milhas . " milha(s). <br>";
    echo  $pontos . " pontos ganhos no programa 'My studentcard' com essa compra. <br>";
}
?>