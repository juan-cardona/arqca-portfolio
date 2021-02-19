import React from 'react'
import Header from './header'



const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className="bg-gray-200 min-h-screen">{children}</div>
    <footer className="border-t-2">
      <div className="box-border max-w-4xl p-8 m-auto">
        <div className="text-center text-sm">
          © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
