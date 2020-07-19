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
        this.height=0;
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
    find()
    {

        let results=[];
        let queue=[];
        queue.push(this.root);
        while(queue.length)
        {
            let curent=queue.shift();
            results.push(curent.data);
            if(curent.left)
            {
queue.push(curent.left);
            }
            if(curent.right)
            {

                queue.push(curent.right);
                this.height++;
            }

            
        }
        console.log(this.height);
        return this.height;
    } 
}

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven=new Node(7);
let eight=new Node(7);


four.left=two;
four.right=six
six.left=five;
six.right=seven;
two.left = one;
two.right=three;
five.right=eight;

let tree = new BinaryTree(four);

tree.find();