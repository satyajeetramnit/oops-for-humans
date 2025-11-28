import os
import re

directory = '/Users/satyajeetramnit/Projects/oops-for-humans/src/components/playground'

# Replacements map: (regex pattern, replacement string)
replacements = [
    (r'\bbg-white\b', 'bg-[var(--card-bg)]'),
    (r'\bborder-black\b', 'border-[var(--card-border)]'),
    (r'\btext-black\b', 'text-ink'),
    (r'\bbg-gray-50\b', 'bg-gray-50 dark:bg-slate-800/50'),
    (r'\bbg-gray-100\b', 'bg-gray-100 dark:bg-slate-800'),
    (r'\bbg-blue-50\b', 'bg-blue-50 dark:bg-blue-900/20'),
    (r'\bbg-yellow-50\b', 'bg-yellow-50 dark:bg-yellow-900/20'),
    (r'\bbg-red-50\b', 'bg-red-50 dark:bg-red-900/20'),
    (r'\bbg-green-50\b', 'bg-green-50 dark:bg-green-900/20'),
]

for filename in os.listdir(directory):
    if filename.endswith(".tsx"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r') as f:
            content = f.read()
        
        new_content = content
        for pattern, replacement in replacements:
            new_content = re.sub(pattern, replacement, new_content)
            
        if new_content != content:
            with open(filepath, 'w') as f:
                f.write(new_content)
            print(f"Updated {filename}")
