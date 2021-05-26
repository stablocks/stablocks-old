import { Link, routes } from '@redwoodjs/router'

const MessagePage = () => {
  return (
    <>
      <h1>MessagePage</h1>
      <p>
        Find me in <code>./web/src/pages/MessagePage/MessagePage.js</code>
      </p>
      <p>
        My default route is named <code>message</code>, link to me with `
        <Link to={routes.message()}>Message</Link>`
      </p>
    </>
  )
}

export default MessagePage
