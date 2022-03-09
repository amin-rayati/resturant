import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'leaflet/dist/leaflet.css'
import { ProjectProvider } from './context/ProjectProvider'
ReactDOM.render(
  <ProjectProvider>
    <App />
  </ProjectProvider>,
  document.getElementById('root')
)
