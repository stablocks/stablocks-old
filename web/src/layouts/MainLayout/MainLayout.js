import { Helmet } from 'react-helmet'
import Header from 'src/components/Header'

const MainLayout = ({ children }) => {
  return (
    <div className="w-full flex flex-col">
      <Helmet
        titleTemplate="%s | Stablocks"
        defaultTitle="Stablocks | Software building blocks for stable startups"
      />
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default MainLayout
