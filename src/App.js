import Navbar from "./Navbar"
import Collectseq from "./pages/Collectseq"
import Home from "./pages/Home"
import Dnatools from "./pages/Dnatools"
import { Route, Routes } from "react-router-dom"
// import Hamilton from "./pages/Hamiltondistance"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collectseq" element={<Collectseq />} />
          <Route path="/dnatools" element={<Dnatools />} />
          <Route path="/dnatools" element={<Dnatools />} />
          {/* <Route path="/hamiltondistance" element={<Hamilton />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App