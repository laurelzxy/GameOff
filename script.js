let menu = document.getElementById("menu")

let iconesBarras=document.getElementById("barras")

let iconesMenos=document.getElementById("menos")

const abrirFecharMenu = ()=>{
    if(menu.classList.contains("menuFechado")){
        menu.classList.remove("menuFechado")
        iconesBarras.style.display = "inline"
        iconesMenos.style.display = "none"
        menu.style.display = "none"
    }else {
        menu.classList.add("menuFechado")
        iconesBarras.style.display = "none"
        iconesMenos.style.display = "inline"
        menu.style.display = "inline-flex"
    }
}

const solicitarOrcamento = (event) => {
    // Pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value

    // Organizar objeto com os valores
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    // Enviar requisicao para a api
    // 127.0.0.1 = localhost
    // Método HTTP POST - Create -> Cadastrar ou criar 
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => {
        console.log(resposta)

        // Limpar os campos (inputs)
        document.querySelector("#contato form").reset()

        // Mostrar alert com msg de sucesso
        alert("Solicitação cadastrada")
    })
    .catch(erro => {
        // CASO ERRO - alert com msg erro
        console.error(erro)
        alert("Erro na requisição")
    })

    event.preventDefault()
}