import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Container from '../components/container';
import styled from 'styled-components'

const PersonContainer = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`



export default function PersonPage({data}) {
  const {person} = data;
  return (
    <Layout>
      {person && <SEO title={person.name || 'Untitled'} />}
      {person && <Container>
        <PersonContainer>
          <h2 style={{margin: '0 0 10px 0'}}>
            <span>{person.name}</span>
          </h2>
          <h3 style={{margin: '0 0 10px 0'}}>
            <span>{person.title}</span>
          </h3>
          <Img fluid={person.image.asset.fluid}/>
          <p style={{fontSize: "24px"}}>{person.biography}</p>
        </PersonContainer>
      </Container>
      }
    </Layout>


  );
}

export const query = graphql`
  query($slug: String!) {
    person: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      title
      biography
      image {
        asset {
          fluid(maxWidth: 600, maxHeight: 338) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;