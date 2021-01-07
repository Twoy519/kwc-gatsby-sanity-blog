import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import {FiInstagram} from 'react-icons/fi'

import kwcLogo from "../images/kwc_logo.png"

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
        <Link to="/">
          <img src={kwcLogo} height="64" />
        </Link>
      <div className={styles.branding}>
        <Link to='/'>Kenyan Women & Children</Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/who-we-are' style={{ padding: "0", fontSize: "24px"}} >Who We Are</Link>
          </li>
          <li>
          <div style={{color: "tomato"}}><a href='https://www.instagram.com/kenyanwomenandchildren/'><FiInstagram size={24}/></a></div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
