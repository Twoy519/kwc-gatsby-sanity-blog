import React from 'react'
import WhoWeArePreview from './who-we-are-preview'

import styles from './who-we-are-preview-grid.module.css'

// linda erik tom
// gerald daisy sallie anna

function WhoWeArePreviewGrid (props) {
  const {people} = props
  return (
    <div className={styles.grid}>
      {people &&
        people.map(person => (
          <div key={person.id}>
            <WhoWeArePreview {...person} />
          </div>
        ))}
    </div>
  )
}

// WhoWeArePreviewGrid.defaultProps = {
//   people: Array
// }

export default WhoWeArePreviewGrid
