import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';

import App from './App.tsx'
import { ThemeModeProvider } from './hooks/useThemeMode.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <ThemeModeProvider>
        <App />
      </ThemeModeProvider>
    </MantineProvider>
  </StrictMode>,
)
