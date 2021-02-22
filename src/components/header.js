import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <header
    className="bg-black"
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `.9rem 1.0875rem`,
      }}
    >
      <div className="flex-1 overflow-hidden m-0 items-center justify-center place-self-center object-contain w-12   ">
        <Link
          to="/"
        >
            <Logo/>
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
