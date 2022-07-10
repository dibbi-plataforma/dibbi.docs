const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Dibbi Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Geral',
        link: '/geral/',
      },
      {
        text: 'Coordenador',
        link: '/coordenador/',
      },
      {
        text: 'Professor',
        link: '/professor/',
      },
      {
        text: 'Site',
        link: 'https://dibbi.com.br/'
      },
      {
        text: 'Blog',
        link: 'https://dibbi.com.br/blog'
      }/**,
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'Instagram',
        link: 'https://www.instagram.com/dibbi.plataforma/'
      },
      {
        text: 'Linkedin',
        link: 'https://www.linkedin.com/company/dibbi-plataforma'
      },
      {
        text: 'Facebook',
        link: 'https://www.facebook.com/dibbi.plataforma'
      }*/
    ],
    sidebar: {
      '/geral/': [
        {
          title: 'Geral',
          collapsable: false,
          children: [
            '',
            'dashboard',
            'noticias',
            'calendario',
            'novidades',
          ]
        }
      ],
      '/professor/': [
        {
          title: 'Professor',
          collapsable: false,
          children: [
            '../geral',
            'cadastro-planodeaula',
          ]
        }
      ],
      '/coordenador/': [
        {
          title: 'Coordenador 1',
          collapsable: false,
          children: [
            '',
            'cadastro-materias',
            'cadastro-turmas',
            'cadastro-usuarios',
            'cadastro-itensdoplano',
          ]
        },
        {
          title: 'Coordenador 2',
          collapsable: false,
          children: [
            'cadastro-noticias',
            'cadastro-evento',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */

  plugins: [
    ['@vuepress/plugin-back-to-top'],
    ['@vuepress/plugin-medium-zoom'],
  ],
}
