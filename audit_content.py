import os

content_dir = 'src/content'
missing_switcher = []

for root, dirs, files in os.walk(content_dir):
    for file in files:
        if file.endswith('.mdx'):
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()
                # Check if file has code blocks but no CodeSwitcher
                if '```' in content and '<CodeSwitcher' not in content:
                    missing_switcher.append(path)

print("Files missing CodeSwitcher:")
for path in missing_switcher:
    print(path)
