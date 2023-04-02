import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Authprovider from './context/Authprovider'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <QueryClientProvider client={queryClient}>
      <Toaster  position="bottom-center"reverseOrder={false} />
      <App />
      </QueryClientProvider>
    </Authprovider>
  </React.StrictMode>,
)
