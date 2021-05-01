import { Helmet } from 'react-helmet'

const DashboardHeading = ({ title, tabTitle, children }) => {
  return (
    <>
      <Helmet>
        <title>{tabTitle ? tabTitle : title}</title>
      </Helmet>
      <div className="lg:flex lg:flex-wrap lg:items-center lg:justify-between mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
            {title}
          </h1>
        </div>
        {children && (
          <div className="mt-4 flex flex-wrap gap-2 lg:mt-0 lg:ml-4">
            {children}
          </div>
        )}
      </div>
    </>
  )
}

export default DashboardHeading
