function bomDia(){
    console.log('bom dia!')
}


const bomTarde = function abc()  {
    console.log('bom tarde!')
}


function executaQualquerCoisa(fn) {
    console.log(typeof fn === 'function') 
        return
     
}
    //fn()


executaQualquerCoisa(3)
executaQualquerCoisa(bomDia)
executaQualquerCoisa(bomTarde)

//2 retonar uma funcao a partir de outra funçao 

function potencia(base, exp) {
    return function (exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia (2)
console.log(pontenciaDe2(8))

const pot34 = pontencial(3)(4)
console.log(pot34)
