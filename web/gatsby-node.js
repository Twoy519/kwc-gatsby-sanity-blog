const {isFuture} = require('date-fns')
const path = require('path')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const {format} = require('date-fns')

async function createBlogPostPages ({graphql, actions}) {
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const {id, slug = {}, publishedAt} = edge.node
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const pagePath = `/blog/${dateSegment}/${slug.current}/`

      actions.createPage({
        path: pagePath,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {id}
      })
    })
}


async function createPersonPages({ graphql, actions }) {
  // 1. Fetch Template
  const personTemplate = path.resolve('./src/templates/person.js');
  // 2. Query all people
  const { data } = await graphql(`
    query {
      people: allSanityPerson {
        totalCount
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
      site: sanitySiteSettings {
        title
      }
    }
  `);
  // 3. Loop over each person and create a page for that person
  data.people.nodes.forEach((person) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `person/${person.slug.current}`,
      component: personTemplate,
      context: {
        slug: person.slug.current,
      },
    });
  });
}

exports.createPages = async (params) => {
  await Promise.all([
    createBlogPostPages(params),
    createPersonPages(params),
  ]);
}
