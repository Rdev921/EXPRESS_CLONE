import { BrowserRouter } from 'react-router-dom'
import './App.css';
import AllRoutes from './components/AllRoutes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
