import { Helmet } from 'react-helmet'

const MainLayout = ({ children }) => {
  return (
    <>
      <Helmet
        titleTemplate="%s | Stablocks"
        defaultTitle="Stablocks | Software building blocks for stable startups"
      />
      {children}
    </>
  )
}

export default MainLayout
