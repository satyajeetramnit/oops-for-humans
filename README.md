<br>
<p align="center">
  <img src="./images/banner2.png" />
</p>

***

<p align="center">
🎉 "Object-Oriented Programming for Humans"! 🎉
</p>
<p align="center">
Ever read about OOP, felt like you understood it, and then completely blanked out when trying to explain it? Yeah, same. And just when you think you've got it all, an interview question or a random topic throws in something you’ve never even heard of—making you wonder if you ever really learned OOP at all. <br><br>  This is my attempt to fix that both for myself and eveyone out there who needs it—just clear explanations, real-world examples, and an effort to make sure no topic gets left behind. 
</p>
<br>

***

<!-- # Index - Object-Oriented Programming (OOP)    -->

### **Core Concepts**  
1. **[What is Object-Oriented Programming (OOP)?](#what-is-object-oriented-programming-oop)**  
   - Classes, Objects, Attributes, Methods  
   - Real-World Analogies (LEGO, Library)  

2. **[Classes and Objects](#classes-and-objects)**  
   - Class Declaration, Object Instantiation  
   - Instance vs. Class Variables/Methods  

3. **[Encapsulation](#encapsulation)**  
   - Access Modifiers (Public, Private, Protected)  
   - Getters/Setters, Data Hiding  

4. **[Inheritance](#inheritance)**  
   - [Types of Inheritance](#types-of-inheritance)
        - [Single](#single-inheritance)
        - [Multiple](#multiple-inheritance)
        - [Multilevel](#multi-level-inheritance)
        - [Hierarchical](#hierarchical-inheritance)
        - [Hybrid](#hybrid-inheritance)  
   - [Method overriding](#method-overriding)
   - [The Diamond Problem](#the-diamond-problem)
   - [`super()` Keyword](#super-in-python-vs-super-in-java)
   - [Constructor Chaining](#constructor-chaining)  

5. **[Polymorphism](#polymorphism)**  
   - [Compile-Time (Method Overloading)](#compile-time-polymorphism)
   - [Operator Overloading](#operator-overloading)
   - [Runtime (Method Overriding)](#runtime-polymorphism-method-overriding)  
   - [Dynamic Method Dispatch](#dynamic-method-dispatch)

6. **[Abstraction](#abstraction)**  
   - [Abstract Classes](#abstract-classes)
   - [Interfaces](#interfaces)  
   - [Pure Virtual Functions](#pure-virtual-functions)  

7. **Class Relationships**  
   - Association, Aggregation, Composition, Dependency  

---

### **Advanced OOP Topics**  
8. **Constructors and Destructors**  
   - Default, Parameterized, Copy Constructors  
   - Destructors in Java/Python/C++  

9. **Object Lifetime & Memory Management**  
   - Garbage Collection vs. Manual Memory Management  

10. **Static and Final Keywords**  
    - Static Variables/Methods, Final Classes/Methods/Variables  

11. **Interfaces vs. Abstract Classes**  
    - Default Methods in Interfaces, Abstract Methods  

12. **Generics/Templates**  
    - Type Parameterization, Bounded Types  

13. **Exception Handling**  
    - Custom Exceptions, Try-Catch Blocks  

14. **Operator Overloading**  

15. **Reflection**  
    - Introspection of Classes/Methods at Runtime  

16. **Object Serialization/Deserialization**  
    - JSON, Binary Formats, Security Considerations  

17. **Concurrency in OOP**  
    - Thread-Safe Objects, Synchronization  

18. **Type Casting**  
    - Upcasting/Downcasting, `instanceof`/`typeid` Checks  

19. **Messaging Between Objects**  

20. **Namespace/Package Organization**  

21. **Object Cloning**  
    - Shallow vs. Deep Copy  

22. **Immutable Objects**  

23. **Event-Driven Programming**  

24. **Dependency Injection**  

25. **Unit Testing in OOP**  
    - Mock Objects, Testing Frameworks  

26. **Root Object Class**  
    - `Object` (Java), `NSObject` (Swift), `object` (Python)  

---

### **Object-Oriented Design & Modeling**  
27. **UML Diagrams**  
    - Class Diagrams, Sequence Diagrams, Use Case Diagrams  

---

### **Design Principles**  
28. **SOLID Principles**  
    - Single Responsibility  
    - Open/Closed  
    - Liskov Substitution  
    - Interface Segregation  
    - Dependency Inversion  

29. **Coupling and Cohesion**  
    - Low Coupling, High Cohesion  

30. **Composition Over Inheritance Principle**  

---

### **Language-Specific Features**  
31. **Friend Classes/Functions (C++)**  

32. **Inner/Nested Classes**  

33. **Mixins and Traits**  
    - Python, Ruby, Scala  

34. **Multiple Inheritance Handling**  
    - Interfaces (Java), Virtual Inheritance (C++), MRO (Python)  

---

### **Miscellaneous**  
- **Real-World Analogies** for All Concepts  
- **Code Examples** in Python, Java, C++, JavaScript  
- **Best Practices** and Common Pitfalls  
- **Visual Aids** (Diagrams, Flowcharts)  

<!-- ---

### **Getting Started**  
- How to Use This Repository  
- Recommended Learning Path   -->

---
<br>
<br>

<!-- # Introduction: -->
## What is Object-Oriented Programming (OOP)?
### Introduction 
OOP is like building with LEGO blocks. Instead of writing code as a messy list of instructions, you create reusable "objects" (like LEGO pieces) that interact to solve problems. 

### This subtopic answers:

- What makes OOP different from other styles?
- Why do developers love it?
- How does it mirror the real world?

### Basic Concepts & Definitions
**OOP:** A programming paradigm that organizes code into objects (data + actions) rather than functions and logic.
Key Terms:

- **Class:** *A blueprint for creating objects (e.g., a "Car" blueprint).*
- **Object:** *An instance of a class (e.g., your neighbor’s Tesla).*
- **Attributes:** *Data the object holds (e.g., car color, model).*
- **Methods:** *Actions the object can perform (e.g., drive, honk).*

### Detailed Explanations
*Plain Language*
> OOP mimics how we organize things in real life. For example:
> - A class Dog defines what a dog is (breed, age) and what it does (bark, fetch).
> - An object my_dog = Dog("Buddy", "Golden Retriever") is your actual pet.

*Real-World Analogy*
> Imagine a library:
> - Class = A book’s template (title, author, genre).
> - Object = Each physical book on the shelf.
> - Methods = Actions like "check out" or "return".

*Why OOP Matters*
> Reusability: Build once, reuse everywhere (like LEGO).<br>
> Modularity: Fix one part without breaking others.<br>
> Real-World Modeling: Code mirrors how humans think (objects, not algorithms).<br>

### **Practical Examples & Code Samples**

*Example: Car Class Implementation*

<summary>@Java</summary>

```java
// Class = Blueprint for a "Car"
class Car {
    private String brand;
    private String model;

    // Constructor
    public Car(String brand, String model) {
        this.brand = brand;
        this.model = model;
    }

    // Method
    public void drive() {
        System.out.println(brand + " " + model + " is vrooming!");
    }

    public static void main(String[] args) {
        // Object = An actual car
        Car myCar = new Car("Tesla", "Cybertruck");
        myCar.drive(); // Output: "Tesla Cybertruck is vrooming!"
    }
}
```
<summary>@C++</summary>

```cpp
#include <iostream>
using namespace std;

// Class = Blueprint for a "Car"
class Car {
private:
    string brand;
    string model;

public:
    // Constructor
    Car(string b, string m) {
        brand = b;
        model = m;
    }

    // Method
    void drive() {
        cout << brand << " " << model << " is vrooming!" << endl;
    }
};

int main() {
    // Object = An actual car
    Car myCar("Tesla", "Cybertruck");
    myCar.drive(); // Output: "Tesla Cybertruck is vrooming!"
    return 0;
}
```
<summary>@Python</summary>

```python
# Class = Blueprint for a "Car"  
class Car:  
    def __init__(self, brand, model):  
        self.brand = brand  # Attribute  
        self.model = model  # Attribute  

    def drive(self):  # Method  
        print(f"{self.brand} {self.model} is vrooming!")  

# Object = An actual car  
my_car = Car("Tesla", "Cybertruck")  
my_car.drive()  # Output: "Tesla Cybertruck is vrooming!"  
```


### **Real-World Scenario**

- **Procedural Code:** "Take 3 eggs, crack them, stir…" (a rigid recipe).
- **OOP Code:** Create a `Kitchen` class with fridge, oven, and `cook()` methods.

---

### **Usage Guidelines & Best Practices**

***When to Use OOP***

> ✔️ Building complex systems (e.g., games, apps).<br>
> ✔️ When code reuse or team collaboration matters.<br>

***Pitfalls to Avoid***

> ❌ **Overengineering:** Don’t force OOP on tiny scripts.  <br>
> ❌ **God Classes:** Avoid classes that do everything (break them into smaller ones).<br>

***Pro Tips***

> - Start with **nouns** (objects) before **verbs** (actions).<br>
> - Use OOP to model **real-world entities** (users, products, etc.).<br>



### **Visual Aids & Diagrams**

***Class-Object Relationship***

```
CLASS: Car                OBJECT: my_car  
┌────────────────┐         ┌───────────────┐  
│ Attributes:    │         │ brand: Tesla  │  
│ - brand        │         │ model: Model S│  
│ - model        │         └───────────────┘  
│ Methods:       │                 │  
│ - drive()      │                 └───▶ "Tesla Model S is vrooming!"  
└────────────────┘  
```


### **Recap**

✅ OOP organizes code into **reusable objects**. <br> 
✅ **Classes** are blueprints; **objects** are instances.<br>



## Classes and Objects

### Introduction
In the [previous section](#what-is-object-oriented-programming-oop), we learned that OOP organizes code into objects (like LEGO pieces) based on classes (blueprints). 

Now, let’s dive deeper:

- How do you create classes and objects?
- What’s the difference between instance variables and class variables?
- When should you use instance methods vs. class methods?

### Basic Concepts & Definitions
**Class:**  A blueprint for creating objects. Defines attributes (data) and methods (actions).<br>
**Object:** A specific instance of a class (e.g., your Tesla is an object of the Car class).<br>
**Instance Variable:** Unique to each object (e.g., your car’s color).<br>
**Class Variable:** Shared by all objects of a class (e.g., the total number of cars ever made).<br>
**Instance Method:** Operates on an object’s data.<br>
**Class Method:** Operates on the class itself (e.g., modifying class variables).<br>

### Detailed Explanations
<!-- #### Class Declaration -->

***Plain Language***
> *Class Declaration*<br>
> --> A class is like a cookie cutter. You define it once, then stamp out cookies (objects) from it.<br>

> *Object Instantiation*<br>
> --> Creating an object from a class is like building a house from a blueprint.

> *Instance Variables vs. Class Variables*<br>
> --> Instance Variable: Specific to an object (e.g., your car’s mileage).<br>
> --> Class Variable: Shared by all objects (e.g., the legal speed limit for all cars).<br>

> Instance Methods vs. Class Methods<br>
> --> Instance Method: Needs an object to work (e.g., car.drive()).<br>
> --> Class Method: Works on the class itself (e.g., Car.get_total_cars()).

***Real-World Analogy***

> *Class Declaration*<br>
> --> Class = A recipe for chocolate chip cookies.<br>
> --> Object = The actual cookies you bake.<br>

> *Object Instantiation*<br>
> --> Blueprint (class) = Architectural plans for a house.<br>
> --> House (object) = The physical house built from those plans.<br>

> *Instance Variables vs. Class Variables*<br>
> --> Instance Variable = Your phone’s wallpaper (unique to you).<br>
> --> Class Variable = The iOS version (shared by all iPhones).<br>

> Instance Methods vs. Class Methods<br>
> --> Instance Method = “Wash my car” (needs your car).<br>
> --> Class Method = “Recall all cars for a safety check” (affects every car).<br>

***Why It Matters***

> *Class Declaration*<br>
> --> Classes encapsulate data and behavior, making code modular and reusable.

> *Object Instantiation*<br>
> --> Objects let you create multiple instances with unique data (e.g., 100 houses, each with different owners).

> *Instance Variables vs. Class Variables*<br>
> --> Class variables maintain shared state; instance variables store object-specific data.

> Instance Methods vs. Class Methods<br>
> --> Instance methods handle object-specific logic; class methods handle class-wide logic.

### Practical Examples & Code Samples

*Example*

<summary>@Java</summary>

```java
class Car {
    // Class Variable: Shared by all cars
    private static int totalCars = 0;

    // Instance Variables: Unique to each car
    private String brand;
    private String color;

    // Constructor
    public Car(String brand, String color) {
        this.brand = brand;
        this.color = color;
        totalCars++; // Update class variable
    }

    // Instance Method: Requires an object
    public void honk() {
        System.out.println(brand + " goes Beep Beep!");
    }

    // Class Method: Works on the class itself
    public static int getTotalCars() {
        return totalCars;
    }

    // Static Method: Doesn't need class/instance (utility)
    public static String checkEngine(int temp) {
        return temp < 100 ? "OK" : "Overheating!";
    }

    // Getter for color
    public String getColor() {
        return color;
    }

    public static void main(String[] args) {
        // Object Instantiation
        Car myCar = new Car("Tesla", "Red");
        Car yourCar = new Car("Toyota", "Blue");

        System.out.println(myCar.getColor());      // Output: "Red" (instance variable)
        System.out.println(Car.getTotalCars());    // Output: 2 (class method)
        System.out.println(Car.checkEngine(90));   // Output: "OK" (static method)
    }
}
```
<summary>@C++</summary>

```cpp
#include <iostream>
using namespace std;

class Car {
private:
    // Instance Variables: Unique to each car
    string brand;
    string color;

    // Class Variable: Shared by all cars
    static int totalCars;

public:
    // Constructor
    Car(string brand, string color) {
        this->brand = brand;
        this->color = color;
        totalCars++; // Update class variable
    }

    // Instance Method: Requires an object
    void honk() {
        cout << brand << " goes Beep Beep!" << endl;
    }

    // Class Method: Works on the class itself
    static int getTotalCars() {
        return totalCars;
    }

    // Static Method: Doesn't need class/instance (utility)
    static string checkEngine(int temp) {
        return temp < 100 ? "OK" : "Overheating!";
    }

    // Getter for color
    string getColor() {
        return color;
    }
};

// Initialize static variable
int Car::totalCars = 0;

int main() {
    // Object Instantiation
    Car myCar("Tesla", "Red");
    Car yourCar("Toyota", "Blue");

    cout << myCar.getColor() << endl;      // Output: "Red" (instance variable)
    cout << Car::getTotalCars() << endl;   // Output: 2 (class method)
    cout << Car::checkEngine(90) << endl;  // Output: "OK" (static method)

    return 0;
}
```
<summary>@Python</summary>

```python
class Car:  
    # Class Variable: Shared by all cars  
    total_cars = 0  

    def __init__(self, brand, color):  
        # Instance Variables: Unique to each car  
        self.brand = brand  
        self.color = color  
        Car.total_cars += 1  # Update class variable  

    # Instance Method: Requires an object  
    def honk(self):  
        print(f"{self.brand} goes Beep Beep!")  

    # Class Method: Works on the class itself  
    @classmethod  
    def get_total_cars(cls):  
        return f"Total cars: {cls.total_cars}"  

    # Static Method: Doesn't need class/instance (utility)  
    @staticmethod  
    def check_engine(temp):  
        return "OK" if temp < 100 else "Overheating!"  

# Object Instantiation  
my_car = Car("Tesla", "Red")  
your_car = Car("Toyota", "Blue")  

print(my_car.color)          # Output: "Red" (instance variable)  
print(Car.total_cars)        # Output: 2 (class variable)  
print(Car.get_total_cars())  # Output: "Total cars: 2" (class method)  
print(Car.check_engine(90))  # Output: "OK" (static method)
```

***Comparison:***

<!-- |Feature|Python|Java|C++|
|:-|:-|:-|:-|
|Instance Variable|self.brand|private String brand;|string brand;|
|Class Variable|Car.total_cars|private static int totalCars;|static int totalCars;|
|Instance Method|def honk(self)|public void honk()|void honk()|
|Class Method|@classmethod def get_total_cars(cls)|public static int getTotalCars()|static int getTotalCars()|
|Static Method|@staticmethod def check_engine(temp)|public static String checkEngine(int temp)|static string checkEngine(int temp)| -->

| Feature               | Python                          | Java                                | C++                                |
|-----------------------|--------------------------------|------------------------------------|------------------------------------|
| **Class Variable**    | `total_cars` (shared by all instances) | `static int totalCars;` (shared by all instances) | `static int totalCars;` (shared by all instances) |
| **Instance Variable** | `self.brand`, `self.color`    | `private String brand, color;`    | `private string brand, color;`    |
| **Instance Method**   | `def honk(self)`              | `public void honk()`              | `void honk()`                      |
| **Class Method**      | `@classmethod def get_total_cars(cls)` | `public static int getTotalCars()` | `static int getTotalCars()`       |
| **Static Method**     | `@staticmethod def check_engine(temp)` | `public static String checkEngine(int temp)` | `static string checkEngine(int temp)` |



<br>

### Usage Guidelines & Best Practices

***When to Use:***

> ✔️ **Instance Variables:** For object-specific data (e.g., user profiles).<br>
> ✔️ **Class Variables:** For shared state (e.g., app configuration).<br>
> ✔️ **Class Methods:** For factory methods or modifying class-wide data.<br>
> ✔️ **Static Methods:** For utility functions unrelated to class/instance state.<br>

***Pitfalls to Avoid:***

> ❌ Accidental Class Variable Changes: Modifying class variables in one object affects all objects.<br>
> ❌ Overusing Static Methods: They’re not tied to OOP’s object-centric philosophy.<br>

***Pro Tips:***

- Use self for instance variables, cls for class methods.<br>
- Keep classes small. If a class has 10+ methods, split it!<br>

### Visual Aids & Diagrams
***Class vs. Object Relationship:***

```
CLASS: Car  
┌────────────────────┐  
│ Class Variables:   │  
│ - total_cars       │  
├────────────────────┤  
│ Instance Variables:│  
│ - brand            │  
│ - color            │  
├────────────────────┤  
│ Methods:           │  
│ - __init__()       │  
│ - honk()           │  
│ - get_total_cars() │  
└────────────────────┘  

OBJECTS:  
my_car (Tesla, Red) ── honk() → "Tesla goes Beep Beep!"  
your_car (Toyota, Blue) ── honk() → "Toyota goes Beep Beep!"  
```

### Recap:

✅ Classes define blueprints; objects are instances.<br>
✅ Instance variables are object-specific; class variables are shared.<br>
✅ Instance methods act on objects; class methods act on the class.<br>

<br>
<br>

# Four Pillars of OOPs:

## Encapsulation

### Introduction

In the [previous section](#classes-and-objects), we learned how classes and objects act as blueprints and instances. Now, let’s explore encapsulation—the art of protecting an object’s internal state from unintended interference. *Think of it as a "guardian" for your data*.

**Why Encapsulation?**
- Prevents accidental data corruption (e.g., setting a negative bank balance).
- Hides complex internal logic (e.g., a coffee machine’s brewing process).
- Makes code easier to maintain and debug.

### Basic Concepts & Definitions

***Encapsulation:*** 
> Bundling data (attributes) and methods (functions) into a single unit (object), while restricting direct access to some components.

- **Access Modifiers:** Rules defining visibility of attributes/methods:
    - **Public:** Accessible anywhere (default in many languages).
    - **Private:** Accessible only within the class.
    - **Protected:** Accessible within the class and its subclasses.

- **Getters/Setters:** Methods to safely read/modify private data.

- **Data Hiding:** Keeping internal state private, exposing only what’s necessary.

### Detailed Explanations


***Plain Language***
> - **Access Modifiers:** Access modifiers act like security clearances for your data.
>     - **Public:** Open to everyone (like a park bench).
>     - **Private:** Restricted to the class (like a diary with a lock).
>     - **Protected:** Shared with trusted subclasses (like a family recipe).
> 
> - **Getters/Setters:** Getters and setters are "gatekeepers" that control how data is accessed or modified.
> 
> - **Data Hiding:** Data hiding is like a pill capsule—it protects the medicine (data) inside from external tampering.

***Real-World Analogy***

> - **Access Modifiers:** 
>     - **Public:** A restaurant menu (anyone can see it).
>     - **Private:** Secret recipes locked in the chef’s drawer.
>     - **Protected:** Recipes shared only with sous-chefs.
> 
> - **Getters:** Asking a bank teller for your balance (they verify your ID first).<br>
    **Setters:** Setter: Depositing money through a teller (they check if the amount is valid).
> 
> - **Data Hiding:** A car’s engine: You interact via the steering wheel and pedals, not by rewiring the engine.


***Why It Matters***

> - **Access Modifiers:** Prevents external code from meddling with critical data (e.g., account.balance = -1000). 
>- **Getters/Setters:**
>    - Validates input (e.g., ensuring age isn’t negative).
>    - Allows you to change internal logic without breaking external code.
> 
> - **Data Hiding:** 
>    - Reduces bugs caused by unintended side effects.
>    - Simplifies code for users (they don’t need to understand internal details).


### Practical Examples & Code Samples


*Example*

<summary>@Java</summary>

```java
class BankAccount {
    // Private attribute (Encapsulation)
    private double balance;
    
    // Public attribute
    public String accountHolder;

    // Constructor
    public BankAccount(String accountHolder, double balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    // Getter for balance (public read access)
    public double getBalance() {
        return balance;
    }

    // Setter for balance (with validation)
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        } else {
            System.out.println("Invalid amount!");
        }
    }

    // Protected method (accessible within package & subclasses)
    protected void internalAudit() {
        System.out.println("Audit in progress...");
    }

    public static void main(String[] args) {
        // Using the class
        BankAccount account = new BankAccount("Alice", 1000);
        System.out.println(account.accountHolder);  // Output: "Alice" (public)
        System.out.println(account.getBalance());   // Output: 1000 (via getter)

        account.deposit(500);  // Valid
        account.deposit(-200); // Output: "Invalid amount!"

        // account.balance = 0;  // Error! Private attribute.
        // account.internalAudit(); // Works if called from a subclass.
    }
}
```
<summary>@C++</summary>

```cpp
#include <iostream>
using namespace std;

class BankAccount {
private:
    // Private attribute (Encapsulation)
    double balance;

public:
    // Public attribute
    string accountHolder;

    // Constructor
    BankAccount(string accountHolder, double balance) {
        this->accountHolder = accountHolder;
        this->balance = balance;
    }

    // Getter for balance (public read access)
    double getBalance() const {
        return balance;
    }

    // Setter for balance (with validation)
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        } else {
            cout << "Invalid amount!" << endl;
        }
    }

protected:
    // Protected method (accessible within derived classes)
    void internalAudit() {
        cout << "Audit in progress..." << endl;
    }
};

int main() {
    // Using the class
    BankAccount account("Alice", 1000);
    cout << account.accountHolder << endl;  // Output: "Alice" (public)
    cout << account.getBalance() << endl;   // Output: 1000 (via getter)

    account.deposit(500);  // Valid
    account.deposit(-200); // Output: "Invalid amount!"

    // account.balance = 0;  // Error! Private attribute.
    // account.internalAudit(); // Works if called from a derived class.

    return 0;
}
```
<summary>@Python</summary>

```python
class BankAccount:  
    def __init__(self, account_holder, balance=0):  
        self.__balance = balance           # Private attribute (double underscore)  
        self.account_holder = account_holder  # Public attribute  

    # Getter for balance (public read access)  
    def get_balance(self):  
        return self.__balance  

    # Setter for balance (with validation)  
    def deposit(self, amount):  
        if amount > 0:  
            self.__balance += amount  
        else:  
            print("Invalid amount!")  

    # Protected method (single underscore convention)  
    def _internal_audit(self):  
        print("Audit in progress...")  

# Using the class  
account = BankAccount("Alice", 1000)  
print(account.account_holder)      # Output: "Alice" (public)  
print(account.get_balance())       # Output: 1000 (via getter)  
account.deposit(500)               # Valid  
account.deposit(-200)              # Output: "Invalid amount!"  

# account.__balance = 0            # Error! Private attribute.  
# account._internal_audit()        # Works, but "protected" by convention.
```

***Comparison:***

| Feature               | Python                          | Java                                | C++                                |
|-----------------------|--------------------------------|------------------------------------|------------------------------------|
| **Private Attribute** | `self.__balance`              | `private double balance;`         | `private double balance;`         |
| **Public Attribute**  | `self.account_holder`         | `public String accountHolder;`    | `public string accountHolder;`    |
| **Getter Method**     | `def get_balance(self)`       | `public double getBalance()`      | `double getBalance() const`       |
| **Setter with Validation** | `def deposit(self, amount)` | `public void deposit(double amount)` | `void deposit(double amount)` |
| **Protected Method**  | `_internal_audit(self)` (by convention) | `protected void internalAudit()` | `protected void internalAudit()` |

<br>

> ⚠️ **Note:** Python uses naming conventions (e.g., __balance for private, _internal_audit for protected).
<br>

### Usage Guidelines & Best Practices

***When to Use:***

> ✔️ Private Attributes: For sensitive data (e.g., passwords, balances).<br>
> ✔️ Getters/Setters: When you need validation or logging.<br>
> ✔️ Protected Methods: For internal logic shared with subclasses.<br>

***Pitfalls to Avoid:***

> ❌ Exposing Everything: Making all attributes public invites bugs.<br>
> ❌ Overusing Getters/Setters: Don’t add them blindly—only when needed.<br>
> ❌ Ignoring Conventions: Follow language-specific norms (e.g., _ for protected in Python).<br>

***Pro Tips:***

- Use the @property decorator in Python for cleaner getters/setters:

```python
@property  
def balance(self):  
    return self.__balance  

@balance.setter  
def balance(self, value):  
    if value >= 0:  
        self.__balance = value
```

## Visual Aids & Diagrams

**Encapsulation in Action:**

```
BankAccount Class  
┌───────────────────────┐  
│ Private: __balance    │  
│ Public: account_holder│  
├───────────────────────┤  
│ Public Methods:       │  
│ - get_balance()       │  
│ - deposit()           │  
│ Protected: _audit()   │  
└───────────────────────┘  
External Code → Can’t touch __balance directly!  
```

### Recap:

✅ Encapsulation protects data via access modifiers and getters/setters.<br>
✅ Data hiding reduces complexity and prevents misuse.


## Inheritance
### Introduction & Recap

In the [previous section](#encapsulation), we learned how encapsulation protects an object’s internal state. Now, let’s explore inheritance—the mechanism that lets classes inherit properties and methods from other classes. <br>
Think of it as passing down family traits: children inherit genes from parents but can also have unique features.

***Why Inheritance?***

- **Reuse code:** Avoid rewriting common logic.
- **Model real-world hierarchies:** E.g., Animal → Dog → GoldenRetriever.
- **Override behavior:** Customize inherited methods in subclasses.

### Basic Concepts, Definitions & Explanations

A mechanism where a child class (subclass) inherits properties and behaviors from a parent class (superclass).

*Superclass (Base Class): The parent class being inherited from. (A generic "Smartphone" blueprint.) <br>
Subclass (Derived Class): The child class that inherits from the superclass. (Specific models like "iPhone 15" or "Galaxy S24")*

***Quick overview***

> **Single:** One subclass inherits from one superclass.<br>
> **Multiple:** One subclass inherits from multiple superclasses.<br>
> **Multilevel:** Subclass becomes a superclass for another subclass (e.g., A → B → C).<br>
> **Hierarchical:** Multiple subclasses inherit from one superclass.<br>
> **Hybrid:** A mix of inheritance types (e.g., multiple + hierarchical).<br>

> **Method Overriding:** Redefining a method in the subclass to replace the inherited version.

#### ***Key Concepts:***

| Term                 | Definition                                          | Language-Specific Notes |
|----------------------|--------------------------------------------------|-------------------------|
| **Single Inheritance** | A class inherits from one parent class.          | Supported in Java, C++, Python. |
| **Multiple Inheritance** | A class inherits from multiple parent classes.   | C++ and Python allow this. Java uses [interfaces](#interfaces). |
| **Method Overriding** | Child class redefines a method inherited from the parent. | Use `@Override` in Java, `virtual/override` in C++, implicit in Python. |
| **super() Keyword**  | Calls the parent class’s constructor/method.    | `super()` in Java/Python; `ParentClass::method()` in C++. |

---

### Types of Inheritance

#### *Single Inheritance:* 
One subclass inherits from one superclass.<br> 

```
Example: A son inherits traits from his father

    Father
      │
      ▼
     Son
```

<summary>@Java</summary>

```java
class Vehicle {
    void startEngine() {
        System.out.println("Engine started");
    }
}

class Car extends Vehicle {
    void drive() {
        System.out.println("Car is moving");
    }
}
```
<summary>@C++</summary>

```cpp
class Vehicle {
public:
    void startEngine() {
        cout << "Engine started" << endl;
    }
};

class Car : public Vehicle {
public:
    void drive() {
        cout << "Car is moving" << endl;
    }
};
```
<summary>@Python</summary>

```python
class Vehicle:
    def start_engine(self):
        print("Engine started")

class Car(Vehicle):
    def drive(self):
        print("Car is moving")
```

#### Key Points:
- All languages enforce "is-a" relationships (e.g., Car *is a* Vehicle).
- **Java:** Single inheritance for classes, multiple inheritance for [interfaces](#interfaces).
- **C++/Python:** Support multiple inheritance.


#### *Multiple Inheritance*

One subclass inherits from multiple superclasses.<br>

```
Example: A child inherits qualities from both the mother and father.

  Mother    Father
     │         │
     └────┬────┘
          ▼
        Child
```

<summary>@Java</summary>

```java
interface Engine {
    void start();
}

interface ElectricSystem {
    void charge();
}

class HybridCar implements Engine, ElectricSystem {
    public void start() { System.out.println("Engine running"); }
    public void charge() { System.out.println("Battery charged"); }
}
```

> ***Note:** Java does not support multiple inheritance directly due to the "[Diamond Problem](#the-diamond-problem)," so [interfaces](#interfaces) are used instead.*

<summary>@C++</summary>

```cpp
class Engine {
public:
    void start() { cout << "Engine running" << endl; }
};

class ElectricSystem {
public:
    void charge() { cout << "Battery charged" << endl; }
};

class HybridCar : public Engine, public ElectricSystem {};
```
<summary>@Python</summary>

```python
class Engine:
    def start(self):
        print("Engine running")

class ElectricSystem:
    def charge(self):
        print("Battery charged")

class HybridCar(Engine, ElectricSystem):
    pass
```

#### Key Differences

| Language | Multiple Inheritance Support | Conflict Resolution |
|----------|-----------------------------|----------------------|
| **C++**  | Yes (for classes) | Explicit scope resolution (`Engine::start()` vs `ElectricSystem::start()`). |
| **Python** | Yes (for classes) | Method Resolution Order (MRO) – follows the order of parent classes. |
| **Java** | No (only via [interfaces](#interfaces)) | [Interfaces](#interfaces) have no method bodies until Java 8 (default methods). |

⚠️ Pitfall: The "[diamond problem](#the-diamond-problem)" (conflicts if both parents have the same method).

#### *Multi-Level Inheritance:* 
A chain of inheritance where a class inherits from another class, which in turn inherits from a base class.<br>
Subclass becomes a superclass for another subclass.<br>

```
Example: Traits pass from grandfather → father → son.

   Grandfather
       │
       ▼
     Father
       │
       ▼
      Son
```

<summary>@Java</summary>

```java
class Animal {
    void breathe() {
        System.out.println("Breathing...");
    }
}

class Mammal extends Animal {
    void feedMilk() {
        System.out.println("Feeding milk!");
    }
}

class Dog extends Mammal {
    // No additional methods, inherits from Mammal → Animal
}

public class Main {
    public static void main(String[] args) {
        Dog buddy = new Dog();
        buddy.breathe();    // Output: "Breathing..."
        buddy.feedMilk();   // Output: "Feeding milk!"
    }
}
```
<summary>@C++</summary>

```cpp
#include <iostream>
using namespace std;

class Animal {
public:
    void breathe() {
        cout << "Breathing..." << endl;
    }
};

class Mammal : public Animal {
public:
    void feedMilk() {
        cout << "Feeding milk!" << endl;
    }
};

class Dog : public Mammal {
    // No additional methods, inherits from Mammal → Animal
};

int main() {
    Dog buddy;
    buddy.breathe();    // Output: "Breathing..."
    buddy.feedMilk();   // Output: "Feeding milk!"
    return 0;
}
```
<summary>@Python</summary>

```python
class Animal:
    def breathe(self):
        print("Breathing...")

class Mammal(Animal):
    def feed_milk(self):
        print("Feeding milk!")

class Dog(Mammal):  # Inherits from Mammal → Animal
    pass

# Object Instantiation
buddy = Dog()
buddy.breathe()      # Output: "Breathing..."
buddy.feed_milk()    # Output: "Feeding milk!"
```

#### *Hierarchical Inheritance:* 
Multiple subclasses inherit from one superclass.<br>
i.e. Multiple specialized classes share a common base.

```
Example: Both son and daughter inherit from the same parent.

      Father
      /    \
     /      \
   Son     Daughter
```

<summary>@Java</summary>

```java
class Animal {
    void breathe() {
        System.out.println("Breathing...");
    }
}

class Dog extends Animal { // Inherits from Animal
    void bark() {
        System.out.println("Barking!");
    }
}

class Cat extends Animal { // Inherits from Animal
    void meow() {
        System.out.println("Meowing!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.breathe(); // Output: "Breathing..."
        dog.bark();    // Output: "Barking!"

        Cat cat = new Cat();
        cat.breathe(); // Output: "Breathing..."
        cat.meow();    // Output: "Meowing!"
    }
}
```
<summary>@C++</summary>

```cpp
#include <iostream>
using namespace std;

class Animal {
public:
    void breathe() {
        cout << "Breathing..." << endl;
    }
};

class Dog : public Animal { // Inherits from Animal
public:
    void bark() {
        cout << "Barking!" << endl;
    }
};

class Cat : public Animal { // Inherits from Animal
public:
    void meow() {
        cout << "Meowing!" << endl;
    }
};

int main() {
    Dog dog;
    dog.breathe(); // Output: "Breathing..."
    dog.bark();    // Output: "Barking!"

    Cat cat;
    cat.breathe(); // Output: "Breathing..."
    cat.meow();    // Output: "Meowing!"

    return 0;
}
```
<summary>@Python</summary>

```python
class Animal:
    def breathe(self):
        print("Breathing...")

class Dog(Animal):  # Inherits from Animal
    def bark(self):
        print("Barking!")

class Cat(Animal):  # Inherits from Animal
    def meow(self):
        print("Meowing!")

# Object Instantiation
dog = Dog()
dog.breathe()  # Output: "Breathing..."
dog.bark()     # Output: "Barking!"

cat = Cat()
cat.breathe()  # Output: "Breathing..."
cat.meow()     # Output: "Meowing!"
```

#### *Hybrid Inheritance:* 
A mix of inheritance types (e.g., multiple + hierarchical).<br>

```
Example: Grandfather has a son and a daughter. The son has a child. The child inherits from both parents.

   Grandfather
       │
   ┌───┴───┐
   │       │
 Father  Aunt
   │
   ▼
  Son
```

<summary>@Java</summary>

```java
interface Animal {
    void breathe();
}

interface Mammal extends Animal {
    void feedMilk();
}

interface Bird extends Animal {
    void layEggs();
}

class Bat implements Mammal, Bird { // Implements both interfaces
    public void breathe() {
        System.out.println("Breathing...");
    }

    public void feedMilk() {
        System.out.println("Feeding milk!");
    }

    public void layEggs() {
        System.out.println("Laying eggs!");
    }

    public void fly() {
        System.out.println("Flying!");
    }

    public static void main(String[] args) {
        Bat bat = new Bat();
        bat.breathe();    // From Animal
        bat.feedMilk();   // From Mammal
        bat.layEggs();    // From Bird
        bat.fly();        // Own method
    }
}
```

> ***Note:** Java does not support multiple inheritance directly due to the "[Diamond Problem](#the-diamond-problem)," so [interfaces](#interfaces) are used instead.*

<summary>@C++</summary>

```cpp
#include <iostream>
using namespace std;

class Animal {
public:
    void breathe() {
        cout << "Breathing..." << endl;
    }
};

class Mammal : public Animal {
public:
    void feedMilk() {
        cout << "Feeding milk!" << endl;
    }
};

class Bird : public Animal {
public:
    void layEggs() {
        cout << "Laying eggs!" << endl;
    }
};

class Bat : public Mammal, public Bird { // Hybrid Inheritance
public:
    void fly() {
        cout << "Flying!" << endl;
    }
};

int main() {
    Bat bat;
    bat.breathe();    // Ambiguity may occur, use Animal::breathe() explicitly if needed
    bat.feedMilk();   // From Mammal
    bat.layEggs();    // From Bird
    bat.fly();        // Own method
    return 0;
}
```
<summary>@Python</summary>

```python
class Animal:
    def breathe(self):
        print("Breathing...")

class Mammal(Animal):
    def feed_milk(self):
        print("Feeding milk!")

class Bird(Animal):
    def lay_eggs(self):
        print("Laying eggs!")

class Bat(Mammal, Bird):  # Hybrid Inheritance: Combines Mammal and Bird
    def fly(self):
        print("Flying!")

# Object Instantiation
bat = Bat()
bat.breathe()     # Inherited from Animal
bat.feed_milk()   # Inherited from Mammal
bat.lay_eggs()    # Inherited from Bird
bat.fly()         # Own method
```


### ***Method Overriding***

A subclass provides its own implementation of a method inherited from the superclass.
- Same method signature (name and parameters) in the subclass.
- Superclass method is replaced in the subclass.
- Achieves [runtime polymorphism]().

> Superclass Method: A generic "greet()" that says "Hello!"<br>
> Subclass Override: A Indian subclass changes it to "Namaste🙏"

```
      Superclass (Person)
             |
             |  greet() → "Hello!"
             ↓
      -----------------
      |               |
  Instance 1       Instance 2 (Indian)
 (Person)         (Overrides greet)
  greet()          greet() → "Namaste🙏"
```

<summary>@Java</summary>

```java
class Person {
    void greet() {
        System.out.println("Hello!");
    }
}

class Indian extends Person {
    @Override
    void greet() {
        System.out.println("Namaste🙏");
    }
}

public class Main {
    public static void main(String[] args) {
        Person p1 = new Person();
        p1.greet(); // Output: Hello!

        Person p2 = new Indian();  // Runtime polymorphism
        p2.greet(); // Output: Namaste🙏
    }
}
```

<summary>@C++</summary>

```cpp
#include <iostream>
using namespace std;

class Person {
public:
    virtual void greet() {  // Use 'virtual' for overriding
        cout << "Hello!" << endl;
    }
};

class Indian : public Person {
public:
    void greet() override {  // Override the greet method
        cout << "Namaste🙏" << endl;
    }
};

int main() {
    Person p1;
    p1.greet(); // Output: Hello!

    Indian p2;
    p2.greet(); // Output: Namaste🙏

    Person* p3 = new Indian();
    p3->greet(); // Output: Namaste🙏 (Polymorphism)

    delete p3;
    return 0;
}
```
<summary>@Python</summary>

```python
class Person:
    def greet(self):
        print("Hello!")

class Indian(Person):  # Subclass overriding greet()
    def greet(self):
        print("Namaste🙏")

# Object Instantiation
p1 = Person()
p1.greet()  # Output: Hello!

p2 = Indian()
p2.greet()  # Output: Namaste🙏
```

#### Key Points:

| Feature                        | Python                         | Java                              | C++                                  |
|--------------------------------|--------------------------------|----------------------------------|--------------------------------------|
| **Requires Keyword for Overriding?** | ❌ No explicit keyword required | ✅ `@Override` (Recommended) | ✅ `virtual` in base, `override` in derived |
| **Supports Runtime Polymorphism?** | ✅ Yes                         | ✅ Yes                            | ✅ Yes (Using pointers/references) |



### ***The Diamond Problem***

The Diamond Problem occurs in languages that support multiple inheritance when a subclass inherits from two classes that both inherit from the same superclass.<br>
This creates ambiguity because the subclass receives two copies of the same superclass methods.
#### **Scenario:**

> *Real-World Example: HybridCar 🚗*<br> 
*A HybridCar inherits from both ElectricCar and FuelCar, which both inherit from Vehicle.
Without proper handling, HybridCar would receive two copies of Vehicle.*
```
            Vehicle
               ▲
          ┌────┴────┐
          │         │
    ElectricCar  FuelCar
          ▲         ▲
          └─────┬───┘
                │
            HybridCar
```

#### ***C++ Implementation (Solves via Virtual Inheritance)***

C++ allows multiple inheritance but requires virtual inheritance to avoid duplicates.

> We use `virtual base class` to avoid duplicates.

```cpp
#include <iostream>
using namespace std;

class Vehicle {
public:
    virtual void description() {
        cout << "I am a vehicle." << endl;
    }
};

class ElectricCar : virtual public Vehicle {  // Virtual inheritance
public:
    void description() override {
        Vehicle::description();
        cout << "I run on electricity." << endl;
    }
};

class FuelCar : virtual public Vehicle {  // Virtual inheritance
public:
    void description() override {
        Vehicle::description();
        cout << "I run on fuel." << endl;
    }
};

class HybridCar : public ElectricCar, public FuelCar {
public:
    void description() override {
        ElectricCar::description();
        FuelCar::description();
    }
};

int main() {
    HybridCar car;
    car.description();
    return 0;
}
```
- Virtual inheritance ensures only one copy of Vehicle exists in HybridCar.
- The method is called in the correct order without duplication.
- Prevents redundant Vehicle data.

#### ***Python Implementation (Using [super()](#super-in-python-vs-super-in-java) to Solve It)***

Python handles multiple inheritance using the Method Resolution Order (MRO) with the C3 Linearization algorithm.

> We use `super()` to avoid duplicate calls to the Vehicle class.<br>

```python
class Vehicle:
    def description(self):
        print("I am a vehicle.")

class ElectricCar(Vehicle):
    def description(self):
        super().description()  # Calls Vehicle's method
        print("I run on electricity.")

class FuelCar(Vehicle):
    def description(self):
        super().description()  # Calls Vehicle's method
        print("I run on fuel.")

class HybridCar(ElectricCar, FuelCar):  # Multiple Inheritance
    def description(self):
        super().description()  # Resolves method order using MRO

# Object Instantiation
car = HybridCar()
car.description()

# Output:
# I am a vehicle.
# I run on electricity.
# I run on fuel.
```
- Uses MRO (Method Resolution Order) to determine which method to call. (MRO ensures Vehicle is called only once.)
- super() follows a linear path (`HybridCar -> ElectricCar -> FuelCar -> Vehicle`).
- super().description() ensures the base class method is called only once, preventing redundancy.


#### ***Java Implementation (Avoids the Diamond Problem with Interfaces)***

Java does not support multiple inheritance for classes but allows multiple interfaces to avoid ambiguity, so it uses interfaces instead.

```java
interface Vehicle {
    default void description() {
        System.out.println("I am a vehicle.");
    }
}

interface ElectricCar extends Vehicle {
    default void description() {
        Vehicle.super.description();
        System.out.println("I run on electricity.");
    }
}

interface FuelCar extends Vehicle {
    default void description() {
        Vehicle.super.description();
        System.out.println("I run on fuel.");
    }
}

class HybridCar implements ElectricCar, FuelCar {
    @Override
    public void description() {
        ElectricCar.super.description(); // Resolving ambiguity explicitly
        FuelCar.super.description();
    }
}

public class Main {
    public static void main(String[] args) {
        HybridCar car = new HybridCar();
        car.description();
    }
}
```
- Uses [interfaces](#interfaces) instead of multiple inheritance.
- Explicitly calls the desired interface’s method to resolve conflicts.
- Possible with interfaces (resolved using default method rules).

#### *Comparison*

| Feature                    | Python (MRO & `super()`)         | Java ([Interfaces](#interfaces))                      | C++ (Virtual Inheritance)            |
|----------------------------|--------------------------------|----------------------------------|--------------------------------------|
| **Multiple Inheritance Support** | ✅ Yes                      | ❌ No (Only via Interfaces)      | ✅ Yes                               |
| **Diamond Problem Exists?** | ✅ Yes (Handled via MRO)      | ❌ No (Interfaces prevent it)    | ✅ Yes (Handled via `virtual`)      |
| **Solution Approach**      | `super()` with MRO             | Interfaces with explicit method calls | `virtual` inheritance in base class |
| **Duplicate Calls Prevented?** | ✅ Yes                      | ✅ Yes (Explicit calls required) | ✅ Yes (Virtual base class ensures one copy) |
| **Common Use Case**        | Simplifies multiple inheritance | Avoids class-based multiple inheritance | Needed for multiple inheritance in complex hierarchies |

### `super()` in Python vs `super` in Java

In both Java and Python, super() is used in the context of inheritance to refer to the superclass (Parent Class).\
- Java
    - `super` keyword: Can be used to refer to the parent class's members (variables and methods).
        - `super.variableName` is used to access a variable of the parent class.
        - `super.methodName()` is used to call a method of the parent class.
    - `super()` constructor call: `super()` is specifically used to call the constructor of the parent class. 
        - It must be the first statement in the child class's constructor. 
        - This is crucial for initializing the parent class's part of the object.

- Python
    - `super()` function: Is a built-in function that returns a proxy object that allows you to access methods of the parent class.
    - `super()` is primarily used to call methods of the parent class, including the constructor (`__init__`). It's often used to extend or override parent class behavior while still leveraging the parent's implementation.

### Constructor Chaining

***Plain Language:***

> When one constructor calls another constructor within the same class or in a parent class, ensuring proper initialization.


***Real-World Analogy:***

Building a house:
- Superclass Constructor = Laying the foundation.
- Subclass Constructor = Adding walls and paint, but first calling the foundation layer.

#### Python Implementation (Using super())
> In Python, super() is used to call the constructor of the parent class to avoid redundant code.

```python
class Vehicle:
    def __init__(self, brand):
        self.brand = brand
        print(f"Vehicle: {self.brand} initialized.")

class Car(Vehicle):
    def __init__(self, brand, model):
        super().__init__(brand)  # Calls Vehicle's constructor
        self.model = model
        print(f"Car Model: {self.model} initialized.")

class ElectricCar(Car):
    def __init__(self, brand, model, battery_capacity):
        super().__init__(brand, model)  # Calls Car's constructor
        self.battery_capacity = battery_capacity
        print(f"Battery Capacity: {self.battery_capacity} kWh initialized.")

# Object Instantiation
my_car = ElectricCar("Tesla", "Model S", 100)

# Output:
# Vehicle: Tesla initialized.
# Car Model: Model S initialized.
# Battery Capacity: 100 kWh initialized.  
```
- super().__init__() calls the parent class’s constructor.
- Ensures the base class is always initialized first (constructor chaining).
- Avoids redundant code when dealing with multiple inheritance.

#### Java Implementation (Using super() & Constructor Chaining)

> In Java, super() is used to call the parent class's constructor, ensuring that initialization is done in order.

```java
class Vehicle {
    Vehicle(String brand) {
        System.out.println("Vehicle: " + brand + " initialized.");
    }
}

class Car extends Vehicle {
    Car(String brand, String model) {
        super(brand); // Calls Vehicle constructor
        System.out.println("Car Model: " + model + " initialized.");
    }
}

class ElectricCar extends Car {
    ElectricCar(String brand, String model, int batteryCapacity) {
        super(brand, model); // Calls Car constructor
        System.out.println("Battery Capacity: " + batteryCapacity + " kWh initialized.");
    }
}

public class Main {
    public static void main(String[] args) {
        ElectricCar myCar = new ElectricCar("Tesla", "Model S", 100);
    }
}

// Output
// Vehicle: Tesla initialized.
// Car Model: Model S initialized.
// Battery Capacity: 100 kWh initialized.
```
- `super(arguments)` explicitly calls the parent class constructor.
- Constructor execution follows the inheritance hierarchy (`Vehicle → Car → ElectricCar`).
- Ensures proper resource initialization across classes.

####  C++ Implementation (Using Base Class Constructor Calls)

>  C++, we typically use an initializer list to call the base class constructor explicitly. This ensures that base class members are properly initialized before the derived class constructor executes..

*Initializer list:*
- *Ensures Proper Initialization: Base class constructors run before derived class members.*
- *Efficiency: Directly initializes members instead of default-initializing and then assigning values.*
- *Mandatory for Const Members: If a class has const or reference members, they must be initialized using an initializer list.*

```cpp
#include <iostream>
using namespace std;

class Vehicle {
public:
    Vehicle(string brand) {
        cout << "Vehicle: " << brand << " initialized." << endl;
    }
};

class Car : public Vehicle {
public:
    Car(string brand, string model) : Vehicle(brand) { // Calls Vehicle's constructor
        cout << "Car Model: " << model << " initialized." << endl;
    }
};

class ElectricCar : public Car {
public:
    ElectricCar(string brand, string model, int batteryCapacity) 
        : Car(brand, model) { // Calls Car's constructor
        cout << "Battery Capacity: " << batteryCapacity << " kWh initialized." << endl;
    }
};

int main() {
    ElectricCar myCar("Tesla", "Model S", 100);
    return 0;
}

// Output:
// Vehicle: Tesla initialized.
//Car Model: Model S initialized.
//Battery Capacity: 100 kWh initialized.
```

- Uses constructor initializer lists (: Vehicle(brand)) to call parent constructors.
- Ensures base class constructors execute first, avoiding uninitialized objects.
- Similar to Java, but more explicit due to manual constructor calls.

### Best Practices

| Language | Guidelines |
|----------|------------|
| **Java**  | Prefer composition over inheritance. Use [interfaces](#interfaces) for multiple "traits". |
| **C++**   | Use virtual inheritance sparingly. Favor interfaces ([abstract classes](#abstract-classes)). |
| **Python**| Leverage mixins for reusable behaviors. Follow MRO conventions. |

### Key Takeaways
✅ Inheritance is a core OOP pillar, but implementations vary across languages.<br>
✅ Inheritance promotes code reuse through parent-child relationships.
✅ Multiple Inheritance is powerful but risky; handle with care (MRO in Python, interfaces in Java).<br>
✅ Method Overriding ensures polymorphism, but syntax differs (`@Override` vs `virtual`).<br>


## Polymorphism

### Introduction & Recap
In the [previous section](#inheritance), we learned how inheritance allows classes to reuse and customize code. Now, let’s explore <br>Polymorphism—the ability of objects to take many forms.<br> 
Think of it as a universal remote: one button (e.g., "power") works differently for a TV, AC, or speaker.

***Why Polymorphism?***
- Write flexible code that works with any object type.

- Simplify complex systems by treating objects as their superclass (e.g., all Animals can speak(), even if they bark or meow).

### Basic Concepts & Definitions

***Polymorphism:*** Greek for "*many forms*". Objects behave differently based on their type.

***Types:***

- Compile-Time (Static): Resolved during compilation (e.g., method overloading).

- Runtime (Dynamic): Resolved during execution (e.g., method overriding).

***Method Overloading:*** Multiple methods with the same name but different parameters.

***Method Overriding:*** Redefining a method in a subclass (inherited from a superclass).

***Dynamic Method Dispatch:*** The process of deciding which method to call at runtime.


### Compile-Time Polymorphism 

### Method Overloading

*Plain Language:*

> Writing multiple methods with the same name but different parameters. The compiler picks the right one based on input.<br>
*Example use case:* Makes APIs intuitive (e.g., `add(2, 3)` vs. `add(2, 3, 4)`), etc.

*Real-World Analogy:*

>A coffee machine with buttons for "espresso", "latte", or "cappuccino" – same machine, different outputs.

#### ***Java Implementation (True Method Overloading)***
Java natively supports method overloading by defining multiple methods with the same name but different parameters.

```java
class MathOperations {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        MathOperations mathObj = new MathOperations();
        System.out.println(mathObj.add(5, 10));       // Output: 15
        System.out.println(mathObj.add(5, 10, 15));   // Output: 30
        System.out.println(mathObj.add(5.5, 2.5));    // Output: 8.0
    }
}
```
- Determines the method at compile-time based on parameter type and count.
- Methods must differ in signature (parameter count or type).
- Return type alone cannot differentiate overloaded methods.

#### ***C++ Implementation (True Method Overloading)***

C++ natively supports method overloading, just like Java.

```cpp
#include <iostream>
using namespace std;

class MathOperations {
public:
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    double add(double a, double b) {
        return a + b;
    }
};

int main() {
    MathOperations mathObj;
    cout << mathObj.add(5, 10) << endl;       // Output: 15
    cout << mathObj.add(5, 10, 15) << endl;   // Output: 30
    cout << mathObj.add(5.5, 2.5) << endl;    // Output: 8.0
    return 0;
}
```

- Resolves method at compile-time based on parameter type and count.
- Supports both function overloading and operator overloading.
- Ensures efficient execution with no runtime overhead.


#### ***Python Implementation (Simulating Method Overloading)***

Python does not support true method overloading. However, we can achieve similar behavior using default arguments or *args.

```python
class MathOperations:
    def add(self, a, b=0, c=0):
        return a + b + c  # Handles different argument counts

math_obj = MathOperations()
print(math_obj.add(5))        # Output: 5 (one argument)
print(math_obj.add(5, 10))     # Output: 15 (two arguments)
print(math_obj.add(5, 10, 15)) # Output: 30 (three arguments)
```

- Uses default arguments (b=0, c=0) to handle different cases.
- Alternatively, we could use *args for variable-length arguments.

#### ***Comparison***

| Feature                  | Python (Simulated)            | Java (Native Overloading)       | C++ (Native Overloading)        |
|--------------------------|------------------------------|---------------------------------|--------------------------------|
| **Supports True Overloading?** | ❌ No (Only via `*args` or default values) | ✅ Yes (Different method signatures) | ✅ Yes (Different method signatures) |
| **Compile-Time Resolution?** | ❌ No ([Dynamic Dispatch](#dynamic-method-dispatch) at runtime) | ✅ Yes (Method chosen at compile-time) | ✅ Yes (Method chosen at compile-time) |
| **Supports Different Parameter Types?** | ✅ Yes (via `*args` and `isinstance`) | ✅ Yes (Method signature must differ) | ✅ Yes (Method signature must differ) |
| **Efficiency** | 🚀 Flexible but slower (runtime checks) | ⚡ Fast (Compile-time method resolution) | ⚡ Fast (Compile-time method resolution) |


### Operator Overloading

Operator Overloading allows operators (`+`, `-`, `*`, etc.) to be redefined to work with user-defined types.

Key Benefits:
- Makes custom objects behave like built-in types.
- Improves code readability and usability. (Summation of imaginary numbers)

#### ***C++ Implementation (Supports Operator Overloading)***

C++ natively supports operator overloading.

```cpp
#include <iostream>
using namespace std;

class Vector {
public:
    int x, y;

    Vector(int x, int y) : x(x), y(y) {}

    // Overloading '+' operator
    Vector operator+(const Vector& other) {
        return Vector(x + other.x, y + other.y);
    }

    void display() {
        cout << "(" << x << ", " << y << ")" << endl;
    }
};

int main() {
    Vector v1(2, 3), v2(4, 5);
    Vector v3 = v1 + v2;  // Uses overloaded '+'

    v3.display();  // Output: (6, 8)
    return 0;
}
```

####  ___Python Implementation (Supports Operator Overloading)___

Python natively supports operator overloading using `magic (dunder) methods`.

```java
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):  # Overloading '+'
        return Vector(self.x + other.x, self.y + other.y)

    def __str__(self):  # String representation
        return f"({self.x}, {self.y})"

v1 = Vector(2, 3)
v2 = Vector(4, 5)
v3 = v1 + v2  # Calls __add__

print(v3)  # Output: (6, 8)
```
- Uses special methods (e.g., `__add__`, `__sub__`, `__mul__`, etc.).
- The + operator calls `__add__` method internally.
- Provides flexibility to redefine behavior.

#### ___Java Implementation (Does Not Support Operator Overloading)___

*Java does not support operator overloading*, but we can achieve similar behavior using methods.

```java
class Vector {
    int x, y;

    Vector(int x, int y) {
        this.x = x;
        this.y = y;
    }

    // Simulating operator overloading with a method
    Vector add(Vector other) {
        return new Vector(this.x + other.x, this.y + other.y);
    }

    @Override
    public String toString() {
        return "(" + x + ", " + y + ")";
    }
}

public class Main {
    public static void main(String[] args) {
        Vector v1 = new Vector(2, 3);
        Vector v2 = new Vector(4, 5);
        Vector v3 = v1.add(v2); // Cannot use '+', must call method

        System.out.println(v3); // Output: (6, 8)
    }
}
```

#### ***Real-World Example (Bank Account Transactions)***

💡 **Scenario:**
Imagine a Bank Account where:

- `+` is used to merge two accounts.
- `-` is used to withdraw an amount.
- `+=` is used to deposit money.

<summary>@C++</summary>

```cpp
#include <iostream>
using namespace std;

class BankAccount {
public:
    string holder;
    int balance;

    BankAccount(string holder, int balance) {
        this->holder = holder;
        this->balance = balance;
    }

    // Overloading '+': Merging accounts
    BankAccount operator+(const BankAccount& other) {
        return BankAccount(holder + " & " + other.holder, balance + other.balance);
    }

    // Overloading '-': Withdraw money
    BankAccount operator-(int amount) {
        if (balance >= amount) {
            return BankAccount(holder, balance - amount);
        } else {
            cout << "Insufficient balance!" << endl;
            return *this;
        }
    }

    // Overloading '+=': Deposit money
    BankAccount& operator+=(int amount) {
        balance += amount;
        return *this;
    }

    void display() {
        cout << "Account Holder: " << holder << ", Balance: " << balance << endl;
    }
};

int main() {
    BankAccount acc1("Alice", 5000);
    BankAccount acc2("Bob", 3000);

    BankAccount jointAcc = acc1 + acc2;
    jointAcc.display();  // Account Holder: Alice & Bob, Balance: 8000

    acc1 = acc1 - 2000;  // Withdraw 2000 from Alice's account
    acc1.display();  // Account Holder: Alice, Balance: 3000

    acc2 += 1000;  // Deposit 1000 into Bob's account
    acc2.display();  // Account Holder: Bob, Balance: 4000

    return 0;
}
```

<summary>@Python</summary>

```python
class BankAccount:
    def __init__(self, holder, balance):
        self.holder = holder
        self.balance = balance

    def __add__(self, other):  # Merging accounts
        new_balance = self.balance + other.balance
        return BankAccount(f"{self.holder} & {other.holder}", new_balance)

    def __sub__(self, amount):  # Withdrawal
        if self.balance >= amount:
            return BankAccount(self.holder, self.balance - amount)
        else:
            print("Insufficient balance!")
            return self  # Return same account

    def __iadd__(self, amount):  # Deposit
        self.balance += amount
        return self  # Return updated object

    def __str__(self):
        return f"Account Holder: {self.holder}, Balance: {self.balance}"

# Example Usage
acc1 = BankAccount("Alice", 5000)
acc2 = BankAccount("Bob", 3000)

joint_acc = acc1 + acc2  # Merging accounts
print(joint_acc)  # Output: Account Holder: Alice & Bob, Balance: 8000

acc1 -= 2000  # Withdraw 2000 from Alice
print(acc1)  # Output: Account Holder: Alice, Balance: 3000

acc2 += 1000  # Deposit 1000 in Bob's account
print(acc2)  # Output: Account Holder: Bob, Balance: 4000
```

| Feature                  | Python (Supports)           | Java (No Support)              | C++ (Supports)                |
|--------------------------|----------------------------|--------------------------------|--------------------------------|
| **Supports Operator Overloading?** | ✅ Yes (via magic methods) | ❌ No (Only methods) | ✅ Yes (via `operator` keyword) |
| **Example for `+` Operator** | `__add__` method | `.add()` method | `operator+()` function |
| **Common Use Case** | Custom numeric types, vectors | Simulated with methods | Mathematical & custom objects |
| **Efficiency** | 🟢 Dynamic but easy | 🔴 Verbose (extra method calls) | 🟢 Fast & efficient |


### Runtime Polymorphism (Method Overriding)

*Plain Language:*

> A subclass provides its own implementation of a method inherited from a superclass.

*Real-World Analogy:*

> A power button behaves differently on a phone (sleep/wake) vs. a microwave (start/stop heating).

*[Details/ Implementation/ Examples](#method-overriding)*

### Dynamic Method Dispatch

*Plain Language:*

> The JVM (or Python interpreter) decides at runtime which overridden method to execute.

*Real-World Analogy:*

> A GPS navigation app picks the fastest route dynamically based on real-time traffic.

*Why It Matters:*

> Enables flexibility and late binding (decisions made during execution).

#### ___Python Implementation (Uses Overriding + Dynamic Binding)___

```python
class Animal:
    def speak(self):
        print("Animal makes a sound")

class Dog(Animal):
    def speak(self):
        print("Dog barks")

class Cat(Animal):
    def speak(self):
        print("Cat meows")

# Dynamic Dispatch
def make_sound(animal):
    animal.speak()  # Calls overridden method at runtime

a = Animal()
d = Dog()
c = Cat()

make_sound(a)  # Output: Animal makes a sound
make_sound(d)  # Output: Dog barks
make_sound(c)  # Output: Cat meows
```

- Uses method overriding (subclass redefines a method).
- Python automatically resolves the correct method at runtime based on the object type.

#### ___Java Implementation (Uses Method Overriding + Base Class Reference)___

```Java
class Animal {
    void speak() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    void speak() {
        System.out.println("Cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a;  // Base class reference

        a = new Animal();
        a.speak();  // Output: Animal makes a sound

        a = new Dog();
        a.speak();  // Output: Dog barks (runtime binding)

        a = new Cat();
        a.speak();  // Output: Cat meows (runtime binding)
    }
}
```

- Uses method overriding.
- Uses base class reference (Animal a) to refer to derived class objects.
- Method calls are resolved at runtime, not compile time (Dynamic Binding).

#### ___C++ Implementation (Uses Virtual Functions for Dynamic Dispatch)___

```c++
#include <iostream>
using namespace std;

class Animal {
public:
    virtual void speak() {  // Virtual function
        cout << "Animal makes a sound" << endl;
    }
};

class Dog : public Animal {
public:
    void speak() override {  // Override method
        cout << "Dog barks" << endl;
    }
};

class Cat : public Animal {
public:
    void speak() override {
        cout << "Cat meows" << endl;
    }
};

int main() {
    Animal* a;  // Base class pointer

    a = new Animal();
    a->speak();  // Output: Animal makes a sound

    a = new Dog();
    a->speak();  // Output: Dog barks (Runtime dispatch via virtual function)

    a = new Cat();
    a->speak();  // Output: Cat meows

    delete a;  // Clean up memory
    return 0;
}
```

- Uses virtual functions for method overriding.
- Base class pointer (Animal* a) allows runtime method resolution.
- Without virtual keyword, C++ would perform compile-time binding (static dispatch).

#### ___Comparison___

| Feature                        | Python (Supports)            | Java (Supports)                  | C++ (Supports)                      |
|--------------------------------|-----------------------------|----------------------------------|--------------------------------------|
| **Dynamic Method Dispatch?**   | ✅ Yes (via method overriding) | ✅ Yes (via base class reference) | ✅ Yes (via virtual functions)       |
| **Requires Special Keyword?**  | ❌ No (automatic)            | ❌ No (automatic)                | ✅ Yes (`virtual` keyword needed)   |
| **Compile-Time Binding?**      | ❌ No (always dynamic)       | ❌ No (always dynamic)           | ⚠️ By default, **Yes** (unless `virtual` is used) |
| **Base Class Reference?**      | ✅ Yes                        | ✅ Yes                            | ✅ Yes (pointer/reference)         |

### Usage Guidelines & Best Practices

*When to Use:*

- Method Overloading: For similar actions with different inputs.

- Method Overriding: To customize inherited behavior.

- Polymorphism: When working with heterogeneous collections (e.g., a list of Animals).

*Pitfalls to Avoid:*

- Overcomplicating Overloading: Use optional parameters or type checks instead.

- Ignoring `super()`: Call the parent method when overriding (if needed).

<br>

> Leverage duck typing: "If it quacks like a duck, treat it like a duck."

### Visual Diagrams
Polymorphism in Action:

```
Animal Interface  
┌──────────────┐  
│ + speak()    │  
└──────────────┘  
       ▲  
       │  
   Dog    Cat  
 ┌─────┴─────┐  
 │  speak()  │   
 ▼           ▼  
"Woof!"   "Meow!"  
```
### Recap:

✅ Polymorphism lets objects behave differently based on their type.<br>
✅ Method Overloading (compile-time) vs. Overriding (runtime).<br>
✅ Dynamic Dispatch enables flexible runtime decisions.

## Abstraction
### Introduction & Recap
In the [previous section](#polymorphism), we explored polymorphism, where objects behave differently based on their type. Now, let’s dive into 

Abstraction—the art of hiding complex details and exposing only what’s necessary. Think of it like driving a car: you don’t need to know how the engine works to press the gas pedal.

***Why Abstraction?***

- Simplifies complex systems by focusing on what an object does, not how.<br>
- Reduces duplication by enforcing structure (e.g., "All vehicles must have a start_engine() method").

### Basic Concepts & Definitions

***Abstraction:*** Hiding internal details and exposing only essential features.<br>
***Abstract Class:*** A class that cannot be instantiated and may have abstract (unimplemented) methods.<br>
***Interface:*** A contract that defines what methods a class must implement (no concrete code).<br>
***Pure Virtual Function:*** A function with no implementation in the base class (forces subclasses to override it).<br>

### Abstract Classes
*Plain Language:*

> An abstract class is like a recipe template with some steps missing. You can’t bake the template itself—you must fill in the missing steps first.

*Real-World Analogy:*

> **Abstract Class** = A "Vehicle" blueprint that requires you to define start_engine().<br>
> **Concrete Class** = A "Car" subclass that implements start_engine() as "Turn the key".

*Why It Matters:*

> - **Enforces structure:** Subclasses must implement abstract methods.<br>
> - Shares common code (e.g., all vehicles have wheels, but engines start differently).

### Interfaces

*Plain Language:*

> An interface is a contract. It says, "If you want to be X, you must do Y."

*Real-World Analogy:*

> **Interface** = A USB standard. Any device using USB must fit the port shape and power specs.<br>
> **Implementation** = A flash drive or keyboard that follows the USB contract.

*Why It Matters:*

> - Allows unrelated classes to share behavior (e.g., both Bird and Plane can implement Flyable).<br>
> - Supports multiple inheritance in languages like Java.

### Pure Virtual Functions

*Plain Language:*

> A pure virtual function is a mandatory instruction in a blueprint. Subclasses must provide their own version.

*Real-World Analogy:*

> **Pure Virtual Function** = A "Prepare Dish" step in a cooking competition. Each chef must define their own recipe.

*Why It Matters:*

> - Guarantees that subclasses don’t forget critical methods.

### **Abstract Classes, Interfaces, and Pure Virtual Functions in Python, Java, and C++**  



#### ***Python Implementation (Using ABC Module for Abstract Class & Interface)***

```python
from abc import ABC, abstractmethod

# Abstract Class
class Vehicle(ABC):
    @abstractmethod
    def start(self):
        pass

    def stop(self):  # Concrete method
        print("Vehicle stopped")

# Interface-like behavior (in Python, no separate 'interface' keyword)
class Electric(ABC):
    @abstractmethod
    def charge(self):
        pass

# Concrete Class inheriting from Abstract Class and Interface
class Tesla(Vehicle, Electric):
    def start(self):  # Implementing abstract method
        print("Tesla is starting silently")

    def charge(self):  # Implementing interface method
        print("Tesla is charging")

# Instantiation and Method Calls
# v = Vehicle()  # Error! Cannot instantiate abstract class
my_car = Tesla()
my_car.start()   # Output: Tesla is starting silently
my_car.charge()  # Output: Tesla is charging
my_car.stop()    # Output: Vehicle stopped
```

*How Python Handles It?*
- Uses `ABC` module and `@abstractmethod` decorator for **abstract classes** and **interface-like behavior**.
- **Multiple inheritance** is supported naturally.
- **Cannot instantiate** classes with unimplemented abstract methods.



#### ***Java Implementation (Using Abstract Class & Interface)***

```java
// Abstract Class
abstract class Vehicle {
    abstract void start(); // Abstract Method

    void stop() {  // Concrete Method
        System.out.println("Vehicle stopped");
    }
}

// Interface
interface Electric {
    void charge(); // Abstract Method by default
}

// Concrete Class inheriting from Abstract Class and implementing Interface
class Tesla extends Vehicle implements Electric {
    @Override
    void start() {
        System.out.println("Tesla is starting silently");
    }

    @Override
    public void charge() {
        System.out.println("Tesla is charging");
    }
}

public class Main {
    public static void main(String[] args) {
        // Vehicle v = new Vehicle();  // Error! Cannot instantiate abstract class
        Tesla myCar = new Tesla();
        myCar.start();   // Output: Tesla is starting silently
        myCar.charge();  // Output: Tesla is charging
        myCar.stop();    // Output: Vehicle stopped
    }
}
```

*How Java Handles It?*
- Uses `abstract` keyword for **abstract classes**.
- Uses `interface` keyword for **interfaces** (multiple inheritance supported).
- Classes implementing an interface **must** override all methods.
- **Cannot instantiate** abstract classes.



#### ***C++ Implementation (Using Abstract Class & Pure Virtual Functions)***

```cpp
#include <iostream>
using namespace std;

// Abstract Class with Pure Virtual Function
class Vehicle {
public:
    virtual void start() = 0;  // Pure Virtual Function

    void stop() {  // Concrete Method
        cout << "Vehicle stopped" << endl;
    }
};

// Interface (In C++, achieved using Abstract Class with only Pure Virtual Functions)
class Electric {
public:
    virtual void charge() = 0;  // Pure Virtual Function
};

// Concrete Class inheriting from Abstract Class and Interface
class Tesla : public Vehicle, public Electric {
public:
    void start() override {
        cout << "Tesla is starting silently" << endl;
    }

    void charge() override {
        cout << "Tesla is charging" << endl;
    }
};

int main() {
    // Vehicle v;  // Error! Cannot instantiate abstract class
    Tesla myCar;
    myCar.start();   // Output: Tesla is starting silently
    myCar.charge();  // Output: Tesla is charging
    myCar.stop();    // Output: Vehicle stopped

    return 0;
}
```

*How C++ Handles It?*
- Uses `= 0` syntax to declare **pure virtual functions**.
- Abstract class **cannot be instantiated**.
- **Multiple inheritance** is supported for both abstract classes and interfaces.
- A derived class **must** implement all pure virtual functions or be declared as abstract itself.



#### ***Comparison Table***

| Feature                        | Python (Supports)              | Java (Supports)                    | C++ (Supports)                       |
|--------------------------------|-------------------------------|------------------------------------|--------------------------------------|
| **Abstract Class?**            | ✅ Yes (using `ABC` module)     | ✅ Yes (`abstract` keyword)         | ✅ Yes (using pure virtual functions) |
| **Interface?**                 | ✅ Yes (using abstract class)   | ✅ Yes (`interface` keyword)        | ✅ Yes (using abstract class with only pure virtual functions) |


### **Visual Diagrams**  
**Abstraction Hierarchy**:  
```  
          Animal (Abstract Class)  
          ▲  
          │  
          │  
┌─────────┴─────────┐  
Dog (speak: Woof!)  Cat (speak: Meow!)  
```  

**Interface Example**:  
```  
Flyable Interface  
┌──────────────┐  
│ + fly()      │  
└──────────────┘  
       ▲  
       │  
  ┌────┴─────┐  
Bird        Airplane  
```  


---

### **Usage Guidelines & Best Practices**  
*When to Use*:  
- **Abstract Classes**: For sharing code between related classes (e.g., `Vehicle` subclasses).  
- **Interfaces**: For defining contracts between unrelated classes (e.g., `Flyable`, `Swimmable`).  

*Pitfalls to Avoid*:  
- **Incomplete Abstract Classes**: Don’t leave too many abstract methods—subclasses get overwhelmed.  
- **Overusing Interfaces**: Prefer abstract classes for code reuse.  


*Key Takeaways*
- **Python**: Uses `ABC` module for abstract classes and interface-like behavior with **multiple inheritance** support.<br>
- **Java**: Differentiates between **abstract classes** and **interfaces**. Only supports multiple inheritance with interfaces.<br>
- **C++**: Uses **pure virtual functions** to implement abstract classes and interfaces. Multiple inheritance is supported for both.<br>
<br>
- **Java** enforces stricter compile-time checks, whereas **Python** is more flexible but dynamically checked at runtime. **C++** provides the most control with **manual memory management** and **explicit virtual functions**. 

---

## Class Relationships**  
### **Introduction & Recap**  

In the [previous section](#abstraction), we learned how **abstraction** simplifies complexity by hiding unnecessary details. Now, let’s explore 

**Class relationships**—the glue that connects objects in OOP. Think of these relationships as friendships: some are casual ("uses-a"), some are lifelong ("has-a"), and some are inseparable ("part-of").  

***Why Class Relationships Matter***:  
- Model real-world interactions (e.g., a `Driver` *drives* a `Car`).  
- Define how objects collaborate and depend on each other.  



### **Basic Concepts & Definitions**  
- **Association**: A general relationship where one class knows about another (e.g., `Teacher` ↔ `Student`). <br>
- **Aggregation**: A "has-a" relationship where parts *can exist independently* (e.g., `University` has `Departments`).<br>  
- **Composition**: A "has-a" relationship where parts *cannot exist without the whole* (e.g., `House` has `Rooms`).<br>  
- **Dependency**: A temporary "uses-a" relationship (e.g., `Person` uses a `CoffeeCup`).<br>  



### **Association**  
*Plain Language*:  
> A simple, flexible link between two classes. They can interact, but neither owns the other.  

*Real-World Analogy*:  
> A **teacher** and **student** in a classroom:  
> - The teacher knows the student (and vice versa).  
> - Both exist independently (if the teacher leaves, the student remains).  

---

#### ***Examples:***  

<summary>@Python</summary>

```python  
class Teacher:  
    def __init__(self, name):  
        self.name = name  

class Student:  
    def __init__(self, name, teacher):  
        self.name = name  
        self.teacher = teacher  # Association  

# Creating objects  
mr_smith = Teacher("Mr. Smith")  
alice = Student("Alice", mr_smith)  
print(alice.teacher.name)  # Output: Mr. Smith
```

<summary>@Java</summary> 

```java
class Teacher {
    String name;

    Teacher(String name) {
        this.name = name;
    }
}

class Student {
    String name;
    Teacher teacher;  // Association

    Student(String name, Teacher teacher) {
        this.name = name;
        this.teacher = teacher;
    }
}

public class Main {
    public static void main(String[] args) {
        Teacher mrSmith = new Teacher("Mr. Smith");
        Student alice = new Student("Alice", mrSmith);
        System.out.println(alice.teacher.name);  // Output: Mr. Smith
    }
}
```

<summary>@C++</summary>

```cpp
#include <iostream>
using namespace std;

class Teacher {
public:
    string name;
    Teacher(string n) : name(n) {}
};

class Student {
public:
    string name;
    Teacher* teacher;  // Association

    Student(string n, Teacher* t) : name(n), teacher(t) {}
};

int main() {
    Teacher mrSmith("Mr. Smith");
    Student alice("Alice", &mrSmith);
    cout << alice.teacher->name << endl;  // Output: Mr. Smith
    return 0;
}
```

### **How It Works?**  
- **No ownership**: Both classes can exist independently.
- **Loose coupling**: Objects are linked without tight dependency.
- **No lifecycle dependency**: Deleting one object doesn't affect the other.
  

### **Aggregation ("Has-a" with Independent Lifecycle)**  
*Plain Language*:  
> A whole *contains* parts, but parts can exist on their own.  

*Real-World Analogy*:  
> A **university** and its **departments**:  
> - The university has departments (e.g., Computer Science, Biology).  
> - Departments can exist even if the university closes.  


#### ***Example*** 

<summary>@python</summary>

```python  
class Department:  
    def __init__(self, name):  
        self.name = name  

class University:  
    def __init__(self, name):  
        self.name = name  
        self.departments = []  # Aggregation  

    def add_department(self, department):  
        self.departments.append(department)  

# Independent objects  
cs_dept = Department("Computer Science")  
mit = University("MIT")  
mit.add_department(cs_dept)  

# Departments exist even if the university closes  
del mit  
print(cs_dept.name)  # Output: Computer Science  
```

<summary>@Java</summary>

```java
class Department {
    String name;
    Department(String name) {
        this.name = name;
    }
}

class University {
    String name;
    List<Department> departments = new ArrayList<>();  // Aggregation

    University(String name) {
        this.name = name;
    }

    void addDepartment(Department dept) {
        departments.add(dept);
    }
}

public class Main {
    public static void main(String[] args) {
        Department csDept = new Department("Computer Science");
        University mit = new University("MIT");
        mit.addDepartment(csDept);
        mit = null;
        System.out.println(csDept.name);  // Output: Computer Science
    }
}
```


#### <summary>@C++</summary> 
```cpp
#include <iostream>
#include <vector>
using namespace std;

class Department {
public:
    string name;
    Department(string n) : name(n) {}
};

class University {
public:
    string name;
    vector<Department*> departments;  // Aggregation

    University(string n) : name(n) {}

    void addDepartment(Department* dept) {
        departments.push_back(dept);
    }
};

int main() {
    Department csDept("Computer Science");
    University mit("MIT");
    mit.addDepartment(&csDept);
    // mit is deleted, but csDept still exists
    cout << csDept.name << endl;  // Output: Computer Science
    return 0;
}
```

**How It Works?**  
- **Has-a relationship**: Whole contains parts, but parts **can exist independently**.
- **No lifecycle dependency**: If the whole is deleted, parts **still exist**.
- **Weaker ownership** compared to Composition.


### Composition ("Has-a" with Dependent Lifecycle) 
*Plain Language*:  
> A whole *owns* parts that cannot exist independently.  

*Real-World Analogy*:  
> A **car** and its **engine**:  
> - The engine is part of the car.  
> - If the car is scrapped, the engine is destroyed too.  

*Code Example*:  

<summary>@Python</summary>

```python  
class Engine:  
    def __init__(self, type):  
        self.type = type  

class Car:  
    def __init__(self, model):  
        self.model = model  
        self.engine = Engine("V8")  # Composition  

tesla = Car("Model S")  
# If the car is deleted, the engine dies with it.  
```  


#### ***Composition ("Has-a" with Dependent Lifecycle)***  
*Plain Language*:  
> A whole *owns* parts that cannot exist independently.  

*Real-World Analogy*:  
> A **car** and its **engine**:  
> - The engine is part of the car.  
> - If the car is scrapped, the engine is destroyed too.  



<summary>@Python</summary>


```python  
class Engine:  
    def __init__(self, type):  
        self.type = type  

class Car:  
    def __init__(self, model):  
        self.model = model  
        self.engine = Engine("V8")  # Composition  

tesla = Car("Model S")  
print(tesla.engine.type)  # Output: V8  

# If the car is deleted, the engine dies with it.  
del tesla
# print(tesla.engine.type)  # Error! tesla no longer exists  
```


<summary>@Java</summary>

```java
class Engine {
    String type;
    Engine(String type) {
        this.type = type;
    }
}

class Car {
    String model;
    Engine engine;  // Composition

    Car(String model) {
        this.model = model;
        this.engine = new Engine("V8");
    }
}

public class Main {
    public static void main(String[] args) {
        Car tesla = new Car("Model S");
        System.out.println(tesla.engine.type);  // Output: V8
        tesla = null;
        // Engine is also destroyed since it's part of the car
    }
}
```

<summary>@C++</summary> 

```cpp
#include <iostream>
using namespace std;

class Engine {
public:
    string type;
    Engine(string t) : type(t) {}
};

class Car {
public:
    string model;
    Engine engine;  // Composition

    Car(string m) : model(m), engine("V8") {}
};

int main() {
    Car tesla("Model S");
    cout << tesla.engine.type << endl;  // Output: V8
    // When tesla is destroyed, engine is also destroyed
    return 0;
}
```

***How It Works?***
- **Has-a relationship**: Whole contains parts that **cannot exist independently**.
- **Lifecycle dependency**: If the whole is deleted, parts **die with it**.
- **Strong ownership** compared to Aggregation.


#### ***Summary Table***  

| Concept         | Association            | Aggregation                 | Composition                   |
|-----------------|-------------------------|------------------------------|-------------------------------|
| **Definition**  | Relationship without ownership | Whole-part with independent parts | Whole-part with dependent parts |
| **Lifecycle**   | Independent             | Independent                  | Dependent                      |
| **Ownership**   | No ownership            | Weak ownership                | Strong ownership               |
| **Example**     | Teacher & Student       | University & Departments     | Car & Engine                   |



### **Practical Examples & Code Samples**  
#### **Visual Diagrams / UML Representation (Simplified)**  
```  
Association: Teacher — Student  
Aggregation: University ◇— Department  
Composition: Car ◆— Engine  
Dependency: Person ╌> CoffeeCup  
```  
**Aggregation vs. Composition**:  
```  
Aggregation (University ◇— Department):  
┌─────────────┐        ┌─────────────┐  
│  University │        │  Department │  
└─────────────┘        └─────────────┘  
       ◇                      ▲  
       └──────────────────────┘  

Composition (Car ◆— Engine):  
┌──────────┐        ┌─────────┐  
│   Car    │◆───────│ Engine  │  
└──────────┘        └─────────┘  
```  
---

### **Usage Guidelines & Best Practices**  
**When to Use**:  
- **Aggregation**: For loosely coupled parts (e.g., shopping cart and items).  
- **Composition**: For tightly coupled parts (e.g., a human and their heart).  
- **Dependency**: For short-term collaborations (e.g., passing a logger to a function).  

**Pitfalls to Avoid**:  
- **Confusing Aggregation & Composition**: Ask, "Can the part exist alone?"  
- **Circular Dependencies**: Class A depends on B, and B depends on A (creates spaghetti code).  

**Pro Tips**:  
- Prefer **composition over inheritance** for code flexibility.  
- Use dependency injection to manage temporary relationships.  

**Key Takeaways**  
- **Aggregation**: Independent parts (e.g., playlist and songs).  
- **Composition**: Inseparable parts (e.g., brain and body).  
- **Dependency**: Temporary collaboration (e.g., a function using a logger).