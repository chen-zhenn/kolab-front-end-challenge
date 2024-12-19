import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraUIProvider } from '@/presentation/providers/chakra-ui'
import { Router } from '@/routes/'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraUIProvider>
      <Router />
    </ChakraUIProvider>  
  </StrictMode>,
)
