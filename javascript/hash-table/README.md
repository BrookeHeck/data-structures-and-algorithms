# Hashtables
A hash table is a data structure that uses key-value pairs to efficiently retrieve data. The data structure is dependent on a hashing algorithm that will take in a key, perform a calculation on that key, and return a hash. This is used as an index in an array to store the key-value pair. This is an efficient way of storing and retrieving data because the hashing algorithm is not dependent on the size of the input. To get data, you simply use the key to recreate the hash, and then access the array with that index. There is no iterating through the hash table, so it is an efficient algorithm.

## Challenge
The challenge is to implement my own hash table. This includes a hashing algorithm and common methods on a hash table. The methods in this implementation include hash, get, set, has, and keys.

## Approach & Efficiency
I started by making the hashing algorithm because all the other methods are dependent on this. My hashing algorithm takes in a string, sums each ASCII character code in the string, multiplies it by 599, and then finally takes the modulus of dividing the calculated number by the size of the array. The integer from this calculation is used as the index of the array.

Whenever data is needed to be added or retrieved from the hash table, the key must be provided. The methods take that key, hash it to get the index, and then find the key in that bucket. Because of hash collisions, it is possible to have more than one key-value pair in each bucket. To handle this, I used a linked list. Before a key-value pair is added to the table, I check and see if there is already a linked list at that array index. If there is I add the new key-value pair to that list. If there isn't, I create a new list and add the key-value pair to this. This ensures data is not overwritten when new data is added to the hash table.

## API
- Creating a new instance
  - use the new keyword to create a new instance of this class and pass in the size of the array to that constructor
  ```js
  const hashTable = new HashTable(1024);
  ```
  - The above code will create a new hash table with an array length 1024.

- Add a key-value pair
  - use the set method and pass a key in as the first parameter and a value in as the second
  - the key must be a string
  ```js
  hashTable.set('key', 'value');
  ```

- Getting a value
  - use the get method to get the value associated with a key
  - pass the key in as the first and only parameter, and th method will return the value associated with that key
  ```js
  const value = hashTable.get('key');
  ```

- The has method
  - return true if the key is in the hash table and false if it is not
  - pass the key in as the first and only parameter, and the method will return a boolean
  ```js
  const hasKey = hashTable.has('key')
  ```

- The keys method
  - returns an array with all the keys in the hash table
  ```js
  const keysArray = hashTable.keys();
  ```