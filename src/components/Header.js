import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import { useLanguage } from "../context/LanguageContext";

// Add supported languages and their directions
const languages = [
  { code: "en", label: { en: "English", he: "אנגלית", ar: "الإنجليزية" }, dir: "ltr" },
  { code: "he", label: { en: "Hebrew", he: "עברית", ar: "العברית" }, dir: "rtl" },
  { code: "ar", label: { en: "Arabic", he: "ערבית", ar: "العربية" }, dir: "rtl" },
];

const translations = {
  en: {
    home: "Home",
    home2: "Home 2",
    about: "About Us",
    services: "Services",
    onlineLearning: "Online Learning Programs",
    personalizedTutoring: "Personalized Tutoring",
    curriculumDevelopment: "Curriculum Development",
    teacherTraining: "Teacher Training",
    educationalConsulting: "Educational Consulting",
    studyAbroad: "Study Abroad Programs",
    blog: "Blog",
    contact: "Contact Us",
    logout: "Logout",
    selectLanguage: "Select language",
  },
  he: {
    home: "בית",
    home2: "בית 2",
    about: "אודות",
    services: "שירותים",
    onlineLearning: "תוכניות לימוד מקוונות",
    personalizedTutoring: "הדרכה מותאמת אישית",
    curriculumDevelopment: "פיתוח תוכניות לימודים",
    teacherTraining: "הכשרת מורים",
    educationalConsulting: "ייעוץ חינוכי",
    studyAbroad: "תוכניות לימודים בחו\"ל",
    blog: "בלוג",
    contact: "צור קשר",
    logout: "התנתק",
    selectLanguage: "בחר שפה",
  },
  ar: {
    home: "الرئيسية",
    home2: "الرئيسية 2",
    about: "حول",
    services: "الخدمات",
    onlineLearning: "برامج التعلم عبر الإنترنت",
    personalizedTutoring: "دروس خصوصية مخصصة",
    curriculumDevelopment: "تطوير المناهج",
    teacherTraining: "تدريب المعلمين",
    educationalConsulting: "استشارات تعليمية",
    studyAbroad: "برامج الدراسة بالخارج",
    blog: "مدونة",
    contact: "اتصل بنا",
    logout: "تسجيل خروج",
    selectLanguage: "اختر اللغة",
  },
};

const Header = ({ toggleTheme, isDark }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [initials, setInitials] = useState("");
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const avatarRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const { language: currentLanguage, setLanguage: setAppLanguage } = useLanguage();

  // Use currentLanguage from context as the language variable:
  const language = currentLanguage;

  const getUserInitials = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInEmail = localStorage.getItem("loggedInUserEmail");
    const currentUser = users.find(user => user.email === loggedInEmail);

    if (currentUser) {
      const firstInitial = currentUser.firstName?.trim().charAt(0).toUpperCase() || "";
      const lastInitial = currentUser.lastName?.trim().charAt(0).toUpperCase() || "";
      return firstInitial + lastInitial;
    }
    return "";
  };

  useEffect(() => {
    setInitials(getUserInitials());
    const handleStorage = () => setInitials(getUserInitials());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setAvatarDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileNavOpen) {
        setMobileNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileNavOpen]);

  // RTL/LTR effect: set document direction and language when currentLanguage changes
  useEffect(() => {
    const selectedLang = languages.find(l => l.code === language);
    document.documentElement.dir = selectedLang?.dir || "ltr";
    document.documentElement.lang = selectedLang?.code || "en";
  }, [language]);

  const toggleDropdown = (menu) => {
    setActiveDropdown(prev => (prev === menu ? null : menu));
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setMobileNavOpen(false);
  };

  const handleMainClick = (page) => {
    navigate(`/${page}`);
    setActiveDropdown(null);
    setMobileNavOpen(false);
  };

  const getActiveLink = () => {
    if (location.pathname === "/" || location.pathname === "/home2") return "home";
    if (location.pathname === "/about") return "about";
    if (
      [
        "/services",
        "/OnlineLearning",
        "/PersonalizedTutoring",
        "/CurriculumDevelopment",
        "/TeacherTraining",
        "/EducationalConsulting",
        "/StudyAbroad",
      ].includes(location.pathname)
    ) return "services";
    if (location.pathname === "/blog") return "blog";
    if (location.pathname === "/contact") return "contact";
    return "";
  };

  const activeLink = getActiveLink();

  const toggleAvatarDropdown = () => {
    setAvatarDropdownOpen(prev => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUserEmail");
    setAvatarDropdownOpen(false);
    navigate("/login");
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(prev => !prev);
  };

  const handleLanguageChange = (code) => {
    setAppLanguage(code); // Update the language in the context
    setLanguageDropdownOpen(false);
  };

  return (
    <header className="header">
      <nav className="logo">
        <Link to="/home">
          <img src="/Images/logo.png" alt="Logo" />
        </Link>
      </nav>

      <button
        className={`hamburger ${mobileNavOpen ? "open" : ""}`}
        aria-label="Toggle menu"
        onClick={toggleMobileNav}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`nav ${mobileNavOpen ? "open" : ""}`}>
        <div className="nav-item">
          <span
            className={`nav-link ${activeLink === "home" ? "active" : ""}`}
            onClick={() => handleMainClick("home")}
          >
            {translations[language].home}
          </span>
          <span
            className={`arrow ${activeDropdown === "home" ? "open" : ""}`}
            onClick={() => toggleDropdown("home")}
          >
            ▼
          </span>
          {activeDropdown === "home" && (
            <div className="dropdown">
              <Link to="/home" onClick={handleLinkClick}>{translations[language].home}</Link>
              <Link to="/home2" onClick={handleLinkClick}>{translations[language].home2}</Link>
            </div>
          )}
        </div>

        <Link
          to="/about"
          className={`nav-link ${activeLink === "about" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          {translations[language].about}
        </Link>

        <div className="nav-item">
          <span
            className={`nav-link ${activeLink === "services" ? "active" : ""}`}
            onClick={() => handleMainClick("services")}
          >
            {translations[language].services}
          </span>
          <span
            className={`arrow ${activeDropdown === "services" ? "open" : ""}`}
            onClick={() => toggleDropdown("services")}
          >
            ▼
          </span>
          {activeDropdown === "services" && (
            <div className="dropdown">
              <Link to="/OnlineLearning" onClick={handleLinkClick}>
                {translations[language].onlineLearning}
              </Link>
              <Link to="/PersonalizedTutoring" onClick={handleLinkClick}>
                {translations[language].personalizedTutoring}
              </Link>
              <Link to="/CurriculumDevelopment" onClick={handleLinkClick}>
                {translations[language].curriculumDevelopment}
              </Link>
              <Link to="/TeacherTraining" onClick={handleLinkClick}>
                {translations[language].teacherTraining}
              </Link>
              <Link to="/EducationalConsulting" onClick={handleLinkClick}>
                {translations[language].educationalConsulting}
              </Link>
              <Link to="/StudyAbroad" onClick={handleLinkClick}>
                {translations[language].studyAbroad}
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/blog"
          className={`nav-link ${activeLink === "blog" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          {translations[language].blog}
        </Link>

        <Link
          to="/contact"
          className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          {translations[language].contact}
        </Link>
      </nav>

      {/* Language Dropdown Toggle */}
      <div className="languageToggle" style={{ marginRight: "16px", position: "relative" }}>
        {/* Dropdown toggle button */}
        <button
          onClick={() => setLanguageDropdownOpen(prev => !prev)}
          style={{
            padding: "6px 14px",
            borderRadius: "4px",
            border: "1px solid #ff4a57",
            background: "#ff4a57",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "bold",
            minWidth: "100px"
          }}
          aria-label={translations[language].selectLanguage}
        >
          {languages.find(l => l.code === language)?.label[language]} ▼
        </button>

        {/* Dropdown list */}
        {languageDropdownOpen && (
          <div
            style={{
              position: "absolute",
              top: "110%",
              left: 0,
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: "6px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              zIndex: 1000,
              minWidth: "120px"
            }}
          >
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  background: lang.code === language ? "#ff4a57" : "none",
                  color: lang.code === language ? "#fff" : "#222",
                  textAlign: "left",
                  cursor: "pointer",
                  fontWeight: lang.code === language ? "bold" : "normal",
                  borderRadius: "4px"
                }}
                aria-label={`Switch to ${lang.label[language]}`}
              >
                {lang.label[language]}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="rightSection">
        <button className="themeToggle" onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? "●" : "○"}
        </button>

        <div className="avatarContainer" ref={avatarRef} style={{ position: "relative" }}>
          <div
            className="avatarCircle"
            title="Your initials"
            onClick={toggleAvatarDropdown}
            style={{
              cursor: "pointer",
              backgroundColor: "#ff4a57",
              color: "white",
            }}
          >
            {initials || "AD"}
          </div>

          {avatarDropdownOpen && (
            <div
              className="avatarDropdown"
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                right: 0,
                backgroundColor: "#ff4a57",
                border: "1px solid #ff4a57",
                borderRadius: "6px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                zIndex: 1000,
                minWidth: "120px",
              }}
            >
              <button
                onClick={handleLogout}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  background: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  fontSize: "14px",
                  color: "white",
                }}
              >
                {translations[language].logout}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
