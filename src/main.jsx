import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './header/header.jsx'
import Goals from './Goals/goals.jsx'
import Choose from './WhyChoose/WhyChoose.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Goals />
    <Choose />
  </StrictMode>
)
