var titulo = document.querySelector('h1')
var tela = document.querySelector('body')
var BSASUKE = document.querySelector('#SASUKE')
var BITACHI = document.querySelector('#ITACHI')
var BOBITO = document.querySelector('#OBITO')
var BMADARA = document.querySelector('#MADARA')
var BINDRA = document.querySelector('#INDRA')
var imagem = document.querySelector('#gif')
var Personagem = document.querySelector('#Personagem')
var Info = document.querySelector('#Info')

BSASUKE.addEventListener('click', Sasuke)
BITACHI.addEventListener('click', Itachi)
BOBITO.addEventListener('click', Obito)
BMADARA.addEventListener('click', Madara)
BINDRA.addEventListener('click', Indra)

function Sasuke() {
    tela.classList.remove('H1Itachi', 'H1Obito', 'H1Madara', 'H1Indra')
    tela.classList.add('H1Sasuke')
    titulo.classList.remove('Itachi', 'Obito', 'Madara', 'Indra')
    titulo.classList.add('Sasuke')
    imagem.setAttribute('src', 'img/sasuke.gif')
    imagem.setAttribute('width', '780px')
    Personagem.textContent = 'Sasuke Uchiha'
    Info.textContent = 'Sasuke Uchiha é um dos últimos membros sobreviventes do clã Uchiha de Konohagakure, além de ser uma das pessoas mais importantes para a história do Naruto. Ele é rival e amigo de Naruto Uzumaki.'
}

function Itachi() {
    tela.classList.remove('H1Sasuke', 'H1Obito', 'H1Madara', 'H1Indra')
    tela.classList.add('H1Itachi')
    titulo.classList.remove('Sasuke', 'Obito', 'Madara', 'Indra')
    titulo.classList.add('Itachi')
    imagem.setAttribute('src', 'img/itachi.gif')
    imagem.setAttribute('width', '780px')
    Personagem.textContent = 'Itachi'
    Info.textContent = 'Itachi Uchiha foi um ninja renegado de Konohagakure e membro do clã Uchiha, além de ser irmão mais velho de Sasuke Uchiha. Ele é conhecido por ser um dos personagens mais complexos e misteriosos de Naruto.'
}

function Obito() {
    tela.classList.remove('H1Sasuke', 'H1Itachi', 'H1Madara', 'H1Indra')
    tela.classList.add('H1Obito')
    titulo.classList.remove('Sasuke', 'Itachi', 'Madara', 'Indra')
    titulo.classList.add('Obito')
    imagem.setAttribute('src', 'img/obito.gif')
    imagem.setAttribute('width', '780px')
    Personagem.textContent = 'Obito Uchiha'
    Info.textContent = 'Obito Uchiha, também conhecido como Tobi ou Madara Uchiha, foi um shinobi de Konohagakure e membro do clã Uchiha. Ele foi responsável por alguns dos eventos mais significativos e trágicos na história de Naruto.'
}

function Madara() {
    tela.classList.remove('H1Sasuke', 'H1Itachi', 'H1Obito', 'H1Indra')
    tela.classList.add('H1Madara')
    titulo.classList.remove('Sasuke', 'Itachi', 'Obito', 'Indra')
    titulo.classList.add('Madara')
    imagem.setAttribute('src', 'img/madara.gif')
    imagem.setAttribute('width', '780px')
    Personagem.textContent = 'Madara Uchiha'
    Info.textContent = 'Madara Uchiha foi um dos líderes do clã Uchiha de Konohagakure. Ele é conhecido como um dos ninjas mais poderosos de todos os tempos e o principal antagonista na fase final de Naruto.'
}

function Indra() {
    tela.classList.remove('H1Sasuke', 'H1Itachi', 'H1Obito', 'H1Madara')
    tela.classList.add('H1Indra')
    titulo.classList.remove('Sasuke', 'Itachi', 'Obito', 'Madara')
    titulo.classList.add('Indra')
    imagem.setAttribute('src', 'img/indra.gif')
    imagem.setAttribute('width', '780px')
    Personagem.textContent = 'Indra Otsutsuki'
    Info.textContent = 'Indra Otsutsuki foi um dos filhos de Hagoromo Otsutsuki, também conhecido como Sábio dos Seis Caminhos. Ele é considerado o ancestral do clã Uchiha e um dos protagonistas na mitologia de Naruto.'
}
