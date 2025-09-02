import React, { useEffect } from "react";
import './OnlineLearning.css'; // Dark theme styles are in this CSS
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/Darkmodecontext"; // <-- Import dark mode hook
import { useLanguage } from "../context/LanguageContext";
import greet from "../images/greet.mp4";
import edu from "../images/edu.jpg";
import educ from "../images/educ.jpg";
import ap from "../images/ap.jpg";
import edt from "../images/edt.jpg";
import tp from "../images/tp.jpg";
import ec from "../images/ec.jpg";

// Add translations for EducationalConsulting page
const translations = {
  en: {
    heroTitle: "Expert Educational Consulting Services",
    valueTitle: "Guiding Students & Institutions Toward Success",
    valueDesc: "Our educational consulting services are tailored to support students, parents, and institutions in achieving academic and operational excellence. From curriculum design to academic planning, we offer customized solutions.",
    features: [
      "📘 Student Advisory – Career planning, college selection, and academic guidance.",
      "🏫 Institutional Support – Curriculum development and teacher training solutions.",
      "📊 Strategic Planning – Data-driven insights for better educational outcomes.",
    ],
    talkBtn: "Talk to a Consultant",
    approachTitle: "Our Consulting Approach",
    approachDesc: "A structured process designed to deliver impactful and measurable educational results.",
    approach: [
      {
        icon: "📋",
        title: "Needs Assessment",
        desc: "We start with an in-depth consultation to identify your unique challenges and goals.",
      },
      {
        icon: "🔍",
        title: "Strategic Planning",
        desc: "We develop a clear action plan using data, best practices, and international standards.",
      },
      {
        icon: "💼",
        title: "Implementation",
        desc: "From training to system setup, we help execute solutions in real time with full support.",
      },
      {
        icon: "📈",
        title: "Monitoring & Evaluation",
        desc: "We track progress, provide feedback, and ensure sustainable improvements.",
      },
    ],
    approachImgAlt: "Consulting Process",
    benefitsTitle: "Why Choose Our Educational Consulting?",
    benefitsDesc: "We offer tailored, research-based solutions that empower both learners and educators.",
    benefits: [
      {
        icon: "🌟",
        title: "Student-Centered Advice",
        desc: "We help learners choose the right paths based on their strengths, goals, and opportunities.",
      },
      {
        icon: "📐",
        title: "Customized Solutions",
        desc: "We don’t believe in one-size-fits-all. Our services are fully personalized.",
      },
      {
        icon: "📊",
        title: "Data-Driven Impact",
        desc: "Our recommendations are backed by analytics, research, and real-world results.",
      },
    ],
    partnersTitle: "Our Trusted Consulting Partners",
    partners: [
      {
        img: ap,
        alt: "Accreditation Support",
        title: "Accreditation Guidance",
        desc: "We assist institutions in meeting national and international quality standards.",
      },
      {
        img: edt,
        alt: "Curriculum Partners",
        title: "Curriculum Alignment",
        desc: "We work with global curriculum providers to enhance your institution’s offerings.",
      },
      {
        img: tp,
        alt: "Tech for Education",
        title: "Tech Integration",
        desc: "We help schools and colleges implement EdTech tools effectively for learning outcomes.",
      },
    ],
    ctaTitle: "Let’s Build a Brighter Future Together",
    ctaDesc: "Whether you're a student, educator, or institution—our consulting services are here to guide you every step of the way.",
    ctaBtn: "Request Consultation →",
  },
  he: {
    heroTitle: "שירותי ייעוץ חינוכי מקצועיים",
    valueTitle: "הכוונת תלמידים ומוסדות להצלחה",
    valueDesc: "שירותי הייעוץ החינוכי שלנו מותאמים לתמוך בתלמידים, הורים ומוסדות בהשגת מצוינות אקדמית ותפעולית. מהתאמת תכניות לימודים ועד תכנון אקדמי – אנו מציעים פתרונות מותאמים אישית.",
    features: [
      "📘 ייעוץ לתלמידים – תכנון קריירה, בחירת מוסדות והכוונה אקדמית.",
      "🏫 תמיכה מוסדית – פיתוח תכניות לימודים והכשרת מורים.",
      "📊 תכנון אסטרטגי – תובנות מבוססות נתונים לשיפור תוצאות חינוכיות.",
    ],
    talkBtn: "שוחח עם יועץ",
    approachTitle: "הגישה הייעוצית שלנו",
    approachDesc: "תהליך מובנה שנועד להוביל לתוצאות חינוכיות מדידות ובעלות השפעה.",
    approach: [
      {
        icon: "📋",
        title: "הערכת צרכים",
        desc: "אנו מתחילים בייעוץ מעמיק לזיהוי אתגרים ומטרות ייחודיים.",
      },
      {
        icon: "🔍",
        title: "תכנון אסטרטגי",
        desc: "אנו בונים תכנית פעולה ברורה תוך שימוש בנתונים, שיטות מיטביות וסטנדרטים בינלאומיים.",
      },
      {
        icon: "💼",
        title: "יישום",
        desc: "מהכשרות ועד הטמעת מערכות – אנו מסייעים בביצוע מלא עם תמיכה כוללת.",
      },
      {
        icon: "📈",
        title: "מעקב והערכה",
        desc: "אנו עוקבים אחר התקדמות, מספקים משוב ומבטיחים שיפור מתמשך.",
      },
    ],
    approachImgAlt: "תהליך ייעוץ",
    benefitsTitle: "למה לבחור בנו לייעוץ חינוכי?",
    benefitsDesc: "אנו מציעים פתרונות מותאמים אישית ומבוססי מחקר שמעצימים תלמידים ומורים.",
    benefits: [
      {
        icon: "🌟",
        title: "ייעוץ ממוקד תלמיד",
        desc: "אנו מסייעים לתלמידים לבחור את המסלול הנכון לפי חוזקותיהם, מטרותיהם והזדמנויותיהם.",
      },
      {
        icon: "📐",
        title: "פתרונות מותאמים אישית",
        desc: "אצלנו אין פתרון אחד לכולם – הכל מותאם אישית.",
      },
      {
        icon: "📊",
        title: "השפעה מבוססת נתונים",
        desc: "המלצותינו מגובות בנתונים, מחקר ותוצאות מהשטח.",
      },
    ],
    partnersTitle: "שותפי הייעוץ המובילים שלנו",
    partners: [
      {
        img: ap,
        alt: "תמיכה באקרדיטציה",
        title: "הכוונה להסמכה",
        desc: "אנו מסייעים למוסדות לעמוד בסטנדרטים לאומיים ובינלאומיים.",
      },
      {
        img: edt,
        alt: "שותפי תכניות לימודים",
        title: "יישור תכניות לימודים",
        desc: "עובדים עם ספקי תכניות לימודים עולמיים לשדרוג ההיצע של המוסד שלך.",
      },
      {
        img: tp,
        alt: "טכנולוגיה בחינוך",
        title: "שילוב טכנולוגי",
        desc: "מסייעים לבתי ספר ומכללות להטמיע כלים דיגיטליים לשיפור הלמידה.",
      },
    ],
    ctaTitle: "בואו נבנה עתיד חינוכי טוב יותר יחד",
    ctaDesc: "בין אם אתה תלמיד, מחנך או מוסד – שירותי הייעוץ שלנו ילוו אותך בכל שלב.",
    ctaBtn: "בקש ייעוץ →",
  },
  ar: {
    heroTitle: "خدمات الاستشارات التعليمية المتخصصة",
    valueTitle: "إرشاد الطلاب والمؤسسات نحو النجاح",
    valueDesc: "خدماتنا الاستشارية التعليمية مصممة لدعم الطلاب وأولياء الأمور والمؤسسات لتحقيق التميز الأكاديمي والتشغيلي. من تصميم المناهج إلى التخطيط الأكاديمي، نقدم حلولًا مخصصة.",
    features: [
      "📘 استشارات للطلاب – تخطيط المسار المهني واختيار الجامعة والإرشاد الأكاديمي.",
      "🏫 دعم المؤسسات – تطوير المناهج وحلول تدريب المعلمين.",
      "📊 التخطيط الاستراتيجي – رؤى قائمة على البيانات لتحسين النتائج التعليمية.",
    ],
    talkBtn: "تحدث مع مستشار",
    approachTitle: "نهجنا الاستشاري",
    approachDesc: "عملية منظمة تهدف لتحقيق نتائج تعليمية مؤثرة وقابلة للقياس.",
    approach: [
      {
        icon: "📋",
        title: "تقييم الاحتياجات",
        desc: "نبدأ باستشارة معمقة لتحديد التحديات والأهداف الفريدة.",
      },
      {
        icon: "🔍",
        title: "التخطيط الاستراتيجي",
        desc: "نطور خطة عمل واضحة باستخدام البيانات وأفضل الممارسات والمعايير الدولية.",
      },
      {
        icon: "💼",
        title: "التنفيذ",
        desc: "من التدريب إلى إعداد الأنظمة، نساعد في تنفيذ الحلول بدعم كامل.",
      },
      {
        icon: "📈",
        title: "المتابعة والتقييم",
        desc: "نتابع التقدم ونقدم التغذية الراجعة ونضمن التحسين المستدام.",
      },
    ],
    approachImgAlt: "عملية الاستشارة",
    benefitsTitle: "لماذا تختار استشاراتنا التعليمية؟",
    benefitsDesc: "نقدم حلولًا مخصصة قائمة على البحث تعزز المتعلمين والمعلمين.",
    benefits: [
      {
        icon: "🌟",
        title: "نصائح تركز على الطالب",
        desc: "نساعد المتعلمين في اختيار المسارات الصحيحة بناءً على نقاط القوة والأهداف والفرص.",
      },
      {
        icon: "📐",
        title: "حلول مخصصة",
        desc: "لا نؤمن بحلول واحدة للجميع – خدماتنا مصممة خصيصًا لك.",
      },
      {
        icon: "📊",
        title: "تأثير قائم على البيانات",
        desc: "توصياتنا مدعومة بالتحليلات والبحث والنتائج الواقعية.",
      },
    ],
    partnersTitle: "شركاؤنا الاستشاريون الموثوقون",
    partners: [
      {
        img: ap,
        alt: "دعم الاعتماد",
        title: "إرشاد الاعتماد",
        desc: "نساعد المؤسسات على تحقيق معايير الجودة الوطنية والدولية.",
      },
      {
        img: edt,
        alt: "شركاء المناهج",
        title: "مواءمة المناهج",
        desc: "نعمل مع مزودي المناهج العالميين لتعزيز عروض مؤسستك.",
      },
      {
        img: tp,
        alt: "التقنية في التعليم",
        title: "دمج التقنية",
        desc: "نساعد المدارس والكليات على تطبيق أدوات التقنية التعليمية بفعالية.",
      },
    ],
    ctaTitle: "لنصنع مستقبلًا أكثر إشراقًا معًا",
    ctaDesc: "سواء كنت طالبًا أو معلمًا أو مؤسسة – خدماتنا الاستشارية ترشدك في كل خطوة.",
    ctaBtn: "اطلب استشارة →",
  },
};

function EducationalConsulting() {
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
          src={greet}
          alt="Educational Consulting Banner"
          autoPlay
          loop
          muted
          playsInline
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
              {t.talkBtn}
            </button>
          </div>
          <div className="cloud-image">
            <img src={educ} alt="Educational Consulting" />
          </div>
        </div>
      </section>

      {/* Services Timeline Section */}
      <section className="cloud-services-timeline">
        <h2>{t.approachTitle}</h2>
        <p className="cloud-subtitle">{t.approachDesc}</p>
        <div className="cloud-timeline-container">
          <div className="timeline">
            {t.approach.map((step, idx) => (
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
            <img src={edu} alt={t.approachImgAlt} />
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
          src={ec}
          alt="Educational Consulting Background"
          className="background-img"
        />
        <div className="contact-content">
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaDesc}</p>
          <a href="#contact" className="cta-button" onClick={() => handleGetStarted("/contact")}>
            {t.ctaBtn}
          </a>
        </div>
      </section>
    </div>
  );
}

export default EducationalConsulting;
