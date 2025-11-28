import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import { sidebarConfig } from './sidebarConfig';
import { unified } from 'unified';

const README_PATH = path.join(process.cwd(), 'README.md');

// Map sidebar titles to possible README header variations
const TITLE_MAPPINGS: Record<string, string[]> = {
    "What is OOP?": ["What is Object-Oriented Programming (OOP)?"],
    "Classes and Objects": ["Classes and Objects"],
    "Encapsulation": ["Encapsulation"],
    "Inheritance": ["Inheritance"],
    "Polymorphism": ["Polymorphism"],
    "Abstraction": ["Abstraction"],
    "Class Relationships": ["Class Relationships"],
    "Constructors and Destructors": ["Constructors and Destructors"],
    "Object Lifetime": ["Object Lifetime & Memory Management"],
    "Static and Final": ["Static and Final Keywords"],
    "Interfaces vs Abstract Classes": ["Interfaces vs. Abstract Classes"],
    "Generics/Templates": ["Generics/Templates"],
    "Exception Handling": ["Exception Handling"],
    "Reflection": ["Reflection", "Reflection (Introspection of Classes/Methods at Runtime)"],
    "Serialization": ["Object Serialization/Deserialization"],
    "Concurrency": ["Concurrency in OOP", "Concurrency in OOP (Thread-Safe Objects & Synchronization)"],
    "Type Casting": ["Type Casting", "Type Casting (Upcasting/Downcasting, Type Checks)"],
    "Object Cloning": ["Object Cloning", "Object Cloning (Shallow vs. Deep Copy)"],
    "Unit Testing": ["Unit Testing in OOP", "Unit Testing in OOP (Mock Objects & Testing Frameworks)"],
    "OO Design & Modeling": ["Object-Oriented Design & Modeling"],
    "SOLID Principles": ["SOLID Principles"],
    "Coupling and Cohesion": ["Coupling and Cohesion"],
    "Composition Over Inheritance": ["Composition Over Inheritance Principle"],
    "Friend Classes (C++)": ["Friend Classes/Functions (C++)"],
    "Inner/Nested Classes": ["Inner/Nested Classes"],
    "Mixins and Traits": ["Mixins and Traits"],
};

export async function getContent(slugSegments: string[]) {
    const slug = '/' + slugSegments.join('/');

    // Find the title matching the slug
    let sidebarTitle = '';
    const findTitle = (items: any[]): string | null => {
        for (const item of items) {
            if (item.href === slug) return item.title;
            if (item.items) {
                const found = findTitle(item.items);
                if (found) return found;
            }
        }
        return null;
    };

    sidebarTitle = findTitle(sidebarConfig) || '';

    if (!sidebarTitle) return null;

    const possibleTitles = TITLE_MAPPINGS[sidebarTitle] || [sidebarTitle];

    const fileContent = fs.readFileSync(README_PATH, 'utf8');

    // Parse AST
    const processor = unified().use(remarkParse);
    const tree = processor.parse(fileContent);

    let foundNodes: any[] = [];
    let capturing = false;
    let captureLevel = 0;

    // @ts-ignore
    for (const node of tree.children) {
        if (node.type === 'heading') {
            const headingText = node.children.map((c: any) => c.value).join('');

            // Check if this heading matches our target
            const isMatch = possibleTitles.some(t => headingText.includes(t));

            if (isMatch) {
                capturing = true;
                captureLevel = node.depth;
                foundNodes.push(node);
                continue;
            }

            // Stop capturing if we hit a heading of the same or higher level (lower depth value)
            if (capturing && node.depth <= captureLevel) {
                capturing = false;
            }
        }

        if (capturing) {
            foundNodes.push(node);
        }
    }

    if (foundNodes.length === 0) {
        return `Content not found for "${sidebarTitle}". \n\nDebug: Searched for headers containing: ${JSON.stringify(possibleTitles)}`;
    }

    // Convert nodes back to markdown
    const result = remark().stringify({ type: 'root', children: foundNodes });
    return result;
}
