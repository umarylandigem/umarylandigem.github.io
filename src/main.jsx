import { StrictMode } from "react";
import ReactDOM from "react-dom" 
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NoPage from "./screens/NoPage";
import HomeScreen from "./screens/HomeScreen.tsx";
import ContactScreen from "./screens/ContactScreen.tsx";
import ProjectsScreen from "./screens/ProjectsScreen.tsx";
import TeamScreen from "./screens/TeamScreen.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen/>} />
        <Route path="/contact" element={<ContactScreen/>} />
        <Route path="/projects" element={<ProjectsScreen/>} />
        <Route path="/team" element={<TeamScreen/>} />
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