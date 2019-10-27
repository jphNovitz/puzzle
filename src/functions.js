/**
 * functions.js
 * @description mix of general functions that will be used in th main js
 * @author Novitz Jean-Philippe <jphi@jphnovitz.be>
 */

/**
 * @description nNextSibling method determine whether the n sinling of the element exist (n is the level)
 * @param element
 * @param level
 * @returns {*}
 * @author Novitz Jean-Philippe <jphi@jphnovitz.be>
 *
 */
function nNextSibling(element, level) {
    for (let i = 0; i < level; i++) {
        if (element === undefined || element.nextElementSibling === undefined || element.nextElementSibling === null)
            return false;
        element = element.nextElementSibling;
    }
    return element;
}

/**
 * @description nNextSibling method determine whether the n sinling of the element exist (n is the level)
 * @param element
 * @param level
 * @returns {*}
 * @author Novitz Jean-Philippe <jphi@jphnovitz.be>
 */
function nPreviousSibling(element, level) {
    for (let i = 0; i < level; i++) {
        if (element == null || element.previousElementSibling === undefined || element.previousElementSibling === null)
            return false;
        element = element.previousElementSibling;
    }

    return element;
}

/**
 * @description give the index of the element in his parent
 * @param element
 * @returns {number}
 * @author Novitz Jean-Philippe <jphi@jphnovitz.be>
 */
function childIndex(element){
    let children = element.parentNode.children ;
    for (let i = 0 ; i <= children.length; i++){
        if (children[i] === element) return i+1;
    }
    return -1;
}