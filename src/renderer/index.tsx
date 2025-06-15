import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import MainList from './feature/MainList/MainList'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainList />
  </React.StrictMode>
)
