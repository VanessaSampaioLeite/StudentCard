//Versão que funcionou. Nem tudo está claro, mas aos poucos to entendendo. 
//Todos os 'console.log' foram retirados.
//Simulação crua funcionando como deveria. Crua.



document.addEventListener('DOMContentLoaded', () => {
    const valor = document.getElementById('valor');
    const parcelas = document.getElementById('parcelas');
    const itemList = document.getElementById('itemList'); // Certifique-se de definir itemList. Por algum motivo isso é importante. 

    valor.addEventListener('input', handleInput);
    parcelas.addEventListener('input', handleInput);

    function handleInput() {
        const value1 = valor.value.trim();
        const value2 = parcelas.value.trim();

        if (value1 && value2) {
            addItem(value1, value2);
            valor.value = '';                              // Limpa o valor do input após a execução do JS
            parcelas.value = '';
        }
    }

    function addItem(value1, value2) {
        console.log('Adicionando item:', { value1, value2 });

        const li = document.createElement('li');    
        li.innerHTML = `
        Valor da compra nesta simulação: ${value1} reais<br>
        Quantidade de parcelas nesta simulação: ${value2} parcelas<br>
        Seu desconto nessa compra é de ${(value1*0.001)} centavos<br>
        Você está acumulando ${(14/100)} pontos no seu plano MyStudentcadr<br>
        Seu cashback nessa compra é de ${(value1 * 0.35).toFixed(2)} centavos<br>
        

    `;

        itemList.appendChild(li);            
    }
});
