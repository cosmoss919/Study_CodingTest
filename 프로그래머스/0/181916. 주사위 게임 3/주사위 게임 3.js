function solution(a, b, c, d) {
    let map = new Map();
    map.set(a, 'a');
    map.set(b, map.has(b) ? map.get(b) +'b' : 'b');
    map.set(c, map.has(c) ? map.get(c) +'c' : 'c');
    map.set(d, map.has(d) ? map.get(d) +'d' : 'd');

    if(map.size === 1) {
        return 1111 * a;
    } else if(map.size === 2) {
        let type31 = false;
        let p = 0;
        let q = 0;
        for (const m of map) {
            if(m[1].length > 2) { // 3 : 1
                type31 = true;
                p = m[0];
                map.delete(p);
                q = [...map.keys()][0];
                break;
            }
        }
        if(type31 === true) {
            return Math.pow(10 * p + q, 2);
        } else {
            let maps = [...map.keys()];
            p = maps[0];
            q = maps[1];
            return (p + q) * (Math.abs(p - q));
        }
    } else if(map.size === 3) {
        for (const m of map) {
            if(m[1].length > 1) {
                map.delete(m[0]);
                break;
            }
        }
        return [...map.keys()].reduce((acc, cur) => acc * cur, 1);
    } else {
        return Math.min(a, b, c, d);
    }
}