export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fee33df1c14ed127e92d7ac',
                  title: 'Sanity Studio',
                  name: 'kwc-gatsby-sanity-blog-studio',
                  apiId: '7d4f4b2b-71dd-491a-8bb4-07b9c4264c86'
                },
                {
                  buildHookId: '5fee33df12660436cb64bf8c',
                  title: 'Blog Website',
                  name: 'kwc-gatsby-sanity-blog',
                  apiId: '8010fb2a-9777-4fbd-9217-8ccc49f874d6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Twoy519/kwc-gatsby-sanity-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://kwc-gatsby-sanity-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
