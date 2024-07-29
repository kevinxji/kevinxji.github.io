import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://kevinxji.github.io/'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/portfolio/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/portfolio'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
