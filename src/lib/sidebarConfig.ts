export type SidebarItem = {
    title: string;
    href?: string;
    items?: SidebarItem[];
};

export const sidebarConfig: SidebarItem[] = [
    {
        title: "Module 1: The Foundation",
        items: [
            { title: "What is OOP?", href: "/learn/what-is-oop" },
            { title: "Classes and Objects", href: "/learn/classes-and-objects" },
            { title: "Constructors", href: "/learn/constructors" },
            { title: "Static Keyword", href: "/learn/static" },
        ],
    },
    {
        title: "Module 2: The Four Pillars",
        items: [
            { title: "Encapsulation", href: "/learn/encapsulation" },
            { title: "Inheritance", href: "/learn/inheritance" },
            { title: "Polymorphism", href: "/learn/polymorphism" },
            { title: "Abstraction", href: "/learn/abstraction" },
        ],
    },
    {
        title: "Module 3: The Toolbox",
        items: [
            { title: "Interfaces", href: "/learn/interfaces" },
            { title: "Abstract Classes", href: "/learn/abstract-classes" },
            { title: "Exception Handling", href: "/learn/exceptions" },
            { title: "Collections", href: "/learn/collections" },
            { title: "Generics", href: "/learn/generics" },
            { title: "Enums", href: "/learn/enums" },
        ],
    },
    {
        title: "Module 4: The Architect",
        items: [
            { title: "SOLID Principles", href: "/learn/solid" },
        ],
    },
    {
        title: "Module 5: Design Patterns",
        items: [
            { title: "Singleton Pattern", href: "/learn/singleton" },
            { title: "Factory Pattern", href: "/learn/factory" },
            { title: "Observer Pattern", href: "/learn/observer" },
            { title: "Strategy Pattern", href: "/learn/strategy" },
        ],
    },
    {
        title: "Module 6: The Advanced Toolkit",
        items: [
            { title: "Class Relationships", href: "/learn/class-relationships" },
            { title: "Memory Management", href: "/learn/memory-management" },
            { title: "Concurrency", href: "/learn/concurrency" },
        ],
    },
    {
        title: "Module 7: Professional Practices",
        items: [
            { title: "Dependency Injection", href: "/learn/dependency-injection" },
            { title: "Unit Testing", href: "/learn/unit-testing" },
            { title: "Design Principles", href: "/learn/design-principles" },
        ],
    },
    {
        title: "Module 8: The Expert Level",
        items: [
            { title: "Object Cloning", href: "/learn/object-cloning" },
            { title: "Serialization", href: "/learn/serialization" },
            { title: "Reflection", href: "/learn/reflection" },
        ],
    },
    {
        title: "Module 9: The Ecosystem",
        items: [
            { title: "Type System", href: "/learn/type-system" },
            { title: "Immutable Objects", href: "/learn/immutable-objects" },
            { title: "Generics", href: "/learn/generics" },
        ],
    },
    {
        title: "Module 10: Architecture & Design",
        items: [
            { title: "UML Diagrams", href: "/learn/uml-diagrams" },
            { title: "Event-Driven", href: "/learn/event-driven" },
            { title: "Namespaces", href: "/learn/namespaces" },
        ],
    },
];
