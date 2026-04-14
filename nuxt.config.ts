import { joinURL } from 'ufo'

// https://nuxt.com/docs/api/configuration/nuxt-config
const baseURL = process.env.NUXT_APP_BASE_URL || '/'
const siteOrigin = process.env.HARNESS_SITE_ORIGIN || 'http://localhost:3000'
const siteUrl = joinURL(siteOrigin, baseURL)

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms'
  ],

  devtools: {
    enabled: true
  },

  app: {
    baseURL
  },

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  runtimeConfig: {
    public: {
      siteOrigin,
      siteUrl
    }
  },

  experimental: {
    asyncContext: true
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      autoSubfolderIndex: false
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify'
  },

  llms: {
    domain: siteUrl,
    title: 'Harness',
    description: 'A technical guide to how modern AI coding agents are built.',
    full: {
      title: 'Harness - Full Documentation',
      description: 'The full documentation set comparing Codex CLI, Claude Code, OpenCode, Pi, and Hermes.'
    },
    sections: [
      {
        title: 'Overview',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/overview%' }
        ]
      },
      {
        title: 'Architecture',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/architecture%' }
        ]
      },
      {
        title: 'Agent Loop',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/agent-loop%' }
        ]
      },
      {
        title: 'Tool System',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/tool-system%' }
        ]
      },
      {
        title: 'File Search',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/file-search%' }
        ]
      },
      {
        title: 'File Editing',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/file-editing%' }
        ]
      },
      {
        title: 'Sandbox & Security',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/sandbox-security%' }
        ]
      },
      {
        title: 'Permissions',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/permissions%' }
        ]
      },
      {
        title: 'Context Management',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/context-management%' }
        ]
      },
      {
        title: 'Prompt Engineering',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/prompt-engineering%' }
        ]
      },
      {
        title: 'Model & API Integration',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/model-integration%' }
        ]
      },
      {
        title: 'Multi-Agent Architecture',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/multi-agent%' }
        ]
      },
      {
        title: 'Appendix',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/appendix%' }
        ]
      }
    ]
  }
})
