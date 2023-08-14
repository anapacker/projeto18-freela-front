import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignupPage from "./pages/signup/SignupPage"
import LoginPage from "./pages/login/LoginPage"
import HomePage from "./pages/home/HomePage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home-page" element={<HomePage />} />
          {/* <Route path="/products" element={<ProductPage />} />  */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
