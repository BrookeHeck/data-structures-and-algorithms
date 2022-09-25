# Singly Linked List
A singly linked list is a list of nodes that hold a reference to the next node. The list can be traversed by using the next node that the current node points to. Nodes can also be added to the list, but the references of the previous node must point to the newly added node, and the newly added node must point to the node that previous node used to reference as next.

## Challenge
Implement a singly linked list.

## Approach & Efficiency
I started by making a node class. This class had two properties, the value of the node and the node that is next in the list. Once I had a node class, I started a linked list class. This class was simple to implement because all it needed was the head of the list. Once a head node is created, then all the other nodes can be accessed by using the next node. The tail of the list is always null, and when a new instance is created, the head points to a null value. The tail is always null even when new values are added.

## API
The class, SinglyLinkedList, is available for use from this module.