import { Private, Router, Route, Set } from '@redwoodjs/router'
import OrganizationProviderCell from 'src/components/Cells/OrganizationProviderCell'
import AdminLayout from 'src/layouts/AdminLayout'
import MainLayout from 'src/layouts/MainLayout'
import FormLayout from 'src/layouts/FormLayout'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="login">
        <Set wrap={[OrganizationProviderCell, AdminLayout]}>
          <Private unauthenticated="login" role={['admin']}>
            <Route path="/organization/settings" page={SettingsPage} name="settings" />
          </Private>
          <Route path="/organization/departments" page={DepartmentsPage} name="departments" />
          <Route path="/organization/employees" page={EmployeesPage} name="employees" />
          <Route path="/organization" page={OrganizationPage} name="organization" />
          <Route path="/contacts/companies" page={CompaniesPage} name="companies" />
          <Route path="/contacts" page={ContactsPage} name="contacts" />
          <Private unauthenticated="login" role={['admin', 'hr']}>
            <Route path="/recruit/applications" page={ApplicationsPage} name="applications" />
            <Route path="/recruit/jobs" page={JobsPage} name="jobs" />
            <Route path="/recruit" page={RecruitPage} name="recruit" />
          </Private>
          <Private unauthenticated="login" role={['admin', 'support']}>
            <Route path="/helpdesk/categories/{id}" page={ArticleCategoryPage} name="articleCategory" />
            <Route path="/helpdesk/categories" page={ArticleCategoriesPage} name="articleCategories" />
            <Route path="/helpdesk/articles/{id}" page={ArticlePage} name="article" />
            <Route path="/helpdesk/articles" page={ArticlesPage} name="articles" />
            <Route path="/helpdesk/tickets/{id}" page={TicketPage} name="ticket" />
            <Route path="/helpdesk/tickets" page={TicketsPage} name="tickets" />
            <Route path="/helpdesk/messages/{id}" page={MessagePage} name="message" />
            <Route path="/helpdesk/messages" page={MessagesPage} name="messages" />
            <Route path="/helpdesk" page={HelpdeskPage} name="helpdesk" />
          </Private>
          <Route path="/projects/tasks" page={TasksPage} name="tasks" />
          <Route path="/projects/{id}" page={ProjectPage} name="project" />
          <Route path="/projects" page={ProjectsPage} name="projects" />
          <Route path="/profile/settings" page={UserSettingsPage} name="userSettings" />
          <Route path="/profile" page={ProfilePage} name="profile" />
          <Route path="/search" page={SearchPage} name="search" />
          <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        </Set>
      </Private>
      <Route path="/u/{slug}/helpdesk/{id}" page={PublicTicketPage} name="publicTicket" />
      <Route path="/u/{slug}/helpdesk" page={PublicHelpdeskPage} name="publicHelpdesk" />
      <Route path="/u/{slug}/careers/{id}" page={PublicJobPage} name="publicJob" />
      <Route path="/u/{slug}/careers" page={PublicRecruitPage} name="publicRecruit" />
      <Route path="/u/{slug}" page={PublicOrganizationPage} name="publicOrganization" />
      <Set wrap={FormLayout}>
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/login" page={LoginPage} name="login" />
      </Set>
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
