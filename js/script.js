let x = document.querySelector('.x')
let o = document.querySelector('.o')

let boxes = document.querySelectorAll(".box")

let buttons = document.querySelectorAll('#bt-container button')

let messageContainer = document.querySelector('#message')

let messageText = document.querySelector('#message p')

let back = document.querySelector('#voltar')

let secondPlayer

//contador de jogadas
let player1 = 0
let player2 = 0

//adicionando o evento click aos boxes
for (let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener("click", function () {

        let el = checkEl(player1, player2)

        //verifica se já tem x ou o n
        if (this.childNodes.length == 0) {

            let cloneEl = el.cloneNode(true)

            this.appendChild(cloneEl)

            //computar jogada

            if (player1 == player2) {
                player1++

                if(secondPlayer == 'bt-ai') {

                    //função executar jogada
                    computerPlay()
                    player2++
                }
            } else {
                player2++
            }

            //checa quem ganha
            checkWinCondition()
        }

    })
}

//eventos para saber se é player ou IA
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {

        secondPlayer = this.getAttribute("id")

        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none'
            
        }

        setTimeout(() => {
            
            let container = document.getElementById('container')
            container.classList.remove('hide')
            back.style.display = 'inline-block'

        }, 500);
    })
}


//qm vai jogar
function checkEl(player1, player2) {

    if (player1 == player2) {
        //x
        el = x
    } else {
        //o
        el = o
    }

    return el
}

//checar qm ganha 
function checkWinCondition() {

    let b1 = document.getElementById('block1')
    let b2 = document.getElementById('block2')
    let b3 = document.getElementById('block3')
    let b4 = document.getElementById('block4')
    let b5 = document.getElementById('block5')
    let b6 = document.getElementById('block6')
    let b7 = document.getElementById('block7')
    let b8 = document.getElementById('block8')
    let b9 = document.getElementById('block9')

    //horizontal 3 maneiras de ganhar

    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0 ) {
        
        let b1Child = b1.childNodes[0].className
        let b2Child = b2.childNodes[0].className
        let b3Child = b3.childNodes[0].className

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            //x venceu
            declaraWinner('x')
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            //o venceu
            declaraWinner('o')
        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0 ) {
        
        let b4Child = b4.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b6Child = b6.childNodes[0].className

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            //x venceu
            declaraWinner('x')
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            //o venceu
            declaraWinner('o')
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0 ) {
        
        let b7Child = b7.childNodes[0].className
        let b8Child = b8.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            //x venceu
            declaraWinner('x')
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            //o venceu
            declaraWinner('o')
        }
    }

    //vertical

    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0 ) {
        
        let b1Child = b1.childNodes[0].className
        let b4Child = b4.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            //x venceu
            declaraWinner('x')
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            //o venceu
            declaraWinner('o')
        }
    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0 ) {
        
        let b2Child = b2.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b8Child = b8.childNodes[0].className

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            //x venceu
            declaraWinner('x')
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            //o venceu
            declaraWinner('o')
        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0 ) {
        
        let b3Child = b3.childNodes[0].className
        let b6Child = b6.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            //x venceu
            declaraWinner('x')
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            //o venceu
            declaraWinner('o')
        }
    }

    //diagonal

    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0 ) {
        
        let b1Child = b1.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            //x venceu
            declaraWinner('x')
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            //o venceu
            declaraWinner('o')
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0 ) {
        
        let b3Child = b3.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            //x venceu
            declaraWinner('x')
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            //o venceu
            declaraWinner('o')
        }
    }

    //deu velha
    let counter = 0

    for (let i = 0; i < boxes.length; i++) {
        
        if(boxes[i].childNodes[0] != undefined) {
            counter++
        }

        if(counter == 9) {
            //deu velha
            declaraWinner('Deu velha')
        }
        
    }
}

function declaraWinner(winner) {

    let scoreBoardX = document.getElementById('score-board1')
    let scoreBoardO = document.getElementById('score-board2')
    let msg = ''


    if (winner == 'x') {
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1
        msg = "O jogador 1 venceu!"
    } else if(winner == 'o' && secondPlayer == 'ai-player') {
        scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1
        msg = 'A IA venceu!'
    } else if (winner == 'o') {
        scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1
        msg = "O jogador 2 venceu!"
    } else {
        msg = "Deu velha"
    }

    messageText.innerHTML = msg
    messageContainer.classList.remove('hide')

    setTimeout(() => {
        messageContainer.classList.add('hide')
    }, 2000)


    //zera jogadass
    player1 = 0
    player2 = 0

    //remove os x e os o
    let boxestoRemove = document.querySelectorAll('.box div')

    for(let i = 0; i < boxestoRemove.length; i++) {
        boxestoRemove[i].parentNode.removeChild(boxestoRemove[i])
    }
}

function computerPlay() {

    let cloneO = o.cloneNode(true)
    counter = 0
    filled = 0 //verificar qnts estão preenchidos

    for(let i = 0; i < boxes.length; i++) {
        
        let randomNumber = Math.floor(Math.random() * 5)
        
        console.log(randomNumber)
        //só preenche se for undefined, ou seja, vazio
        if(boxes[i].childNodes[0] == undefined) {
            if(randomNumber <= 1) {
                boxes[i].appendChild(cloneO)
                counter++

                break;
            }
            //só cai no else se a caixa que ele escolher estiver preenchida
        } else {
            filled++
        }
    }

    //se counter for 0 quer dizer que o jogo começou
    //se não estiver tudo preenchido acontece a recursividade
    if(counter == 0 && filled < 9) {
        computerPlay()
    }
}

back.addEventListener("click", function() {
    
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = 'inline-block' 
    }
    back.style.display = 'none'
    container.classList.add('hide')

    player1 = 0
    player2 = 0

    let boxestoRemove = document.querySelectorAll('.box div')
 
    for(let i = 0; i < boxestoRemove.length; i++) {
        boxestoRemove[i].parentNode.removeChild(boxestoRemove[i])
    }
    


})







