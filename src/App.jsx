import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignupPage from "./pages/signup/SignupPage"
import LoginPage from "./pages/login/LoginPage"
import HomePage from "./pages/home/HomePage"
import { useState } from "react"
import DataContextProvider from "./context/DataContextProvider"
import RegisterMiaudelo from "./pages/register/RegisterMiaudelo"

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const contextValue = { token, setToken }

  return (
    <DataContextProvider.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/miaudelos" element={<HomePage />} />
          <Route path="/miaudelos/register" element={<RegisterMiaudelo />} />
          {/* <Route path="/miaudelo/:id" element={<MiaudeloPage />} />  */}
        </Routes>
      </BrowserRouter>
    </DataContextProvider.Provider>
  )
}

export default App
