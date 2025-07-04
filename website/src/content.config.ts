// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const news = defineCollection({
	loader: glob({ pattern: "*.md", base: "./news" })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { news };