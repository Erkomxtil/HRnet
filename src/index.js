import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Employees from "./pages/Employees/Employees"
import Error from "./pages/Error/Error"
import GlobalStyle from "./utils/GlobalStyle"
import "./style.css"
import { Provider } from "react-redux"
import { store } from "./Store/store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
