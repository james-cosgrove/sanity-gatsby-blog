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
                  buildHookId: '5ea2cef1715baa6e69d773bb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-h4c57rdu',
                  apiId: 'a65c6cf7-425d-4522-b942-81f5b623b49c'
                },
                {
                  buildHookId: '5ea2cef25f26356eb099193a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qvwtdfaw',
                  apiId: 'a52373d1-644b-43cf-9b62-b0f9efad982d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/james-cosgrove/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qvwtdfaw.netlify.app', category: 'apps' }
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
