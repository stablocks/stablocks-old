import { Link, routes } from '@redwoodjs/router'

const ArticleCategoryPage = () => {
  return (
    <>
      <h1>ArticleCategoryPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ArticleCategoryPage/ArticleCategoryPage.js</code>
      </p>
      <p>
        My default route is named <code>articleCategory</code>, link to me with
        `<Link to={routes.articleCategory()}>ArticleCategory</Link>`
      </p>
    </>
  )
}

export default ArticleCategoryPage
