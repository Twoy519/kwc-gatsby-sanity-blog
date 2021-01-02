import React from 'react'
import Header from './header'
import {FiInstagram} from 'react-icons/fi'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          &copy; {new Date().getFullYear()}, Kenyan Women & Children <div style={{padding: "10px", color: "tomato"}}><a href='https://www.instagram.com/kenyanwomenandchildren/'><FiInstagram size={32}/></a></div>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
