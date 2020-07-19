class Node
{
    constructor(data,left=null,right=null)
    {
        this.data=data;
        this.left=left;
        this.right=right;
    }
}
class BinaryTree
{
    constructor(value)
    {
        this.root = value;
        this.counter = 0;
    }

    preorder()
    {
        let results=[];
    let _pre=(node)=>{
        results.push(node.data);
        if(node.left)_pre(node.left);
        
        if(node.right)_pre(node.right);
    }
    _pre(this.root);
    console.log(results);
    return results;
    }
}
let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);

one.right = two;
two.left = six;
two.right=five;
five.left=three;
three.right=four;
five.right=six;

let tree = new BinaryTree(one);

tree.preorder();