import React from 'react'
import DirectorsPreview from './directors-preview'

import styles from './directors-preview-grid.module.css'

// linda erik tom
// gerald daisy sallie anna

function DirectorsPreviewGrid (props) {
  const {people} = props
  console.log({people})
  return (
    <div className={styles.grid}>
      {people &&
        people.map(person => (
          <div key={person.id}>
            <DirectorsPreview {...person} />
          </div>
        ))}
    </div>
  )
}

DirectorsPreviewGrid.defaultProps = {
  people: Array
}

export default DirectorsPreviewGrid
