const Illustration = ({ svg, title }) => {
  return (
    <div className="w-full flex flex-col items-center p-8">
      <div className="max-w-xs">{svg}</div>
      {title && <p className="mt-4 font-semibold">{title}</p>}
    </div>
  )
}

export default Illustration
