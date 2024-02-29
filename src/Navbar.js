import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="topnav">
      <Link to="/" className="site-title">
        FARM - DNA Utils
      </Link>
      <ul>
        <CustomLink to="/collectseq">Collect sequences</CustomLink>
        <CustomLink to="/dnatools">Utilities</CustomLink>
        {/* <CustomLink to="/hamiltondistance">Hamilton distance</CustomLink> */}
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
