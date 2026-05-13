export default function BlogCard({ post }) {
  return (
    <article>
      <h3>{post?.title || 'Tiêu đề bài viết'}</h3>
      <p>{post?.excerpt || 'Tóm tắt'}</p>
    </article>
  )
}
