/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {    this.val = (val===undefined ? 0 : val);    this.next = (next===undefined ? null : next);}

var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 =[];
    let l1cur = l1;
    let l2cur = l2;
    while (l1cur?.val !== undefined || l2cur?.val !== undefined) {
        if(l1cur?.val !== undefined)   stack1.push(l1cur.val);
        if(l2cur?.val !== undefined)   stack2.push(l2cur.val);

        l1cur = l1cur?.next;
        l2cur = l2cur?.next;
    }

    let head = null;
    const legth = stack1.length > stack2.length ? stack1.length : stack2.length;
    let plus = 0;
    for (let i = legth - 1; i >= 0; i--) {
        let calc = (stack1.pop() | 0) + (stack2.pop() | 0);
        head = new ListNode((calc + plus) % 10, head);

        plus = calc + plus >= 10 ? Math.floor((calc + plus) / 10) : 0;
    }

    if(plus > 0) {
        head = new ListNode(plus, head);
    }

    return head !== null ? head : new ListNode(0);
};