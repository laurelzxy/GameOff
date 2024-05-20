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