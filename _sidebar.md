- [**Core Concepts**](#core-concepts-1)  
    - [What is Object-Oriented Programming (OOP)?](#what-is-object-oriented-programming-oop)  

    - [Classes and Objects](#classes-and-objects)  

- [**Four Pillars of OOPs**](#four-pillars-of-oops-1)  
    - [Encapsulation](#encapsulation)  

    - [Inheritance](#inheritance)  
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

    - [Polymorphism](#polymorphism)  
        - [Compile-Time (Method Overloading)](#compile-time-polymorphism)
        - [Operator Overloading](#operator-overloading)
        - [Runtime (Method Overriding)](#runtime-polymorphism-method-overriding)  
        - [Dynamic Method Dispatch](#dynamic-method-dispatch)

    - [Abstraction](#abstraction)  
        - [Abstract Classes](#abstract-classes)
        - [Interfaces](#interfaces)
        - [Pure Virtual Functions](#pure-virtual-functions)  

- [**Class Relationships & Design**](#class-relationships--design-1)  
    - [Class Relationships](#class-relationships)  
        - [Association](#association)
        - [Aggregation](#aggregation-has-a-with-independent-lifecycle)
        - [Composition](#composition-has-a-with-dependent-lifecycle)
        - [Dependency](#composition-has-a-with-dependent-lifecycle)  

    - [Constructors and Destructors](#constructors-and-destructors)  
        - [Constructors in Java/Python/C++](#concepts--definitions)
            - [Default](#default-constructor) 
            - [Parameterized](#parameterized-constructor)
            - [Copy](#copy-constructor-c-specific)
            - [Move](#move-constructor-c-specific)
    - [Destructors in Java/Python/C++](#destructors)  

    - [Object Lifetime & Memory Management](#object-lifetime--memory-management)  
        - [Garbage Collection](#garbage-collection)
        - [Manual Memory Management](#manual-memory-management)
        - [Java Heap Structure](#java-heap-structure)
        - [Dangling Pointers](#dangling-pointers)

    - [Static and Final Keywords](#static-and-final-keywords)  
        - [Static Variables/Methods](#static-variablesmethods)
        - [Final Classes/Methods/Variables](#final-classesmethodsvariables)  

    - [Interfaces vs. Abstract Classes](#interface-vs-abstract-class)  
        - [Default Methods in Interfaces](#default-methods-in-interfaces)
        - [Abstract Methods](#abstract-methods) 

- [**Advanced OOP Topics**](#advanced-oop-topics-1)  
    - [Generics/Templates](#genericstemplates)  
        - [Type Parameterization](#type-parameterization)
        - [Bounded Types](#bounded-types)  

    - [Exception Handling](#exception-handling)  
        - [Custom Exceptions](#custom-exceptions)
        - [Try-Catch Blocks](#try-catch-blocks)  

    - [Reflection](#reflection-introspection-of-classesmethods-at-runtime)  
        - [Introspection of Classes/Methods at Runtime](#reflection-introspection-of-classesmethods-at-runtime)  

    - [Object Serialization/Deserialization](#object-serializationdeserialization)  
        - [JSON Serialization](#json-serialization)
        - [Binary Serialization](#binary-serialization) 
        - [Security Considerations](#security-considerations)  

    - [Concurrency in OOP](#concurrency-in-oop-thread-safe-objects--synchronization)  
        - [Thread-Safe Objects, Synchronization](#thread-safety--synchronization)  

    - [Type Casting](#type-casting-upcastingdowncasting-type-checks)  
        - [Upcasting/Downcasting](#upcasting-safe), [`instanceof`/`typeid` Checks](#type-checks)  

    - [Messaging Between Objects](#messaging-between-objects)  

    - [Namespace/Package Organization](#namespacepackage-organization)  

    - [Object Cloning](#object-cloning-shallow-vs-deep-copy)  
        - [Shallow vs. Deep Copy](#object-cloning-shallow-vs-deep-copy)  

    - [Immutable Objects](#immutable-objects)  

    - [Event-Driven Programming](#event-driven-programming)  

    - [Dependency Injection](#dependency-injection)  

    - [Unit Testing in OOP](#unit-testing-in-oop-mock-objects--testing-frameworks)  
        - [Mock Objects](#mock-objects)
        - [Testing Frameworks](#testing-frameworks)  

    - [Root Object Class](#root-object-class)  

- [**Design Principles & Patterns**](#design-principles--patterns-1)  

    - [Object-Oriented Design & Modeling](#object-oriented-design--modeling)  
        - [UML Diagrams](#uml-diagrams)
        - [Class Diagrams](#class-diagrams)
        - [Sequence Diagrams](#sequence-diagrams)
        - [Use Case Diagrams](#use-case-diagrams)  

    - [SOLID Principles](#solid-principles)  
        - [Single Responsibility](#single-responsibility-principle-srp)  
        - [Open/Closed](#openclosed-principle-ocp)  
        - [Liskov Substitution](#liskov-substitution-principle-lsp)  
        - [Interface Segregation](#interface-segregation-principle-isp)  
        - [Dependency Inversion](#dependency-inversion-principle-dip)  

    - [Coupling and Cohesion](#coupling-and-cohesion)  
        - [Coupling](#coupling)
        - [Cohesion](#cohesion)  

    - [Composition Over Inheritance Principle](#composition-over-inheritance-principle)  

- [**Language-Specific Features**](#language-specific-features-1)  

    - [Friend Classes/Functions (C++)](#friend-classesfunctions-c)  
    - [Inner/Nested Classes](#innernested-classes)  
    - [Mixins and Traits](#mixins-and-traits)    