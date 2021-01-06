import React from 'react'
import Img from "gatsby-image"

import styles from './directors-preview.module.css'
import {responsiveTitle3} from './typography.module.css'

function DirectorsPreview (props) {
  return (
    <>
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
    </>
  )
}

export default DirectorsPreview
