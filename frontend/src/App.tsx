import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage.tsx";
import TeacherList from "./pages/TeacherList.tsx";
import TeacherProfile from "./components/TeacherProfile";
import About from "./pages/About.tsx"; // ✅ Import About
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teachers" element={<TeacherList />} />
            <Route path="/teacher/:id" element={<TeacherProfile />} />
            <Route path="/about" element={<About />} /> 
          </Routes>
        </main>
      </div>
    </div>
  );
}
