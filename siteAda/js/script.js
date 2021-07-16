document.getElementById("botaoEnviar").addEventListener("click", validaFormulario )
var nome = document.getElementById("nome").value;
var email = document.getElementById("email").value;
var telefone = document.getElementById("telefone").value;

function validaFormulario(){
  if(nome != "" && email != "" && telefone != ""){
    alert("Prontinho! Você receberá as novidades por email.")
  }else{
    alert("Por favor, preencha os campos de nome, email e telefone!")
  }
}

