import { DISTRICTS } from "@/lib/districts";
import { getAllPosts } from "@/lib/blog-data";

const SITE_URL = "https://www.navpathacademy.com";

export default function sitemap() {
  const now = new Date();
  const staticRoutes = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/course`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/for-parents`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blogs`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.7,
    },
  ];

  const districtRoutes = DISTRICTS.map((district) => ({
    url: `${SITE_URL}/${district.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blogs/${post.slug}`,
    lastModified: post.dateModified || post.datePublished || now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...districtRoutes, ...blogRoutes];
}
