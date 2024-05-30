var isPalindrome = function(s) {
    if(s.length < 2) {
        return true;
    }

    let lowS = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
    let i = 0;
    const mid = Math.ceil(lowS.length * 0.5);
    for (let j = lowS.length - 1; j >= mid; j--) {
        if(lowS[i] !== lowS[j]) {
            return false;
        }
        i++;
    }

    return true;
};