import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Portfolio',
  description: 'My current portfolio',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Portfolio</h1>
      <BlogPosts />
    </section>
  )
}
