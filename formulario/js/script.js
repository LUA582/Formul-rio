document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); 


  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !telefone || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.style.display = "block";
  resultadoDiv.innerHTML = `
    <strong>Nome:</strong> ${nome}<br/>
    <strong>E-mail:</strong> ${email}<br/>
    <strong>Telefone:</strong> ${telefone}<br/>
    <strong>Mensagem:</strong> ${mensagem}
  `;

  this.reset();
});