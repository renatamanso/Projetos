const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputnome = e.target.querySelector('#nome');
  const inputemail = e.target.querySelector('#email');
  const inputCPF = e.target.querySelector('#CPF');
  const inputproduto1 = e.target.querySelector('#produto1');
  const inputquantidade1 = e.target.querySelector('#quantidade1');
  const inputretirar = e.target.querySelector('#retirar');
  const inputdelivery = e.target.querySelector('#delivery');
  const inputlocal = e.target.querySelector('#local'); 
  const inputCEP = e.target.querySelector('#CEP');
  const inputendereço = e.target.querySelector('#endereço');
  
  const inputalface = e.target.querySelector('#alface');
  const inputabacate = e.target.querySelector('#abacate');
  const inputbanana = e.target.querySelector('#banana');
  const inputmelancia = e.target.querySelector('#melancia');
  
  const nome = Number(inputnome.value);
  const email = Number(inputemail.value);
  const CPF = Number(inputCPF.value);
  const produto1 = Number(inputproduto1.value);
  const quantidade1 = Number(inputquantidade1.value);
  const retirar = Number(inputretirar.value);
  const delivery = Number(inputdelivery.value);
  const local = Number(inputlocal.value);
  const CEP = Number(inputCEP.value);
  const endereço = Number(inputendereço.value);
  
  const alface = Number(inputalface.value);
  const abacate = Number(inputabacate.value);
  const banana = Number(inputbanana.value);
  const melancia = Number(inputmelancia.value);

  if (nome=="") {
    setResultado('Dados inválidos', false);
    return;
  }

  if (email=="") {
    setResultado('Dados inválidos', false);
    return;
  }

  if (CPF=="") {
    setResultado('Dados inválidos', false);
    return;
  }

  if (produto1=="") {
    setResultado('Dados inválidos', false);
    return;
  }

  if (quantidade1=="") {
    setResultado('Dados inválidos', false);
    return;
  }

  if (retirar=="") {
    setResultado('Dados inválidos', false);
    return;
  }

  if (CEP=="") {
    setResultado('Dados inválidos', false);
    return;
  }

  if (endereço=="") {
    setResultado('Dados inválidos', false);
    return;
  }

  const pedido = getpedido(nome, email, CPF, produto1, quantidade1, CEP, endereço, retirar, delivery, local);
  const total = validar_valor ();
  
  const msg = "Pedido realizado" + pedido + " - " + total;

  setResultado(msg, true);
  
});


function getpedido (nome, email, CPF, produto1, quantidade1, CEP, endereço, retirar, delivery, local) {

  if(nome!="" && email!="" && CPF!="" && produto1!="" && quantidade1!="" && retirar!="" && CEP!="" && endereço!="")
  {

  if(retirar===local)
  {
    return "retirar no local"; 
  }else {
    return "";
  }

  }
  
}

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

