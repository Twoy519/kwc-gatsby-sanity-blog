import React from 'react'
import {graphql} from 'gatsby'
import DirectorsPreviewGrid from '../components/directors-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query DirectorsPageQuery {
    people: allSanityPerson(
      sort: { fields: [hierarchyRank], order: ASC }
      ) {
        nodes {
          id
          name
          title
          hierarchyRank
          image {
            asset{
              fixed(width: 300, height: 169) {
                ...GatsbySanityImageFixed
              }
            }
          }
          _rawBio
      }
    }
  }
`

const DirectorsPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const people = data && data.people.nodes

  return (
    <Layout>
      <SEO title='Directors' />
      <Container>
        <h1 className={responsiveTitle1}>Directors</h1>
        {people && people.length > 0 && <DirectorsPreviewGrid people={people} />}
      </Container>
    </Layout>
  )
}

export default DirectorsPage
