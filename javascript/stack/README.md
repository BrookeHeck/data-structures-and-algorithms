# Stack
A stack is a first in last out data structure. The structure has a top node and every node references the previous node added until it gets to the bottom, which has a next value of null. All nodes are added and removed from the top.

## Challenge
The challenge was to implement a stack by creating a class that included methods to add and remove nodes in the first in last out manner described above.

## Approach & Efficiency
The approach I took was to only define the top in the class, and then change the top node when a new node is added. I also had to change the next reference on that new node to the node that was previously on top. For pop, I removed the top node and made that node's next the new top node. All the methods except toString, which does iterate, are O(1) for both time and space.

## API
- isEmpty - returns true if the stack is empty and false if it isn't
- peek - if the stack isn't empty, it returns the value of the top node
- push - adds a node to the top of the stack
- pop - removes a node from the top
- toString - iterates through the list from top to bottom and makes a string containing all the node values