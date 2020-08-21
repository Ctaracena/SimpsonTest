let cont = 0
let scrollY = 490

let result = document.querySelector('.result')
let scoreTitle = document.querySelector('.scoreTitle')
let scoreCant = document.querySelector('.score')
let msg = document.querySelector('.message')
let scoreButton = document.querySelector('.score-button')
let imagen1 = document.querySelector('.imagen1')
let imagen2 = document.querySelector('.imagen2')
let imagen3 = document.querySelector('.imagen3')
let imagen4 = document.querySelector('.imagen4')
let startBtn = document.querySelector('.start')
let quiz = document.querySelector('.quiz')
let resetBtn = document.querySelector('.reset-container')

function start() {
    quiz.style.display = 'block'
    window.scrollBy(0, scrollY)
    startBtn.style.display = 'none'
}

function ok(itsOk, btn1, btn2, btn3) {
    let ok = document.querySelector(itsOk)
    let button1 = document.querySelector(btn1)
    let button2 = document.querySelector(btn2)
    let button3 = document.querySelector(btn3)
    cont += 1
    ok.disabled = true
    ok.style.backgroundColor = '#7BC242'
    ok.innerHTML = 'Correcto!'
    button1.disabled = true
    button2.disabled = true
    button3.disabled = true
    console.log(cont)
    
}

function wrongOne(itsOk, btn1, btn2, btn3) {
    let ok = document.querySelector(itsOk)
    let button1 = document.querySelector(btn1)
    let button2 = document.querySelector(btn2)
    let button3 = document.querySelector(btn3)
    button1.style.backgroundColor = '#F14E28'
    button1.innerHTML = 'Incorrecto :('
    ok.disabled = true
    ok.style.backgroundColor = '#7BC242'
    button1.disabled = true
    button2.disabled = true
    button3.disabled = true
    
}

function wrongTwo(itsOk, btn1, btn2, btn3) {
    let ok = document.querySelector(itsOk)
    let button1 = document.querySelector(btn1)
    let button2 = document.querySelector(btn2)
    let button3 = document.querySelector(btn3)
    button2.style.backgroundColor = '#F14E28'
    button2.innerHTML = 'Incorrecto :('
    ok.disabled = true
    ok.style.backgroundColor = '#7BC242'
    button1.disabled = true
    button2.disabled = true
    button3.disabled = true

}


function wrongThree(itsOk, btn1, btn2, btn3) {
    let ok = document.querySelector(itsOk)
    let button1 = document.querySelector(btn1)
    let button2 = document.querySelector(btn2)
    let button3 = document.querySelector(btn3)
    button3.style.backgroundColor = '#F14E28'
    button3.innerHTML = 'Incorrecto :('
    ok.disabled = true
    ok.style.backgroundColor = '#7BC242'
    button1.disabled = true
    button2.disabled = true
    button3.disabled = true
    
}

function score() {
    setInterval(() => {
        resetBtn.style.display = 'flex'
    },1000)
    result.style.display = 'flex'
    scoreCant.style.fontWeight = 'bold'
    scoreCant.style.fontSize = '24px'
    msg.style.backgroundColor = '#00947E'
    msg.style.color = 'white'
    scoreButton.style.display = 'none'
    window.scrollBy(0, scrollY)
    

    if (cont == 20) {
        imagen1.style.display = 'block'
        scoreCant.innerHTML = `${cont} / 20`
        msg.innerHTML = 'Vaya!!! si que eres un verdadero Fan de Los Simpson'
    } else if (cont > 15 && cont < 20) {
        imagen4.style.display = 'block'
        scoreCant.innerHTML = `${cont} / 20`
        msg.innerHTML = 'Muy Bien! conoces bastante acerca de Los Simpson'
    } else if (cont > 10 && cont <= 15) {
        imagen2.style.display = 'block'
        scoreCant.innerHTML = `${cont} / 20`
        msg.innerHTML = 'Bien! Acertaste más de la mitad'
    } else {
        imagen3.style.display = 'block'
        scoreCant.innerHTML = `${cont} / 20`
        msg.innerHTML = 'Necesitas de una buena maratón de Los Simpson!'
    }
}

const reset = () => location.reload()
