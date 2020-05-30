let nomesConvidados = []
let indiceEdicao = -1
let erros = []

function salvar() {
    let nome = document.getElementById("nomeConvidado").value
    let idade = document.getElementById("idadeConvidado").value
    let email = document.getElementById("emailConvidado").value
    let valido = true

    if (!nome) {
        erros.push("O mome é obrigatório")
        valido = false
    }
    if (!idade) {
        erros.push("A idade é obrigatória")
        valido = false
    }
    if (!email) {
        erros.push("O email é obrigatório")
        valido = false
    }
    if (!valido) {
        exibirErros()
        return
    }

    if (indiceEdicao > -1) {
        nomesConvidados[indiceEdicao] = { nome, idade, email }

    } else {
        nomesConvidados.push({ nome, idade, email })

    }
    atualizarLista()
    limparFormulario()


}

function exibirErros() {
    let secaoErros = document.getElementById("erros")
    secaoErros.innerHTML = ""
    erros.forEach(e => {

        secaoErros.innerHTML = secaoErros.innerHTML += `
                <div class="col col-7 alert alert-danger alert-dismissible fade show" role="alert">
                    ${e}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                `
    })
    erros = []
}

function limparFormulario() {
    indiceEdicao = -1
    document.getElementById("nomeConvidado").value = ""
    document.getElementById("idadeConvidado").value = ""
    document.getElementById("emailConvidado").value = ""

}

function atualizarLista() {
    let lista = document.getElementById("divLista")
    let tabela = document.getElementById("tabela")
    lista.innerHTML = ""

    for (let i = 0; i < nomesConvidados.length; i++) {
        tabela.style.visibility = "visible"
        lista.innerHTML = lista.innerHTML + `<tr>
                           <td> ${i}</td>  
                           <td> ${nomesConvidados[i].nome}</td>  
                           <td> ${nomesConvidados[i].idade} </td>
                           <td> ${nomesConvidados[i].email}</td>    
                           <td> 
                           <button onclick="editar(${i})" class="btn btn-link">
                           <img src="img/pencil.svg" width ="30px" alt="icone editar">
                          </button> 
                             <button onclick="remover(${i})" class="btn btn-link">
                                <img src="img/trash.svg" width ="30px" alt="icone lixeira">
                             </button> 
                           </td>    
                           </tr>`
    }

    lista.scrollTop = lista.scrollHeight - lista.clientHeight;


}

function remover(i) {
    let tabela = document.getElementById("tabela")
    nomesConvidados.splice(i, 1)
    tabela.style.visibility = "hidden"
    atualizarLista()

}

function editar(i) {
    indiceEdicao = i
    document.getElementById("nomeConvidado").value = nomesConvidados[i].nome
    document.getElementById("idadeConvidado").value = nomesConvidados[i].idade
    document.getElementById("emailConvidado").value = nomesConvidados[i].email

}

function limpar() {
    let lista = document.getElementById("divLista")
    let tabela = document.getElementById("tabela")
    tabela.style.visibility = "hidden"
    lista.innerHTML = ""
    nomesConvidados = []
    limparFormulario()
}