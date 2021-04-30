import { useState } from 'react'
import { Link, NavLink, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
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
} from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navigation = () => {
  const { currentUser } = useAuth()
  const [activeSubmenu, setActiveSubmenu] = useState('')

  const navigation = [
    { name: 'Dashboard', to: routes.dashboard(), icon: HomeIcon },
    {
      name: 'Organization',
      to: '#',
      icon: OfficeBuildingIcon,
      submenu: [
        { name: 'Departments', to: '#', icon: TemplateIcon },
        { name: 'Settings', to: '#', icon: CogIcon, roles: ['admin'] },
      ],
    },
    {
      name: 'Contacts',
      to: '#',
      icon: IdentificationIcon,
      roles: ['admin, marketing, sales'],
      submenu: [{ name: 'Companies', to: '#', icon: AtSymbolIcon }],
    },
    {
      name: 'Finance',
      to: '#',
      icon: CurrencyDollarIcon,
      submenu: [{ name: 'Accounting', to: '#', icon: ScaleIcon }],
    },
    {
      name: 'HR',
      to: '#',
      icon: UserGroupIcon,
      submenu: [
        { name: 'Payroll', to: '#', icon: CashIcon },
        { name: 'Onboarding', to: '#', icon: EmojiHappyIcon },
      ],
    },
    {
      name: 'Recruit',
      to: '#',
      icon: FilterIcon,
      submenu: [
        { name: 'Jobs', to: '#', icon: BriefcaseIcon },
        { name: 'Applications', to: '#', icon: ClipboardListIcon },
        { name: 'Fields', to: '#', icon: TableIcon },
      ],
    },
    { name: 'Marketing', to: '#', icon: SpeakerphoneIcon },
    { name: 'Sales', to: '#', icon: PresentationChartLineIcon },
    {
      name: 'Help Desk',
      to: '#',
      icon: SupportIcon,
      submenu: [
        { name: 'Messages', to: '#', icon: ChatIcon },
        { name: 'Tickets', to: '#', icon: TicketIcon },
        { name: 'Articles', to: '#', icon: NewspaperIcon },
        { name: 'Categories', to: '#', icon: SortDescendingIcon },
      ],
    },
    {
      name: 'Projects',
      to: '#',
      icon: CollectionIcon,
      submenu: [{ name: 'Tasks', to: '#', icon: ClipboardCheckIcon }],
    },
  ]

  function toggleSubmenu(name) {
    if (activeSubmenu === name) {
      setActiveSubmenu('')
    } else {
      setActiveSubmenu(name)
    }
  }

  return (
    <nav className="mt-5 flex-1 px-2 bg-gray-800 space-y-1">
      {navigation.map((item) => (
        <ul key={item.name}>
          <li>
            <div className="flex items-stretch space-x-1">
              <NavLink
                to={item.to}
                className="flex-1 text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                activeClassName="bg-gray-900 text-white"
              >
                <item.icon
                  className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6"
                  aria-hidden="true"
                />
                {item.name}
              </NavLink>
              {item.submenu && (
                <button
                  className={`${
                    activeSubmenu === item.name
                      ? 'rounded-tl-md rounded-tr-md bg-gray-600'
                      : 'rounded-md'
                  } text-gray-300 flex items-center px-2 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white`}
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
              <ul className="bg-gray-600 rounded-tl-md rounded-bl-md rounded-br-md p-1 space-y-1">
                {item.submenu.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.to}
                      className="flex-1 text-gray-100 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
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
                ))}
              </ul>
            )}
          </li>
        </ul>
      ))}
    </nav>
  )
}

export default Navigation
