function validar_valor (){

    let retirar = document.getElementById('retirar').value;
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
    let precoT;
    let preco1;
    let preco2;
    let preco3;
    let preco4;
    let preco5;
    let preco6;
    let precoTT


function valid_valor(produto1, produto2, produto3, produto4, qtd1, qtd2, qtd3, qtd4, produto7, precoT, preco1, preco2, preco3, preco4, preco5, preco6,precoTT, delivery, local)
{

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


    precoT = preco1 + preco2 + preco3 + preco4 + preco5 + preco6;

    if (retirar == "local") {
        return "Retirada no Local - VALOR TOTAL = R$" + precoT;
    } else {
            
    if(precoT<=40)
    {
            precoTT = precoT + 20;
        return "Delivery - FRETE = R$20 - VALOR TOTAL = R$" + precoTT;
    } else if(precoT>40)
    {
        precoTT = precoT * 0.9;
        return "Delivery - VOCÊ GANHOU FRETE GRÁTIS E 10% DE DESCONTO - VALOR TOTAL = R$" + precoTT;
    }
    }
}

return valid_valor(produto1, produto2, produto3, produto4, qtd1, qtd2, qtd3, qtd4, retirar, precoT, preco1, preco2, preco3, preco4, preco5, preco6,precoTT, delivery, local);
}