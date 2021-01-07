import React from 'react'
import Img from "gatsby-image"
import {Link} from "gatsby"

import styles from './who-we-are-preview.module.css'
import {responsiveTitle3} from './typography.module.css'

function WhoWeArePreview (props) {
  return (
    <Link
    to={`/person/${props.slug.current}`}
    style={{
      textDecoration: 'none',
      color: 'inherit',
    }}
    >
      <div className={styles.text}>
        <h1 className={styles.title}>{props.name}</h1>
        <div className={styles.personImage}>
          {props.image && props.image.asset && (
            <Img
              fluid={props.image.asset.fluid}
              alt={props.name}
            />
          )}
        </div>
        <h6 className={responsiveTitle3}>{props.title}</h6>
      </div>
    </Link>
  )
}

export default WhoWeArePreview
