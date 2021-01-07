import React from 'react'
import {graphql} from 'gatsby'
import WhoWeArePreviewGrid from '../components/who-we-are-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query WhoWeArePageQuery {
    people: allSanityPerson(
      sort: { fields: [hierarchyRank], order: ASC }
      ) {
        nodes {
          id
          name
          title
          slug {
            current
          }
          hierarchyRank
          image {
            asset{
              fluid(maxWidth: 300, maxHeight: 169) {
                ...GatsbySanityImageFluid
              }
            }
          }
      }
    }
  }
`

const WhoWeArePage = props => {
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
      <SEO title='Who We Are' />
      <Container>
        <h1 className={responsiveTitle1}>Who We Are</h1>
        {people && people.length > 0 && <WhoWeArePreviewGrid people={people} />}
      </Container>
    </Layout>
  )
}

export default WhoWeArePage
