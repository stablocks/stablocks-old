import { Fragment, useState } from 'react'
import { Link, NavLink, routes } from '@redwoodjs/router'
import { Dialog, Transition } from '@headlessui/react'
import {
  AtSymbolIcon,
  CurrencyDollarIcon,
  SpeakerphoneIcon,
  HomeIcon,
  OfficeBuildingIcon,
  CollectionIcon,
  MenuIcon,
  UserGroupIcon,
  XIcon,
  SupportIcon,
  TicketIcon,
  ChevronDownIcon,
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
  ScaleIcon
} from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navigation = () => {
  const [activeSubmenu, setActiveSubmenu] = useState('')

  const navigation = [
    { name: 'Dashboard', to: routes.dashboard(), icon: HomeIcon },
    {
      name: 'Organization',
      to: '#',
      icon: OfficeBuildingIcon,
      submenu: [{ name: 'Departments', to: '#', icon: TemplateIcon }],
    },
    {
      name: 'Contacts',
      to: '#',
      icon: IdentificationIcon,
      submenu: [{ name: 'Companies', to: '#', icon: AtSymbolIcon }],
    },
    { name: 'Finance', to: '#', icon: CurrencyDollarIcon, submenu: [{name: 'Accounting', to: '#', icon: ScaleIcon}] },
    { name: 'HR', to: '#', icon: UserGroupIcon,
    submenu: [{ name: 'Payroll', to: '#', icon: CashIcon }], },
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
            <div className="flex items-stretch">
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
                <button className={`${activeSubmenu === item.name ? 'rounded-tl-md rounded-tr-md bg-gray-600' : 'rounded-md'} text-gray-300 flex items-center px-2 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white`} onClick={() => toggleSubmenu(item.name)}>
                  <span className="sr-only">
                    Show / Hide {item.name} Sub-Menu
                  </span>
                  <ChevronDownIcon className="h-4 w-4" />
                </button>
              )}
            </div>
            {item.submenu && activeSubmenu === item.name && (
              <ul className="bg-gray-600 rounded-tl-md rounded-bl-md rounded-br-md p-1">
                {item.submenu.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.to}
                      className="flex-1 text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? 'text-gray-300'
                            : 'text-gray-400 group-hover:text-gray-300',
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

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <Navigation />
              </div>
              <div className="flex-shrink-0 flex bg-gray-700 p-4">
                <Link to="#" className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-white">
                        Tom Cook
                      </p>
                      <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
                        View profile
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-gray-800">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <Navigation />
            </div>
            <div className="flex-shrink-0 flex bg-gray-700 p-4">
              <Link to="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">Tom Cook</p>
                    <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
                      View profile
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
