var textInput = document.querySelector("#input_Texto");
var outInput = document.querySelector("#output_Texto");
var textInput = document.querySelector("#input_Texto");
var btnCriptografar = document.querySelector("#btn_Criptografar");
var btnDescriptografar = document.querySelector("#btn_Descriptografar");



function criptografar(){
    var texto = textInput.value;

    var resultCripto =  texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output_Texto').innerHTML = '<textarea readonly id="input_Texto_Copiavel">' + resultCripto +'</textarea>' + '<button class="button_Copiar" id="copiar"onclick="copiar()">Copiar</button>'
}

function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g,"u");

    document.getElementById('output_Texto').innerHTML = '<textarea readonly id="input_Texto_Copiavel">' + resultDescripto +'</textarea>'+'<button class="button_Copiar" id="copiar"onclick="copiar()">Copiar</button>'
}

function copiar(){
    var textoParaCopiar = document.getElementById('input_Texto_Copiavel');

    if (navigator.clipboard && textoParaCopiar) {
        navigator.clipboard.writeText(textoParaCopiar.value).then(() => {
            alert("Texto copiado com sucesso!");
        }).catch(err => {
            console.error('Erro ao copiar o texto: ', err);
            alert("Erro ao copiar o texto.");
        });
    } else {
        
        textoParaCopiar.select();
        document.execCommand('copy');
        alert("Texto copiado com sucesso!");
    }
}

function verificarTexto() {
 
    var texto = textInput.value;
    var textoInvalido = textInput.value.match(/[A-ZÀ-Üà-ü]/) || textInput.value === "";

    btnCriptografar.disabled = textoInvalido;
    btnDescriptografar.disabled = textoInvalido;

    btnCriptografar.classList.toggle("disabled", textoInvalido);
    btnDescriptografar.classList.toggle("disabled", textoInvalido);

    if (!texto) {
        
        outInput.innerHTML = '<img class="imagem de espera" src="./assets/Spider_esperando.png" alt="logo do spider-man pendurado">' +
                             '<h2>Mensagem!</h2>' +
                             '<span>Digite um texto que deseja criptografar ou descriptografar</span>';
    }
}

textInput.addEventListener("input", verificarTexto);

verificarTexto();