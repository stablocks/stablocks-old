const DashboardHeading = ({ title, children }) => {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          {title}
        </h1>
      </div>
      {children && <div className="mt-4 flex md:mt-0 md:ml-4">{children}</div>}
    </div>
  )
}

export default DashboardHeading
