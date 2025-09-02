import React, { useEffect } from "react";
import './OnlineLearning.css'; // Dark theme styles are in this CSS
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/Darkmodecontext";
import { useLanguage } from "../context/LanguageContext";
import teacher from "../images/teacher.mp4";
import tr from "../images/tr.jpg";
import tt from "../images/tt.jpg";
import ct from "../images/ct.jpg";
import ap from "../images/ap.jpg";
import edt from "../images/edt.jpg";
import tp from "../images/tp.jpg";

// Add translations for TeacherTraining page
const translations = {
  en: {
    heroTitle: "Professional Teacher Training Programs",
    valueTitle: "Empowering Educators for the Future",
    valueDesc: "Our specialized teacher training programs are designed for aspiring and current educators who want to enhance their teaching skills, classroom management, and pedagogy expertise.",
    features: [
      "🎓 Certified Programs – Recognized certifications for career advancement.",
      "🧠 Modern Pedagogies – Training in student-centered and inclusive teaching methods.",
      "🧑‍🏫 Mentorship & Support – Personalized coaching from expert trainers.",
    ],
    getTrained: "Get Trained Now",
    timelineTitle: "Your Path to Becoming an Impactful Educator",
    timelineDesc: "Step-by-step professional development to build your teaching career with confidence.",
    timeline: [
      {
        icon: "📝",
        title: "Program Enrollment",
        desc: "Choose from our certified short-term and long-term training programs.",
      },
      {
        icon: "📖",
        title: "Course Modules",
        desc: "Learn through interactive content focused on pedagogy, assessment, and digital tools.",
      },
      {
        icon: "🎥",
        title: "Live Practicals",
        desc: "Practice teaching in live demo sessions with feedback from trainers.",
      },
      {
        icon: "📜",
        title: "Certification & Placement",
        desc: "Receive recognized certification and access career opportunities with partner institutions.",
      },
    ],
    timelineImgAlt: "Teacher Training Journey",
    benefitsTitle: "Why Choose Our Teacher Training?",
    benefitsDesc: "We equip educators with tools, skills, and confidence to thrive in 21st-century classrooms.",
    benefits: [
      {
        icon: "🌍",
        title: "Global Standards",
        desc: "Our curriculum follows international benchmarks in teaching excellence.",
      },
      {
        icon: "💡",
        title: "Practical Learning",
        desc: "Simulated teaching environments help apply theory to real-world classrooms.",
      },
      {
        icon: "🤝",
        title: "Career Development",
        desc: "Resume support, interview training, and school partnerships to kickstart your teaching career.",
      },
    ],
    partnersTitle: "Powered by Leading Education Partners",
    partners: [
      {
        img: ap,
        alt: "Education Board Certified",
        title: "Accredited Programs",
        desc: "Our certifications are recognized by national and international education boards.",
      },
      {
        img: edt,
        alt: "EdTech Tools",
        title: "EdTech Integration",
        desc: "Training includes tools like Google Classroom, Zoom, Canva, and LMS platforms.",
      },
      {
        img: tp,
        alt: "Teaching Partners",
        title: "Teaching Partnerships",
        desc: "We partner with schools and NGOs to provide live teaching practice and employment pathways.",
      },
    ],
    ctaTitle: "Start Your Teaching Journey Today",
    ctaDesc: "Whether you're a beginner or a current educator, our teacher training services will help you thrive in today's dynamic classroom environments.",
    ctaBtn: "Enroll Now →",
  },
  he: {
    heroTitle: "תוכניות הכשרת מורים מקצועיות",
    valueTitle: "להעצים מחנכים לעתיד",
    valueDesc: "תוכניות ההכשרה שלנו מיועדות למורים מתחילים ומנוסים שרוצים לשפר את כישורי ההוראה, ניהול הכיתה והפדגוגיה.",
    features: [
      "🎓 תוכניות מוסמכות – תעודות מוכרות לקידום הקריירה.",
      "🧠 פדגוגיה מודרנית – הכשרה בשיטות הוראה חדשניות ומכלילות.",
      "🧑‍🏫 חונכות ותמיכה – ליווי אישי ממדריכים מנוסים.",
    ],
    getTrained: "הירשם להכשרה",
    timelineTitle: "הדרך שלך להיות מחנך משפיע",
    timelineDesc: "התפתחות מקצועית שלב-אחר-שלב לבניית קריירה חינוכית בביטחון.",
    timeline: [
      {
        icon: "📝",
        title: "הרשמה לתוכנית",
        desc: "בחר מבין תוכניות הכשרה קצרות וארוכות מוסמכות.",
      },
      {
        icon: "📖",
        title: "מודולי קורס",
        desc: "למידה אינטראקטיבית בפדגוגיה, הערכה וכלים דיגיטליים.",
      },
      {
        icon: "🎥",
        title: "תרגולים חיים",
        desc: "הוראה מעשית בשיעורים חיים עם משוב ממדריכים.",
      },
      {
        icon: "📜",
        title: "הסמכה והשמה",
        desc: "קבל תעודה מוכרת וגישה להזדמנויות תעסוקה.",
      },
    ],
    timelineImgAlt: "מסע הכשרת מורים",
    benefitsTitle: "למה לבחור בהכשרת המורים שלנו?",
    benefitsDesc: "אנו מעניקים למורים כלים, מיומנויות וביטחון להצליח בכיתות המאה ה-21.",
    benefits: [
      {
        icon: "🌍",
        title: "סטנדרטים גלובליים",
        desc: "התוכנית שלנו מותאמת לסטנדרטים בינלאומיים למצוינות בהוראה.",
      },
      {
        icon: "💡",
        title: "למידה מעשית",
        desc: "סימולציות הוראה שמחברות בין תיאוריה לפרקטיקה.",
      },
      {
        icon: "🤝",
        title: "פיתוח קריירה",
        desc: "סיוע בכתיבת קורות חיים, הכנה לראיונות וחיבורים לבתי ספר.",
      },
    ],
    partnersTitle: "בשיתוף שותפי חינוך מובילים",
    partners: [
      {
        img: ap,
        alt: "מוסמך מועצת חינוך",
        title: "תוכניות מוסמכות",
        desc: "התעודות שלנו מוכרות על ידי גופים לאומיים ובינלאומיים.",
      },
      {
        img: edt,
        alt: "כלי אדטק",
        title: "שילוב טכנולוגי",
        desc: "ההכשרה כוללת כלים כמו Google Classroom, Zoom, Canva ו-LMS.",
      },
      {
        img: tp,
        alt: "שותפי הוראה",
        title: "שותפויות הוראה",
        desc: "עובדים עם בתי ספר ועמותות למתן תרגול חי והשמה.",
      },
    ],
    ctaTitle: "התחל את מסע ההוראה שלך היום",
    ctaDesc: "בין אם אתה מתחיל או מורה מנוסה – ההכשרה שלנו תסייע לך להצליח בכיתה המודרנית.",
    ctaBtn: "הירשם עכשיו →",
  },
  ar: {
    heroTitle: "برامج تدريب المعلمين الاحترافية",
    valueTitle: "تمكين المعلمين للمستقبل",
    valueDesc: "برامجنا المتخصصة مصممة للمعلمين الجدد والحاليين الراغبين في تطوير مهاراتهم وأساليبهم الصفية.",
    features: [
      "🎓 برامج معتمدة – شهادات معترف بها لتطوير المسار المهني.",
      "🧠 طرق تدريس حديثة – تدريب على أساليب تعليمية تركز على الطالب والشمول.",
      "🧑‍🏫 إرشاد ودعم – تدريب شخصي من خبراء التعليم.",
    ],
    getTrained: "ابدأ التدريب الآن",
    timelineTitle: "طريقك لتصبح معلماً مؤثراً",
    timelineDesc: "تطوير مهني تدريجي لبناء مسيرتك التعليمية بثقة.",
    timeline: [
      {
        icon: "📝",
        title: "الالتحاق بالبرنامج",
        desc: "اختر من بين برامجنا التدريبية القصيرة والطويلة المعتمدة.",
      },
      {
        icon: "📖",
        title: "وحدات الدورة",
        desc: "تعلم تفاعلي يركز على طرق التدريس والتقييم والأدوات الرقمية.",
      },
      {
        icon: "🎥",
        title: "تطبيق عملي مباشر",
        desc: "تدريب عملي في جلسات مباشرة مع ملاحظات من المدربين.",
      },
      {
        icon: "📜",
        title: "الشهادة والتوظيف",
        desc: "احصل على شهادة معترف بها وفرص عمل مع مؤسسات شريكة.",
      },
    ],
    timelineImgAlt: "رحلة تدريب المعلمين",
    benefitsTitle: "لماذا تختار تدريب المعلمين لدينا؟",
    benefitsDesc: "نمنح المعلمين الأدوات والمهارات والثقة للنجاح في فصول القرن 21.",
    benefits: [
      {
        icon: "🌍",
        title: "معايير عالمية",
        desc: "مناهجنا تتبع معايير التميز الدولية في التعليم.",
      },
      {
        icon: "💡",
        title: "تعلم عملي",
        desc: "بيئات تدريس محاكاة لتطبيق النظرية في الواقع.",
      },
      {
        icon: "🤝",
        title: "تطوير مهني",
        desc: "دعم في كتابة السيرة الذاتية، تدريب مقابلات، وشراكات مع المدارس.",
      },
    ],
    partnersTitle: "بدعم من شركاء التعليم الرائدين",
    partners: [
      {
        img: ap,
        alt: "شهادة مجلس التعليم",
        title: "برامج معتمدة",
        desc: "شهاداتنا معترف بها من هيئات التعليم الوطنية والدولية.",
      },
      {
        img: edt,
        alt: "أدوات تكنولوجيا التعليم",
        title: "دمج تكنولوجيا التعليم",
        desc: "يشمل التدريب أدوات مثل Google Classroom وZoom وCanva وLMS.",
      },
      {
        img: tp,
        alt: "شركاء التدريس",
        title: "شراكات التدريس",
        desc: "نتعاون مع المدارس والمنظمات لتوفير تدريب عملي وفرص توظيف.",
      },
    ],
    ctaTitle: "ابدأ رحلتك التعليمية اليوم",
    ctaDesc: "سواء كنت مبتدئًا أو معلمًا حاليًا – برامجنا ستساعدك على النجاح في الفصول الحديثة.",
    ctaBtn: "سجل الآن →",
  },
};

function TeacherTraining() {
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
          src={teacher}
          alt="Teacher Training Banner"
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
              {t.getTrained}
            </button>
          </div>
          <div className="cloud-image">
            <img src={tt} alt="Teacher Training" />
          </div>
        </div>
      </section>

      {/* Services Timeline Section */}
      <section className="cloud-services-timeline">
        <h2>{t.timelineTitle}</h2>
        <p className="cloud-subtitle">
          {t.timelineDesc}
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
            <img src={tr} alt={t.timelineImgAlt} />
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
          src={ct}
          alt="Teacher Training Contact Background"
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

export default TeacherTraining;
