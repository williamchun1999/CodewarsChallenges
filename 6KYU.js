/*
April 22, 2022
Linked Lists - Sorted Insert

Write a SortedInsert() function which inserts a node into the correct location of a pre-sorted linked list which is sorted in ascending order. SortedInsert takes the head of a linked list and data used to create a node as arguments. SortedInsert() should also return the head of the list.

sortedInsert(1 -> 2 -> 3 -> null, 4) === 1 -> 2 -> 3 -> 4 -> null)
sortedInsert(1 -> 7 -> 8 -> null, 5) === 1 -> 5 -> 7 -> 8 -> null)
sortedInsert(3 -> 5 -> 9 -> null, 7) === 3 -> 5 -> 7 -> 9 -> null)
The push() and buildOneTwoThree() functions do not need to be redefined.
*/

// MY SOLUTION

function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function sortedInsert(head, data) {
    const unsortedNode = new Node(data);
    if(!head){
      head = unsortedNode;
      return head;
    }
    else {
      let current = head;
      if (unsortedNode.data < current.data){
        unsortedNode.next = current;
        return unsortedNode;
      }
      while(current.next && current.next.data <= unsortedNode.data){
        current = current.next;
      }
      unsortedNode.next = current.next;
      current.next = unsortedNode;
      return head;
    }
  }

/* Comments 
  Could have combined both edge cases into a single if statement.
*/

/* 
April 22 2022
Linked Lists - Insert Sort

Write an InsertSort() function which rearranges nodes in a linked list so they are sorted in increasing order. You can use the SortedInsert() function that you created in the "Linked Lists - Sorted Insert" kata below. The InsertSort() function takes the head of a linked list as an argument and must return the head of the linked list.

var list = 4 -> 3 -> 1 -> 2 -> null
insertSort(list) === 1 -> 2 -> 3 -> 4 -> null
If the passed in head node is null or a single node, return null or the single node, respectively. You can assume that the head node will always be either null, a single node, or a linked list consisting of multiple nodes.

The push(), buildOneTwoThree(), and sortedInsert() functions need not be redefined.

*/

//MY SOLUTION

function Node(data) {
  this.data = data;
  this.next = null;
}

function insertSort(head) {
  // covers for a head of null
  if (!head){
    return null;
  }
  // creates a reference to sort incoming heads into the list and where to put it
  let listReference = new Node(head.data);
  // since we make the reference start with the initial head value, we start the rest of the head with head.next;
  //need to cover for head where next = null;
  head = head.next;
  // While there is a head, we input the head to our premade sortedInsert function from the question ytd into our reference
  //until head = null;
  while (head){
     listReference = sortedInsert(listReference, head.data)
    head = head.next;
  }
  return listReference;
  
}

/* Comments
  writing out pseudocode made me solve five times faster compared to the previous linked list question.
*/
