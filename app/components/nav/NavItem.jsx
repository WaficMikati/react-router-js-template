export const NavLink = ({ isActive, route, label }) => {
  return (
    <li className='nav-item'>
      <NavLink
        to='/about'
        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
      >
        About
      </NavLink>
    </li>
  )
}
