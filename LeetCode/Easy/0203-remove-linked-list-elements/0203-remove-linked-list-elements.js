/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let curHead = head;

    while(curHead?.next) {
        if(curHead.next?.val === val) {
            curHead.next = curHead.next.next;
        } else {
            curHead = curHead.next;
        }
    }

    if(head?.val === val) {
        if(head.next) {
            head = head.next;
        } else {
            head = null;
        }
    }

    return head;
};