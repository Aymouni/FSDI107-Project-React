import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalog from './pages/Catalog';

function App() {
  return (
    <div style={{ backgroundColor: "#f4f9f4", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ backgroundColor: "#2d6a4f", color: "#ffffff" }} className="text-center py-5 mb-4">
        <h1 className="display-5 fw-bold mb-2">🌿 Organika Store</h1>
        <p className="lead mb-0" style={{ color: "#b7e4c7" }}>Fresh, organic fruits and berries delivered to your door</p>
      </div>

      <div className="container mb-5">
        <Catalog/>
      </div>

      <Footer/>
    </div>
  )
}

export default App;