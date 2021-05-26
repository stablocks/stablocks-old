import { Helmet } from 'react-helmet'
import { Link, navigate, useLocation } from '@redwoodjs/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const DashboardHeading = ({ title, tabTitle, tabs, children }) => {
  const { pathname } = useLocation()

  return (
    <>
      <Helmet>
        <title>{tabTitle ? tabTitle : title}</title>
      </Helmet>
      <div
        className={`${
          tabs ? 'pb-5 border-b border-gray-200 sm:pb-0 ' : ''
        }relative mb-8`}
      >
        <div className="md:flex md:items-center md:justify-between">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
            {title}
          </h1>
          {children && <div className="flex">{children}</div>}
        </div>
        {tabs && (
          <div className="mt-6">
            <div className="sm:hidden">
              <label htmlFor="current-tab" className="sr-only">
                Select a tab
              </label>
              <select
                id="current-tab"
                name="current-tab"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={pathname}
                onChange={(e) => navigate(e.target.value)}
              >
                {tabs.map((tab) => (
                  <option key={tab.name} value={tab.to}>
                    {tab.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <Link
                    key={tab.name}
                    to={tab.to}
                    className={classNames(
                      pathname === tab.to
                        ? 'border-indigo-500 text-indigo-500'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                      'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                    )}
                    aria-current={tab.current ? 'page' : undefined}
                  >
                    {tab.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default DashboardHeading
