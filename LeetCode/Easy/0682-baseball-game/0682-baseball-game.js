/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let result = [];
    for (const operation of operations) {
        if(!isNaN(operation)) {
            result.push(Number(operation));
        } else if(operation === "+") {
            result.push(result[result.length - 2] + result[result.length - 1])
        } else if(operation === "D") {
            result.push(2 * result[result.length - 1]);
        } else if(operation === "C") {
            result.pop();
        }
    }

    return result.length ? result.reduce((x, y) => {
        return x + y ;
    }) : 0;
};