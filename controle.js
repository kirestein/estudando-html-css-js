window.onload=function(){
    console.log("Hello World");
    //linha única
    /* múltiplas
    linhas 
    
    <h1></h1> = [0]
    <h1></h1> = [1] */
    document.getElementsByTagName("h1")[0].innerHTML="Aulas de Javascript";
    document.getElementById("titulo2").style.color="red";

    document.querySelectorAll("p")[1].style.fontWeight="bold";
    document.querySelector("ul li.green").style.color="green";

    //VARIÁVEIS - DIV C1 ////////////////////
    var mensagem,p1,div1,status;
    let total;
    total=parseInt("120");
    status=false;
    mensagem="Declarando Variáveis";
    p1=document.querySelector("div.c1 p");
    div1=document.querySelector("div.c1 div");

    p1.innerHTML=mensagem;
    div1.innerHTML="<span>A variável total é do tipo " + typeof(total) + "</span>";
    div1.innerHTML+="<span>A variável mensagem é do tipo " + typeof(mensagem) + "</span>";
    div1.innerHTML+="<span>A variável status é do tipo " + typeof(status) + "</span>";
    div1.innerHTML+="<span>A variável div1 é do tipo " + typeof(div1) + "</span>";

    console.log("A variável total é do tipo " + total);

    
    //VARIÁVEIS - DIV C2 /////////////////////
    var p2,n1,n2,div2,operacao,resultado;
    p2=document.querySelector("div.c2 p");
    div2=document.querySelector("div.c2 div");
    n1=44;
    n2=12;
    p2.innerHTML="Event Click";
    div2.innerHTML="<span> n1 ("+ n1 + ") + n2 (" + n2 + ")= " + (n1+n2) + "</span>";
    operacao="multiplicar";
    
    function calculadora (op, n1, n2) {
    switch (op) {
        case "somar" :
            resultado=parseInt(n1)+parseInt(n2);
            break;
        case "dividir" :
            resultado=(n1/n2).toFixed(2);
            break
        case "subtrair" :
            resultado=n1-n2;
            break
        case "multiplicar" :
            resultado=n1*n2;
            break;
    }
    console.log(resultado);
    document.querySelector("#resultado").textContent=resultado;
}
    calculadora(operacao);

    // click dos buttons
    var campo1, campo2;
    campo1=document.querySelector("input[name=n1]");
    campo2=document.querySelector("input[name=n2]");

    document.querySelector("#btn1").onclick=function() {
        calculadora("somar",campo1.value,campo2.value);
    }
    document.querySelector("#btn2").onclick=function() {
        calculadora("subtrair",campo1.value,campo2.value);
    }
    document.querySelector("#btn3").onclick=function() {
        calculadora("multiplicar",campo1.value,campo2.value);
    }
    document.querySelector("#btn4").onclick=function() {
        calculadora("dividir",campo1.value,campo2.value);
    }
};