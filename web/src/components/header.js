import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai'

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
            <Link to='/who-we-are' style={{ padding: "0", marginRight: "10px", fontSize: "24px"}} >Who We Are</Link>
          </li>
          <li>
          <div style={{color: "#202123"}}><a href='https://www.instagram.com/kenyanwomenandchildren/' target="_blank"><AiFillInstagram size={24}/></a></div>
          </li>
          <li>
          <div style={{color: "#202123"}}><a href='https://www.facebook.com/kenyanwomenandchildren' target="_blank"><AiFillFacebook size={24}/></a></div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
