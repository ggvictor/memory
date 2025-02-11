import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/Footer'
function App() {
  return (
    <div className = 'App'>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
