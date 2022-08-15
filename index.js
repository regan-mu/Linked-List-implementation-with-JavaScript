// Create a list class
class List {
    constructor(head=null){
        this.head = head;
    }
    // Get first Node
    getFirst() {
        return this.head;
    }
    // Get Last Node
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }
    // Append Node
    appendNode(node){
        let lastNode = this.getLast();
        lastNode.next = node;
    }
    // Prepend Node
    prependNode(node){
        node.next = this.head;
        this.head = node;
    }
    // List Size
    listSize() {
        let currentNode = this.head;
        let counter = 0;
        while (currentNode) {
            counter++;
            currentNode = currentNode.next;

        }
        return counter;
    }
    //Node at a certain index
    indexAt(index){
        let counter = 0;
        let currentNode = this.head
        while (counter < index) {
            counter++
            currentNode = currentNode.next
        }
        return currentNode;
    }
    // Remove last element
    pop(){
        let lastNode = this.head;
        while (lastNode.next.next ){
            lastNode = lastNode.next
        }
        lastNode.next = null
        return this.head
    }
    // Node contains a value
    contains(value) {
        let active = true
        let lastnode = this.head;
        while (active){
            if (lastnode){
                if (lastnode.data === value){
                    active = false;
                    return true
                } else {
                    lastnode = lastnode.next;
                }
            }
            else {
                active = false;
                return false;
            }
        }
    }
    // Insert At Index
    insertAt(index, nodeValue){
        const prevNode = this.indexAt(index-1);
        const currentNode = this.indexAt(index);
        nodeValue.next = currentNode;
        prevNode.next = nodeValue;

        return this.head
    }
    // Delete at index
    deleteAt(index) {
        const prevNode = this.indexAt(index - 1);
        const nextNode = this.indexAt(index + 1);
        prevNode.next = nextNode;
        return this.head;
    }
}


// Create Node
class listNode {
    constructor(data) {
        this.data=data
        this.next=null
    }
}


const item1 = new listNode(2);
const item2 = new listNode(3);
const item3 = new listNode(4);
// ADD ITEMS TO THE LIST
item2.next = item3;
item1.next = item2;
const linkedList = new List(item1);


// // TEST CASES
// const itemLast = new listNode(9);
// const itemMore = new listNode(11);
// const node1 = new listNode(0);
// const nodeX = new listNode(16);


// linkedList.appendNode(itemLast);
// linkedList.appendNode(itemMore);
// linkedList.prependNode(node1);


// console.log(linkedList.getLast())
// console.log(linkedList.getFirst())
// console.log(linkedList.deleteAt(2));
// console.log(linkedList.listSize())
// console.log(linkedList.insertAt(2, nodeX));
// console.log(linkedList.indexAt(2));
// console.log(linkedList.pop())
// console.log(linkedList.contains(0))