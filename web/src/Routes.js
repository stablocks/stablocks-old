import { Router, Route, Set } from '@redwoodjs/router'
import OrganizationProviderCell from 'src/components/OrganizationProviderCell'
import AdminLayout from 'src/layouts/AdminLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={[OrganizationProviderCell, AdminLayout]}>
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
