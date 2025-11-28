import os
import re

directory = '/Users/satyajeetramnit/Projects/oops-for-humans/src/components/playground'

# Replacements map: (regex pattern, replacement string)
replacements = [
    # Fix hover states that might be white in dark mode
    (r'hover:bg-gray-50', 'hover:bg-gray-50 dark:hover:bg-slate-800'),
    (r'hover:bg-gray-100', 'hover:bg-gray-100 dark:hover:bg-slate-700'),
    (r'hover:bg-blue-50', 'hover:bg-blue-50 dark:hover:bg-blue-900/30'),
    # Ensure inputs are dark
    (r'bg-white', 'bg-white dark:bg-slate-900'),
]

for filename in os.listdir(directory):
    if filename.endswith(".tsx"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r') as f:
            content = f.read()
        
        new_content = content
        for pattern, replacement in replacements:
            # Only replace if the replacement isn't already there (simple check)
            if replacement not in new_content:
                 new_content = re.sub(pattern, replacement, new_content)
            
        if new_content != content:
            with open(filepath, 'w') as f:
                f.write(new_content)
            print(f"Updated {filename}")
