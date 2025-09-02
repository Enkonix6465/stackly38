import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { DarkModeProvider, useDarkMode } from "./context/Darkmodecontext";
import { LanguageProvider } from "./context/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
 

// Pages
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import AboutUs from "./pages/AboutUS";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import OnlineLearning from "./pages/OnlineLearning";
import PersonalizedTutoring from "./pages/PersonalizedTutoring";
import CurriculumDevelopment from "./pages/CurriculumDevelopment";
import EducationalConsulting from "./pages/EducationalConsulting";
import StudyAbroad from "./pages/StudyAbroad";
import TeacherTraining from "./pages/TeacherTraining";
import AdminDashboard from "./pages/AdminDashboard";
import CourseForm from "./pages/CourseForm";




// AppLayout now uses dark mode from context
const AppLayout = () => {
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const showHeaderAndFooter = location.pathname !== "/welcome";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      {showHeaderAndFooter && <Header toggleTheme={toggleDarkMode} isDark={darkMode} />}
      <ScrollToTop />
      <div
        className="app-content"
        style={{
          paddingTop: showHeaderAndFooter ? "70px" : "0",
          minHeight: "calc(100vh - 70px)",
          overflowY: "auto",
        }}
      >
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/blog3" element={<Blog3 />} />
          <Route path="/OnlineLearning" element={<OnlineLearning />} />
          <Route path="/PersonalizedTutoring" element={<PersonalizedTutoring />} />
          <Route path="/CurriculumDevelopment" element={<CurriculumDevelopment />} />
          <Route path="/EducationalConsulting" element={<EducationalConsulting />} />
          <Route path="/StudyAbroad" element={<StudyAbroad />} />
          <Route path="/TeacherTraining" element={<TeacherTraining />} />
          <Route path="/CourseForm" element={<CourseForm />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="*" element={<Navigate to="/welcome" replace />} />
        </Routes>
      </div>
      {showHeaderAndFooter && <Footer />}
    </>
  );
};

function App() {
  // Do NOT use useDarkMode here!
  return (
    <DarkModeProvider>
      <LanguageProvider>
        <Router>
          <AppLayout />
        </Router>
      </LanguageProvider>
    </DarkModeProvider>
  );
}

export default App;
