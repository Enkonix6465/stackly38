import React, { useEffect } from "react";
import './OnlineLearning.css'; // Rename this file to OnlineLearning.css if needed
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import onn from "../images/onn.mp4";
import online from "../images/online.jpg";
import onll from "../images/onlll.jpg";
import google from "../images/google.jpg";
import micro from "../images/micro.jpg";
import lms from "../images/lms.jpg";
import onl from "../images/onl.jpg";

// Add translations for OnlineLearning page
const translations = {
  en: {
    heroTitle: "Online Learning Programs",
    valueTitle: "Empower Your Learning Journey Anytime, Anywhere",
    valueDesc:
      "Our online learning programs offer flexible, personalized education experiences. Whether you're a student, professional, or educator, we help you learn on your terms—at your pace.",
    features: [
      "💻 Interactive Courses – Learn through videos, quizzes, and real-time feedback.",
      "📅 Flexible Scheduling – Access content anytime that fits your lifestyle.",
      "🎯 Personalized Paths – Tailored learning journeys based on your goals.",
    ],
    startBtn: "Start Your Learning Journey",
    servicesTitle: "Our Online Learning Services",
    servicesDesc: "Comprehensive solutions from content development to virtual classrooms.",
    timeline: [
      {
        icon: "📚",
        title: "Curriculum Design",
        desc: "Engaging and standards-aligned digital curriculum for all education levels.",
      },
      {
        icon: "🧑‍🏫",
        title: "Virtual Classrooms",
        desc: "Real-time teaching with collaborative tools and breakout rooms.",
      },
      {
        icon: "📈",
        title: "Progress Tracking",
        desc: "Monitor learning progress with integrated analytics and assessments.",
      },
      {
        icon: "🌐",
        title: "Multilingual Support",
        desc: "Deliver accessible education across diverse learners and regions.",
      },
    ],
    benefitsTitle: "Why Choose Our Online Learning Programs?",
    benefitsDesc: "Designed to make education accessible, effective, and engaging for everyone.",
    benefits: [
      {
        icon: "🌟",
        title: "Student-Centered",
        desc: "Our platforms adapt to your learning style and pace.",
      },
      {
        icon: "🌍",
        title: "Global Reach",
        desc: "Join learners and educators from across the world.",
      },
      {
        icon: "🔒",
        title: "Secure Platform",
        desc: "Safe learning environments with data privacy and compliance built in.",
      },
    ],
    techTitle: "Powered by Leading Educational Technologies",
    tech: [
      {
        img: google,
        alt: "Google for Education",
        title: "Google for Education",
        desc: "Leverage tools like Google Classroom and Workspace for Education to enhance learning and collaboration.",
      },
      {
        img: micro,
        alt: "Microsoft Teams for Learning",
        title: "Microsoft Teams for Learning",
        desc: "Streamline online teaching, communication, and resource sharing through a secure platform.",
      },
      {
        img: lms,
        alt: "Canvas LMS",
        title: "Canvas LMS",
        desc: "Deliver structured, scalable, and engaging learning experiences with robust tracking and integration.",
      },
    ],
    ctaTitle: "Ready to Transform Learning?",
    ctaDesc:
      "Let's build an educational experience that's accessible, effective, and future-ready. Contact us to explore your custom online learning solution.",
    ctaBtn: "Get Started →",
  },
  he: {
    heroTitle: "תוכניות למידה מקוונת",
    valueTitle: "העצם את מסע הלמידה שלך בכל זמן ומכל מקום",
    valueDesc:
      "התוכניות המקוונות שלנו מציעות חוויות לימוד גמישות ומותאמות אישית. בין אם אתה תלמיד, מקצוען או מחנך – תוכל ללמוד בקצב ובדרך שלך.",
    features: [
      "💻 קורסים אינטראקטיביים – למידה באמצעות וידאו, חידונים ומשוב בזמן אמת.",
      "📅 גמישות בזמנים – גישה לתוכן בכל זמן שמתאים לך.",
      "🎯 מסלולים מותאמים – מסלולי למידה מותאמים אישית לפי מטרותיך.",
    ],
    startBtn: "התחל את מסע הלמידה שלך",
    servicesTitle: "שירותי הלמידה המקוונת שלנו",
    servicesDesc: "פתרונות מקיפים מפיתוח תוכן ועד כיתות וירטואליות.",
    timeline: [
      {
        icon: "📚",
        title: "עיצוב תכנית לימודים",
        desc: "תכנית לימודים דיגיטלית מרתקת ומותאמת לסטנדרטים לכל הרמות.",
      },
      {
        icon: "🧑‍🏫",
        title: "כיתות וירטואליות",
        desc: "הוראה בזמן אמת עם כלים שיתופיים וחדרי דיון.",
      },
      {
        icon: "📈",
        title: "מעקב התקדמות",
        desc: "מעקב אחר התקדמות הלמידה עם אנליטיקה והערכות משולבות.",
      },
      {
        icon: "🌐",
        title: "תמיכה רב-לשונית",
        desc: "הנגשת חינוך ללומדים מאזורים ורקעים מגוונים.",
      },
    ],
    benefitsTitle: "למה לבחור בתוכניות הלמידה המקוונת שלנו?",
    benefitsDesc: "נועד להנגיש, לייעל ולרתק את הלמידה לכל אחד.",
    benefits: [
      {
        icon: "🌟",
        title: "מותאם לתלמיד",
        desc: "הפלטפורמות שלנו מתאימות לסגנון ולקצב הלמידה שלך.",
      },
      {
        icon: "🌍",
        title: "הגעה גלובלית",
        desc: "הצטרף ללומדים ומורים מכל העולם.",
      },
      {
        icon: "🔒",
        title: "פלטפורמה מאובטחת",
        desc: "סביבה בטוחה עם פרטיות נתונים ועמידה בתקנים.",
      },
    ],
    techTitle: "מופעל על ידי טכנולוגיות חינוך מובילות",
    tech: [
      {
        img: google,
        alt: "Google for Education",
        title: "Google for Education",
        desc: "השתמש בכלים כמו Google Classroom ו-Workspace לשיפור הלמידה והעבודה המשותפת.",
      },
      {
        img: micro,
        alt: "Microsoft Teams for Learning",
        title: "Microsoft Teams for Learning",
        desc: "הוראה מקוונת, תקשורת ושיתוף משאבים בפלטפורמה מאובטחת.",
      },
      {
        img: lms,
        alt: "Canvas LMS",
        title: "Canvas LMS",
        desc: "למידה מובנית, גמישה ומרתקת עם מעקב ואינטגרציה מתקדמים.",
      },
    ],
    ctaTitle: "מוכן לשנות את הלמידה?",
    ctaDesc:
      "בוא נבנה חווית למידה נגישה, יעילה ומותאמת לעתיד. צור קשר כדי להתאים פתרון למידה מקוון עבורך.",
    ctaBtn: "התחל עכשיו →",
  },
  ar: {
    heroTitle: "برامج التعلم عبر الإنترنت",
    valueTitle: "عزز رحلتك التعليمية في أي وقت وأي مكان",
    valueDesc:
      "برامجنا عبر الإنترنت تقدم تجارب تعليمية مرنة وشخصية. سواء كنت طالبًا أو محترفًا أو معلمًا – يمكنك التعلم بالطريقة والوتيرة التي تناسبك.",
    features: [
      "💻 دورات تفاعلية – تعلم عبر الفيديو والاختبارات والتغذية الراجعة الفورية.",
      "📅 جدول مرن – الوصول إلى المحتوى في أي وقت يناسبك.",
      "🎯 مسارات مخصصة – رحلات تعلم مصممة حسب أهدافك.",
    ],
    startBtn: "ابدأ رحلتك التعليمية",
    servicesTitle: "خدمات التعلم عبر الإنترنت لدينا",
    servicesDesc: "حلول شاملة من تطوير المحتوى إلى الفصول الافتراضية.",
    timeline: [
      {
        icon: "📚",
        title: "تصميم المناهج",
        desc: "مناهج رقمية جذابة ومتوافقة مع المعايير لجميع المستويات.",
      },
      {
        icon: "🧑‍🏫",
        title: "فصول افتراضية",
        desc: "تدريس مباشر بأدوات تعاونية وغرف نقاش.",
      },
      {
        icon: "📈",
        title: "تتبع التقدم",
        desc: "مراقبة التقدم مع تحليلات وتقييمات مدمجة.",
      },
      {
        icon: "🌐",
        title: "دعم متعدد اللغات",
        desc: "تقديم تعليم متاح لجميع المتعلمين من مختلف المناطق.",
      },
    ],
    benefitsTitle: "لماذا تختار برامج التعلم عبر الإنترنت لدينا؟",
    benefitsDesc: "مصممة لجعل التعليم متاحًا وفعالًا وجذابًا للجميع.",
    benefits: [
      {
        icon: "🌟",
        title: "مركز على الطالب",
        desc: "منصاتنا تتكيف مع أسلوبك ووتيرتك في التعلم.",
      },
      {
        icon: "🌍",
        title: "وصول عالمي",
        desc: "انضم إلى متعلمين ومعلمين من جميع أنحاء العالم.",
      },
      {
        icon: "🔒",
        title: "منصة آمنة",
        desc: "بيئة تعليمية آمنة مع خصوصية البيانات والامتثال.",
      },
    ],
    techTitle: "مدعوم بأحدث تقنيات التعليم",
    tech: [
      {
        img: google,
        alt: "Google for Education",
        title: "Google for Education",
        desc: "استخدم أدوات مثل Google Classroom وWorkspace لتعزيز التعلم والتعاون.",
      },
      {
        img: micro,
        alt: "Microsoft Teams for Learning",
        title: "Microsoft Teams for Learning",
        desc: "تدريس عبر الإنترنت وتواصل ومشاركة موارد على منصة آمنة.",
      },
      {
        img: lms,
        alt: "Canvas LMS",
        title: "Canvas LMS",
        desc: "تجارب تعلم منظمة وقابلة للتطوير وجذابة مع تتبع ودمج قوي.",
      },
    ],
    ctaTitle: "جاهز لتحويل التعلم؟",
    ctaDesc:
      "لنصنع تجربة تعليمية متاحة وفعالة وجاهزة للمستقبل. تواصل معنا لاستكشاف حل تعلم عبر الإنترنت مخصص لك.",
    ctaBtn: "ابدأ الآن →",
  },
};

function OnlineLearning() {
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
          src={onn}
          alt="Online Learning Banner"
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
            <img src={online} alt="Online Learning" />
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
            <img src={onl} alt="Online Classes" />
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

      {/* Technology Partners Section */}
      <section id="cloud-services">
        <h1>{t.techTitle}</h1>
        <div className="cards">
          {t.tech.map((item, idx) => (
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
          src={onll}
          alt="Contact Background"
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

export default OnlineLearning;
