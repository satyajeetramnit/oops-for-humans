import os
import re

directory = '/Users/satyajeetramnit/Projects/oops-for-humans/src/components/playground'

# Replacements map: (regex pattern, replacement string)
# We want to find `dark:hover:bg-` and replace with `dark:hover:!bg-`
# But only if it's not already !
replacements = [
    (r'dark:hover:bg-slate-700', 'dark:hover:!bg-slate-700'),
    (r'dark:hover:bg-slate-800', 'dark:hover:!bg-slate-800'),
    (r'dark:hover:bg-slate-600', 'dark:hover:!bg-slate-600'),
    (r'dark:hover:bg-red-900/40', 'dark:hover:!bg-red-900/40'),
    (r'dark:hover:bg-green-900/40', 'dark:hover:!bg-green-900/40'),
    (r'dark:hover:bg-blue-900/40', 'dark:hover:!bg-blue-900/40'),
    (r'dark:hover:bg-yellow-900/40', 'dark:hover:!bg-yellow-900/40'),
    (r'dark:hover:bg-purple-900/40', 'dark:hover:!bg-purple-900/40'),
    (r'dark:hover:bg-orange-900/40', 'dark:hover:!bg-orange-900/40'),
]

for filename in os.listdir(directory):
    if filename.endswith(".tsx"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r') as f:
            content = f.read()
        
        new_content = content
        for pattern, replacement in replacements:
            # Only replace if the replacement isn't already there
            if replacement not in new_content:
                 new_content = re.sub(pattern, replacement, new_content)
            
        if new_content != content:
            with open(filepath, 'w') as f:
                f.write(new_content)
            print(f"Updated {filename}")
