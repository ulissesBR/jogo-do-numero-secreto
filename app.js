let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
exibirMensagemInicial()

function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial()
{
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');
}

function verificarChute()
{
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto)
    {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    {
        if (chute > numeroSecreto)
        {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        }
        else
        {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function gerarNumeroAleatorio() 
{
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite)
    {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido))
    {
        return gerarNumeroAleatorio();
    }
    else
    {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttibrute('disabled', true);
}
/*
function hello(nome)
{
    console.log(`Olá ${nome}!`);
}

function printDouble()
{
    let number = document.querySelector('input').value;
    console.log(number * 2);
}

function average(n1, n2, n3)
{
    let avg = (n1 + n2 + n3) / 3;
    return avg;
}

function checkGreater(n1, n2)
{
    if(n1 > n2)
    {
        return n1;
    }
    else
    {
        return n2;
    }
}

function square(n1)
{
    return n1 * n1;
}

function printSquare()
{
    console.log(square(11));
}
*/