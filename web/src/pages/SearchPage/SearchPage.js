import { Link, routes, useLocation } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'
import { SearchContext } from 'src/layouts/AdminLayout'

const SearchPage = () => {
  const { setSearchTitle, setSearchType } = React.useContext(SearchContext)
  const { search } = useLocation()

  const params = new URLSearchParams(search)
  const type = params.get('type')
  const query = params.get('query')

  React.useEffect(() => {
    setSearchTitle(type)
    setSearchType(type)
  }, [setSearchTitle, type, setSearchType])

  let title = 'Search'

  title += type ? ` ${type}` : ''
  title += query ? ` for "${query}"` : ''

  return (
    <>
      <DashboardHeading title={title} />
      <p>
        Find me in <code>./web/src/pages/SearchPage/SearchPage.js</code>
      </p>
      <p>
        My default route is named <code>search</code>, link to me with `
        <Link to={routes.search()}>Search</Link>`
      </p>
    </>
  )
}

export default SearchPage
