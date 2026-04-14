const repositoryUrl = 'https://github.com/taowang1993/harness'

export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'Harness'
  },
  header: {
    title: 'Harness',
    to: '/',
    logo: {
      alt: 'Harness',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': repositoryUrl,
      'target': '_blank',
      'aria-label': 'Harness on GitHub'
    }]
  },
  footer: {
    credits: `Harness • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': repositoryUrl,
      'target': '_blank',
      'aria-label': 'Harness on GitHub'
    }]
  },
  toc: {
    title: 'On this page',
    bottom: {
      title: 'References',
      links: [{
        icon: 'i-lucide-git-commit-horizontal',
        label: 'Version pinning',
        to: '/appendix/version-pinning'
      }]
    }
  }
})
