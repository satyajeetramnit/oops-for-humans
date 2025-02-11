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
   - Types of Inheritance
        - [Single](#single-inheritance)
        - [Multiple](#multiple-inheritance)
        - [Multilevel](#multi-level-inheritance)
        - [Hierarchical](#hierarchical-inheritance)
        - [Hybrid](#hybrid-inheritance)  
   - [Method overriding](#method-overriding)
   - [The Diamond Problem](#the-diamond-problem)
   - [`super()` Keyword](#super-in-python-vs-super-in-java)
   - [Constructor Chaining](#constructor-chaining)  

5. **Polymorphism**  
   - Compile-Time (Method Overloading) vs. Runtime (Method Overriding)  
   - Dynamic Method Dispatch  

6. **Abstraction**  
   - Abstract Classes, Interfaces  
   - Pure Virtual Functions  

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

***Comparision:***

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

***Comparision:***

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
| **Multiple Inheritance** | A class inherits from multiple parent classes.   | C++ and Python allow this. Java uses interfaces. |
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
- **Java:** Single inheritance for classes, multiple inheritance for interfaces.
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

> ***Note:** Java does not support multiple inheritance directly due to the "[Diamond Problem](#the-diamond-problem)," so interfaces are used instead.*

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
| **Java** | No (only via interfaces) | Interfaces have no method bodies until Java 8 (default methods). |

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

> ***Note:** Java does not support multiple inheritance directly due to the "[Diamond Problem](#the-diamond-problem)," so interfaces are used instead.*

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

> We use `super()` to avoid duplicate calls to the Vehicle class.
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
- Uses interfaces instead of multiple inheritance.
- Explicitly calls the desired interface’s method to resolve conflicts.
- Possible with interfaces (resolved using default method rules).

#### *Comparision*

| Feature                    | Python (MRO & `super()`)         | Java (Interfaces)                      | C++ (Virtual Inheritance)            |
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
| **Java**  | Prefer composition over inheritance. Use interfaces for multiple "traits". |
| **C++**   | Use virtual inheritance sparingly. Favor interfaces (abstract classes). |
| **Python**| Leverage mixins for reusable behaviors. Follow MRO conventions. |

### Key Takeaways
✅ Inheritance is a core OOP pillar, but implementations vary across languages.<br>
✅ Multiple Inheritance is powerful but risky; handle with care (MRO in Python, interfaces in Java).<br>
✅ Method Overriding ensures polymorphism, but syntax differs (`@Override` vs `virtual`).<br>