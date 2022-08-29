function organizar(num){
    var num1 = num.slice(0,1); // Pega o primeiro valor do array
    num1 = parseInt(num1); // Passa o valor do array para int
 
    var num2 = num.slice(1,2); // Pega o segundo valor do array
    num2 = parseInt(num2); // Passa o valor do array para int

    var num3 = num.slice(2); // Pega o terceito valor do array
    num3 = parseInt(num3); // Passa o valor do array para int
  

   if (num1 < num2 && num1 < num3){ // Verifica o menor valor e ordena
    if (num2 < num3){
        console.log(num1,num2,num3);
    }else if (num3 < num2){
        console.log(num1,num3,num2);
    }
   }
   if (num2 < num1 && num2 < num3){
    if (num1 < num3){
        console.log(num2, num1, num3);
    } else if (num3 < num1){
        console.log(num2, num3, num1);
    }
   }
   if (num3 < num1 && num3 < num2){
    if (num1 < num2){
        console.log(num3, num1, num2);
    } else if (num2 < num1){
        console.log(num3, num2, num1);
    }
   }
}

var num = [8, 3, 9]; // Passa os parametros para serem organizados
organizar(num) // Chama a função responsavel por organizar os números