import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './contexts/auth.jsx'
import './index.css'

// (window ).process = {
//    env: { DEBUG: undefined },
//    nextTick: function() {
//      return null;
//    }
// };
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
  </React.StrictMode>,
)
