import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { buildSeoPaths, getRouteMetadata } from './src/routeMetadata.js'

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function updateTagAttribute(html, pattern, attribute, value) {
  return html.replace(pattern, (tag) =>
    tag.replace(new RegExp(`${attribute}="[^"]*"`, 'i'), `${attribute}="${escapeHtml(value)}"`),
  )
}

function applyRouteMetadata(html, pathname) {
  const metadata = getRouteMetadata(pathname)
  let output = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(metadata.title)}</title>`)
  const fallbackHeading = metadata.title.split('|')[0].trim()
  const fallbackContent = `<div id="root"><main aria-label="${escapeHtml(fallbackHeading)}" style="min-height:100vh;background:#000;color:#fff;display:grid;place-items:center;padding:8rem 1.5rem 4rem;text-align:center"><div style="max-width:880px"><p style="margin:0 0 1rem;color:#cc9bf8;font-size:12px;letter-spacing:.22em;text-transform:uppercase">Timex Solution Inc</p><h1 style="margin:0;font-size:clamp(2.5rem,7vw,5.5rem);line-height:1.02">${escapeHtml(fallbackHeading)}</h1><p style="max-width:720px;margin:1.5rem auto 0;color:#b9b0c0;font-size:16px;line-height:1.75">${escapeHtml(metadata.description)}</p></div></main></div>`
  output = output.replace(/<div id="root"><\/div>/i, fallbackContent)

  const replacements = [
    [/<meta\s+name="description"[^>]*>/i, metadata.description],
    [/<meta\s+name="robots"[^>]*>/i, metadata.robots],
    [/<meta\s+property="og:title"[^>]*>/i, metadata.title],
    [/<meta\s+property="og:description"[^>]*>/i, metadata.description],
    [/<meta\s+property="og:url"[^>]*>/i, metadata.canonical],
    [/<meta\s+name="twitter:title"[^>]*>/i, metadata.title],
    [/<meta\s+name="twitter:description"[^>]*>/i, metadata.description],
  ]

  replacements.forEach(([pattern, content]) => {
    output = updateTagAttribute(output, pattern, 'content', content)
  })

  return updateTagAttribute(output, /<link\s+rel="canonical"[^>]*>/i, 'href', metadata.canonical)
}

function routeSeoPages() {
  return {
    name: 'timex-route-seo-pages',
    apply: 'build',
    async closeBundle() {
      const outputRoot = resolve('dist')
      const homepagePath = resolve(outputRoot, 'index.html')
      const baseHtml = await readFile(homepagePath, 'utf8')

      await writeFile(homepagePath, applyRouteMetadata(baseHtml, '/'))

      await Promise.all(
        buildSeoPaths
          .filter((pathname) => pathname !== '/')
          .map(async (pathname) => {
            const outputPath = resolve(outputRoot, pathname.slice(1), 'index.html')
            await mkdir(dirname(outputPath), { recursive: true })
            await writeFile(outputPath, applyRouteMetadata(baseHtml, pathname))
          }),
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), routeSeoPages()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
