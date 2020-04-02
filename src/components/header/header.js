import React from 'react'
import { Link } from 'gatsby'
import { Container, Icon } from 'semantic-ui-react'
import logo from '../../assets/logo.svg'
import './header.css'
const ListLink = props => (
  <li class="item-list">
    <Link to={props.to} class="menuItem" activeClassName="menuItemActive">
      {props.children}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <div class="header-style">
    <Container>
      <Link to="/" className="navbar-item">
        <img src={logo} alt="Garrett Vercoe" class="logo" style={{ width: '90px' }} />
      </Link>

      <ul class="menu-list">
        <ListLink to="/projects/">Projects</ListLink>
        <ListLink to="/experiments/"> Experiments</ListLink>
        <ListLink to="/thoughts/"> Thoughts</ListLink>
        <ListLink to="/inquiry/">Inquiry</ListLink>
        <ListLink to="/other/">Other</ListLink>
      </ul>
    </Container>
  </div>
)

export default Header
