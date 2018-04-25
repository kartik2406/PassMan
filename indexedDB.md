# IndexeDB API
Is an API to store structured data at client side such as JSON, files/ blob.
It uses indexes to enable high-performance searches of data. IndexedDB follows *same origin policy* that means you can only access data stored on your domain. The API is asynchronous.

### Key concepts
- IndexedDB is NOSQL in terms of storage but is Transactional like SQL based RDBMS. Transactions have well defined lifetime and they auto-commit.
- It is object oriented, which means it doesn't store data in the form of table rather it simply persista javascript objects.
- Let's you store and retrieve objects indexed by key i.e. *values are stored as key value pairs*.
- Any object supported by structured clone algorithm can be stored:  
    *Structured clone algorithm is an algorithm defined in HTML 5 specification for copying complex Javascript objects. For more infoormation check the following link https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm*
- It uses requests. Requests are objects that receive *success* or *failure* DOM events. They have onsuccess and onerror properties and you can call addEventListener() & removeEventListener() on them.
- It uses DOM events to notify you when results are available. DOM events have a type, target property. For indexedDB **type** is *mostly success or error incase of IndexedDB* and **target** of the event is *IDBRequest object which was generated as a result of doing some database operation*.


### Usage
The following is the pattern IndexedDB encourages:  
1. Open a database.  
2. Create an Object store.  
3. Start a transaction to perform some database operation.  
4. Wait for the transaction to complete by  listening to the right kind of DOM event.  
5. Process the results.  

#### Opening a database
```javascript
    var request = window.indexedDB.open(db_name, version);
```
The open() method takes two parameters:  
1. **Database Name**: A name that you would give to your database.  
2. **Database version**: This is usefull when you want to change object stores and their structure.
The open() method does not create the database right away nor does it start a transaction. It resturns IDBOpenDBRequest with success or error value that you can handle as an event. The result for the open function is an instance of an IDBDatabase.

#### Handling events
```javascript
request.onerror = function(event) {
  //Ops! Handle the error
};
request.onsuccess = function(event) {
  // Yay! Process the results.
};
```
onscuccess() will be triggered when the value of DOM event is success, if the value of the DOM event is error onerror() wil be triggered.

### References
1. https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
2. https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB
3. https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB