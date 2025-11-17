import { NavLink } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '../../context/ThemeContext'

const navLinks = [
  { to: '/', label: 'Home', icon: 'home', end: true },
  { to: '/about', label: 'About', icon: 'user' },
  { to: '/contact', label: 'Contact', icon: 'envelope' }
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className={`navbar navbar-expand bg-${theme}`}>
      <div className='container-fluid'>
        <NavLink
          to='/'
          end={navLinks[0].end}
          className='nav-brand'
        >
          <FontAwesomeIcon
            icon={navLinks[0].icon}
            className='me-1'
          />
          {navLinks[0].label}
        </NavLink>
        <ul className='navbar-nav ms-auto align-items-center'>
          {navLinks.map(
            ({ to, label, icon, end }, i) =>
              i > 0 && (
                <li
                  key={to}
                  className='nav-item'
                >
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      `nav-link${isActive ? ' active' : ''}`
                    }
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      className='me-1'
                    />
                    {label}
                  </NavLink>
                </li>
              )
          )}
          <li className='nav-item'>
            <button
              className={`btn btn-outline-${
                theme === 'dark' ? 'light' : 'dark'
              } border-0 p-1 mx-2`}
              onClick={toggleTheme}
              aria-label='Toggle theme'
            >
              <FontAwesomeIcon icon='lightbulb' />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
