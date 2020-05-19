// Selecionar o primeiro elemento HTML que dá match com o seletor (através do DOM)
const paragraph = document.querySelector("p");


// Manipular as propriedades de um elemento
console.log(paragraph.innerText);
paragraph.innerText = 'Hello turma!';
paragraph.innerHTML = 'hello <b>turma</b>!';
paragraph.style.color = 'red';

// Selecionar todos os elementos que dão match com o seletor
const items = document.querySelectorAll("#fifa-wins li");

// Manipular as propriedades de vários elementos
items.forEach((item) => {
  item.classList.add('big-blue');
});

items[2].classList.remove('big-blue');


// Adicionar HTML em volta do meu elemento

// beforebegin
// <element>
//    afterbegin
//     ...
//    beforeend
// </element>
// afterend

const list = document.querySelector("ul");
list.insertAdjacentHTML('beforeend' ,"<li>Darth Vader</li>");
items[2].insertAdjacentHTML('afterend', "<li>France (2 wins)</li>");

// ===============================================================


// utilizando eventos para deixar a página dinâmica

// 1 - elemento que sofrerá a interação do usuário
const elements = document.querySelectorAll('img');

// 2 - o tipo de evento que prestaremos atenção
const event = 'click';

// 3 - o código que será executado quando a interação ocorrer no elemento
const code = (event) => {
  const elemnto_sofrendo_acao = event.currentTarget;
  elemnto_sofrendo_acao.classList.toggle('img-circle');
};

elements.forEach((element) => {
  // 4 - cria o event listener para juntar as coisas
  // (a.k.a "Quando o evento acontecer no elemento, rode o código!")
  element.addEventListener(event, code);
})


// o código de event listener acima é equivalente a...
// document.querySelectorAll('img').forEach((element) => {
//   element.addEventListener('click', (event) => {
//     const elemnto_sofrendo_acao = event.currentTarget;
//     elemnto_sofrendo_acao.classList.toggle('img-circle');
//   });
// })
