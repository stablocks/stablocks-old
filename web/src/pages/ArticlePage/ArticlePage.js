import { Link, routes } from '@redwoodjs/router'

const ArticlePage = () => {
  return (
    <>
      <h1>ArticlePage</h1>
      <p>
        Find me in <code>./web/src/pages/ArticlePage/ArticlePage.js</code>
      </p>
      <p>
        My default route is named <code>article</code>, link to me with `
        <Link to={routes.article()}>Article</Link>`
      </p>
    </>
  )
}

export default ArticlePage
