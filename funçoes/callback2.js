const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname)

function exibirConteudo(err, conteudo) {
    console.log(conteudo.toString())
}
console.log('Inicio...')
fs.readFile(caminho, exibirConteudo("",""))
fs.readFile(caminho,(_, conteudo) => console.log(conteudo.toString()))
console.log('Fim...') 


console.log('Inicio Synic...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Synic...')