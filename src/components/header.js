import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>

    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `#111`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>

  </header>
)


export default Header
