import { Router, Route, Set } from '@redwoodjs/router'
import AdminLayout from 'src/layouts/AdminLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={AdminLayout}>
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
