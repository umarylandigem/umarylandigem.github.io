import { StrictMode } from "react";
import {ReactDOM} from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./screens/EmptyScreen";
import HomeScreen from "./screens/HomeScreen.tsx";
import ContactScreen from "./screens/ContactScreen.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen/>} />
        <Route path="/contact" element={<ContactScreen/>} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);