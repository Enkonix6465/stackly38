import React, { useState, useEffect } from "react";
import { useDarkMode } from "../context/Darkmodecontext";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";

import "./Home2.css";
import home2 from "../images/home2.mp4";
import lect from "../images/lect.mp4";

// Icons from your images folder
import briefcaseIcon from "../images/briefcase.png";
import shieldIcon from "../images/shield.png";
import childIcon from "../images/child.png";
import languageIcon from "../images/language.png";
import leafIcon from "../images/leaf.png";
import healthIcon from "../images/health.png";
import conciergeIcon from "../images/openbook.png";
import lawIcon from "../images/shield.png";
import digitalMediaIcon from "../images/computer.png";
import trophyIcon from "../images/trophy.png";
import thinkingIcon from "../images/thinking.png";
import connectionIcon from "../images/connection.png";
import starIcon from "../images/star.png";
import badgeIcon from "../images/badge.png";
import students from "../images/students.jpg";
import safety from "../images/safety.jpg";
import oncampus from "../images/oncampus.jpg";
import offcampus from "../images/offcampus.jpg";

// Translations for all sections
const translations = {
  en: {
    heroTitle: "Learn, Grow, Succeed.",
    heroDesc: "Empowering learners to achieve more through innovative education.",
    filterTitle: "Browse courses by category",
    searchPlaceholder: "Search courses...",
    noResults: 'No courses found matching',
    categories: [
      "All",
      "Business",
      "IT & Data Science",
      "Education & Childhood",
      "English & Prep",
      "Sustainability",
      "Health & Nursing",
      "Hospitality",
      "Law & Justice",
      "Creative Digital Media",
    ],
    courses: [
      {
        id: 1,
        title: "Business Management",
        category: "Business",
        description: "Learn essential business principles, management strategies, and leadership skills to drive success.",
      },
      {
        id: 2,
        title: "Cyber Security Fundamentals",
        category: "IT & Data Science",
        description: "Understand the basics of cybersecurity, protecting data, and preventing cyber threats.",
      },
      {
        id: 3,
        title: "Early Childhood Education",
        category: "Education & Childhood",
        description: "Explore theories and methods for educating young children in their early developmental stages.",
      },
      {
        id: 4,
        title: "English Language Prep",
        category: "English & Prep",
        description: "Improve English language skills for academic and professional success.",
      },
      {
        id: 5,
        title: "Environmental Sustainability",
        category: "Sustainability",
        description: "Learn about sustainable practices and how to promote environmental responsibility.",
      },
      {
        id: 6,
        title: "Nursing & Biomedicine",
        category: "Health & Nursing",
        description: "Gain knowledge in nursing practices and biomedical sciences for healthcare careers.",
      },
      {
        id: 7,
        title: "Hospitality & Tourism",
        category: "Hospitality",
        description: "Discover skills and knowledge required for careers in hospitality, tourism, and events.",
      },
      {
        id: 8,
        title: "Law & Legal Practice",
        category: "Law & Justice",
        description: "Understand legal principles, justice systems, and law practice fundamentals.",
      },
      {
        id: 9,
        title: "Creative Digital Media",
        category: "Creative Digital Media",
        description: "Master digital content creation including graphic design, video editing, and animation.",
      },
    ],
    benefitsHeading: "Benefits of studying at STACKLY",
    benefits: [
      {
        icon: trophyIcon,
        alt: "Top 2% Icon",
        title: "Top 2% of universities worldwide",
        back: "We’re ranked in the top 2% of universities worldwide (Times Higher Ed).",
      },
      {
        icon: thinkingIcon,
        alt: "Award-winning Icon",
        title: "Award-winning VU Block Model®",
        back: "Award-winning VU Block Model® designed to improve student engagement.",
      },
      {
        icon: connectionIcon,
        alt: "Industry Connections",
        title: "4000+ industry connections",
        back: "Strong industry connections offering students real-world opportunities.",
      },
      {
        icon: starIcon,
        alt: "#1 Educational Experience",
        title: "#1 for educational experience^",
        back: "Recognized as the number one university for educational experience in the region.",
      },
      {
        icon: badgeIcon,
        alt: "Innovation in Research",
        title: "Innovation in research",
        back: "Cutting-edge research projects driving innovation and solutions.",
      },
    ],
    interactive: {
      title: "Interactive workshop-style classes instead of lectures",
      desc: "Experience a smarter way to learn with Stackly’s focused learning approach – where you dive into one subject at a time through dynamic, collaborative sessions designed for deeper understanding.",
      btn: "Read more",
    },
    skillsHeading: "Subject Expertise",
    skills: [
      { name: "Mathematics", percent: "92%", color: "pink" },
      { name: "Science", percent: "88%", color: "navy" },
      { name: "English Language", percent: "85%", color: "olive" },
      { name: "Computer Science", percent: "90%", color: "red" },
      { name: "History", percent: "75%", color: "yellow" },
      { name: "Soft Skills", percent: "80%", color: "teal" },
      { name: "Career Readiness", percent: "78%", color: "magenta" },
    ],
    coreSkills: [
      "Critical Thinking",
      "Collaboration",
      "Problem Solving",
      "Digital Literacy",
      "Creativity",
      "Adaptability",
      "Communication",
      "Self-Learning",
      "CORE SKILLS",
    ],
  },
  he: {
    heroTitle: "למד, גדל, הצליח.",
    heroDesc: "להעצים לומדים להשיג יותר באמצעות חינוך חדשני.",
    filterTitle: "עיין בקורסים לפי קטגוריה",
    searchPlaceholder: "חפש קורסים...",
    noResults: 'לא נמצאו קורסים התואמים ל',
    categories: [
      "הכל",
      "עסקים",
      "מדעי המחשב ונתונים",
      "חינוך וילדות",
      "אנגלית והכנה",
      "קיימות",
      "בריאות וסיעוד",
      "אירוח",
      "משפט וצדק",
      "מדיה דיגיטלית יצירתית",
    ],
    courses: [
      {
        id: 1,
        title: "ניהול עסקים",
        category: "עסקים",
        description: "למד עקרונות ניהול, אסטרטגיות מנהיגות ומיומנויות להצלחה עסקית.",
      },
      {
        id: 2,
        title: "יסודות אבטחת מידע",
        category: "מדעי המחשב ונתונים",
        description: "הבנת יסודות אבטחת מידע, הגנה על נתונים ומניעת איומי סייבר.",
      },
      {
        id: 3,
        title: "חינוך לגיל הרך",
        category: "חינוך וילדות",
        description: "חקור תאוריות ושיטות לחינוך ילדים בשלבי ההתפתחות הראשונים.",
      },
      {
        id: 4,
        title: "הכנה באנגלית",
        category: "אנגלית והכנה",
        description: "שפר את מיומנויות האנגלית להצלחה אקדמית ומקצועית.",
      },
      {
        id: 5,
        title: "קיימות סביבתית",
        category: "קיימות",
        description: "למד על פרקטיקות קיימות ואיך לקדם אחריות סביבתית.",
      },
      {
        id: 6,
        title: "סיעוד וביומד",
        category: "בריאות וסיעוד",
        description: "רכוש ידע בסיעוד ובמדעי הביומד לקריירה בתחום הבריאות.",
      },
      {
        id: 7,
        title: "אירוח ותיירות",
        category: "אירוח",
        description: "גלה מיומנויות וידע לקריירה באירוח, תיירות ואירועים.",
      },
      {
        id: 8,
        title: "משפט ופרקטיקה משפטית",
        category: "משפט וצדק",
        description: "הבנת עקרונות משפט, מערכות צדק ופרקטיקה משפטית.",
      },
      {
        id: 9,
        title: "מדיה דיגיטלית יצירתית",
        category: "מדיה דיגיטלית יצירתית",
        description: "שלוט ביצירת תוכן דיגיטלי כולל עיצוב גרפי, עריכת וידאו ואנימציה.",
      },
    ],
    benefitsHeading: "היתרונות בלימודים ב-STACKLY",
    benefits: [
      {
        icon: trophyIcon,
        alt: "אייקון 2% מובילים",
        title: "2% המובילים בעולם",
        back: "אנחנו מדורגים בין 2% המובילים בעולם (Times Higher Ed).",
      },
      {
        icon: thinkingIcon,
        alt: "אייקון מודל בלוק",
        title: "מודל בלוק עטור פרסים",
        back: "מודל בלוק עטור פרסים לשיפור מעורבות סטודנטים.",
      },
      {
        icon: connectionIcon,
        alt: "קשרים בתעשייה",
        title: "4000+ קשרים בתעשייה",
        back: "קשרים חזקים בתעשייה המציעים הזדמנויות אמיתיות.",
      },
      {
        icon: starIcon,
        alt: "חווית לימודים מובילה",
        title: "#1 לחווית לימודים",
        back: "מוכר כאוניברסיטה מספר אחת לחווית לימודים באזור.",
      },
      {
        icon: badgeIcon,
        alt: "חדשנות במחקר",
        title: "חדשנות במחקר",
        back: "פרויקטי מחקר פורצי דרך המובילים חדשנות ופתרונות.",
      },
    ],
    interactive: {
      title: "שיעורים בסגנון סדנה אינטראקטיבית במקום הרצאות",
      desc: "חווה דרך חכמה יותר ללמוד עם הגישה הממוקדת של Stackly – בה אתה מתמקד בנושא אחד בכל פעם באמצעות מפגשים דינמיים ושיתופיים המיועדים להבנה מעמיקה.",
      btn: "קרא עוד",
    },
    skillsHeading: "מומחיות מקצועית",
    skills: [
      { name: "מתמטיקה", percent: "92%", color: "pink" },
      { name: "מדעים", percent: "88%", color: "navy" },
      { name: "אנגלית", percent: "85%", color: "olive" },
      { name: "מדעי המחשב", percent: "90%", color: "red" },
      { name: "היסטוריה", percent: "75%", color: "yellow" },
      { name: "מיומנויות רכות", percent: "80%", color: "teal" },
      { name: "הכנה לקריירה", percent: "78%", color: "magenta" },
    ],
    coreSkills: [
      "חשיבה ביקורתית",
      "שיתוף פעולה",
      "פתרון בעיות",
      "אוריינות דיגיטלית",
      "יצירתיות",
      "יכולת הסתגלות",
      "תקשורת",
      "למידה עצמית",
      "מיומנויות ליבה",
    ],
  },
  ar: {
    heroTitle: "تعلم، نمُ، ونجح.",
    heroDesc: "تمكين المتعلمين لتحقيق المزيد من خلال التعليم المبتكر.",
    filterTitle: "تصفح الدورات حسب الفئة",
    searchPlaceholder: "ابحث عن الدورات...",
    noResults: 'لم يتم العثور على دورات تطابق',
    categories: [
      "الكل",
      "الأعمال",
      "تكنولوجيا المعلومات وعلوم البيانات",
      "التعليم والطفولة",
      "الإنجليزية والإعداد",
      "الاستدامة",
      "الصحة والتمريض",
      "الضيافة",
      "القانون والعدالة",
      "وسائط رقمية إبداعية",
    ],
    courses: [
      {
        id: 1,
        title: "إدارة الأعمال",
        category: "الأعمال",
        description: "تعلم أساسيات الأعمال، استراتيجيات الإدارة، ومهارات القيادة لتحقيق النجاح.",
      },
      {
        id: 2,
        title: "أساسيات الأمن السيبراني",
        category: "تكنولوجيا المعلومات وعلوم البيانات",
        description: "فهم أساسيات الأمن السيبراني، حماية البيانات، ومنع التهديدات الإلكترونية.",
      },
      {
        id: 3,
        title: "تعليم الطفولة المبكرة",
        category: "التعليم والطفولة",
        description: "استكشاف نظريات وأساليب تعليم الأطفال في مراحل النمو الأولى.",
      },
      {
        id: 4,
        title: "التحضير للغة الإنجليزية",
        category: "الإنجليزية والإعداد",
        description: "تحسين مهارات اللغة الإنجليزية للنجاح الأكاديمي والمهني.",
      },
      {
        id: 5,
        title: "الاستدامة البيئية",
        category: "الاستدامة",
        description: "تعلم الممارسات المستدامة وكيفية تعزيز المسؤولية البيئية.",
      },
      {
        id: 6,
        title: "التمريض والطب الحيوي",
        category: "الصحة والتمريض",
        description: "اكتساب المعرفة في ممارسات التمريض وعلوم الطب الحيوي لمهن الرعاية الصحية.",
      },
      {
        id: 7,
        title: "الضيافة والسياحة",
        category: "الضيافة",
        description: "اكتشف المهارات والمعرفة المطلوبة لمهن الضيافة والسياحة والفعاليات.",
      },
      {
        id: 8,
        title: "القانون والممارسة القانونية",
        category: "القانون والعدالة",
        description: "فهم المبادئ القانونية، أنظمة العدالة، وأساسيات ممارسة القانون.",
      },
      {
        id: 9,
        title: "وسائط رقمية إبداعية",
        category: "وسائط رقمية إبداعية",
        description: "إتقان إنشاء المحتوى الرقمي بما في ذلك التصميم الجرافيكي وتحرير الفيديو والرسوم المتحركة.",
      },
    ],
    benefitsHeading: "مزايا الدراسة في STACKLY",
    benefits: [
      {
        icon: trophyIcon,
        alt: "أيقونة أفضل 2%",
        title: "أفضل 2% من الجامعات عالميًا",
        back: "نحن من أفضل 2% من الجامعات عالميًا (Times Higher Ed).",
      },
      {
        icon: thinkingIcon,
        alt: "أيقونة نموذج بلوك",
        title: "نموذج بلوك الحائز على جوائز",
        back: "نموذج بلوك الحائز على جوائز لتحسين مشاركة الطلاب.",
      },
      {
        icon: connectionIcon,
        alt: "روابط صناعية",
        title: "أكثر من 4000 رابط صناعي",
        back: "روابط صناعية قوية توفر فرصًا واقعية للطلاب.",
      },
      {
        icon: starIcon,
        alt: "أفضل تجربة تعليمية",
        title: "#1 في تجربة التعليم",
        back: "تم الاعتراف بنا كأفضل جامعة لتجربة التعليم في المنطقة.",
      },
      {
        icon: badgeIcon,
        alt: "الابتكار في البحث",
        title: "الابتكار في البحث",
        back: "مشاريع بحثية رائدة تدفع الابتكار والحلول.",
      },
    ],
    interactive: {
      title: "دروس تفاعلية بأسلوب ورش العمل بدلاً من المحاضرات",
      desc: "اختبر طريقة أكثر ذكاءً للتعلم مع نهج Stackly المركّز – حيث تتعمق في موضوع واحد في كل مرة من خلال جلسات ديناميكية وتعاونية مصممة لفهم أعمق.",
      btn: "اقرأ المزيد",
    },
    skillsHeading: "خبرة الموضوع",
    skills: [
      { name: "الرياضيات", percent: "92%", color: "pink" },
      { name: "العلوم", percent: "88%", color: "navy" },
      { name: "اللغة الإنجليزية", percent: "85%", color: "olive" },
      { name: "علوم الكمبيوتر", percent: "90%", color: "red" },
      { name: "التاريخ", percent: "75%", color: "yellow" },
      { name: "المهارات الشخصية", percent: "80%", color: "teal" },
      { name: "الاستعداد المهني", percent: "78%", color: "magenta" },
    ],
    coreSkills: [
      "التفكير النقدي",
      "التعاون",
      "حل المشكلات",
      "المعرفة الرقمية",
      "الإبداع",
      "القدرة على التكيف",
      "التواصل",
      "التعلم الذاتي",
      "المهارات الأساسية",
    ],
  },
};

const iconMap = {
  Business: briefcaseIcon,
  "IT & Data Science": shieldIcon,
  "Education & Childhood": childIcon,
  "English & Prep": languageIcon,
  Sustainability: leafIcon,
  "Health & Nursing": healthIcon,
  Hospitality: conciergeIcon,
  "Law & Justice": lawIcon,
  "Creative Digital Media": digitalMediaIcon,
};

function Home2() {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const t = translations[language];

  // RTL/LTR support
  useEffect(() => {
    document.documentElement.dir = ["he", "ar"].includes(language) ? "rtl" : "ltr";
  }, [language]);

  // Filter courses by category and search term
  const filteredCourses = t.courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" ||
      course.category === selectedCategory ||
      t.categories[selectedCategory] === course.category;

    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && (searchTerm.trim() === "" || matchesSearch);
  });

  const isSearching = searchTerm.trim().length > 0;

  return (
    <div className={darkMode ? "edu-wrapper dark-theme" : "edu-wrapper light-theme"}>
      {/* === Hero Section === */}
      <section className="edu-hero-banner">
        <video className="edu-hero-video" src={home2} autoPlay loop muted playsInline />
        <div className="edu-hero-content">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroDesc}</p>
        </div>
      </section>

      {/* === Filter/Search Section === */}
      <section className="edu-filter-section">
        <h2>{t.filterTitle}</h2>
        <div className="edu-search-bar">
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSelectedCategory("All");
            }}
          />
        </div>

        {!isSearching && (
          <div className="edu-category-buttons">
            {t.categories.map((category) => (
              <button
                key={category}
                className={`edu-category-btn ${selectedCategory === category ? "active" : ""}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setSearchTerm("");
                }}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="edu-course-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="edu-course-card">
                <img
                  src={iconMap[course.category]}
                  alt={`${course.category} icon`}
                  className="edu-course-icon"
                />
                <h3 className="edu-course-title">{course.title}</h3>
                <p className="edu-course-category">{course.category}</p>
                <p className="edu-course-description">{course.description}</p>
              </div>
            ))
          ) : (
            <p className="edu-no-results">
              {t.noResults} "{searchTerm.trim()}"
            </p>
          )}
        </div>
      </section>

      {/* === Benefits Section === */}
      <section className={`benefits-wrapper ${darkMode ? "dark-theme" : "light-theme"}`} id="benefits-vu">
        <h2 className="benefits-heading">{t.benefitsHeading}</h2>
        <div className="benefits-container">
          {t.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="benefit-card"
              tabIndex={0}
              style={{ "--delay": `${idx * 0.15}s` }}
            >
              <div className="benefit-inner">
                <div className="benefit-front">
                  <img src={benefit.icon} alt={benefit.alt} />
                  {benefit.title}
                </div>
                <div className="benefit-back">{benefit.back}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === Interactive Video Section === */}
      <section className="interactive-section">
        <div className="interactive-video-wrapper">
          <video
            src={lect}
            controls
            className="interactive-video"
          />
        </div>
        <div className="interactive-text">
          <h2>{t.interactive.title}</h2>
          <p>{t.interactive.desc}</p>
          <button className="interactive-btn" onClick={() => navigate("/about")}>
  {t.interactive.btn}
</button>

        </div>
      </section>

      {/* === STACKLY Advantage Section  === */}
      <section className="skills-section">
        <div className="skills-visuals">
          <div className="skill-circle skill1">{t.coreSkills[0]}</div>
          <div className="skill-circle skill2">{t.coreSkills[1]}</div>
          <div className="skill-circle skill3">{t.coreSkills[2]}</div>
          <div className="skill-circle skill4">{t.coreSkills[3]}</div>
          <div className="skill-circle skill5">{t.coreSkills[4]}</div>
          <div className="skill-circle skill7">{t.coreSkills[5]}</div>
          <div className="skill-circle skill8">{t.coreSkills[6]}</div>
          <div className="skill-circle skill9">{t.coreSkills[7]}</div>
          <div className="center-circle">{t.coreSkills[8]}</div>
        </div>

        <div className="skills-bars">
          <h2>{t.skillsHeading}</h2>
          {t.skills.map((skill, idx) => (
            <div className="bar-group" key={idx}>
              <span>{skill.name}</span>
              <div className="bar-bg">
                <div className={`bar-fill ${skill.color}`} style={{ width: skill.percent }}>
                  {skill.percent}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home2;
