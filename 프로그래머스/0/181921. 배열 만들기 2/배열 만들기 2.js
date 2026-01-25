function solution(l, r) {
    const result = [];

    for (let i = l; i <= r; i++) {
        const str = String(i);

        let ok = true;
        for (let ch of str) {
            if (ch !== '0' && ch !== '5') {
                ok = false;
                break;
            }
        }

        if (ok) result.push(i);
    }

    return result.length ? result : [-1];
}
