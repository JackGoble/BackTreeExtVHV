class Tree {
    constructor(data) {
        var node = new Node(data);
        this._root = node;
    }

    // Adding a method to the constructor
    greet() {
        return `${this._root.data} says hello.`;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.parent = null;
        this.children = [];
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}

const myTree = new Tree("Hi");

document.write(myTree.greet());