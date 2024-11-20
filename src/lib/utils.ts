import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { type CollectionEntry } from "astro:content";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function extractYearAndMonth(dateString: string) {
    const date = new Date(dateString)
    const year = date.getFullYear();
    const month = date.toLocaleDateString("default",{ month: "short" })

    return `${month} ${year}`
}

export function getSortedPosts(posts: CollectionEntry<"project" | "writing">[] ) {
    return posts.sort((a, b) => new Date(a.data.date).getTime() + new Date(b.data.date).getTime())
}