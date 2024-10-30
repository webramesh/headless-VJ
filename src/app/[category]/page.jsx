import { getPostsByCategory, getAllCategories } from '../../lib/api/postAPI'
import CategoryPage from './CategoryPage'

export async function generateStaticParams() {
  const categories = await getAllCategories()

  return categories.map((category) => ({
    category: category.slug,
  }))
}

export default async function Page({ params, searchParams }) {
  const page = parseInt(searchParams.page) || 1
  const postsPerPage = 12

  const { posts: allPosts, categoryName, categoryDescription } = await getPostsByCategory(params.category || 'online')

  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const posts = allPosts.slice(startIndex, endIndex)
  const totalPages = Math.ceil(allPosts.length / postsPerPage)

  return (
    <CategoryPage
      posts={posts}
      categoryName={categoryName}
      categoryDescription={categoryDescription}
      page={page}
      totalPages={totalPages}
      category={params.category || 'online'}
    />
  )
}

export async function generateMetadata({ params }) {
  return {
    title: `Category: ${params.category || 'Online'}`,
    description: `Posts in the ${params.category || 'Online'} category`,
  }
}