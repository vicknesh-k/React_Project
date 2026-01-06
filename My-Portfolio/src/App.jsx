import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Mainpage from "./pages/Mainpage";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/*" element={<Mainpage />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
