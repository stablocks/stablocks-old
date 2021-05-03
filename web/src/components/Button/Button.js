const Button = React.forwardRef((props, ref) => (
  <props.as
    to={props?.to}
    onClick={props?.onClick}
    ref={ref}
    className={`${
      props.main
        ? 'border-transparent text-white bg-indigo-400 hover:bg-indigo-500'
        : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
    } inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
  >
    {props.icon && (
      <props.icon
        className={`${!props.main ? 'text-gray-500' : ''} -ml-1 mr-2 h-5 w-5`}
        aria-hidden="true"
      />
    )}
    {props.title}
  </props.as>
))

export default Button
