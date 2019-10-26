function shuffle() {
    for (let i = 0; i < 100; i++) {
        setTimeout(function () {
            let target = document.getElementById('t12')
            let up = nPreviousSibling(target, 4)
            let left = nPreviousSibling(target, 1)
            let down = nNextSibling(target, 4)
            let right = nNextSibling(target, 1)
            let randTarget = Math.floor(Math.random() * 4) + 1;
            switch (randTarget) {
                case 1:
                    if (up) {
                        let temp = target.id
                        target.id = up.id
                        up.id = temp
                    } else i--;
                    break;
                case 2:
                    if (left) {
                        let temp = target.id
                        target.id = left.id
                        left.id = temp
                    } else i--;
                    break;
                case 3:
                    if (down) {
                        let temp = target.id
                        target.id = down.id
                        down.id = temp
                    } else i--;
                    break;
                case 4:
                    if (right && childIndex(target) % 4 !== 0) { // childIndex avoid swapping righter uo and lefter under it
                        let temp = target.id
                        target.id = right.id
                        right.id = temp
                    } else i--;
                    break;

            }
        }, 60 * i, i)
    }

    start_timer()
}
