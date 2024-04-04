var titulo = document.querySelector('.padrao');
var tela = document.body;
var botoes = document.querySelectorAll('#buttons button');
var imagem = document.querySelector('#gif');
var Personagem = document.querySelector('#Personagem');
var Info = document.querySelector('#Info');

var funcoesPersonagens = {
    'SASUKE': Sasuke,
    'ITACHI': Itachi,
    'OBITO': Obito,
    'MADARA': Madara,
    'INDRA': Indra
};

botoes.forEach(function (botao) {
    botao.addEventListener('click', function () {
        var idPersonagem = this.id;
        funcoesPersonagens[idPersonagem]();
        tela.classList.add('tela-cheia');
    });
});

function mudarPersonagem(personagem) {
    tela.className = '';
    titulo.className = 'padrao';

    switch (personagem) {
        case 'SASUKE':
            tela.classList.add('H1Sasuke');
            titulo.textContent = 'Sasuke Uchiha';
            imagem.setAttribute('src', 'img/sasuke.gif');
            Info.textContent = 'Sasuke Uchiha é um dos últimos membros sobreviventes do clã Uchiha de Konohagakure, além de ser uma das pessoas mais importantes para a história do Naruto. Ele é rival e amigo de Naruto Uzumaki.';
            break;
        case 'ITACHI':
            tela.classList.add('H1Itachi');
            titulo.textContent = 'Itachi';
            imagem.setAttribute('src', 'img/itachi.gif');
            Info.textContent = 'Itachi Uchiha foi um ninja renegado de Konohagakure e membro do clã Uchiha, além de ser irmão mais velho de Sasuke Uchiha. Ele é conhecido por ser um dos personagens mais complexos e misteriosos de Naruto.';
            break;
        case 'OBITO':
            tela.classList.add('H1Obito');
            titulo.textContent = 'Obito Uchiha';
            imagem.setAttribute('src', 'img/obito.gif');
            Info.textContent = 'Obito Uchiha, também conhecido como Tobi ou Madara Uchiha, foi um shinobi de Konohagakure e membro do clã Uchiha. Ele foi responsável por alguns dos eventos mais significativos e trágicos na história de Naruto.';
            break;
        case 'MADARA':
            tela.classList.add('H1Madara');
            titulo.textContent = 'Madara Uchiha';
            imagem.setAttribute('src', 'img/madara.gif');
            Info.textContent = 'Madara Uchiha foi um dos líderes do clã Uchiha de Konohagakure. Ele é conhecido como um dos ninjas mais poderosos de todos os tempos e o principal antagonista na fase final de Naruto.';
            break;
        case 'INDRA':
            tela.classList.add('H1Indra');
            titulo.textContent = 'Indra Otsutsuki';
            imagem.setAttribute('src', 'img/indra.gif');
            Info.textContent = 'Indra Otsutsuki foi um dos filhos de Hagoromo Otsutsuki, também conhecido como Sábio dos Seis Caminhos. Ele é considerado o ancestral do clã Uchiha e um dos protagonistas na mitologia de Naruto.';
            break;
        default:
            break;
    }
}

function Sasuke() {
    mudarPersonagem('SASUKE');
}

function Itachi() {
    mudarPersonagem('ITACHI');
}

function Obito() {
    mudarPersonagem('OBITO');
}

function Madara() {
    mudarPersonagem('MADARA');
}

function Indra() {
    mudarPersonagem('INDRA');
}
