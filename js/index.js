const botaoHamburguer = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('.menu-itens');
const botaoLoja = document.querySelector('#botao-loja');
const lojasImagem = document.querySelectorAll('#loja-imagem');
const todasAsLojas = document.querySelector('.lojas-img'); 

botaoLoja.addEventListener('click', () => {

    lojasImagem.forEach(item => {
        item.classList.toggle('loja-img-ativo');
    })
    todasAsLojas.classList.toggle('lojas-img-ativo');
})

botaoHamburguer.addEventListener('click', () => {
    menu.classList.toggle('menu-itens-ativo');
})