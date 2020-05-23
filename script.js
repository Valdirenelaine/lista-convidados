let nomesConvidados = []

function adicionar() {
    let nome = document.getElementById("nomeConvidado").value
    let idade = document.getElementById("idadeConvidado").value
    let email = document.getElementById("emailConvidado").value


    if (nome == "") {
        alert("Preencha o nome do Convidado")
    } else
    if (idade == "") {
        alert("Preencha a idade do Convidado")
    } else
    if (email == "") {
        alert("Preencha o email do Convidado")
    } else {
        nomesConvidados.push({ nome, idade, email })
        atualizarLista()

    }
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

function limpar() {
    let lista = document.getElementById("divLista")
    let tabela = document.getElementById("tabela")
    tabela.style.visibility = "hidden"
    lista.innerHTML = ""
    nomesConvidados = []

}