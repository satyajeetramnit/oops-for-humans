import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_PATH = path.join(process.cwd(), 'src/content/oops');

export async function getMdxContent(slug: string) {
    const filePath = path.join(CONTENT_PATH, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContent);

    return {
        content,
        frontmatter: data,
    };
}

export function getAllSlugs() {
    if (!fs.existsSync(CONTENT_PATH)) return [];

    const files = fs.readdirSync(CONTENT_PATH);
    return files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => file.replace('.mdx', ''));
}
