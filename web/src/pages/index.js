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
import styles from '../components/index.module.css'

import { FaPaypal } from 'react-icons/fa'

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
          fluid {
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
        <Container styles={{ margin: "0 auto", position: "relative", maxWidth: "400px" }}><Img fluid={site.heroImage.asset.fluid} /></Container>
      )
      }
      <Container>
        <div className={styles.linkContainer}>
          <Link to="/who-we-are">Click here to meet the team</Link>
        </div>
        <div className={styles.paypalContainer}>
          <div className={styles.paypalButton}>
            <a href="https://www.paypal.com/paypalme/kwandc" target="_blank"><FaPaypal />Click here to contribute to KW&C via Paypal</a>
          </div>
        </div>
        {postNodes && (
          <BlogPostPreviewList
            nodes={postNodes}
          />
        )}
      </Container>
    </Layout >
  );
};

export default IndexPage;
