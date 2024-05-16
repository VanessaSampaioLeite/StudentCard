document.addEventListener('DOMContentLoaded', () => 
    {
        var valor = document.getElementById('valor');
        var parcelas = document.getElementsByName('parcelas');

    input1.addEventListener('input', handleInput);
    input2.addEventListener('input', handleInput);

    function handleInput() {
        const value1 = input1.value.trim();
        const value2 = input2.value.trim();

        if (value1 && value2) {
            addItem(value1, value2);
            input1.value = '';
            input2.value = '';
        }
    }

    function addItem(value1, value2) {
        const li = document.createElement('li');
        li.textContent = `Input 1: ${value1}, Input 2: ${value2}`;
        itemList.appendChild(li);
    }
});
