/**
 * Puzzle.js
 * mix thumbnail to shuffle the big picture
 * then launch a timer
 * It's a game
 *
 * @author Novitz Jean-Philippe <hello@jphnovitz.be>
 * @created october 2019
 *
 */

/* variables */

var chrono = "00 : 00";
var score = 0;
var parent = document.getElementById('container');
var children = parent.getElementsByClassName('thumb')
const container = document.getElementById('container');

container.addEventListener('click', function (e) {

    let target = e.target;
    let up = nPreviousSibling(target, 4)
    let left = nPreviousSibling(target, 1)
    let down = nNextSibling(target, 4)
    let right = nNextSibling(target, 1)
    let index = childIndex(target)

    if (up !== undefined && up !== null && up.id === 't12' ) {
        let temp = target.id
        target.id = up.id
        up.id = temp
    } else if (down !== undefined && down !== null && down.id === 't12') {
        let temp = target.id
        target.id = down.id
        down.id = temp
    } else if (left !== undefined && left !== null && left.id === 't12') {
        let temp = target.id
        target.id = left.id
        left.id = temp
    } else if (right !== undefined && right !== null && right.id === 't12' && index%4 !== 0) {
        let temp = target.id
        target.id = right.id
        right.id = temp
    }

    // let parentId = target.parentNode.id;
    // if (target !== undefined && target.id.startsWith('t')) {
    // }

})

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


function checkScore() {
    let score = 0;
    for (let i = 0; i < children.length; i++) {
        if (children[i].id.substr(1) == (i + 1)) {
            score++;
        }
    }
    return score;
}

function stop() {
    clearInterval(runChrono);

    if (checkScore() >= children.length) finalResult = "BRAVO, Vous avez réussi le Puzzle !"
        else finalResult = "Vous n'avez pas Réussi ! ";

    let divResult = document.getElementById('result');
    let comment = document.createElement('p');
    comment.innerText = 'Votre temps: ' + chrono;

    divResult.getElementsByTagName('h1')[0].append(finalResult);
    divResult.getElementsByTagName('h2')[0].append(comment);

    divResult.style.zIndex = 2;
    divResult.style.opacity = 1;
    divResult.style.visibility = 'visible';

    document.getElementById('btn-stop').classList.add('disabled');
    return true;
}

