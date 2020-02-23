/**
 * 功能: 通过id来获取元素
 * @param {*} id 
 */
function getEleById(id) {
    return document.getElementById(id);
}

/**
 * 功能: 给定元素查找它的第一个子元素节点,并返回
 * @param {*} ele 
 */
function getFirstNode(ele) {
    return ele.firstElementChild || ele.firstChild;;
}
/**
 * 功能: 给定元素查找它的最后一个子元素节点,并返回
 * @param {*} ele 
 */
function getLastNode(ele) {
    return ele.lastElementChild || ele.lastChild;
}
/**
 * 功能: 给定元素查找它的下一个子元素节点,并返回
 * @param {*} ele 
 */
function getNextNode(ele) {
    return ele.nextElementSibling || ele.nextSibling;
}
/**
 * 功能: 给定元素查找它的上一个子元素节点,并返回
 * @param {*} ele 
 */
function getPrevNode(ele) {
    return ele.previousElementSibling || ele.previousSibling;
}
/**
 *  功能:返回指定索引的兄弟节点 
 *  @param ele  元素节点 
 *  @param index 索引值
 *  @return {HTMLElement}
 * ***/
function getEleOfIndex(ele, index) {
    return ele.parentNode.children[index];
}
/**
 *  功能:给定元素查找它的所有兄弟元素,并返回数组
 *  @param ele  元素节点 
 *  @return {Array}
 * ***/
function getAllSiblings(ele) {
    var newArr = [];
    var arr = ele.parentNode.children;
    for (var i = 0; i < arr.length; i++) {
        if (ele !== arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}