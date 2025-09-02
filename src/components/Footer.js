import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import facebook from "../images/facebook.svg";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import gmail from "../images/email.svg";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    about: "Stackly empowers businesses with cutting-edge cloud, AI, and cybersecurity solutions to transform your digital future.",
    quickLinks: "Quick Links",
    services: "Services",
    connect: "Connect with us",
    email: "Email",
    phone: "Phone",
    copyright: "All rights reserved By ESS.",
    home: "Home",
    aboutUs: "About Us",
    servicesPage: "Services",
    blog: "Blog",
    contact: "Contact",
    cloud: "Cloud",
    customerFirst: "Customer First",
    cybersecurity: "Cybersecurity",
    dataAI: "Data & AI",
    enterpriseManagement: "Enterprise Mgmt",
    intelligentIndustry: "Intelligent Industry",
    scrollTop: "Scroll to top",
  },
  he: {
    about: "Stackly מעצימה עסקים עם פתרונות ענן, בינה מלאכותית וסייבר מתקדמים לעתיד דיגיטלי.",
    quickLinks: "קישורים מהירים",
    services: "שירותים",
    connect: "התחברו אלינו",
    email: "אימייל",
    phone: "טלפון",
    copyright: "כל הזכויות שמורות ESS.",
    home: "בית",
    aboutUs: "עלינו",
    servicesPage: "שירותים",
    blog: "בלוג",
    contact: "צור קשר",
    cloud: "ענן",
    customerFirst: "לקוח תחילה",
    cybersecurity: "סייבר",
    dataAI: "נתונים ובינה מלאכותית",
    enterpriseManagement: "ניהול ארגוני",
    intelligentIndustry: "תעשייה חכמה",
    scrollTop: "גלול למעלה",
  },
  ar: {
    about: "Stackly تمكّن الشركات بحلول السحابة والذكاء الاصطناعي والأمن السيبراني لتطوير مستقبلك الرقمي.",
    quickLinks: "روابط سريعة",
    services: "الخدمات",
    connect: "تواصل معنا",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    copyright: "جميع الحقوق محفوظة ESS.",
    home: "الرئيسية",
    aboutUs: "من نحن",
    servicesPage: "الخدمات",
    blog: "مدونة",
    contact: "اتصل بنا",
    cloud: "سحابة",
    customerFirst: "العميل أولاً",
    cybersecurity: "الأمن السيبراني",
    dataAI: "البيانات والذكاء الاصطناعي",
    enterpriseManagement: "إدارة المؤسسات",
    intelligentIndustry: "الصناعة الذكية",
    scrollTop: "العودة للأعلى",
  },
};

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // RTL/LTR support for Footer
  useEffect(() => {
    const footer = document.querySelector(".footer");
    if (footer) {
      footer.dir = ["he", "ar"].includes(language) ? "rtl" : "ltr";
    }
  }, [language]);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and About */}
        <div className="footer-section">
          <img src="/Images/logo.png" alt="Stackly Logo" className="footer-logo" />
          <p className="footer-description">
            {t.about}
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>{t.quickLinks}</h4>
          <ul>
            <li><Link to="/">{t.home}</Link></li>
            <li><Link to="/about">{t.aboutUs}</Link></li>
            <li><Link to="/services">{t.servicesPage}</Link></li>
            <li><Link to="/blog">{t.blog}</Link></li>
            <li><Link to="/contact">{t.contact}</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>{t.services}</h4>
          <ul>
            <li><Link to="/cloud">{t.cloud}</Link></li>
            <li><Link to="/customer-first">{t.customerFirst}</Link></li>
            <li><Link to="/cybersecurity">{t.cybersecurity}</Link></li>
            <li><Link to="/data-ai">{t.dataAI}</Link></li>
            <li><Link to="/enterprise-management">{t.enterpriseManagement}</Link></li>
            <li><Link to="/intelligent-industry">{t.intelligentIndustry}</Link></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="footer-section">
          <h4>{t.connect}</h4>
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/login"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a
              href="https://www.twitter.com/"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitter}
                alt="Twitter"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a
              href="https://mail.google.com"
              aria-label="Gmail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={gmail}
                alt="Gmail"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
          <p className="footer-contact">
            {t.email}: support@stackly.com<br />
            {t.phone}: +1 (800) 123-4567
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        {/* Scroll to Top Button */}
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t.scrollTop}
          title={t.scrollTop}
        >
          ⬆️
        </button>
        <p>© {new Date().getFullYear()} Stackly. {t.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;