import { Link, routes } from '@redwoodjs/router'

const DepartmentsPage = () => {
  return (
    <>
      <h1>DepartmentsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/DepartmentsPage/DepartmentsPage.js</code>
      </p>
      <p>
        My default route is named <code>departments</code>, link to me with `
        <Link to={routes.departments()}>Departments</Link>`
      </p>
    </>
  )
}

export default DepartmentsPage
