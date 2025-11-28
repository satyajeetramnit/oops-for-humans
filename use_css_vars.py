import os
import re

directory = '/Users/satyajeetramnit/Projects/oops-for-humans/src/components/playground'

# We want to replace all the complex hover logic with a single variable-based class.
# This regex looks for the pattern we've been fighting with:
# bg-[var(--card-bg)] ... hover:bg-gray-50 ... dark:hover:!bg-slate-700 ...
# And replaces the hover parts with `hover:bg-[var(--card-hover)]`

# Regex to match the common pattern in these files
# It looks for the start of the ternary false branch: : 'bg-[var(--card-bg)] ...'
pattern = r"bg-\[var\(--card-bg\)\] border-gray-300 hover:bg-gray-50.*?'"
replacement = "bg-[var(--card-bg)] border-gray-300 hover:bg-[var(--card-hover)]'"

# Also need to handle cases where I might have messed up the string in previous rounds
# or where it's slightly different.
# Let's just replace the specific hover classes we know are problematic.

replacements = [
    (r'hover:bg-gray-50 dark:hover:!bg-slate-700', 'hover:bg-[var(--card-hover)]'),
    (r'hover:bg-gray-50 dark:hover:!bg-slate-800', 'hover:bg-[var(--card-hover)]'),
    (r'hover:bg-gray-50 dark:hover:bg-slate-700', 'hover:bg-[var(--card-hover)]'),
    (r'hover:bg-gray-50 dark:hover:bg-slate-800', 'hover:bg-[var(--card-hover)]'),
    # Clean up any leftover dark:bg-slate-800/50 if it's causing issues, but that's usually fine.
    # Actually, let's keep the dark:bg-slate-800/50 as it's the non-hover state for dark mode?
    # No, wait. The pattern is usually:
    # '... hover:bg-gray-50 dark:hover:bg-slate-700 dark:bg-slate-800/50'
    # The last part is the default dark background.
    # If we use variables, we should rely on --card-bg which is already dark in dark mode.
    # But --card-bg is slate-900 (or similar).
    # The existing code often adds `dark:bg-slate-800/50` to make it slightly lighter than the card background?
    # Let's stick to replacing the HOVER part first.
]

for filename in os.listdir(directory):
    if filename.endswith(".tsx"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r') as f:
            content = f.read()
        
        new_content = content
        for p, r in replacements:
            new_content = new_content.replace(p, r)
            
        if new_content != content:
            with open(filepath, 'w') as f:
                f.write(new_content)
            print(f"Updated {filename}")
