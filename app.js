const squares=document.querySelectorAll('.square')
const timeLeft=document.querySelector('#time-left')
const score=document.querySelector('#score')
const molePosition=document.querySelector('.mole')
const hit=document.querySelector('#hit-sound')
const gameOver=document.querySelector('#game-over')


let result=0
let hitPosition
let currentTime=60
let timerId=null

function randomSquares(){
    squares.forEach(square=>{
        square.classList.remove('mole')
    })

    let randomPosition=squares[Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole')
    hitPosition=randomPosition.id
}

squares.forEach(square=>{
    square.addEventListener('mousedown', ()=>{
     if(square.id==hitPosition){
        result++;
        hit.play()
        score.textContent=result
        hitPosition=null
     }
    })
})

function countDown(){
    currentTime--;
    timeLeft.textContent=currentTime
    if(currentTime==0){
        gameOver.play()
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        
    }
}

function moveMole(){
    timerId=setInterval(randomSquares,800)
}

moveMole()
let countDownTimerId= setInterval(countDown,1000)