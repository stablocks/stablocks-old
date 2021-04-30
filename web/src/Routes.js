import { Private, Router, Route, Set } from '@redwoodjs/router'
import OrganizationProviderCell from 'src/components/OrganizationProviderCell'
import AdminLayout from 'src/layouts/AdminLayout'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="login">
        <Set wrap={[OrganizationProviderCell, AdminLayout]}>
          <Route path="/profile" page={ProfilePage} name="profile" />
          <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        </Set>
      </Private>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
