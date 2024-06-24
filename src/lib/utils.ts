import { type CollectionEntry } from "astro:content";

export function extractYearAndMonth(dateString: string) {
    const date = new Date(dateString)
    const year = date.getFullYear();
    const month = date.toLocaleDateString("default",{ month: "short" })

    return `${month} ${year}`
}

export function getSortedPosts(posts: CollectionEntry<"project" | "writing">[] ) {
    return posts.sort((a, b) => new Date(a.data.date).getTime() + new Date(b.data.date).getTime())
}