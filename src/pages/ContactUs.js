import React, { useState, useEffect } from "react";
import "./ContactUs.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import greet from "../images/greet.mp4";
import facebook from "../images/facebook.svg";
import email from "../images/email.svg";
import linkedin from "../images/linkedin.svg";
import cuu from "../images/cuu.jpg";

// Add translations for ContactUs page
const translations = {
  en: {
    heroTitle: "Contact Us",
    heroDesc: "Contact us Today to Schedule a Consultation or to Learn More about our Services.",
    waysToQueries: "Ways to queries",
    connectFacebook: "Connect via Facebook",
    connectLinkedIn: "Connect Via LinkedIn",
    contactTitle: "Contact Us",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourMessage: "Your Message",
    sendMessage: "Send Message",
    submitted: "✅ Submitted Successfully!",
    thankYou: "Thank you for reaching out. We’ll get back to you shortly.",
    connectExperts: "Let’s Connect With Our Education Experts",
    connectDesc: "We provide trusted academic support and educational solutions to help you achieve your learning goals. Reach out today!",
  },
  he: {
    heroTitle: "צור קשר",
    heroDesc: "צור קשר עוד היום לתיאום ייעוץ או למידע נוסף על השירותים שלנו.",
    waysToQueries: "דרכי פנייה",
    connectFacebook: "התחבר דרך פייסבוק",
    connectLinkedIn: "התחבר דרך לינקדאין",
    contactTitle: "צור קשר",
    yourName: "השם שלך",
    yourEmail: "האימייל שלך",
    yourMessage: "ההודעה שלך",
    sendMessage: "שלח הודעה",
    submitted: "✅ נשלח בהצלחה!",
    thankYou: "תודה שפנית אלינו. נחזור אליך בקרוב.",
    connectExperts: "התחבר עם מומחי החינוך שלנו",
    connectDesc: "אנו מספקים תמיכה אקדמית אמינה ופתרונות חינוכיים כדי לעזור לך להשיג את מטרות הלמידה שלך. פנה אלינו עוד היום!",
  },
  ar: {
    heroTitle: "تواصل معنا",
    heroDesc: "تواصل معنا اليوم لحجز استشارة أو لمعرفة المزيد عن خدماتنا.",
    waysToQueries: "طرق الاستفسار",
    connectFacebook: "تواصل عبر فيسبوك",
    connectLinkedIn: "تواصل عبر لينكدإن",
    contactTitle: "تواصل معنا",
    yourName: "اسمك",
    yourEmail: "بريدك الإلكتروني",
    yourMessage: "رسالتك",
    sendMessage: "إرسال الرسالة",
    submitted: "✅ تم الإرسال بنجاح!",
    thankYou: "شكرًا لتواصلك معنا. سنرد عليك قريبًا.",
    connectExperts: "تواصل مع خبراء التعليم لدينا",
    connectDesc: "نقدم دعمًا أكاديميًا موثوقًا وحلولًا تعليمية لمساعدتك في تحقيق أهدافك التعليمية. تواصل اليوم!",
  },
};

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  // Set RTL/LTR direction for the whole page
  useEffect(() => {
    document.documentElement.dir = ["he", "ar"].includes(language) ? "rtl" : "ltr";
  }, [language]);

  const t = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <section className="hero">
        {/* Background video */}
        <video
          className="hero-video"
          src={greet}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        {/* Overlay content */}
        <div className="hero-overlay">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroDesc}</p>
        </div>
      </section>

      <section className="giving-section">
        <div className="giving-container">
          <div className="giving-item">
            <div className="giving-item-icon">
              <img src={email} alt="Ways to give" />
            </div>
            <p>{t.waysToQueries}</p>
          </div>
          <div className="giving-item">
            <div className="giving-item-icon">
              <img src={facebook} alt="Impact of giving" />
            </div>
            <p>{t.connectFacebook}</p>
          </div>
          <div className="giving-item">
            <div className="giving-item-icon">
              <img src={linkedin} alt="Our donors" />
            </div>
            <p>{t.connectLinkedIn}</p>
          </div>
        </div>
      </section>

      <section className="contact-full">
        <div className="contact-left">
          <img src={cuu} alt="Contact Us" />
        </div>
        {!submitted ? (
          <div className="contact-right" id="formContainer">
            <h2>{t.contactTitle}</h2>
            <form id="contactForm" onSubmit={handleSubmit}>
              <label htmlFor="name">{t.yourName}</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">{t.yourEmail}</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">{t.yourMessage}</label>
              <textarea id="message" name="message" rows="5" required></textarea>

              <button type="submit">{t.sendMessage}</button>
            </form>
          </div>
        ) : (
          <div className="contact-right success-box" id="successMessage" style={{ display: "flex" }}>
            <h2>{t.submitted}</h2>
            <p>{t.thankYou}</p>
          </div>
        )}
      </section>

      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.081042933356!2d-122.41941538468158!3d37.774929779759424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2f0f5f9b%3A0x5f3c4e20e6b82a43!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1702462820472!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </section>

      <section className="contact-banner">
        <div className="contact-banner-content">
          <h2>{t.connectExperts}</h2>
          <p>{t.connectDesc}</p>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
