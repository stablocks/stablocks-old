import { Helmet } from 'react-helmet'
import Breadcrumbs from 'src/components/Breadcrumbs'

const DashboardHeading = ({
  title,
  tabTitle,
  description,
  breadcrumbs,
  children,
}) => {
  return (
    <>
      <Helmet>
        <title>{tabTitle ? tabTitle : title}</title>
      </Helmet>
      <div className="relative mb-8">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div className="md:flex md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
              {title}
            </h1>
            {description && (
              <p className="text-sm font-medium text-gray-500 mt-1">
                {description}
              </p>
            )}
          </div>
          {children && (
            <div className="flex mt-4 space-x-2 md:mt-0">{children}</div>
          )}
        </div>
      </div>
    </>
  )
}

export default DashboardHeading
