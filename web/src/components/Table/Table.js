export const Table = ({ headItems, lastCol, children }) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {headItems.map((item, i) => (
                    <th
                      key={i}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {item}
                    </th>
                  ))}
                  {lastCol && (
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">{lastCol}</span>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>{children}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export const TableHead = ({ items, lastCol }) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {items.map((item, i) => (
          <th
            key={i}
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {item}
          </th>
        ))}
        {lastCol && (
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">{lastCol}</span>
          </th>
        )}
      </tr>
    </thead>
  )
}

export const TableRow = ({ children }) => {
  return <tr className="bg-white">{children}</tr>
}

export const TableData = ({ bold, last, children }) => {
  return (
    <td
      className={`${
        bold ? 'font-medium text-gray-900 ' : ''
      }px-6 py-4 whitespace-nowrap text-sm text-gray-500`}
      style={last && { width: '1%' }}
    >
      {children}
    </td>
  )
}
