import { Helmet } from 'react-helmet'

const DashboardHeading = ({ title, tabTitle, children }) => {
  return (
    <>
      <Helmet>
        <title>{tabTitle ? tabTitle : title}</title>
      </Helmet>
      <div className="relative mb-8">
        <div className="md:flex md:items-center md:justify-between">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
            {title}
          </h1>
          {children && <div className="flex">{children}</div>}
        </div>
      </div>
    </>
  )
}

export default DashboardHeading
