# Queues
A queue is a first in first out data structure. The structure has a front and and a rear, and nodes are added at the rear and removed at the front.

## Challenge
The challenge was to implement a queue by creating a class that included methods to add and remove nodes in the first in first out manner described above.

## Approach & Efficiency
The approach I took was to only define the front and rear in the class, and only change these values when inserting and removing nodes. This was an an efficient approach because I didn't have to iterate through the list to add and remove nodes. All I hade to doe was change the front, rear, or next references depending on what I was trying to do. All the methods except toString, which does iterate, are O(1) for both time and space.

## API
- isEmpty - returns true if the queue is empty and false if it isn't
- peek - if the queue isn't empty, it returns the value of the front node
- enqueue - adds a node to the rear of the queue
- dequeue - removes a node from the front
- toString - iterates through the list from front to rear and makes a string containing all the node values