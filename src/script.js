const form = document.getElementById('formEmail');
const emailInput = document.getElementById('email');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o envio do formulário
  const email = emailInput.value.trim();

  // Expressão regular simples para validar o e-mail
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexEmail.test(email)) {
    mensagem.textContent =
      'Por favor, insira um e-mail válido no formato: exemplo@dominio.com';
    mensagem.style.color = 'darkred';
  } else {
    mensagem.textContent = 'E-mail válido!';
    mensagem.style.color = 'green';
  }
});
