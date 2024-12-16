$(document).ready(function() {
    $(".welcome").append("!!!");
});

// Validação do login existente
function validateUser(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "123") {
        window.location.href = "checklist.html";
    } else {
        alert("Usuário ou senha inválidos");
    }
}

// Função para capturar os dados do formulário e gerar o PDF


function showConditionalDropdown() {
        var mainDropdown = document.getElementById("mainDropdown");
        var conditionalDropdown1 = document.getElementById("conditionalDropdown1");
        var conditionalDropdown2 = document.getElementById("conditionalDropdown2");
        var conditionalDropdown3 = document.getElementById("conditionalDropdown3");
        var conditionalDropdown4 = document.getElementById("conditionalDropdown4");
        var conditionalDropdown5 = document.getElementById("conditionalDropdown5");
        var conditionalDropdown6 = document.getElementById("conditionalDropdown6");
        var conditionalDropdown7 = document.getElementById("conditionalDropdown7");
        var conditionalDropdown8 = document.getElementById("conditionalDropdown8");
        var conditionalDropdown9 = document.getElementById("conditionalDropdown9");
        var conditionalDropdown10 = document.getElementById("conditionalDropdown10");

        conditionalDropdown1.classList.add("hidden");
        conditionalDropdown2.classList.add("hidden");
        conditionalDropdown3.classList.add("hidden");
        conditionalDropdown4.classList.add("hidden");
        conditionalDropdown5.classList.add("hidden");
        conditionalDropdown6.classList.add("hidden");
        conditionalDropdown7.classList.add("hidden");
        conditionalDropdown8.classList.add("hidden");
        conditionalDropdown9.classList.add("hidden");
        conditionalDropdown10.classList.add("hidden");

        if (mainDropdown.value === "option1") {
            conditionalDropdown1.classList.remove("hidden");
        } else if (mainDropdown.value === "option2") {
            conditionalDropdown2.classList.remove("hidden");
        } else if (mainDropdown.value === "option3") {
            conditionalDropdown3.classList.remove("hidden");
        } else if (mainDropdown.value === "option4") {
            conditionalDropdown4.classList.remove("hidden");
        } else if (mainDropdown.value === "option5") {
            conditionalDropdown5.classList.remove("hidden");
        } else if (mainDropdown.value === "option6") {
            conditionalDropdown6.classList.remove("hidden");
        } else if (mainDropdown.value === "option7") {
            conditionalDropdown7.classList.remove("hidden");
        } else if (mainDropdown.value === "option8") {
            conditionalDropdown8.classList.remove("hidden");
        } else if (mainDropdown.value === "option9") {
            conditionalDropdown9.classList.remove("hidden");
        } else if (mainDropdown.value === "option10") {
            conditionalDropdown10.classList.remove("hidden");
        }
}
    






