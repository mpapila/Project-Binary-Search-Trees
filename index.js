class Node {
    constructor(data, left, right) {
        this.data = data
        this.left = left
        this.right = right
    }
}
class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }
    buildTree(array) {
        let sortedArray = array.sort((a, b) => a - b);
        let noDupArray = Array.from(new Set(sortedArray));
        let mid = Math.floor(noDupArray.length / 2);
        if (noDupArray.length === 0) {
            return null;
        } else {
            let rootNode = new Node(noDupArray[mid])
            let leftSorted = this.buildTree(noDupArray.slice(0,mid))
            let rightSorted = this.buildTree(noDupArray.slice(mid + 1))    
            rootNode.left = leftSorted;
            rootNode.right = rightSorted;
            return rootNode;
        }
    }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);
prettyPrint(tree.root);