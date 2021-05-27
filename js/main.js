function clicou(){
	document.getElementById("agradecimento").innerHTML ="<b>Obrigado por clicar</b>";
	//console.log(document.getElementById("agradecimento"));
	//alert("Obrigado por clicar");
}

function redirecionar(){
	window.open("https://developer.mozilla.org/pt-BR/docs/Web/JavaScript");
	//window.location.href = "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript";
}

function trocar(elemento){
	//document.getElementById("mousemove").innerHTML ="<b>Obrigado por passar o mouse</b>";
	elemento.innerHTML = "<b>Obrigado por passar o mouse</b>";
	//alert("trocar texto");
}

function voltar(elemento){
	//document.getElementById("mousemove").innerHTML ="<b>Passe o mouse aqui</b>";
    elemento.innerHTML = "<b>Passe o mouse aqui</b>";
}

function load(){
	alert("Página carregada!")
}

function funcaoChange(elemento){
	console.log(elemento.value);
}

/*var validar; //variável global
function validaIdade(idade){
	//var validar;//variável local
	if (idade >= 18){
		validar = true;
	}else{
		validar = false;
	}
	return validar;
}
var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/


/*function soma(n1, n2){
	return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/


//var d = new Date();
//alert(d);
//alert(d.getMonth()+1);
//alert(d.getMinutes());
//alert(d.getDay());
//alert(d.getHours());



/*var count;
for(count = 0; count <= 5; count++){
	alert(count);
}
*/


/*var count = 0;
while (count < 5){
	console.log(count);
	count++;
	//count = count + 1;
}
*/


/*var idade = prompt("Qual sua idade");

if(idade >= 18){
	alert("maior de idade");
}else{
	alert("menor de idade");
};
*/


/*var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"verde"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva"); //insere elementos na lista
//lista.pop(); //exclui o ultimo elementos da lista
//console.log(lista.length); //Quantidade de elementos da lista
//console.log(lista.reverse()); //inverte os elementos da lista
//console.log(lista);
//console.log(lista.join(" - ")); //substitue a lista por traço
//console.log(lista.toString()[0]); //trata os elementos como string
//console.log(lista[1]);
//alert(lista[1]);


//var nome = "Daniele Lima";
//var idade = 27;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//var n1 = 5;
//var n2 = 3;
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil")); (troca a palavra Japão por Brasil)
//console.log(frase.toUpperCase("Japão", "Brasil")); 
//console.log(frase.toLowerCase("Japão", "Brasil")); (os caracteres ficam em minúsculo)
//alert(frase.replace("Japão", "Brasil"));
//console.log(n1 * n2);
