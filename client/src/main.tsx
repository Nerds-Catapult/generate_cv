import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { Store } from './store/store.ts'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ContextProvider } from './contexts/ContextProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
