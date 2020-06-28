
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/LuanNFerreira"); //abre em uma nova aba
    //window.location.href = "https://github.com/LuanNFerreira" abre na mesma aba
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}
/*function soma(n1,n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar; //usando validar local e global quando e fora da variavel
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/
/*var d = new Date();
alert(d.getSeconds()) Segundos
alert(d.getMinutes()) Minutos
alert(d.getHours()) Horas
alert(d.getFullYear()) Ano
alert(d.getMonth()+1) Mês
alert(d.getDate()) Dia
alert(d) Mostra Data e horario */

//repetição de alerta
/*var count;
for(count=0; count <=5; count++){
    alert(count)
};*/

//sistema de repetição
/*var count = 0;
while (count <5){
    console.log(count);
    alert(count);
    count++;
}*/

// colocar idade no aviso
/*var idade = prompt("Qual sua idade");
if (idade >=18) {
    alert("maior de idade");
}else{
    alert("menor de idade")
}*/

/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome)

var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome)

var lista = ["maça", "pera", "laranja"];
lista.push("uva"); push para adicionar
lista.pop(); pop para tirar o ultimo elemento
console.log(lista);

console.log(lista.length); mostra quantidade da lista
console.log(lista.reverse()); mostra ao contrario a lista
console.log(lista.toString()); imprimi como string
console.log(lista.join(" - ")) adiciona um espaçamento especifico
alert(lista[1]); alerta de lista

var nome = "Luan do N. Ferreira";
var idade = "23"; "" transforma o numero em string 
var n1 = 10;  sem "" vira numero inteiro
var n2 = 5;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos");

// isto é uma anotação;

console.log(nome);
console.log(idade);
console.log(n1 + n2);
console.log(frase.replace("Japão", "Brasil")); serve para trocar uma frase
console.log(frase.toUpperCase()); tudo em LETRA MAIUSCULA
console.log(frase.toLowerCase()); tydo em letra minuscula
alert(frase.replace("Japão", "Brasil")); */