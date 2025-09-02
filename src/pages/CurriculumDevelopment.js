import React, { useEffect } from "react"; // <-- Add useEffect import
import './OnlineLearning.css'; // Reuse the CSS file for dark theme support
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/Darkmodecontext";
import { useLanguage } from "../context/LanguageContext";
import curri from "../images/curri.mp4";
import cud from "../images/Cud.jpg";
import dev from "../images/dev.jpg";
import digi from "../images/digi.jpg";
import allign from "../images/allign.jpg";
import pilot from "../images/pilot.jpg";
import ban from "../images/ban.jpg";

// Add translations for CurriculumDevelopment page
const translations = {
  en: {
    heroTitle: "Innovative Curriculum Development Services",
    valueTitle: "Designing Meaningful Learning Experiences",
    valueDesc:
      "We specialize in building engaging, inclusive, and standards-aligned curricula for schools, colleges, and educational organizations. Our solutions foster critical thinking, creativity, and real-world readiness.",
    features: [
      "📚 Customized Curriculum – Built for your learners, goals, and regional needs.",
      "🔬 STEM & Humanities – Balanced interdisciplinary content aligned with global trends.",
      "🧠 21st Century Skills – Integrated problem-solving, collaboration, and digital literacy.",
    ],
    buildBtn: "Build Your Curriculum",
    processTitle: "Our Curriculum Development Process",
    processDesc:
      "A collaborative and iterative approach focused on educational excellence and learner outcomes.",
    process: [
      {
        icon: "🔍",
        title: "Needs Analysis",
        desc: "We conduct research and consultations to understand learner profiles, institutional goals, and context.",
      },
      {
        icon: "📘",
        title: "Curriculum Design",
        desc: "Learning outcomes, frameworks, and subject plans are created with pedagogical alignment.",
      },
      {
        icon: "🛠️",
        title: "Content Development",
        desc: "Lesson plans, assessments, and teacher guides are tailored for effective classroom delivery.",
      },
      {
        icon: "📈",
        title: "Implementation & Review",
        desc: "We provide training, tools, and monitoring frameworks for successful rollout and improvement.",
      },
    ],
    processImgAlt: "Curriculum Development Process",
    benefitsTitle: "Why Choose Our Curriculum Development Services?",
    benefitsDesc:
      "We combine innovation with academic rigor to create high-impact educational programs.",
    benefits: [
      {
        icon: "🧩",
        title: "Modular & Flexible",
        desc: "Curricula that adapt to diverse teaching styles, learning speeds, and cultural settings.",
      },
      {
        icon: "🌐",
        title: "Globally Aligned",
        desc: "Our designs align with IB, Cambridge, national boards, and 21st-century education models.",
      },
      {
        icon: "🤝",
        title: "Collaborative Expertise",
        desc: "Work alongside experienced educators, subject matter experts, and instructional designers.",
      },
    ],
    collabTitle: "In Collaboration With Education Leaders",
    collab: [
      {
        img: allign,
        alt: "Standards Alignment",
        title: "Standards Integration",
        desc: "We ensure alignment with local and global education standards, benchmarks, and policies.",
      },
      {
        img: digi,
        alt: "Digital Curriculum Tools",
        title: "Digital Curriculum Tools",
        desc: "Support for LMS integration, online delivery formats, and multimedia content creation.",
      },
      {
        img: pilot,
        alt: "Pilot Schools",
        title: "Pilot Programs",
        desc: "Collaborate on small-scale implementation before full-scale adoption in your institution.",
      },
    ],
    ctaTitle: "Let’s Co-Create Future-Ready Curriculum",
    ctaDesc:
      "Whether you're launching a new school, revamping your syllabus, or aligning with modern standards—we're here to help.",
    ctaBtn: "Start Development →",
  },
  he: {
    heroTitle: "שירותי פיתוח תכניות לימודים חדשניות",
    valueTitle: "עיצוב חוויות למידה משמעותיות",
    valueDesc:
      "אנו מתמחים בבניית תכניות לימודים מרתקות, מכלילות ומותאמות לסטנדרטים עבור בתי ספר, מכללות וארגונים חינוכיים. הפתרונות שלנו מעודדים חשיבה ביקורתית, יצירתיות ומוכנות לעולם האמיתי.",
    features: [
      "📚 תכנית לימודים מותאמת – נבנית עבור הלומדים, המטרות והצרכים האזוריים שלך.",
      "🔬 STEM ומדעי הרוח – תוכן בין-תחומי מאוזן המותאם למגמות עולמיות.",
      "🧠 מיומנויות המאה ה-21 – שילוב פתרון בעיות, שיתופיות ואוריינות דיגיטלית.",
    ],
    buildBtn: "בנה תכנית לימודים",
    processTitle: "תהליך פיתוח תכנית הלימודים שלנו",
    processDesc:
      "גישה שיתופית ומדורגת המתמקדת במצוינות חינוכית ובהישגי לומדים.",
    process: [
      {
        icon: "🔍",
        title: "ניתוח צרכים",
        desc: "אנו מבצעים מחקר והתייעצות להבנת פרופיל הלומדים, מטרות המוסד והקשר הלימודי.",
      },
      {
        icon: "📘",
        title: "עיצוב תכנית לימודים",
        desc: "נבנים יעדי למידה, מסגרות ותכניות מקצוע עם התאמה פדגוגית.",
      },
      {
        icon: "🛠️",
        title: "פיתוח תוכן",
        desc: "מערכי שיעור, הערכות ומדריכי מורים מותאמים להוראה אפקטיבית בכיתה.",
      },
      {
        icon: "📈",
        title: "יישום ובקרה",
        desc: "אנו מספקים הכשרות, כלים ומסגרות מעקב להטמעה מוצלחת ולשיפור מתמיד.",
      },
    ],
    processImgAlt: "תהליך פיתוח תכנית לימודים",
    benefitsTitle: "למה לבחור בשירותי פיתוח תכניות הלימודים שלנו?",
    benefitsDesc:
      "אנו משלבים חדשנות עם מצוינות אקדמית ליצירת תכניות לימוד בעלות השפעה גבוהה.",
    benefits: [
      {
        icon: "🧩",
        title: "מודולרי וגמיש",
        desc: "תכניות לימודים המותאמות לסגנונות הוראה, קצבי למידה והקשרים תרבותיים מגוונים.",
      },
      {
        icon: "🌐",
        title: "מותאם גלובלית",
        desc: "העיצובים שלנו מותאמים ל-IB, קיימברידג', מועצות לאומיות ומודלים חינוכיים עדכניים.",
      },
      {
        icon: "🤝",
        title: "מומחיות שיתופית",
        desc: "עבודה לצד אנשי חינוך, מומחי תוכן ומעצבי הוראה מנוסים.",
      },
    ],
    collabTitle: "בשיתוף עם מובילי חינוך",
    collab: [
      {
        img: allign,
        alt: "יישור לסטנדרטים",
        title: "שילוב סטנדרטים",
        desc: "אנו דואגים ליישור עם סטנדרטים, מדדים ומדיניות חינוך מקומיים וגלובליים.",
      },
      {
        img: digi,
        alt: "כלי תכנית לימודים דיגיטלית",
        title: "כלי תכנית לימודים דיגיטלית",
        desc: "תמיכה באינטגרציה ל-LMS, פורמטים מקוונים ויצירת תוכן מולטימדיה.",
      },
      {
        img: pilot,
        alt: "בתי ספר פיילוט",
        title: "פיילוטים",
        desc: "שיתוף פעולה בהטמעה בקנה מידה קטן לפני יישום מלא במוסד שלך.",
      },
    ],
    ctaTitle: "בואו ניצור יחד תכנית לימודים מוכנה לעתיד",
    ctaDesc:
      "בין אם אתם פותחים בית ספר חדש, מחדשים סילבוס או מתאימים לסטנדרטים מודרניים – אנחנו כאן בשבילכם.",
    ctaBtn: "התחל פיתוח →",
  },
  ar: {
    heroTitle: "خدمات تطوير المناهج المبتكرة",
    valueTitle: "تصميم تجارب تعلم هادفة",
    valueDesc:
      "نحن متخصصون في بناء مناهج تفاعلية وشاملة ومتوافقة مع المعايير للمدارس والكليات والمؤسسات التعليمية. حلولنا تعزز التفكير النقدي والإبداع والاستعداد للحياة الواقعية.",
    features: [
      "📚 منهج مخصص – مصمم للمتعلمين والأهداف والاحتياجات الإقليمية.",
      "🔬 العلوم والتقنية والإنسانيات – محتوى متوازن متعدد التخصصات مواكب للاتجاهات العالمية.",
      "🧠 مهارات القرن 21 – دمج حل المشكلات والتعاون والثقافة الرقمية.",
    ],
    buildBtn: "ابنِ منهجك",
    processTitle: "عملية تطوير المناهج لدينا",
    processDesc:
      "نهج تعاوني وتدريجي يركز على التميز التعليمي ونتائج المتعلمين.",
    process: [
      {
        icon: "🔍",
        title: "تحليل الاحتياجات",
        desc: "نجري أبحاثًا واستشارات لفهم ملفات المتعلمين وأهداف المؤسسة والسياق.",
      },
      {
        icon: "📘",
        title: "تصميم المنهج",
        desc: "يتم إنشاء نتائج التعلم والأطر وخطط المواد مع توافق تربوي.",
      },
      {
        icon: "🛠️",
        title: "تطوير المحتوى",
        desc: "يتم تخصيص خطط الدروس والتقييمات وأدلة المعلمين لتقديم فعال في الفصول.",
      },
      {
        icon: "📈",
        title: "التنفيذ والمراجعة",
        desc: "نوفر التدريب والأدوات وأطر المتابعة لضمان التنفيذ الناجح والتحسين المستمر.",
      },
    ],
    processImgAlt: "عملية تطوير المناهج",
    benefitsTitle: "لماذا تختار خدمات تطوير المناهج لدينا؟",
    benefitsDesc:
      "نجمع بين الابتكار والصرامة الأكاديمية لإنشاء برامج تعليمية عالية التأثير.",
    benefits: [
      {
        icon: "🧩",
        title: "مرن وقابل للتخصيص",
        desc: "مناهج تتكيف مع أنماط التدريس وسرعات التعلم والسياقات الثقافية المختلفة.",
      },
      {
        icon: "🌐",
        title: "متوافق عالميًا",
        desc: "تصاميمنا تتوافق مع IB وكامبريدج والمجالس الوطنية ونماذج التعليم الحديثة.",
      },
      {
        icon: "🤝",
        title: "خبرة تعاونية",
        desc: "العمل جنبًا إلى جنب مع معلمين وخبراء محتوى ومصممي تعليم ذوي خبرة.",
      },
    ],
    collabTitle: "بالتعاون مع قادة التعليم",
    collab: [
      {
        img: allign,
        alt: "مواءمة المعايير",
        title: "دمج المعايير",
        desc: "نضمن التوافق مع معايير وسياسات التعليم المحلية والعالمية.",
      },
      {
        img: digi,
        alt: "أدوات المناهج الرقمية",
        title: "أدوات المناهج الرقمية",
        desc: "دعم تكامل أنظمة إدارة التعلم، والتسليم عبر الإنترنت، وإنشاء محتوى الوسائط المتعددة.",
      },
      {
        img: pilot,
        alt: "مدارس تجريبية",
        title: "برامج تجريبية",
        desc: "التعاون في التنفيذ التجريبي قبل التبني الكامل في مؤسستك.",
      },
    ],
    ctaTitle: "لنبتكر منهجًا جاهزًا للمستقبل معًا",
    ctaDesc:
      "سواء كنت تطلق مدرسة جديدة أو تجدد المنهج أو تواكب المعايير الحديثة – نحن هنا لمساعدتك.",
    ctaBtn: "ابدأ التطوير →",
  },
};

function CurriculumDevelopment() {
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
          src={curri}
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
              {t.buildBtn}
            </button>
          </div>
          <div className="cloud-image">
            <img src={cud} alt="Curriculum Development" />
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
            <img src={dev} alt={t.processImgAlt} />
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
        <h1>{t.collabTitle}</h1>
        <div className="cards">
          {t.collab.map((item, idx) => (
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
          src={ban}
          alt="Curriculum Development Contact Background"
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

export default CurriculumDevelopment;
