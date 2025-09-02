import React, { useEffect } from "react";
import "./Blog2.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

// Translations for "Why STEM Education Matters"
const translations = {
  en: {
    title: "🔬 Why STEM Education Matters",
    points: [
      {
        heading: "🌟 1. Fosters Critical Thinking",
        desc: "STEM challenges students to think analytically, evaluate evidence, and solve complex problems.",
        benefit: "Benefit: Builds essential skills for the modern workforce.",
      },
      {
        heading: "🚀 2. Prepares for the Future",
        desc: "As technology evolves, STEM equips students with tools to adapt and innovate in tomorrow’s world.",
        benefit: "Benefit: Future-ready education and lifelong learning.",
      },
      {
        heading: "💼 3. Career Opportunities",
        desc: "STEM fields are among the fastest-growing and highest-paying industries worldwide.",
        benefit: "Benefit: Opens doors to diverse and rewarding careers.",
      },
      {
        heading: "🤝 4. Promotes Collaboration",
        desc: "STEM projects often involve teamwork, helping students develop communication and leadership skills.",
        benefit: "Benefit: Prepares students for real-world collaboration.",
      },
      {
        heading: "🌍 5. Solves Global Challenges",
        desc: "From climate change to healthcare, STEM education empowers students to tackle the world’s toughest problems.",
        benefit: "Benefit: Builds responsible and innovative global citizens.",
      },
    ],
    cta: "Learn More About STEM →",
    ctaLink: "/stem",
  },
  he: {
    title: "🔬 למה חינוך STEM חשוב",
    points: [
      {
        heading: "🌟 1. מפתח חשיבה ביקורתית",
        desc: "STEM מאתגר תלמידים לחשוב אנליטית, להעריך ראיות ולפתור בעיות מורכבות.",
        benefit: "יתרון: בונה כישורים חיוניים לשוק העבודה המודרני.",
      },
      {
        heading: "🚀 2. מכין לעתיד",
        desc: "כשהטכנולוגיה מתפתחת, STEM מצייד תלמידים בכלים להסתגל ולחדש בעולם העתידי.",
        benefit: "יתרון: חינוך מוכן לעתיד ולמידה לכל החיים.",
      },
      {
        heading: "💼 3. הזדמנויות תעסוקה",
        desc: "תחומי STEM הם בין הצומחים ביותר ובעלי השכר הגבוה ביותר ברחבי העולם.",
        benefit: "יתרון: פותח דלתות לקריירות מגוונות ומתגמלות.",
      },
      {
        heading: "🤝 4. מקדם עבודת צוות",
        desc: "פרויקטים ב-STEM כוללים לרוב שיתוף פעולה, מה שמפתח כישורי תקשורת ומנהיגות.",
        benefit: "יתרון: מכין את התלמידים לשיתוף פעולה בעולם האמיתי.",
      },
      {
        heading: "🌍 5. פותר בעיות עולמיות",
        desc: "ממשבר האקלים ועד בריאות הציבור, STEM נותן לתלמידים כלים להתמודד עם בעיות עולמיות.",
        benefit: "יתרון: בונה אזרחים אחראיים וחדשניים.",
      },
    ],
    cta: "למד עוד על STEM →",
    ctaLink: "/stem",
  },
  ar: {
    title: "🔬 لماذا التعليم في مجالات STEM مهم",
    points: [
      {
        heading: "🌟 1. يعزز التفكير النقدي",
        desc: "يشجع STEM الطلاب على التفكير التحليلي وحل المشكلات المعقدة.",
        benefit: "الفائدة: بناء مهارات أساسية لسوق العمل الحديث.",
      },
      {
        heading: "🚀 2. استعداد للمستقبل",
        desc: "مع تطور التكنولوجيا، يمنح STEM الطلاب أدوات للتكيف والابتكار في عالم الغد.",
        benefit: "الفائدة: تعليم مستقبلي وتعلم مستمر.",
      },
      {
        heading: "💼 3. فرص مهنية",
        desc: "تعد مجالات STEM من بين الأسرع نموًا والأعلى أجرًا في العالم.",
        benefit: "الفائدة: يفتح أبوابًا لمهن متنوعة ومجزية.",
      },
      {
        heading: "🤝 4. يعزز التعاون",
        desc: "غالبًا ما تتطلب مشاريع STEM العمل الجماعي، مما يعزز مهارات التواصل والقيادة.",
        benefit: "الفائدة: إعداد الطلاب للتعاون العملي.",
      },
      {
        heading: "🌍 5. حل التحديات العالمية",
        desc: "من تغير المناخ إلى الرعاية الصحية، يمكّن التعليم في STEM الطلاب من معالجة القضايا العالمية.",
        benefit: "الفائدة: إعداد مواطنين عالميين مبتكرين ومسؤولين.",
      },
    ],
    cta: "تعرف على المزيد حول STEM →",
    ctaLink: "/stem",
  },
};

function Blog2() {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = ["he", "ar"].includes(language) ? "rtl" : "ltr";
  }, [language]);

  const t = translations[language];

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <section className="cloud-native-section">
        <div className="cloud-native-card">
          <h2 className="cloud-native-title">{t.title}</h2>
          {t.points.map((point, idx) => (
            <div className="cloud-native-point" key={idx}>
              <h3>{point.heading}</h3>
              <p>{point.desc}</p>
              <strong>{point.benefit}</strong>
            </div>
          ))}
          <a href={t.ctaLink} className="cloud-native-link">
            {t.cta}
          </a>
        </div>
      </section>
    </div>
  );
}

export default Blog2;
