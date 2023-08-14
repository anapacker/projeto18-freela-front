import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignupPage from "./pages/signup/SignupPage"
import LoginPage from "./pages/login/LoginPage"
import HomePage from "./pages/home/HomePage"
import { useState } from "react"
import DataContextProvider from "./context/DataContextProvider"

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const contextValue = { token, setToken }

  return (
    <DataContextProvider.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/products" element={<ProductPage />} />  */}
        </Routes>
      </BrowserRouter>
    </DataContextProvider.Provider>
  )
}

export default App
