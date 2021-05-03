import { Fragment, useState, useEffect } from 'react'
import { Link, routes, useLocation } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Dialog, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Navigation from 'src/components/Navigation'
import { Helmet } from 'react-helmet'

const HomeLink = () => {
  return (
    <Link
      to={routes.dashboard()}
      className="flex items-center flex-shrink-0 px-4"
    >
      <svg
        viewBox="0 0 45 45"
        className="h-10 w-auto fill-current text-indigo-300"
      >
        <path
          d="M31.76,10.09v-0.06c0,1.77,1.44,3.21,3.21,3.21h6.82c1.77,0,3.21-1.44,3.21-3.21V3.21C45,1.44,43.56,0,41.79,0
            h-6.82c-1.77,0-3.21,1.44-3.21,3.21V3.14h-2.65v0.06c0-1.77-1.44-3.21-3.21-3.21h-6.82c-1.77,0-3.21,1.44-3.21,3.21V3.14h-2.65v0.06
            C13.24,1.44,11.8,0,10.03,0H3.21C1.44,0,0,1.44,0,3.21v6.82c0,1.77,1.44,3.21,3.21,3.21H3.14v2.65h0.06C1.44,15.88,0,17.32,0,19.09
            v6.82c0,1.77,1.44,3.21,3.21,3.21h6.82c1.77,0,3.21-1.44,3.21-3.21v0.06h2.65v-0.06c0,1.77,1.44,3.21,3.21,3.21h6.82
            c1.77,0,3.21-1.44,3.21-3.21v0.06h2.65v-0.06c0,1.77,1.44,3.21,3.21,3.21h-0.06v2.65h0.06c-1.77,0-3.21,1.44-3.21,3.21v-0.06h-2.65
            v0.06c0-1.77-1.44-3.21-3.21-3.21h-6.82c-1.77,0-3.21,1.44-3.21,3.21v-0.06h-2.65v0.06c0-1.77-1.44-3.21-3.21-3.21H3.21
            C1.44,31.76,0,33.2,0,34.97v6.82C0,43.56,1.44,45,3.21,45h6.82c1.77,0,3.21-1.44,3.21-3.21v0.06h2.65v-0.06
            c0,1.77,1.44,3.21,3.21,3.21h6.82c1.77,0,3.21-1.44,3.21-3.21v0.06h2.65v-0.06c0,1.77,1.44,3.21,3.21,3.21h6.82
            c1.77,0,3.21-1.44,3.21-3.21v-6.82c0-1.77-1.44-3.21-3.21-3.21h0.06v-2.65h-0.06c1.77,0,3.21-1.44,3.21-3.21v-6.82
            c0-1.77-1.44-3.21-3.21-3.21h-6.82c-1.77,0-3.21,1.44-3.21,3.21v-0.06h-2.65v0.06c0-1.77-1.44-3.21-3.21-3.21h-6.82
            c-1.77,0-3.21,1.44-3.21,3.21v-0.06h-2.65v0.06c0-1.77-1.44-3.21-3.21-3.21h0.06v-2.65h-0.06c1.77,0,3.21-1.44,3.21-3.21v0.06h2.65
            v-0.06c0,1.77,1.44,3.21,3.21,3.21h6.82c1.77,0,3.21-1.44,3.21-3.21v0.06H31.76z M15.88,40.2h-2.65v-3.64h2.65V40.2z M31.76,40.2
            h-2.65v-3.64h2.65V40.2z M43.35,34.97v6.82c0,0.86-0.7,1.55-1.55,1.55h-6.82c-0.86,0-1.55-0.7-1.55-1.55v-6.82
            c0-0.86,0.7-1.55,1.55-1.55h6.82C42.65,33.42,43.35,34.12,43.35,34.97z M40.2,31.76h-3.64v-2.65h3.64V31.76z M33.42,19.09
            c0-0.86,0.7-1.55,1.55-1.55h6.82c0.86,0,1.55,0.7,1.55,1.55v6.82c0,0.86-0.7,1.55-1.55,1.55h-6.82c-0.86,0-1.55-0.7-1.55-1.55V19.09
            z M29.12,20.68h2.65v3.64h-2.65V20.68z M17.54,19.09c0-0.86,0.7-1.55,1.55-1.55h6.82c0.86,0,1.55,0.7,1.55,1.55v6.82
            c0,0.86-0.7,1.55-1.55,1.55h-6.82c-0.86,0-1.55-0.7-1.55-1.55V19.09z M13.24,20.68h2.65v3.64h-2.65V20.68z M11.58,19.09v6.82
            c0,0.86-0.7,1.55-1.55,1.55H3.21c-0.86,0-1.55-0.7-1.55-1.55v-6.82c0-0.86,0.7-1.55,1.55-1.55h6.82
            C10.88,17.54,11.58,18.23,11.58,19.09z M8.44,15.88H4.8v-2.65h3.64V15.88z M11.58,10.03c0,0.86-0.7,1.55-1.55,1.55H3.21
            c-0.86,0-1.55-0.7-1.55-1.55V3.21c0-0.86,0.7-1.55,1.55-1.55h6.82c0.86,0,1.55,0.7,1.55,1.55V10.03z M15.88,8.44h-2.65V4.8h2.65
            V8.44z M29.12,4.8h2.65v3.64h-2.65V4.8z"
        />
      </svg>
      <h2 className="text-white lowercase font-bold text-xl ml-3">Stablocks</h2>
    </Link>
  )
}

const ProfileLink = () => {
  const { currentUser } = useAuth()
  return (
    <div className="flex-shrink-0 flex bg-gray-700 p-4">
      <Link to={routes.profile()} className="flex-shrink-0 w-full group block">
        <div className="flex items-center">
          {currentUser.image && (
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full"
                src={currentUser.image}
                alt=""
              />
            </div>
          )}
          <div className="ml-3">
            <p className="text-sm font-medium text-white">{`${currentUser.firstName} ${currentUser.lastName}`}</p>
            <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
              View profile
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

const AdminLayout = ({ children }) => {
  const { pathname, search, hash } = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname, search, hash])

  return (
    <>
      <Helmet
        titleTemplate="%s | Stablocks"
        defaultTitle="Dashboard | Stablocks"
      />
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
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <HomeLink />
                  <Navigation />
                </div>
                <ProfileLink />
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
                <HomeLink />
                <Navigation />
              </div>
              <ProfileLink />
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
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default AdminLayout
