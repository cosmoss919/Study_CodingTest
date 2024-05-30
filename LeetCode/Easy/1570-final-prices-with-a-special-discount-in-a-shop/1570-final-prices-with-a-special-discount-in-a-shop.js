/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const stack = [];
    for (let i = 0; i < prices.length; i++) {
        let price = prices[i];
        for (let j = i; j < prices.length; j++) {
            const next = prices[j + 1];
            if(next && next <= price) {
                stack.push(price - next);
                break;
            }

            if(j === prices.length - 1) stack.push(price);
        }

    }

    return stack;
};