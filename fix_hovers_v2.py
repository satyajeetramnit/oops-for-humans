import os
import re

directory = '/Users/satyajeetramnit/Projects/oops-for-humans/src/components/playground'

# Replacements map: (regex pattern, replacement string)
replacements = [
    # Fix hover states that are still light in dark mode
    (r'hover:bg-gray-50 dark:hover:bg-slate-800', 'hover:bg-gray-50 dark:hover:bg-slate-700'), # Slightly lighter on hover
    (r'hover:bg-gray-200', 'hover:bg-gray-200 dark:hover:bg-slate-600'),
    (r'hover:bg-red-50', 'hover:bg-red-50 dark:hover:bg-red-900/40'),
    (r'hover:bg-green-50', 'hover:bg-green-50 dark:hover:bg-green-900/40'),
    (r'hover:bg-blue-50', 'hover:bg-blue-50 dark:hover:bg-blue-900/40'),
    (r'hover:bg-yellow-50', 'hover:bg-yellow-50 dark:hover:bg-yellow-900/40'),
    (r'hover:bg-purple-50', 'hover:bg-purple-50 dark:hover:bg-purple-900/40'),
    (r'hover:bg-orange-50', 'hover:bg-orange-50 dark:hover:bg-orange-900/40'),
    
    # Fix active states
    (r'active:bg-gray-100', 'active:bg-gray-100 dark:active:bg-slate-600'),
    
    # Ensure inputs/selects are dark
    (r'bg-white dark:bg-slate-800', 'bg-white dark:bg-slate-900'),
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
