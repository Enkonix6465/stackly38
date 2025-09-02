import React, { useEffect } from "react";
import './OnlineLearning.css'; // Dark theme styles are in this CSS
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/Darkmodecontext";
import { useLanguage } from "../context/LanguageContext";
import ab from "../images/ab.mp4";
import abroad from "../images/abroad.jpg";
import abr from "../images/abr.jpg";
import abrr from "../images/abrr.jpg";
import ielts from "../images/ielts.jpg";
import ucas from "../images/ucas.jpg";
import part from "../images/part.jpg";

// Add translations for StudyAbroad page
const translations = {
  en: {
    heroTitle: "Global Study Abroad Programs",
    valueTitle: "Explore the World Through Education",
    valueDesc: "Our study abroad programs connect students with life-changing academic opportunities in top global institutions. From application to arrival, we’re with you every step of the way.",
    features: [
      "🌍 Global Universities – Partnerships with top institutions across the world.",
      "🧳 End-to-End Support – From visa assistance to housing guidance.",
      "🎓 Customized Programs – Aligned with your academic goals and major.",
    ],
    startBtn: "Start Your Journey",
    servicesTitle: "Your Path to Studying Abroad",
    servicesDesc: "A step-by-step process designed to make your international education experience seamless.",
    timeline: [
      {
        icon: "📝",
        title: "Application Guidance",
        desc: "We help you select the right programs and craft a strong application.",
      },
      {
        icon: "🎯",
        title: "Admission Preparation",
        desc: "From SOPs to interviews, we help you prepare every requirement.",
      },
      {
        icon: "✈️",
        title: "Visa & Travel Support",
        desc: "We assist with student visa applications, documentation, and flight arrangements.",
      },
      {
        icon: "🏠",
        title: "Accommodation & Onboarding",
        desc: "We help you settle in with housing, orientation, and local support.",
      },
    ],
    timelineImgAlt: "Study Abroad Journey",
    benefitsTitle: "Why Choose Our Study Abroad Services?",
    benefitsDesc: "We go beyond placement—we prepare you for success in a global classroom.",
    benefits: [
      {
        icon: "🌐",
        title: "Worldwide Access",
        desc: "We work with institutions in over 30 countries to match your dream destination.",
      },
      {
        icon: "📚",
        title: "Academic Matching",
        desc: "Programs tailored to your career path, interests, and goals.",
      },
      {
        icon: "🤝",
        title: "End-to-End Mentorship",
        desc: "From your first inquiry to post-arrival support—we’ve got your back.",
      },
    ],
    partnersTitle: "Trusted by Global Education Platforms",
    partners: [
      {
        img: ielts,
        alt: "IELTS Partner",
        title: "IELTS & TOEFL Support",
        desc: "We prepare students for the required language tests through partner prep programs.",
      },
      {
        img: ucas,
        alt: "UCAS Application",
        title: "UCAS & Common App",
        desc: "Streamlined application assistance for UK, US, Canada, and EU-based institutions.",
      },
      {
        img: part,
        alt: "University Partners",
        title: "University Partners",
        desc: "Our network includes top universities, colleges, and pathway providers around the world.",
      },
    ],
    ctaTitle: "Begin Your Study Abroad Journey Today",
    ctaDesc: "Your international education journey starts with a single step. Reach out now to explore your best-fit programs and destinations.",
    ctaBtn: "Explore Opportunities →",
  },
  he: {
    heroTitle: "תוכניות לימודים בחו\"ל",
    valueTitle: "לגלות את העולם דרך החינוך",
    valueDesc: "התוכניות שלנו מחברות תלמידים להזדמנויות אקדמיות משנות חיים במוסדות מובילים בעולם. מהגשת הבקשה ועד ההגעה – אנחנו איתך בכל שלב.",
    features: [
      "🌍 אוניברסיטאות גלובליות – שיתופי פעולה עם מוסדות מובילים ברחבי העולם.",
      "🧳 ליווי מקיף – מסיוע בויזה ועד עזרה בדיור.",
      "🎓 תוכניות מותאמות – בהתאמה ליעדים ולתחום הלימוד שלך.",
    ],
    startBtn: "התחל את המסע שלך",
    servicesTitle: "הדרך שלך ללימודים בחו\"ל",
    servicesDesc: "תהליך שלב-אחר-שלב שמקל על חווית הלימודים הבינלאומית שלך.",
    timeline: [
      {
        icon: "📝",
        title: "הכוונה בהגשת מועמדות",
        desc: "נסייע בבחירת התוכנית הנכונה ובבניית תיק מועמדות חזק.",
      },
      {
        icon: "🎯",
        title: "הכנה לקבלה",
        desc: "מהצהרות ועד ראיונות – נכין אותך לכל דרישה.",
      },
      {
        icon: "✈️",
        title: "סיוע בויזה ונסיעות",
        desc: "נסייע בהגשת ויזת סטודנט, מסמכים וסידורי טיסה.",
      },
      {
        icon: "🏠",
        title: "דיור והשתלבות",
        desc: "נסייע במציאת דיור, קליטה ותמיכה מקומית.",
      },
    ],
    timelineImgAlt: "מסע לימודים בחו\"ל",
    benefitsTitle: "למה לבחור בשירותי הלימודים בחו\"ל שלנו?",
    benefitsDesc: "מעבר לשיבוץ – נכין אותך להצלחה בכיתה גלובלית.",
    benefits: [
      {
        icon: "🌐",
        title: "גישה עולמית",
        desc: "עובדים עם מוסדות בלמעלה מ-30 מדינות להתאמת היעד האידיאלי.",
      },
      {
        icon: "📚",
        title: "התאמה אקדמית",
        desc: "תוכניות מותאמות למסלול הקריירה, תחומי העניין והמטרות שלך.",
      },
      {
        icon: "🤝",
        title: "ליווי מקיף",
        desc: "מהפנייה הראשונה ועד התמיכה לאחר ההגעה – אנחנו איתך.",
      },
    ],
    partnersTitle: "בשיתוף פלטפורמות חינוך עולמיות",
    partners: [
      {
        img: ielts,
        alt: "שותף IELTS",
        title: "הכנה ל-IELTS ו-TOEFL",
        desc: "הכנה למבחני שפה נדרשים באמצעות תוכניות שותפים.",
      },
      {
        img: ucas,
        alt: "הגשת UCAS",
        title: "UCAS & Common App",
        desc: "סיוע בהגשה למוסדות בבריטניה, ארה\"ב, קנדה ואירופה.",
      },
      {
        img: part,
        alt: "אוניברסיטאות שותפות",
        title: "אוניברסיטאות שותפות",
        desc: "רשת מוסדות מובילים, מכללות וספקי מסלולים ברחבי העולם.",
      },
    ],
    ctaTitle: "התחל את מסע הלימודים שלך בחו\"ל היום",
    ctaDesc: "המסע שלך מתחיל בצעד אחד. פנה עכשיו להתאמת תוכניות ויעדים.",
    ctaBtn: "גלה הזדמנויות →",
  },
  ar: {
    heroTitle: "برامج الدراسة في الخارج",
    valueTitle: "استكشف العالم من خلال التعليم",
    valueDesc: "برامجنا تربط الطلاب بفرص أكاديمية تغير الحياة في أفضل المؤسسات العالمية. من التقديم حتى الوصول – نحن معك في كل خطوة.",
    features: [
      "🌍 جامعات عالمية – شراكات مع مؤسسات رائدة حول العالم.",
      "🧳 دعم شامل – من المساعدة في التأشيرة إلى الإرشاد السكني.",
      "🎓 برامج مخصصة – متوافقة مع أهدافك الأكاديمية وتخصصك.",
    ],
    startBtn: "ابدأ رحلتك",
    servicesTitle: "طريقك للدراسة في الخارج",
    servicesDesc: "عملية خطوة بخطوة لجعل تجربتك التعليمية الدولية سلسة.",
    timeline: [
      {
        icon: "📝",
        title: "إرشاد التقديم",
        desc: "نساعدك في اختيار البرامج المناسبة وإعداد طلب قوي.",
      },
      {
        icon: "🎯",
        title: "التحضير للقبول",
        desc: "من الخطابات إلى المقابلات – نجهزك لكل متطلبات القبول.",
      },
      {
        icon: "✈️",
        title: "دعم التأشيرة والسفر",
        desc: "نساعدك في طلبات التأشيرة الطلابية والوثائق وترتيبات السفر.",
      },
      {
        icon: "🏠",
        title: "السكن والتوجيه",
        desc: "نساعدك في السكن والتوجيه والدعم المحلي.",
      },
    ],
    timelineImgAlt: "رحلة الدراسة في الخارج",
    benefitsTitle: "لماذا تختار خدماتنا للدراسة في الخارج؟",
    benefitsDesc: "نحن لا نكتفي بالتسجيل – بل نعدك للنجاح في الفصول العالمية.",
    benefits: [
      {
        icon: "🌐",
        title: "وصول عالمي",
        desc: "نعمل مع مؤسسات في أكثر من 30 دولة لتحقيق وجهتك المثالية.",
      },
      {
        icon: "📚",
        title: "توافق أكاديمي",
        desc: "برامج مصممة لمسارك المهني واهتماماتك وأهدافك.",
      },
      {
        icon: "🤝",
        title: "إرشاد شامل",
        desc: "من أول استفسار حتى الدعم بعد الوصول – نحن معك.",
      },
    ],
    partnersTitle: "موثوق من منصات التعليم العالمية",
    partners: [
      {
        img: ielts,
        alt: "شريك IELTS",
        title: "دعم IELTS وTOEFL",
        desc: "نعد الطلاب لاختبارات اللغة المطلوبة من خلال برامج الشركاء.",
      },
      {
        img: ucas,
        alt: "تقديم UCAS",
        title: "UCAS & Common App",
        desc: "مساعدة في التقديم للمؤسسات في المملكة المتحدة وأمريكا وكندا وأوروبا.",
      },
      {
        img: part,
        alt: "شركاء الجامعات",
        title: "شركاء الجامعات",
        desc: "شبكتنا تضم أفضل الجامعات والكليات ومزودي المسارات حول العالم.",
      },
    ],
    ctaTitle: "ابدأ رحلتك الدراسية بالخارج اليوم",
    ctaDesc: "رحلتك التعليمية الدولية تبدأ بخطوة واحدة. تواصل الآن لاستكشاف أفضل البرامج والوجهات.",
    ctaBtn: "استكشف الفرص →",
  },
};

function StudyAbroad() {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  // RTL/LTR support
  useEffect(() => {
    document.documentElement.dir = ["he", "ar"].includes(language) ? "rtl" : "ltr";
  }, [language]);

  const t = translations[language];

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      {/* Hero Section */}
      <section className="hero">
        <video
          className="hero-video"
          src={ab}
          alt="Study Abroad Banner"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-overlay">
          <h1>{t.heroTitle}</h1>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="cloud-section">
        <div className="cloud-container">
          <div className="cloud-content">
            <h2>{t.valueTitle}</h2>
            <p>{t.valueDesc}</p>
            <ul className="cloud-features">
              {t.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="cloud-btn" onClick={() => handleGetStarted("/contact")}>
              {t.startBtn}
            </button>
          </div>
          <div className="cloud-image">
            <img src={abr} alt="Study Abroad" />
          </div>
        </div>
      </section>

      {/* Services Timeline Section */}
      <section className="cloud-services-timeline">
        <h2>{t.servicesTitle}</h2>
        <p className="cloud-subtitle">
          {t.servicesDesc}
        </p>

        <div className="cloud-timeline-container">
          <div className="timeline">
            {t.timeline.map((item, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-icon">{item.icon}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-image">
            <img src={abroad} alt={t.timelineImgAlt} />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="cloud-benefits">
        <div className="cloud-benefits-container">
          <h2>{t.benefitsTitle}</h2>
          <p className="benefits-subtitle">
            {t.benefitsDesc}
          </p>

          <div className="benefits-grid">
            {t.benefits.map((benefit, idx) => (
              <div className="benefit-card" key={idx}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Partners Section */}
      <section id="cloud-services">
        <h1>{t.partnersTitle}</h1>
        <div className="cards">
          {t.partners.map((item, idx) => (
            <div className="card" key={idx}>
              <div className="card-image">
                <img src={item.img} alt={item.alt} />
              </div>
              <div className="card-content">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="contact-section">
        <img
          src={abrr}
          alt="Study Abroad Contact Background"
          className="background-img"
        />
        <div className="contact-content">
          <h2>{t.ctaTitle}</h2>
          <p>
            {t.ctaDesc}
          </p>
          <a href="#contact" className="cta-button" onClick={() => handleGetStarted("/contact")}>
            {t.ctaBtn}
          </a>
        </div>
      </section>
    </div>
  );
}

export default StudyAbroad;
