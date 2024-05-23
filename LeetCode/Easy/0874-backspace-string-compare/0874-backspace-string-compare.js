/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {

    return getResult(s) === getResult(t);
};

function getResult(str) {
    let resultS = "";
    for (let i = 0; i < str.length; i++) {
        if(str[i] === "#") {
            resultS = resultS.slice(0, -1);
        } else {
            resultS += str[i];
        }
    }
    return resultS;
}