//Definindo os intervalos de cores no início da seção.
var intervalo;
var imagens = ["dado1.png", "dado2.png", "dado3.png", "dado4.png", "dado5.png", "dado6.png"];
var i = 0;
intervalo = setInterval(function () {
    document.getElementById("imgdado1").src = imagens[i];
    i = (i == (imagens.length - 1)) ? 0 : i + 1;
}, 1000);

var intervalo2;
var imagens2 = ["dado1.png", "dado2.png", "dado3.png", "dado4.png", "dado5.png", "dado6.png"];
var p = 0;
intervalo2 = setInterval(function () {
    document.getElementById("imgdado2").src = imagens2[p];
    p = (p == (imagens2.length - 1)) ? 0 : p + 1;
}, 1000);
var intervalo3;
var cor = ["orange", "orangered", "yellow", "salmon"];
var z = 0;
intervalo3 = setInterval(function () {
    document.getElementById("imgdiv1").style.background = cor[z];
    z = (z == (cor.length - 1)) ? 0 : z + 1;
}, 1000);
var intervalo4;
var colors = ["aqua", "aquamarine", "cyan", "lightskyblue"];
var c = 0;
intervalo4 = setInterval(function () {
    document.getElementById("imgdiv2").style.background = colors[c];
    c = (c == (colors.length - 1)) ? 0 : c + 1;
}, 1000);
//Função para parar os intervalos quando for invocado.
function paraImagens() {
    clearInterval(intervalo);
    clearInterval(intervalo2);
    clearInterval(intervalo3);
    clearInterval(intervalo4);
}
//Funções que avaliam se os campos do input foram preenchidos.
function validaCadastro() {
    var vnomej1 = document.getElementById("nomej1").value;
    var vnickj1 = document.getElementById("nickj1").value;
    var vidadej1 = document.getElementById("idadej1").value;
    var vnomej2 = document.getElementById("nomej2").value;
    var vnickj2 = document.getElementById("nickj2").value;
    var vidadej2 = document.getElementById("idadej2").value;
    if ((vnomej1 != "") && (vnickj1 != "") && (vidadej1 != "") && (vnomej2 != "") && (vnickj2 != "") && (
            vidadej2 != "")) {
        if (vidadej1 <= 0 || vidadej2 <= 0) {
            alert("Coloque a idade superior a zero");
            return;
        }
        document.getElementById("jogar").disabled = false;
        document.getElementById("bj1").disabled = false;
        document.getElementById("bj2").disabled = true;
        document.getElementById("cadastro").disabled = true;
    } else {
        document.getElementById("jogar").style.display = "block";
        document.getElementById("bj1").style.display = "block";
        document.getElementById("bj2").style.display = "block";
        document.getElementById("jogar").disabled = true;
        document.getElementById("bj1").disabled = true;
        document.getElementById("bj2").disabled = true;
    }
}
//Funções que mostram o total dos jogadores.
var pontoj1 = 10;
var pontoj2 = 10;

function totalDoj1() {
    var tdj1 = pontoj1;
    totalj1.innerHTML = "Total:" + tdj1;
}

function totalDoj2() {
    var tdj2 = pontoj2;
    totalj2.innerHTML = "Total:" + tdj2;
}

//Funções que sorteiam um número e relaciona a imagem correspondente até que o jogador clique novamente.
var sorteio1,
    sorteio2,
    valor = 0,
    interv;

function sorteioj1() {
    if (valor == 0) {
        somQueRufemOsTabores();
        document.getElementById("bj1").value = "Parar";
        valor++;
        var c = 0;
        interv = setInterval(function () {
            var cor = ["coral", "tomato", "redpurple", "purple", "bluepurple", "blue"];
            document.getElementById("imgdiv1").style.background = cor[c];
            c = (c == (cor.length - 1)) ? 0 : c + 1;
            sorteio1 = Math.floor(Math.random() * 6 + 1);
            switch (sorteio1) {
                case 1:
                    document.getElementById("imgdado1").src = "dado1.png";
                    break;
                case 2:
                    document.getElementById("imgdado1").src = "dado2.png";
                    break;
                case 3:
                    document.getElementById("imgdado1").src = "dado3.png";
                    break;
                case 4:
                    document.getElementById("imgdado1").src = "dado4.png";
                    break;
                case 5:
                    document.getElementById("imgdado1").src = "dado5.png";
                    break;
                case 6:
                    document.getElementById("imgdado1").src = "dado6.png";
                    break;
                default:
                    break;
            }
        }, 100);
    } else if (valor == 1) {
        document.getElementById("rufando").pause();
        valor--;
        clearInterval(interv);
        document.getElementById("bj1").value = "Jogar";
        document.getElementById("bj2").disabled = false;
        document.getElementById("bj1").disabled = true;
    }
}

function sorteioj2() {
    if (valor == 0) {
        somQueRufemOsTabores();
        document.getElementById("bj2").value = "Parar";
        valor++;
        var c = 0;
        interv = setInterval(function () {
            var cor = ["orange", "orangeyellow", "yellow", "yellowgreen", "springgreen", "bluegreen", "blue"];
            document.getElementById("imgdiv2").style.background = cor[c];
            c = (c == (cor.length - 1)) ? 0 : c + 1;
            sorteio2 = Math.floor(Math.random() * 6 + 1);
            switch (sorteio2) {
                case 1:
                    document.getElementById("imgdado2").src = "dado1.png";
                    break;
                case 2:
                    document.getElementById("imgdado2").src = "dado2.png";
                    break;
                case 3:
                    document.getElementById("imgdado2").src = "dado3.png";
                    break;
                case 4:
                    document.getElementById("imgdado2").src = "dado4.png";
                    break;
                case 5:
                    document.getElementById("imgdado2").src = "dado5.png";
                    break;
                case 6:
                    document.getElementById("imgdado2").src = "dado6.png";
                    break;
                default:
                    break;
            }
        }, 100);
    } else if (valor == 1) {
        valor--;
        clearInterval(interv);
        jv();
        totalDoj1();
        totalDoj2();
        document.getElementById("bj1").disabled = false;
        document.getElementById("bj2").disabled = true;
        document.getElementById("bj2").value = "Jogar";
    }
}
//Funções que fazem a troca de spam e do background da div para o correspondente com o resultado do sorteio.
function trocaj1() {
    var nicknamej1 = document.getElementById("nickj1").value;
    document.getElementById("pj1").style.display = "block";
    pj1.innerHTML = nicknamej1 + " venceu";
}

function trocaj2() {
    var nicknamej2 = document.getElementById("nickj2").value;
    document.getElementById("pj2").style.display = "block";
    pj2.innerHTML = nicknamej2 + " venceu";
}

function trocaEMP() {
    document.getElementById("pe").style.display = "block";
    pe.innerHTML = "Empate";
}

function escondej1() {
    document.getElementById("pj1").style.display = "none";
}

function escondej2() {
    document.getElementById("pj2").style.display = "none";
}

function escondeEMP() {
    document.getElementById("pe").style.display = "none";
}

function trocacorj1() {
    document.getElementById("imgdiv1").style.backgroundColor = "green";
    document.getElementById("imgdiv2").style.backgroundColor = "red";
}

function trocacorj2() {
    document.getElementById("imgdiv1").style.backgroundColor = "red";
    document.getElementById("imgdiv2").style.backgroundColor = "green";
}

function trocacoremp() {
    document.getElementById("imgdiv1").style.backgroundColor = "grey";
    document.getElementById("imgdiv2").style.backgroundColor = "grey";
}
//Função que avalia o maior número dentre os jogadores.
function jv() {
    sorteio1 - sorteio2;
    if (sorteio1 > sorteio2) {
        pontoj2--;
        exeSom();
        trocacorj1();
        trocaj1();
        escondej2();
        escondeEMP();

    } else if (sorteio2 > sorteio1) {
        pontoj1--;
        exeSom();
        trocacorj2();
        trocaj2();
        escondej1();
        escondeEMP();

    } else {
        exeSomTriste();
        trocacoremp();
        trocaEMP();
        escondej1();
        escondej2();

    }
}
//Função que muda a cor de fundo da div do vencedor do jogo. 
function mudaCor(div) {
    var cores = ["limegreen", "lime", "lawngreen", "lightgreen"];
    var i = 0;
    setInterval(function () {
        document.getElementById(div).style.background = cores[i];
        i = (i == (cores.length - 1)) ? 0 : i + 1;
    }, 1000);
}

//Função que avalia o vencedor do jogo.
function vencedor() {
    var jvencedor;
    var parabotao;
    if (pontoj2 <= 0) {
        var nicknamej1 = document.getElementById("nickj1").value;
        jvencedor = document.getElementById("tv");
        jvencedor.innerHTML = "<h6>" + nicknamej1 + " venceu!</h6>";
        document.getElementById("bj1").style.display = "none";
        document.getElementById("bj2").style.display = "none";
        parabotao = document.getElementById("jogar").style.display = "none";
        document.getElementById("cadastro").style.display = "none";
        document.getElementById("recomecar").style.display = "block";
        somWin();
        mudaCor("imgdiv1");
    } else if (pontoj1 <= 0) {
        var nicknamej2 = document.getElementById("nickj2").value;
        jvencedor = document.getElementById("tv");
        jvencedor.innerHTML = "<h6>" + nicknamej2 + " venceu!</h6>";
        document.getElementById("bj1").style.display = "none";
        document.getElementById("bj2").style.display = "none";
        parabotao = document.getElementById("jogar").style.display = "none";
        document.getElementById("cadastro").style.display = "none";
        document.getElementById("recomecar").style.display = "block";
        somWin();
        mudaCor("imgdiv2");
    }
}
//Função que habilita/desabilita a div do input dos jogadores.
function mostrajog(elemento) {
    var display = document.getElementById(elemento).style.display;
    if (display == "none") {
        document.getElementById(elemento).style.display = 'block';
        document.getElementById("cadastro").value = "Ok";
    } else {
        document.getElementById(elemento).style.display = 'none';
        document.getElementById("cadastro").value = "Cadastrar jogadores";
    }
}

//Funções que habilitam/desabilitam a div que mostram os valores digitados no input.
function mostraDadosJog(elemento) {
    var display = document.getElementById(elemento).style.display;
    if (display == "none") {
        document.getElementById(elemento).style.display = 'block';
        document.getElementById("jogar").value = "Ocultar dados";
    } else {
        document.getElementById(elemento).style.display = 'none';
        document.getElementById("jogar").value = "Ver dados";
    }
}

//Funções que gravam os dados digitados no input.
function pegaDadosJ1() {
    document.getElementById("nomeDoJ1").innerHTML = document.getElementById("nomej1").value;
    document.getElementById("nickDoJ1").innerHTML = document.getElementById("nickj1").value;
    document.getElementById("idadeDoJ1").innerHTML = document.getElementById("idadej1").value;
}

function pegaDadosJ2() {
    document.getElementById("nomeDoJ2").innerHTML = document.getElementById("nomej2").value;
    document.getElementById("nickDoJ2").innerHTML = document.getElementById("nickj2").value;
    document.getElementById("idadeDoJ2").innerHTML = document.getElementById("idadej2").value;
}
//Funções que começam o áudio.
var a = 0;

function execSom() {
    var playAudio = document.getElementById("player");
    if (a == 0) {
        a++;
        var playAudio = document.getElementById("player");
        playAudio.play();
    } else if (a == 1) {
        a--;
        playAudio.src = "#";
    }
}

function somQueRufemOsTabores() {
    document.getElementById("aplausos").pause();
    var playAudio = document.getElementById("rufando");
    playAudio.play();
}

function exeSom() {
    document.getElementById("rufando").pause();
    document.getElementById("aplausos").src = "Aplausos.mp3";
    var playAudio = document.getElementById("aplausos");
    playAudio.play();
}

function exeSomTriste() {
    document.getElementById("rufando").pause();
    document.getElementById("aplausos").src = "PlateiaTriste.wav";
}

function somClick() {
    var playAudio = document.getElementById("somDoClick");
    playAudio.play();
}

function somWin() {
    document.getElementById("aplausos").src = "#";
    var playAudio = document.getElementById("somRay");
    playAudio.play();
}