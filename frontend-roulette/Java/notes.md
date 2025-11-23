10/26:
---------

instance variable vs local variable
no multiple inheritance in java
no const in java -> use final
private variables can only be used inside the class


INHERITANCE -> subclass, superclass
POLYMORPHISM -> method overriding, method overloading
ENCAPSULATION
ABSTRACTION


## JVM
- Heap Memory => Objects variables/methods
- Stack Memory => Local variables/objects with address to their data stored in heap memory
- static variables/methods


Final -> stops method overloading, stops class inheriting, stops modifying variables


-- Access modifiers:
 - Public
 - Default
 - Protected
 - Private
 

-- Abstract & Interface:
 - Interface can have multiple classes(uses implements instead of extends)


++ Exception handling
 - Compile Error
 - Logical Error
 - Runtime Error
 - checked errors
 - unchecked errors
 - try, catch, finally(close DB connections, close file I/O)

** Collection APIs
- List and Sets 
- List maintains orders and allows repetation.
- Sets do not allow repetations and doesn't maintain orders, it works in Key-Value pairs.
- collection is a concept and Collection is an interface.

++ Threads
- allows two or more processes to run parallely.
- Needs to use Runnable interface.
- Depends upon system scheduler for parallel execution.
- Use join method to stop main() execution until all threads execution are done.

