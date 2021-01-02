import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import {FiInstagram} from 'react-icons/Fi'

import maasaiIcon from "../images/maasai_icon.png"

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
        <img src={maasaiIcon} height="20" style={{marginTop: "10px"}}/>
      <div className={styles.branding}>
        <Link to='/'>{siteTitle}</Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/blog/2021/01/who-we-are/'>Who We Are</Link>
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
