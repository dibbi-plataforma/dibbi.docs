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
    ['link', { rel: 'icon', href: '/1.icon.dibbi.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  markdown: {
    plugins: [
      ['markdown-it-table-of-contents'],
    ]
  },

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
      },
      {
        text: 'Instagram',
        link: 'https://www.instagram.com/dibbi.plataforma/'
      }
    ],
    sidebar: {
      '/geral/': [
        {
          title: 'Geral',
          collapsable: false,
          children: [
            '',
            'dashboard',
            'tela-de-login',
            'noticias',
            'calendario-escolar',
            'planos-de-aula',
            'novidades',
          ]
        },
        {
          title: 'Editar',
          collapsable: false,
          children: [
            'editar-perfil',
            'editar-senha',
          ]
        }
      ],
      '/professor/': [
        {
          title: 'Professor',
          collapsable: false,
          children: [
            '',
            'cadastro-planodeaula',
          ]
        }
      ],
      '/coordenador/': [
        {
          title: 'Coordenador',
          collapsable: false,
          children: [
            '',
            'cadastro-materias',
            'cadastro-turmas',
            'cadastro-usuarios',
            'cadastro-itens-plano-diario',
            'cadastro-itens-plano-anual',
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
