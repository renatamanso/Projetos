function validCPF()
{
let CPF = document.getElementById("CPF").value;    

let cpf = TestaCPF(CPF);
  
let msg = alert(cpf) ;

setResultado(msg, false);

function TestaCPF(CPF) 
{
    let Soma;
    let Resto;
    Soma = 0;

  if (CPF == "00000000000")
  {
    return "CPF não valido";
  } 

  for (i=1; i<=9; i++) 
  {
    Soma = Soma + parseInt(CPF.substring(i-1, i)) * (11 - i);
  }

  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))
    {  
        Resto = 0;
    } else if (Resto != parseInt(CPF.substring(9, 10)) )
    { 
        return "CPF não valido";
    }    

  Soma = 0;

    for (i = 1; i <= 10; i++) 
    { 
        Soma = Soma + parseInt(CPF.substring(i-1, i)) * (12 - i);
    }

    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  
    {
    Resto = 0;
    } else if (Resto != parseInt(CPF.substring(10, 11) ) ) 
    {
        return "CPF não valido";
    }else {
        return "Encomenda finalizada";
    }

}
}