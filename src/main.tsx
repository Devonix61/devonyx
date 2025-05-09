
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/animations.css'

// Add intersection observer polyfill for older browsers
import 'intersection-observer'

// Create a web animation API polyfill for browsers that don't support it
if (!('animate' in document.documentElement)) {
  import('web-animations-js')
}

// Performance monitoring
const startTime = performance.now()
window.addEventListener('load', () => {
  const loadTime = performance.now() - startTime
  console.log(`Page fully loaded in ${Math.round(loadTime)}ms`)
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
