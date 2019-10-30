/**
 *  timer.js
 *  @description manage all timer functions like start and stop
 *  @author Novitz Jean-Philippe <jphi@jphnovitz.be>
 *
 */

function start_timer() {
    s = m = 0;
    runChrono = setInterval(function () {
        var formatS = ("0" + s).slice(-2);
        timer.innerText = m + ' : ' + formatS
        var formatM = ("0" + m).slice(-2);
        timer.innerText = formatM + ' : ' + formatS
        chrono = formatM + ' : ' + formatS ;
        s++;
        if (s === 60) {
            s = 0
            m++
            score = checkScore() ;
            document.getElementById('indice').innerText = 'Indice: ' + score + ' pièces sont bien placées';
        }
    }, 1000)
    document.getElementById('btn-stop').classList.remove('disabled');
}

function stop_timer() {
    clearInterval(runChrono)
    return true;
}
