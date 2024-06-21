/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q|| typeof p === "undifineded" && q === "undifineded")    return true;
    
    if(p && !q || p && !q)    return false;
    if(typeof p !== "undifineded" && q === "undifineded" ||
    typeof p === "undifineded" && q !== "undifineded") {
        return false;
    }
    
    if(p?.val !== q?.val) return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};