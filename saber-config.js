module.exports = {
  permalinks: {
    post: '/:slug',
    page: '/:slug'
  },
  plugins: [
  	'saber-plugin-query-posts',
    'saber-plugin-prismjs',
    'saber-plugin-search',
    'saber-plugin-git-modification-time',
  ],
  markdown: {
    headings: {
      permalink: true
    }
  },
  themeConfig: {
  	search: {
	  	placeholder: 'Search "press /"',
	  	maxSuggestions: 6,
	  	hotKeys: [ 191 ]
  	},
  	navbar: [

  	],
    sidebar: [
      {
        title: "Getting started",
        links: [
          {
            title: 'What is Empathy',
            path: '/docs/1.0/what-is-empathy'
          },
          {
            title: 'Installation',
            path: '/docs/1.0/installation'
          },
        ]
      },
      {
        title: "Tools setup",
        links: [
          {
            title: 'SASS setup',
            path: '/docs/1.0/sass-setup'
          },
          {
            title: 'Vue setup',
            path: '/docs/1.0/vue-setup'
          },
          {
            title: 'Fonts setup',
            path: '/docs/1.0/fonts-setup'
          },
        ]
      },
      {
        title: "Root markup",
        links: [
          {
            title: 'Making main sections',
            path: '/docs/1.0/making-main-sections'
          },
          {
            title: 'Navbar component',
            path: '/docs/1.0/navbar-component'
          },
          {
            title: 'Footer component',
            path: '/docs/1.0/footer-component'
          },
          {
            title: 'Panel component',
            path: '/docs/1.0/panel-component'
          },
        ]
      },
      {
        title: "Components",
        links: [
          {
            title: 'Breadcrumb component',
            path: '/docs/1.0/breadcrumb-component'
          },
          {
            title: 'Form components',
            path: '/docs/1.0/form-components'
          },
          {
            title: 'Alert components',
            path: '/docs/1.0/alert-components'
          },
          {
            title: 'Button components',
            path: '/docs/1.0/button-components'
          },
          {
            title: 'Notifications component',
            path: '/docs/1.0/notifications-component'
          },
          {
            title: 'Table components',
            path: '/docs/1.0/table-components'
          },
          {
            title: 'DataTable components',
            path: '/docs/1.0/datatable-components'
          },
        ]
      }
    ]
  },
  siteConfig: {
  	repo: 'https://github.com/the94air/empathy',
    docsRepo: 'https://github.com/the94air/empathy-docs/blob/master/pages/_posts/'
  }
}