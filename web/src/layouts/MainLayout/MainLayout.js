import { SkipNavLink, SkipNavContent } from '@redwoodjs/router'
import { Helmet } from 'react-helmet'
import Header from 'src/components/Header'
import '@reach/skip-nav/styles.css'

const MainLayout = ({ children }) => {
  return (
    <div className="w-full flex flex-col">
      <SkipNavLink />
      <Helmet
        titleTemplate="%s | Stablocks"
        defaultTitle="Stablocks | Software building blocks for stable startups"
      />
      <Header />
      <SkipNavContent />
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default MainLayout
