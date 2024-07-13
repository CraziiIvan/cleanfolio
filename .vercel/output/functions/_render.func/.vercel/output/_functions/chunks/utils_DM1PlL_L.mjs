import './_astro_content_gL7k3uWi.mjs';

function extractYearAndMonth(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.toLocaleDateString("default", { month: "short" });
  return `${month} ${year}`;
}
function getSortedPosts(posts) {
  return posts.sort((a, b) => new Date(a.data.date).getTime() + new Date(b.data.date).getTime());
}

export { extractYearAndMonth as e, getSortedPosts as g };
