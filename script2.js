// Mensagem contato
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const popup = document.getElementById('popup'); 

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        popup.classList.add('show');
        setTimeout(function () {
            popup.classList.remove('show');
        }, 5000);
    });
});

// Mensagem pagamento de boleto
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('pagamento-form');
    const popup = document.getElementById('popup2'); 

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        popup.classList.add('show');
        setTimeout(function () {
            popup.classList.remove('show');
        }, 5000);
        
    });
});

// Mensagem de cadastro
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastro-form');
    const popup = document.getElementById('popup3'); 

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        popup.classList.add('show');
        setTimeout(function () {
            popup.classList.remove('show');
        }, 5000); 
        
    });
});