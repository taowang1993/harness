<script setup lang="ts">
import { joinURL } from 'ufo'

const { seo } = useAppConfig()
const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl
const faviconSvg = joinURL(runtimeConfig.app.baseURL, 'favicon.svg')
const faviconIco = joinURL(runtimeConfig.app.baseURL, 'favicon.ico')
const ogImage = new URL(faviconSvg, siteUrl).toString()

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'))
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs'), {
  server: false
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: faviconSvg },
    { rel: 'alternate icon', href: faviconIco }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  ogImage,
  twitterCard: 'summary'
})

provide('navigation', navigation)
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </UApp>
</template>
