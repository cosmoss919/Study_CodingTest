/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const pathList = path.split('/');
    const result = [];
    for (const p of pathList) {
        if(p === '.' || p === '') {
            continue;
        }
        if(p === '..') {
            if(result.length > 0)   result.pop();
            continue;
        }
        result.push(p);
    }

    return '/' + result.join('/');
};

console.log(simplifyPath("/../"));