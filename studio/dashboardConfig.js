export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '6046b8d684ba98009f47a4cb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-f74syz1m',
                  apiId: '6bd12e62-5607-46d5-b2b7-ea498f0ef70b'
                },
                {
                  buildHookId: '6046b8d6138c6300c1a576c2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xzd87u7h',
                  apiId: 'ea0b0e8e-f389-426f-b594-32d724d7432a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ConradBarczyk/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xzd87u7h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
