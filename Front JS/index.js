import { Bin2Dec } from "../Back NodeJS/convert.js"
import { testaConexao, bin2Dec, dec2bin, bin2hex } from "./services.js"
var converter = document.querySelector("#converter") // Pega o botão Cadastrar no HTML

if(!testaConexao()){
    alert('Erro ao se conectar ao sistema')
    converter.classList.add('disabled')
    converter.setAttribute('disabled',null)
}

converter.addEventListener("click", function (e) {
    e.preventDefault() // evita que a página recarregue

    var form = document.querySelector("#formulario") // Pega os dados inseridos no formulário
    var valor = form.valor.value
    if(valor.length == 0){
        alert('Preencha o valor')
        return
    }
    form.reset() // Limpa o Form
    form.convertido.value = Bin2Dec(valor)
})