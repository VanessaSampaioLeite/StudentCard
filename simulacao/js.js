//Versão que funcionou. Nem tudo está claro, mas aos poucos to entendendo. 
//Tem muito console.log porque eu não sabia o que estava dando errado e precisava monitorar. Irão ser retirados. 



document.addEventListener('DOMContentLoaded', () => {
    const valor = document.getElementById('valor');
    const parcelas = document.getElementById('parcelas');
    const itemList = document.getElementById('itemList'); // Certifique-se de definir itemList

    // Verifique se os elementos foram encontrados
    if (!valor || !parcelas || !itemList) {
        console.error('Um ou mais elementos não foram encontrados:', { valor, parcelas, itemList });
        return;
    }

    console.log('Elementos iniciais:', { valor, parcelas, itemList });

    valor.addEventListener('input', handleInput);
    parcelas.addEventListener('input', handleInput);

    function handleInput() {
        const value1 = valor.value.trim();
        const value2 = parcelas.value.trim();

        console.log('Valores dos inputs:', { value1, value2 });

        if (value1 && value2) {
            addItem(value1, value2);
            valor.value = '';  // Limpa o valor do input após a execução do JS
            parcelas.value = '';
        }
    }

    function addItem(value1, value2) {
        console.log('Adicionando item:', { value1, value2 });

        const li = document.createElement('li');
        li.textContent = `Seus desconto nessa compra é de: ${value1}`;
        
        // Verifique se itemList é um elemento válido
        if (itemList) {
            itemList.appendChild(li);
            console.log('Item adicionado:', li);
        } else {
            console.error('itemList não está definido ou não é um elemento válido.');
        }
    }
});
