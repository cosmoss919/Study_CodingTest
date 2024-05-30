/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let result = '';

    if(s === '') {
        return true;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < t.length; j++) {
            if(t[j] === s[i]) {
                result += s[i];
                i++;
            }
        }
    }

    return result === s;
};