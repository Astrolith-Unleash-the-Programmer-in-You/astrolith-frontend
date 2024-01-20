import React from 'react'
import ReactDOM from 'react-dom/client'
import * as _ from 'process'
import App from './App.jsx'
import { AuthProvider } from './contexts/auth.jsx'
import { GameProvider } from './contexts/Game.jsx'
import { UserProvider } from './contexts/UserAccount.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <UserProvider>
          <GameProvider>
            <App />
          </GameProvider>
        </UserProvider>
      </AuthProvider>
  </React.StrictMode>,
)
