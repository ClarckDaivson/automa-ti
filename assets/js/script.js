    // Texto para o ID "texto"
    const texto0 = "Frente de loja, Retaguarda(ERP) - Equipamentos - Suporte";
    const elemento0 = document.getElementById("texto");
    let i0 = 0;
    let isDeleting0 = false;

    function escrever0() {
    if (!isDeleting0 && i0 < texto0.length) {
    elemento0.innerHTML += texto0.charAt(i0);
    i0++;
    setTimeout(escrever0, 100);
} else if (isDeleting0 && i0 > 0) {
    elemento0.innerHTML = texto0.substring(0, i0 - 1);
    i0--;
    setTimeout(escrever0, 50);
} else {
    isDeleting0 = !isDeleting0;
    setTimeout(escrever0, 1000);
}
}

    escrever0();

/* Slider dos produtos */

    <!-- Script de validação simples do Bootstrap 5 -->

        // Exemplo básico de validação de formulário Bootstrap 5
        (function () {
        'use strict'
        var forms = document.querySelectorAll('.needs-validation')
        Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }
        form.classList.add('was-validated')
    }, false)
    })
    })()




