import React, { useEffect } from "react";
import './OnlineLearning.css';
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/Darkmodecontext";
import { useLanguage } from "../context/LanguageContext";
import tut from "../images/tut.mp4";
import tuto from "../images/tuto.jpg";
import proc from "../images/proc.jpg";
import khan from "../images/khan.jpg";
import pers from "../images/pers.jpg";
import zoom from "../images/zoom.jpg";
import quiz from "../images/quiz.jpg";

// Add translations for PersonalizedTutoring page
const translations = {
  en: {
    heroTitle: "Personalized Tutoring Services",
    valueTitle: "One-on-One Tutoring, Tailored to Your Needs",
    valueDesc: "Our tutoring services offer fully personalized academic support. Whether you’re a K–12 student, college learner, or a parent, we match you with expert tutors who adapt to your pace and style.",
    features: [
      "🎓 Expert Tutors – Vetted professionals with subject mastery and teaching experience.",
      "📆 Flexible Scheduling – Choose times that fit your routine with ease.",
      "🧠 Customized Learning Plans – Built around your goals, strengths, and gaps.",
    ],
    findTutor: "Find Your Tutor",
    processTitle: "Our Tutoring Process",
    processDesc: "A structured approach designed for measurable progress and long-term success.",
    process: [
      {
        icon: "🔍",
        title: "Initial Assessment",
        desc: "We start by evaluating current skills and learning preferences.",
      },
      {
        icon: "📋",
        title: "Customized Plan",
        desc: "A personalized learning roadmap is built for each student’s needs.",
      },
      {
        icon: "💬",
        title: "One-on-One Sessions",
        desc: "Live sessions with expert tutors focused on building confidence and skill mastery.",
      },
      {
        icon: "📊",
        title: "Progress Tracking",
        desc: "Ongoing evaluation ensures we’re on track—and adapting as needed.",
      },
    ],
    processImgAlt: "Tutoring Process",
    benefitsTitle: "Why Choose Our Tutoring Services?",
    benefitsDesc: "Personalized attention. Proven results. Tutors who care.",
    benefits: [
      {
        icon: "🧑‍🎓",
        title: "Student-First Approach",
        desc: "Our tutors prioritize confidence, not just grades.",
      },
      {
        icon: "⏰",
        title: "Flexible & Convenient",
        desc: "Online or in-person options designed to work around your schedule.",
      },
      {
        icon: "🔐",
        title: "Safe & Secure",
        desc: "All tutors background-checked. Sessions monitored for quality and safety.",
      },
    ],
    toolsTitle: "Tools That Support Better Learning",
    tools: [
      {
        img: khan,
        alt: "Khan Academy",
        title: "Khan Academy",
        desc: "Our tutors integrate Khan Academy to reinforce concepts and provide extra practice.",
      },
      {
        img: zoom,
        alt: "Zoom for Tutoring",
        title: "Zoom for Education",
        desc: "Secure, real-time virtual tutoring sessions with interactive tools like whiteboards and screen share.",
      },
      {
        img: quiz,
        alt: "Quizlet",
        title: "Quizlet",
        desc: "Boost retention with flashcards, games, and quizzes tailored to your tutoring sessions.",
      },
    ],
    ctaTitle: "Start Personalized Tutoring Today",
    ctaDesc: "Ready to take learning to the next level? Contact us to match with a tutor and customize your path to success.",
    ctaBtn: "Get Matched with a Tutor →",
  },
  he: {
    heroTitle: "שירותי שיעורים פרטיים מותאמים אישית",
    valueTitle: "שיעור אחד על אחד, מותאם בדיוק לצרכים שלך",
    valueDesc: "השיעורים שלנו מציעים תמיכה אקדמית מותאמת אישית לחלוטין. בין אם אתה תלמיד בית ספר, סטודנט או הורה – נתאים לך מורה מקצועי שיתאים לקצב ולסגנון שלך.",
    features: [
      "🎓 מורים מומחים – אנשי מקצוע מנוסים ובעלי ידע בתחומם.",
      "📆 גמישות בזמנים – בחר את השעות שנוחות לך.",
      "🧠 תכנית למידה מותאמת – נבנית סביב המטרות, החוזקות והפערים שלך.",
    ],
    findTutor: "מצא מורה פרטי",
    processTitle: "תהליך השיעורים שלנו",
    processDesc: "גישה מובנית שמובילה להתקדמות מדידה והצלחה ארוכת טווח.",
    process: [
      {
        icon: "🔍",
        title: "הערכה ראשונית",
        desc: "מתחילים בהערכת הכישורים והעדפות הלמידה שלך.",
      },
      {
        icon: "📋",
        title: "תכנית מותאמת אישית",
        desc: "נבנית מפת למידה אישית לכל תלמיד.",
      },
      {
        icon: "💬",
        title: "מפגשים אישיים",
        desc: "שיעורים חיים עם מורים שממוקדים בבניית ביטחון והצלחה.",
      },
      {
        icon: "📊",
        title: "מעקב התקדמות",
        desc: "הערכה מתמשכת כדי לוודא שאנחנו בדרך הנכונה – ומתאימים לפי הצורך.",
      },
    ],
    processImgAlt: "תהליך שיעורים פרטיים",
    benefitsTitle: "למה לבחור בשירותי השיעורים שלנו?",
    benefitsDesc: "יחס אישי. תוצאות מוכחות. מורים שאכפת להם.",
    benefits: [
      {
        icon: "🧑‍🎓",
        title: "גישה ממוקדת תלמיד",
        desc: "המורים שלנו שמים דגש על ביטחון עצמי, לא רק ציונים.",
      },
      {
        icon: "⏰",
        title: "גמיש ונוח",
        desc: "אפשרות לשיעורים מקוונים או פרונטליים – בהתאמה ללוח הזמנים שלך.",
      },
      {
        icon: "🔐",
        title: "בטוח ומאובטח",
        desc: "כל המורים נבדקים. כל שיעור מפוקח לאיכות ובטיחות.",
      },
    ],
    toolsTitle: "כלים שתומכים בלמידה טובה יותר",
    tools: [
      {
        img: khan,
        alt: "Khan Academy",
        title: "Khan Academy",
        desc: "המורים שלנו משלבים את Khan Academy לחיזוק מושגים ותרגול נוסף.",
      },
      {
        img: zoom,
        alt: "Zoom לשיעורים",
        title: "Zoom לחינוך",
        desc: "שיעורים פרטיים מקוונים בזמן אמת עם כלים אינטראקטיביים.",
      },
      {
        img: quiz,
        alt: "Quizlet",
        title: "Quizlet",
        desc: "שפר את הזיכרון עם כרטיסיות, משחקים ובחנים מותאמים אישית.",
      },
    ],
    ctaTitle: "התחל שיעור פרטי מותאם אישית היום",
    ctaDesc: "מוכן לשדרג את הלמידה? צור קשר להתאמת מורה אישי ודרך הצלחה מותאמת.",
    ctaBtn: "מצא מורה עכשיו →",
  },
  ar: {
    heroTitle: "خدمات التدريس الشخصي",
    valueTitle: "دروس فردية مصممة خصيصًا لك",
    valueDesc: "خدماتنا تقدم دعمًا أكاديميًا مخصصًا بالكامل. سواء كنت طالبًا في المدرسة أو الجامعة أو ولي أمر – سنطابقك مع مدرسين خبراء يتكيفون مع وتيرتك وأسلوبك.",
    features: [
      "🎓 مدرسون خبراء – محترفون معتمدون وذوو خبرة في التدريس.",
      "📆 جدول مرن – اختر الأوقات التي تناسبك بسهولة.",
      "🧠 خطط تعلم مخصصة – مبنية حول أهدافك ونقاط قوتك واحتياجاتك.",
    ],
    findTutor: "ابحث عن مدرس",
    processTitle: "عملية التدريس لدينا",
    processDesc: "نهج منظم لتحقيق تقدم ملموس ونجاح طويل الأمد.",
    process: [
      {
        icon: "🔍",
        title: "تقييم أولي",
        desc: "نبدأ بتقييم المهارات الحالية وتفضيلات التعلم.",
      },
      {
        icon: "📋",
        title: "خطة مخصصة",
        desc: "يتم بناء خارطة تعلم شخصية لكل طالب.",
      },
      {
        icon: "💬",
        title: "جلسات فردية",
        desc: "جلسات مباشرة مع مدرسين خبراء تركز على بناء الثقة وإتقان المهارات.",
      },
      {
        icon: "📊",
        title: "متابعة التقدم",
        desc: "تقييم مستمر لضمان التقدم والتكيف حسب الحاجة.",
      },
    ],
    processImgAlt: "عملية التدريس",
    benefitsTitle: "لماذا تختار خدمات التدريس لدينا؟",
    benefitsDesc: "اهتمام شخصي. نتائج مثبتة. مدرسون يهتمون بك.",
    benefits: [
      {
        icon: "🧑‍🎓",
        title: "نهج يركز على الطالب",
        desc: "مدرسونا يركزون على بناء الثقة وليس الدرجات فقط.",
      },
      {
        icon: "⏰",
        title: "مرن ومريح",
        desc: "خيارات عبر الإنترنت أو حضورياً حسب جدولك.",
      },
      {
        icon: "🔐",
        title: "آمن ومضمون",
        desc: "جميع المدرسين تم التحقق منهم. الجلسات مراقبة للجودة والسلامة.",
      },
    ],
    toolsTitle: "أدوات تدعم التعلم الأفضل",
    tools: [
      {
        img: khan,
        alt: "Khan Academy",
        title: "Khan Academy",
        desc: "مدرسونا يدمجون Khan Academy لتعزيز الفهم والتدريب الإضافي.",
      },
      {
        img: zoom,
        alt: "Zoom للتدريس",
        title: "Zoom للتعليم",
        desc: "جلسات تدريس افتراضية آمنة وفورية مع أدوات تفاعلية.",
      },
      {
        img: quiz,
        alt: "Quizlet",
        title: "Quizlet",
        desc: "عزز الحفظ ببطاقات تعليمية وألعاب واختبارات مخصصة.",
      },
    ],
    ctaTitle: "ابدأ التدريس الشخصي اليوم",
    ctaDesc: "جاهز للارتقاء بالتعلم؟ تواصل معنا لمطابقتك مع مدرس وخطة نجاح مخصصة.",
    ctaBtn: "ابحث عن مدرس الآن →",
  },
};

function PersonalizedTutoring() {
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
          src={tut}
          alt="Personalized Tutoring Banner"
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
              {t.findTutor}
            </button>
          </div>
          <div className="cloud-image">
            <img src={tuto} alt="Personalized Tutoring" />
          </div>
        </div>
      </section>

      {/* Services Timeline Section */}
      <section className="cloud-services-timeline">
        <h2>{t.processTitle}</h2>
        <p className="cloud-subtitle">{t.processDesc}</p>
        <div className="cloud-timeline-container">
          <div className="timeline">
            {t.process.map((step, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-icon">{step.icon}</div>
                <div className="timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="timeline-image">
            <img src={proc} alt={t.processImgAlt} />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="cloud-benefits">
        <div className="cloud-benefits-container">
          <h2>{t.benefitsTitle}</h2>
          <p className="benefits-subtitle">{t.benefitsDesc}</p>
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
        <h1>{t.toolsTitle}</h1>
        <div className="cards">
          {t.tools.map((item, idx) => (
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
          src={pers}
          alt="Tutoring Contact Background"
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

export default PersonalizedTutoring;
