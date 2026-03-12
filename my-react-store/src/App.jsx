import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalog from './pages/Catalog';




function App() {

  return (
    
      <div>
        <Navbar />
        <h1>Organika Store</h1>
        <Catalog/>
        <Footer/>
      </div>
    
  )
}

export default App;
