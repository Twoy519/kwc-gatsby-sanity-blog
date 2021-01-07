import React from 'react';
import { graphql, Link } from 'gatsby';
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from '../lib/helpers';
import BlogPostPreviewList from '../components/blog-post-preview-list';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import Img from 'gatsby-image';
import styled from 'styled-components';

import {FaPaypal} from 'react-icons/fa'

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      heroImage {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
        alt
      }
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const PaypalContainer = styled.div`
  text-align: center;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PaypalButton = styled.div`
  display:inline-block;
  padding:0.35em 1.2em;
  border: none;
  margin:0 0.3em 0.3em 0;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  font-size: 32px;
  font-weight: 500;
  color:#FFFFFF;
  text-align:center;
  transition: all 0.2s;

  :hover{
    color:#000000;
    background-color:#FFFFFF;
    a {
      color: black
    }
  }

  @media all and (max-width:30em){
    display:block;
    margin:0.4em auto;
  }

  a {
    text-decoration: none;
  }
`

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
        {site.heroImage && (
          <Img fluid={site.heroImage.asset.fluid} />
        )}
      <Container>
        <LinkContainer>
          <Link to="/who-we-are" style={{textDecoration: 'none', fontSize: '24px', color: '#202123'}}>Click here to meet the team</Link>
        </LinkContainer>
      <PaypalContainer>
        <PaypalButton>
          <a href="https://www.paypal.com/paypalme/kwandc" target="_blank" style={{color: '#202123'}}><FaPaypal />Click here to contribute to KW&C via Paypal</a>
        </PaypalButton>
      </PaypalContainer>
        {postNodes && (
          <BlogPostPreviewList
            nodes={postNodes}
          />
        )}
      </Container>
    </Layout>
  );
};

export default IndexPage;
