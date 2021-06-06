import { useState } from 'react'
import { Link, routes, useLocation } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { OrganizationContext } from 'src/components/Cells/OrganizationProviderCell'
import {
  AtSymbolIcon,
  CurrencyDollarIcon,
  SpeakerphoneIcon,
  HomeIcon,
  OfficeBuildingIcon,
  CollectionIcon,
  UserGroupIcon,
  SupportIcon,
  TicketIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ClipboardCheckIcon,
  TemplateIcon,
  BriefcaseIcon,
  ClipboardListIcon,
  FilterIcon,
  TableIcon,
  IdentificationIcon,
  NewspaperIcon,
  SortDescendingIcon,
  CashIcon,
  PresentationChartLineIcon,
  ScaleIcon,
  CogIcon,
  ChatIcon,
  EmojiHappyIcon,
  UsersIcon,
} from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navigation = () => {
  const [activeSubmenu, setActiveSubmenu] = useState('')
  const { pathname } = useLocation()
  const { hasRole } = useAuth()
  const organization = React.useContext(OrganizationContext)

  function checkActive(route) {
    if (route !== '/' && pathname.includes(route)) {
      return true
    } else if (route === pathname) {
      return true
    } else {
      return false
    }
  }

  const navigation = [
    { name: 'Dashboard', to: routes.dashboard(), icon: HomeIcon },
    {
      name: 'Organization',
      to: routes.organization(),
      icon: OfficeBuildingIcon,
      submenu: [
        { name: 'Employees', to: routes.employees(), icon: UsersIcon },
        { name: 'Departments', to: routes.departments(), icon: TemplateIcon },
        {
          name: 'Settings',
          to: routes.settings(),
          icon: CogIcon,
          roles: ['admin'],
        },
      ],
    },
    {
      name: 'Contacts',
      to: routes.contacts(),
      icon: IdentificationIcon,
      roles: ['marketing', 'sales'],
      authorized: organization?.crm,
      submenu: [
        { name: 'Companies', to: routes.companies(), icon: AtSymbolIcon },
      ],
    },
    {
      name: 'Finance',
      to: '#',
      icon: CurrencyDollarIcon,
      roles: ['finance'],
      authorized: organization?.accounting,
      submenu: [{ name: 'Accounting', to: '#', icon: ScaleIcon }],
    },
    {
      name: 'HR',
      to: '#',
      icon: UserGroupIcon,
      roles: ['hr'],
      authorized: organization?.hr,
      submenu: [
        {
          name: 'Payroll',
          to: '#',
          icon: CashIcon,
          authorized: organization?.payroll,
        },
        { name: 'Onboarding', to: '#', icon: EmojiHappyIcon },
      ],
    },
    {
      name: 'Recruit',
      to: routes.recruit(),
      icon: FilterIcon,
      roles: ['hr'],
      authorized: organization?.recruiting,
      submenu: [
        { name: 'Jobs', to: routes.jobs(), icon: BriefcaseIcon },
        {
          name: 'Applications',
          to: routes.applications(),
          icon: ClipboardListIcon,
        },
        { name: 'Fields', to: '#', icon: TableIcon },
      ],
    },
    {
      name: 'Marketing',
      to: '#',
      icon: SpeakerphoneIcon,
      roles: ['marketing'],
      authorized: organization?.marketing,
    },
    {
      name: 'Sales',
      to: '#',
      icon: PresentationChartLineIcon,
      roles: ['sales'],
    },
    {
      name: 'Helpdesk',
      to: routes.helpdesk(),
      icon: SupportIcon,
      roles: ['support'],
      authorized: organization?.helpdesk,
      submenu: [
        { name: 'Messages', to: routes.messages(), icon: ChatIcon },
        { name: 'Tickets', to: routes.tickets(), icon: TicketIcon },
        { name: 'Articles', to: routes.articles(), icon: NewspaperIcon },
        {
          name: 'Categories',
          to: routes.articleCategories(),
          icon: SortDescendingIcon,
        },
      ],
    },
    {
      name: 'Projects',
      to: routes.projects(),
      icon: CollectionIcon,
      authorized: organization?.projectManagement,
      submenu: [
        { name: 'Tasks', to: routes.tasks(), icon: ClipboardCheckIcon },
      ],
    },
  ]

  function toggleSubmenu(name) {
    if (activeSubmenu === name) {
      setActiveSubmenu('')
    } else {
      setActiveSubmenu(name)
    }
  }

  function permissionCheck(roles) {
    // Admins get full permissions
    if (hasRole('admin')) return true

    // Check if user has a matching role
    if (roles) {
      if (hasRole(roles)) {
        return true
      } else {
        return false
      }
    }

    return true
  }

  return (
    <nav className="mt-5 flex-1 px-2 bg-gray-800 space-y-1">
      {navigation.map(
        (item) =>
          permissionCheck(item?.roles) &&
          (item.authorized === undefined || item.authorized === true) && (
            <ul key={item.name}>
              <li>
                <div className="flex items-stretch space-x-1">
                  <Link
                    to={item.to}
                    className={`${
                      checkActive(item.to)
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300'
                    } flex-1 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base md:text-sm font-medium rounded-md`}
                  >
                    <item.icon
                      className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <button
                      className={`${
                        activeSubmenu === item.name ? 'bg-gray-600' : ''
                      } text-gray-300 flex items-center px-2 py-2 text-sm rounded-md font-medium hover:bg-gray-700 hover:text-white`}
                      onClick={() => toggleSubmenu(item.name)}
                    >
                      <span className="sr-only">
                        {`${activeSubmenu === item.name ? 'Hide' : 'Show'} ${
                          item.name
                        } sub-menu`}
                      </span>
                      {activeSubmenu === item.name ? (
                        <ChevronUpIcon className="h-4 w-4" />
                      ) : (
                        <ChevronDownIcon className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>
                {item.submenu && activeSubmenu === item.name && (
                  <ul className="bg-gray-600 mt-1 rounded-md p-1 space-y-1">
                    {item.submenu.map(
                      (item) =>
                        permissionCheck(item?.roles) && (
                          <li key={item.name}>
                            <Link
                              to={item.to}
                              className={`${
                                checkActive(item.to)
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-100'
                              } flex-1 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base md:text-sm font-medium rounded-md`}
                            >
                              <item.icon
                                className={classNames(
                                  item.current
                                    ? 'text-gray-200'
                                    : 'text-gray-300 group-hover:text-gray-100',
                                  'mr-3 h-6 w-6'
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                            </Link>
                          </li>
                        )
                    )}
                  </ul>
                )}
              </li>
            </ul>
          )
      )}
    </nav>
  )
}

export default Navigation
