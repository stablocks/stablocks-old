import { Private, Router, Route, Set } from '@redwoodjs/router'
import OrganizationProviderCell from 'src/components/Cells/OrganizationProviderCell'
import AdminLayout from 'src/layouts/AdminLayout'
import MainLayout from 'src/layouts/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="login">
        <Set wrap={[OrganizationProviderCell, AdminLayout]}>
          <Route path="/helpdesk/tickets" page={TicketsPage} name="tickets" />
          <Route path="/helpdesk" page={HelpdeskPage} name="helpdesk" />
          <Route path="/profile" page={ProfilePage} name="profile" />
          <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        </Set>
      </Private>
      <Set wrap={MainLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
