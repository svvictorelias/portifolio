var portifolio = document.querySelector('.todos-projetos')
var sobreMim = document.querySelector('.sessao-sobre-mim')
var leftbtn = document.querySelector('.sessao-sobre')
var title = document.querySelector('.sessao-portifolio')

const textQrcode = document.querySelector('#textQrcode')
const textMusic = document.querySelector('#textMusic')
const textNft = document.querySelector('#textNft')
const textTipCalculator = document.querySelector('#textTipCalculator')
const textCalculator = document.querySelector('#textCalculator')

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
function DescGit(){
    fetch('https://api.github.com/repos/svvictorelias/QrCode')
    .then(resp => resp.json())
    .then(desc =>
    textQrcode.innerHTML = desc.description)

    fetch('https://api.github.com/repos/svvictorelias/music-plan')
    .then(resp => resp.json())
    .then(desc =>
    textMusic.innerHTML = desc.description)

    fetch('https://api.github.com/repos/svvictorelias/nft-card')
    .then(resp => resp.json())
    .then(descQR =>
    textNft.innerHTML = descQR.description)

    fetch('https://api.github.com/repos/svvictorelias/calculadora')
    .then(resp => resp.json())
    .then(descQR =>
        textCalculator.innerHTML = descQR.description)
  }
  DescGit()