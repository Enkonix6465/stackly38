import React, { useEffect } from "react";
import "./Blog3.css";
import { useLanguage } from "../context/LanguageContext";
import { useDarkMode } from "../context/Darkmodecontext";

// Add translations for Blog3 page
const translations = {
  en: {
    title: "🎓 AI’s Role in Modern Classrooms",
    points: [
      {
        heading: "📚 1. Personalized Learning Paths",
        desc: "AI algorithms assess individual student performance to deliver tailored content and pacing, helping each learner thrive at their own speed.",
      },
      {
        heading: "📝 2. Automated Grading & Feedback",
        desc: "AI tools can grade quizzes, assignments, and even written essays, providing instant feedback that supports both students and educators.",
      },
      {
        heading: "🤖 3. Virtual Teaching Assistants",
        desc: "AI chatbots and assistants can answer student questions 24/7, support learning platforms, and free up teacher time for deeper instruction.",
      },
      {
        heading: "🔍 4. Learning Analytics",
        desc: "AI analyzes class performance data to help teachers identify learning gaps, adjust strategies, and provide targeted interventions.",
      },
      {
        heading: "🌍 5. Breaking Language Barriers",
        desc: "With real-time translation and speech recognition, AI enables inclusive learning environments for multilingual classrooms.",
      },
    ],
    readMore: "Read more →",
    readMoreLink: "/education-ai",
  },
  he: {
    title: "🎓 תפקיד הבינה המלאכותית בכיתות מודרניות",
    points: [
      {
        heading: "📚 1. מסלולי למידה מותאמים אישית",
        desc: "אלגוריתמים של בינה מלאכותית מעריכים את ביצועי התלמידים ומספקים תוכן וקצב מותאמים, כך שכל לומד יוכל להצליח בקצב שלו.",
      },
      {
        heading: "📝 2. בדיקת מבחנים ומשוב אוטומטי",
        desc: "כלי בינה מלאכותית יכולים לבדוק מבחנים, עבודות ואפילו חיבורים, ולספק משוב מיידי שתומך בתלמידים ובמורים.",
      },
      {
        heading: "🤖 3. עוזרי הוראה וירטואליים",
        desc: "צ'אטבוטים ועוזרים מבוססי בינה מלאכותית זמינים 24/7, עונים על שאלות תלמידים ותומכים בפלטפורמות למידה.",
      },
      {
        heading: "🔍 4. ניתוח נתוני למידה",
        desc: "בינה מלאכותית מנתחת נתוני ביצועי כיתה כדי לעזור למורים לזהות פערים, להתאים אסטרטגיות ולספק התערבות ממוקדת.",
      },
      {
        heading: "🌍 5. שבירת מחסומי שפה",
        desc: "עם תרגום בזמן אמת וזיהוי דיבור, בינה מלאכותית מאפשרת סביבות למידה מכלילות לכיתות רב-לשוניות.",
      },
    ],
    readMore: "קרא עוד →",
    readMoreLink: "/education-ai",
  },
  ar: {
    title: "🎓 دور الذكاء الاصطناعي في الفصول الحديثة",
    points: [
      {
        heading: "📚 1. مسارات تعلم مخصصة",
        desc: "تقيّم خوارزميات الذكاء الاصطناعي أداء كل طالب لتقديم محتوى وسرعة ملائمة، مما يساعد كل متعلم على التفوق وفق وتيرته.",
      },
      {
        heading: "📝 2. التصحيح والتغذية الراجعة الآلية",
        desc: "يمكن لأدوات الذكاء الاصطناعي تصحيح الاختبارات والواجبات وحتى المقالات، وتقديم ملاحظات فورية تدعم الطلاب والمعلمين.",
      },
      {
        heading: "🤖 3. مساعدين افتراضيين للتدريس",
        desc: "روبوتات الدردشة والمساعدون الذكيون يجيبون على أسئلة الطلاب على مدار الساعة ويدعمون منصات التعلم ويوفرون وقت المعلم.",
      },
      {
        heading: "🔍 4. تحليلات التعلم",
        desc: "يحلل الذكاء الاصطناعي بيانات أداء الصف لمساعدة المعلمين في تحديد الفجوات وتعديل الاستراتيجيات وتقديم تدخلات مستهدفة.",
      },
      {
        heading: "🌍 5. كسر الحواجز اللغوية",
        desc: "بفضل الترجمة الفورية والتعرف على الكلام، يتيح الذكاء الاصطناعي بيئات تعلم شاملة للفصول متعددة اللغات.",
      },
    ],
    readMore: "اقرأ المزيد →",
    readMoreLink: "/education-ai",
  },
};

const Blog3 = () => {
  const { language } = useLanguage();
  const { darkMode } = useDarkMode();

  // Set RTL/LTR direction for the whole page
  useEffect(() => {
    document.documentElement.dir = ["he", "ar"].includes(language) ? "rtl" : "ltr";
  }, [language]);

  const t = translations[language];

  return (
    <section className={`ai-data-section${darkMode ? " dark-mode" : ""}`}>
      <div className="ai-data-card">
        <h2 className="ai-data-title">{t.title}</h2>
        {t.points.map((point, idx) => (
          <div className="ai-point" data-aos="fade-up" data-aos-delay={idx * 100} key={idx}>
            <h3>{point.heading}</h3>
            <p>{point.desc}</p>
          </div>
        ))}
        <a href={t.readMoreLink} className="ai-read-more">
          {t.readMore} &rarr;
        </a>
      </div>
    </section>
  );
};

export default Blog3;
