// Node Class
class Node {
  left = null;
  right = null;
  data = null;
  constructor(data) {
    this.data = data;
  }
}

root = new Node(1) 
root.left = new Node(2) 
root.right = new Node(3) 
root.left.left = new Node(4) 
root.right.left = new Node(5) 
root.right.right = new Node(7) 
root.left.left.left = new Node(10) 
root.left.left.right = new Node(11) 
root.right.right.left = new Node(8) 

class BinaryTree {
  root = null;
  constructor(root) {
    this.root = root;
  }

  findShortestPathLeaf() {
    let leafData = -1;
    const hierarchy = {};
    const queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      const temp = queue.shift();
      if (temp.right === null && temp.left === null) {
        leafData = temp.data;
        break;
      } else {
        if (temp.left) {
          hierarchy[temp.left.data] = temp.data;
          queue.push(temp.left);
        }
        if (temp.right) {
          hierarchy[temp.right.data] = temp.data;
          queue.push(temp.right);
        }
      }
    }
    const printPath = (data, parentHash) => {
      if (!parentHash[data] || parentHash[data] === data) {
        return;
      }
      printPath(parentHash[data], parentHash);
      console.log(parentHash[data]);
    }
    
    printPath(leafData, hierarchy);
    console.log(leafData);
  }
}

const tree = new BinaryTree(root);
tree.findShortestPathLeaf();