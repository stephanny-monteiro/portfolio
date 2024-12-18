// Validação do formulário de contato

// campos
const nameInput = document.getElementById('name'); 
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// erros.
const nameErro = document.getElementById('nameErro');
const emailErro = document.getElementById('emailErro');
const messageErro = document.getElementById('messageErro');

// botão.
const botaoEnviar = document.querySelector('.form-botao'); // Seleciona o botão.

// event listeners
// input-name
nameInput.addEventListener("input", () => {
    // Função de callback que será executada quando o evento "input" ocorrer.
    const resultado = validarName(this.value); // this.value pega o valor do input.
    nameErro.textContent = resultado.mensagemErro;
    nameErro.classList.toggle('mostrar-erro', !resultado.valido);
});

// Função de validação do campo de nome.
function validarName(nameInput) {
    const name = nameInput; // Obtém o valor diretamente do addEventListener.
    let erroName = "";
    // Verifica se o campo não está em branco ou vazio e se o nome tem no máximo 50 caracteres.
    if (name.trim() === "") {
        erroName = "O campo não pode ficar em branco ou vazio.";
    } else if (name.length > 50) {
        erroName = "O máximo é 50 caracteres";
    } 
    return { valido: erroName === "", mensagemErro: erroName };
};

// input-email
emailInput.addEventListener("input", () => {
    // Função de callback que será executada quando o evento "input" ocorrer.
    const resultado = validarEmail(this.value); // this.value pega o valor do input. 
    emailErro.textContent = resultado.mensagemErro;
    emailErro.classList.toggle('mostrar-erro', !resultado.valido);
});

// Função de validação do campo de email.
function validarEmail(emailInput) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const email = emailInput; // Obtém o valor diretamente do addEventListener. 
    let erroEmail = "";
    // Verifica se o campo não está em branco ou vazio e se o e-mail está no formato correto. 
    if (email.trim() === "") {
        erroEmail = "O campo não pode ficar em branco ou vazio.";
    } else if (!emailRegex.test(email)) {
        erroEmail = "O e-mail precisa conter o caractere '@', seguido por um domínio ou provedor e um ponto (.)"
    }
    return { valido: erroEmail === "", mensagemErro: erroEmail };
};

// input-message
messageInput.addEventListener("input", () => {
    // Função de callback que será executada quando o evento "input" ocorrer.
    const resultado = validarMessage(this.value); // this.value pega o valor do input.
    messageErro.textContent = resultado.mensagemErro;
    messageErro.classList.toggle('mostrar-erro', !resultado.valido);
});

// Função de validação do campo de mensagem.
function validarMessage(messageInput) {
    const message = messageInput; // Obtém o valor diretamente do addEventListener. 
    let erroMessage = ""; 
    // Verifica se o campo não está em branco ou vazio ou se a mensagem tem no máximo 300 caracteres.
    if (message.trim() === "") {
        erroMessage = "O campo não pode ficar em branco ou vazio."
    } else if (message.length > 300) {
        erroMessage = "O máximo é 300 caracteres."
    }
    return { valido: erroMessage === "", mensagemErro: erroMessage };
};

// event listener
// submit
botaoEnviar.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nomeValido = validarName(nameInput.value).valido;
    const emailValido = validarEmail(emailInput.value).valido;
    const mensagemValida = validarMessage(messageInput.value).valido;

    if (nomeValido && emailValido && mensagemValida) {
        // Todos os campos são válidos, prossiga com o envio.
        const nome = nameInput.value;
        const email = emailInput.value;
        const mensagem = messageInput.value;
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Mensagem:', mensagem);
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    } else {
        // Há campos inválidos, exiba as mensagens de erro.
        nameErro.classList.toggle('mostrar-erro', !nomeValido);
        emailErro.classList.toggle('mostrar-erro', !emailValido);
        messageErro.classList.toggle('mostrar-erro', !mensagemValida);
    }
});