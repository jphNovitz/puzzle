/**
 * Puzzle.js
 * mix thumbnail to shuffle the big picture
 * then lauch a timer
 * I's a game
 *
 * @author Novitz Jean-Philippe <hello@jphnovitz.be>
 * @created october 2019
 *
 */

/* variables */
var orders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var chrono = "00 : 00";
var score = 0 ;
var parent = document.getElementById('container');
var children = parent.getElementsByClassName('thumb')

/* event listener on all the thumbnails */
for (let i = 0; i < children.length; i++) {
    children[i].addEventListener('click', el => {
        if (children[i + 1] !== undefined && children[i + 1].id === 't12') {
            if ((i + 1) % 4 !== 0) {
                let temp = children[i].id
                children[i].id = children[i + 1].id
                children[i + 1].id = temp
            }
        } else if (children[i - 1] !== undefined && children[i - 1].id === 't12') {
            let temp = children[i].id
            children[i].id = children[i - 1].id
            children[i - 1].id = temp
        } else if (children[i + 4] !== undefined && children[i + 4].id === 't12') {
            let temp = children[i].id
            children[i].id = children[i + 4].id
            children[i + 4].id = temp
        } else if (children[i - 4] !== undefined && children[i - 4].id === 't12') {
            let temp = children[i].id
            children[i].id = children[i - 4].id
            children[i - 4].id = temp
        }
        score = checkScore()
        if (score >= children.length){
            stop();

        }
    })
}


function mix() {
    orders.sort(() => Math.random() - 0.5);

    for (let i = 0; i < children.length; i++) {
        setTimeout(function () {
            if (children[i].id !== 't12') {
                children[i].removeAttribute('id')
                children[i].id = 't' + orders[i]
            } else {
                orders.push(orders[i])
            }
        }, 200 * i, i)
    }
    start_timer()
    document.getElementById('cancel').style.display = 'inline-block';
}

function reset() {
    document.getElementById('result').style.opacity = 0;
    document.getElementById('result').style.zIndex = -1;
    for (let i = 0; i < children.length; i++) {
        children[i].removeAttribute('id')
        let j = i + 1
        parent.children[i].id = 't' + j
    }
    timer.innerText = '00 : 00';
    document.getElementById('indice').innerText = '';
}

// function start_timer() {
//     s = m = 0;
//     runChrono = setInterval(function () {
//         var formatS = ("0" + s).slice(-2);
//         timer.innerText = m + ' : ' + formatS
//         var formatM = ("0" + m).slice(-2);
//         timer.innerText = formatM + ' : ' + formatS
//         chrono = formatM + ' : ' + formatS ;
//         s++;
//         if (s === 60) {
//             s = 0
//             m++
//             score = checkScore() ;
//             document.getElementById('indice').innerText = 'Indice: ' + score + ' pièces sont bien placées';
//         }
//     }, 1000)
// }

function stop_timer() {
    clearInterval(runChrono)
    return true;
}

function checkScore() {
    let score = 0 ;
    for (let i = 0; i < children.length; i++) {
        if ( children[i].id.substr(1) == (i+1)){
            score++;
        }
    }
    return score;
}

function stop() {
    clearInterval(runChrono);
    let finalResult = "Vous n'avez pas Réussi ! ";
    if (checkScore() >= children.length) finalResult = "BRAVO, Vous avez réussi le Puzzle !"
    let divResult = document.getElementById('result');
    let titleH2 = divResult.getElementsByTagName('h2')[0];
    titleH2.append(finalResult);
    let comment = document.createElement('p');
    comment.innerText = 'Votre temps: ' + chrono;

    titleH2.append(comment);

    divResult.style.zIndex = 2;
    divResult.style.opacity = 1;

    return true;
}