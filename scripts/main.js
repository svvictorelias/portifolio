var portifolio = document.querySelector('.todos-projetos')
var sobreMim = document.querySelector('.sessao-sobre-mim')
var leftbtn = document.querySelector('.sessao-sobre')
var title = document.querySelector('.sessao-portifolio')

function changeSobreMim(){
    portifolio.style.display = "flex"
    title.style.display = "flex"
    sobreMim.style.display = "none"
    leftbtn.style.display = "none"
}
function changePortifolio(){
    portifolio.style.display = "none"
    title.style.display = "none"
    sobreMim.style.display = "flex"
    leftbtn.style.display = "flex"
}