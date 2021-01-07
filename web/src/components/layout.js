import React from 'react'
import Header from './header'
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          &copy; {new Date().getFullYear()}, Kenyan Women & Children <div className={styles.footerLogoWrapper}>
            <div style={{padding: "10px", color: "#202123"}}><a href='https://www.instagram.com/kenyanwomenandchildren/' target="_blank"><AiFillInstagram size={32}/></a></div><div style={{color: "#202123"}}><a href='https://www.facebook.com/kenyanwomenandchildren' target="_blank"><AiFillFacebook size={24}/></a></div>
          </div>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
