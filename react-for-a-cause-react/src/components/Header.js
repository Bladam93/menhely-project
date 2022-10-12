import { Link, useMatch, useResolvedPath } from "react-router-dom";


function Header() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/ourservices">Our Services</CustomLink>
        <CustomLink to="/adoption">Gazdit keres</CustomLink>
        <CustomLink to="/home">
          <Link className="lg" to="/logo">
            <img src="http://petz.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/themes/petz/images/logo.png" alt="logo"/>
          </Link>
        </CustomLink>
        <CustomLink to="/about">Rólunk</CustomLink>
        <CustomLink to="/videos">Videók</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
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

export default Header;