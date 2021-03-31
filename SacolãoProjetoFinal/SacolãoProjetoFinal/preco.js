function calc_total()
{
    
    let retirada = document.getElementById("retirar").value;
    let produto1 = document.getElementById('produto1').value;
    let produto2 = document.getElementById('produto2').value;
    let produto3 = document.getElementById('produto3').value;
    let produto4 = document.getElementById('produto4').value;
    let produto5 = document.getElementById('produto5').value;
    let produto6 = document.getElementById('produto6').value;
    let alface = document.getElementById('alface').value;
    let abacate = document.getElementById('abacate').value;
    let banana = document.getElementById('banana').value;
    let melancia = document.getElementById('melancia').value;
    let morango = document.getElementById('morango').value;
    let pitaya = document.getElementById('pitaya').value;
    let qtd1 = parseInt(document.getElementById('quantidade1').value);
    let qtd2 = parseInt(document.getElementById('quantidade2').value);
    let qtd3 = parseInt(document.getElementById('quantidade3').value);
    let qtd4 = parseInt(document.getElementById('quantidade4').value);
    let qtd5 = parseInt(document.getElementById('quantidade5').value);
    let qtd6 = parseInt(document.getElementById('quantidade6').value);
    let delivery = document.getElementById('delivery').value;
    let local = document.getElementById('local').value;

if(produto1 == "")
 {
    preco1=0;  
 }else{  
    if (produto1 == "alface") 
    {
       
        preco1 = 0.60 * qtd1;
        
    }else if(produto1 == "abacate")
    {
       
            preco1 = 2.65 * qtd1;
        
    }else if(produto1 == "banana" ){
        
            preco1 = 1 * qtd1;

    }else if(produto1 == "melancia")
    {

            preco1 = 3 * qtd1;

    }else if(produto1 == "morango")
    {

            preco1 = 8 * qtd1;

    }else if(produto1 == "pitaya")
    {

            preco1 = 15 * qtd1;

    }
    }



 if(produto2 == "")
 {
    preco2=0;  
 }else{        
    if (produto2 == "alface") 
    {
       
        preco2 = 0.60 * qtd2;
        
    }else if(produto2 == "abacate")
    {
       
            preco2 = 2.65 * qtd2;
        
    }else if(produto2 == "banana" ){
        
            preco2 = 1 * qtd2;

    }else if(produto2 == "melancia")
    {

            preco2 = 3 * qtd2;

    }else if(produto2 == "morango")
    {

            preco2 = 8 * qtd2;

    }else if(produto2 == "pitaya")
    {

            preco2 = 15 * qtd2;

    }
    } 


 if(produto3 == "")
  {
       preco3=0;  
  }else{        
    if (produto3 == "alface") 
    {
       
        preco3= 0.60 * qtd3;
        
    }else if(produto3 == "abacate")
    {
       
            preco3 = 2.65 * qtd3;
        
    }else if(produto3 == "banana" ){
        
            preco3 = 1 * qtd3;

    }else if(produto3 == "melancia")
    {

            preco3 = 3 * qtd3;

    }else if(produto3 == "morango")
    {

            preco3 = 8 * qtd3;

    }else if(produto3 == "pitaya")
    {

            preco3 = 15 * qtd3;

    }
    }    



 if(produto4 == "")
 {
    preco4=0;  
 }else{        
    if (produto4 == "alface") 
    {
       
        preco4 = 0.60 * qtd4;
        
    }else if(produto4 == "abacate")
    {
       
            preco4 = 2.65 * qtd4;
        
    }else if(produto4 == "banana" ){
        
            preco4 = 1 * qtd4;

    }else if(produto4 == "melancia")
    {

            preco4 = 3 * qtd4;

    }else if(produto4 == "morango")
    {

            preco4 = 8 * qtd4;

    }else if(produto4 == "pitaya")
    {

            preco4 = 15 * qtd4;

    }
    }


     
 if(produto5 == "")
 {
    preco5=0;  
 }else{        
    if (produto5 == "alface") 
    {
       
        preco5 = 0.60 * qtd5;
        
    }else if(produto5 == "abacate")
    {
       
            preco5 = 2.65 * qtd5;
        
    }else if(produto5 == "banana" ){
        
            preco5 = 1 * qtd5;

    }else if(produto5 == "melancia")
    {

            preco5 = 3 * qtd5;

    }else if(produto5 == "morango")
    {

            preco5 = 8 * qtd5;

    }else if(produto5 == "pitaya")
    {

            preco5 = 15 * qtd5;

    }
    }



 if(produto6 == "")
 {
    preco6=0;  
 }else{            
    if (produto6 == "alface") 
    {
       
        preco6 = 0.60 * qtd6;
        
    }else if(produto6 == "abacate")
    {
       
            preco6 = 2.65 * qtd6;
        
    }else if(produto6 == "banana" ){
        
            preco6 = 1 * qtd6;

    }else if(produto6 == "melancia")
    {

            preco6 = 3 * qtd6;

    }else if(produto6 == "morango")
    {

            preco6 = 8 * qtd6;

    }else if(produto6 == "pitaya")
    {

            preco6 = 15 * qtd6;

    }
    }



    document.getElementById('preco1').value = preco1;
    document.getElementById('preco2').value = preco2;
    document.getElementById('preco3').value = preco3;
    document.getElementById('preco4').value = preco4;
    document.getElementById('preco5').value = preco5;
    document.getElementById('preco6').value = preco6;

}
