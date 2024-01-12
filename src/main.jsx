import React from 'react'
import ReactDOM from 'react-dom/client'
import * as _ from 'process'
import App from './App.jsx'
import { AuthProvider } from './contexts/auth.jsx'
import { UserProvider } from './contexts/UserAccount.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AuthProvider>
  </React.StrictMode>,
)
