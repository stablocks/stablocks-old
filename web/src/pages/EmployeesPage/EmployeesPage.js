import { Link, routes } from '@redwoodjs/router'

const EmployeesPage = () => {
  return (
    <>
      <h1>EmployeesPage</h1>
      <p>
        Find me in <code>./web/src/pages/EmployeesPage/EmployeesPage.js</code>
      </p>
      <p>
        My default route is named <code>employees</code>, link to me with `
        <Link to={routes.employees()}>Employees</Link>`
      </p>
    </>
  )
}

export default EmployeesPage
