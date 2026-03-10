import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { activeDemoConfig, DemoConfigContext } from './config/demoConfig'
import './design-system/tokens.css'
import './design-system/base.css'
import './design-system/components.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DemoConfigContext.Provider value={activeDemoConfig}>
      <App />
    </DemoConfigContext.Provider>
  </StrictMode>,
)
