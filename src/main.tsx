import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './components/App'

// Ensure favicon uses the bundled asset (works in dev and build)
const setFavicon = (href: string) => {
  // Remove any existing icons so browsers pick up the new one
  document.querySelectorAll('link[rel*="icon"]').forEach((el) => el.parentElement?.removeChild(el))

  const rels = ['icon', 'shortcut icon', 'apple-touch-icon']
  rels.forEach((rel) => {
    let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.rel = rel
      if (rel === 'icon') link.sizes = '32x32'
      document.head.appendChild(link)
    }
    link.href = href
  })
}

try {
  const faviconUrl = new URL('./assets/icon.png', import.meta.url).href
  setFavicon(faviconUrl)
} catch {
  // If the asset is missing, just skip without breaking the app
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
