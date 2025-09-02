import React, { useEffect } from "react";
import "./Blog1.css";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/Darkmodecontext";
import { useLanguage } from "../context/LanguageContext";

// Add translations for Blog1 page
const translations = {
  en: [
    {
      title: "1. The Birth of E-Learning",
      desc:
        "Online learning began in the 1990s with basic email-based courses and downloadable PDFs. As internet access improved, institutions started offering full degrees through web-based platforms, making education more accessible to a global audience.",
    },
    {
      title: "2. Rise of MOOCs and Open Platforms",
      desc:
        "The 2010s saw the launch of platforms like Coursera, edX, and Khan Academy, providing free or low-cost courses from top universities. These Massive Open Online Courses (MOOCs) reshaped how people perceived and accessed lifelong learning.",
    },
    {
      title: "3. Interactive and Personalized Learning",
      desc:
        "Advances in AI and data analytics enabled personalized learning paths. Students now receive recommendations, feedback, and adaptive content tailored to their pace and understanding — boosting engagement and outcomes.",
    },
    {
      title: "4. Mobile and Microlearning",
      desc:
        "With mobile-first designs and bite-sized content, learners can now study anytime, anywhere. Microlearning has become especially popular among professionals seeking quick, focused skill development during busy schedules.",
    },
    {
      title: "5. The Future: Virtual Classrooms & Immersive Tech",
      desc:
        "The next phase of online learning involves AR/VR-based immersive classrooms, AI tutors, and global collaboration. These tools aim to simulate real-life learning environments, making education more engaging, inclusive, and interactive.",
    },
  ],
  he: [
    {
      title: "1. לידתה של הלמידה המקוונת",
      desc:
        "הלמידה המקוונת החלה בשנות ה-90 עם קורסים מבוססי דוא\"ל ו-PDF להורדה. עם שיפור הגישה לאינטרנט, מוסדות החלו להציע תארים מלאים בפלטפורמות אינטרנטיות, והפכו את החינוך לנגיש יותר לקהל עולמי.",
    },
    {
      title: "2. עליית ה-MOOCs והפלטפורמות הפתוחות",
      desc:
        "בעשור השני של המאה ה-21 הושקו פלטפורמות כמו Coursera, edX ו-Khan Academy, שהציעו קורסים חינמיים או זולים מהאוניברסיטאות המובילות. קורסים פתוחים המוניים (MOOCs) שינו את הדרך בה אנשים תופסים וניגשים ללמידה לאורך החיים.",
    },
    {
      title: "3. למידה אינטראקטיבית ומותאמת אישית",
      desc:
        "התקדמות בבינה מלאכותית וניתוח נתונים אפשרה מסלולי למידה מותאמים אישית. תלמידים מקבלים כיום המלצות, משוב ותוכן אדפטיבי המותאם לקצב ולהבנה שלהם — מה שמגביר את המעורבות והתוצאות.",
    },
    {
      title: "4. למידה ניידת ומיקרו-למידה",
      desc:
        "עם עיצוב מותאם לנייד ותוכן קצר, לומדים יכולים ללמוד בכל זמן ומכל מקום. מיקרו-למידה הפכה לפופולרית במיוחד בקרב אנשי מקצוע המחפשים פיתוח מיומנויות מהיר וממוקד בלוחות זמנים עמוסים.",
    },
    {
      title: "5. העתיד: כיתות וירטואליות וטכנולוגיה סוחפת",
      desc:
        "השלב הבא בלמידה המקוונת כולל כיתות מבוססות AR/VR, מורים מבוססי בינה מלאכותית ושיתופי פעולה גלובליים. כלים אלו שואפים לדמות סביבות למידה אמיתיות ולהפוך את החינוך למרתק, כוללני ואינטראקטיבי.",
    },
  ],
  ar: [
    {
      title: "1. نشأة التعلم الإلكتروني",
      desc:
        "بدأ التعلم عبر الإنترنت في التسعينيات بدورات قائمة على البريد الإلكتروني وملفات PDF قابلة للتنزيل. مع تحسن الوصول إلى الإنترنت، بدأت المؤسسات في تقديم درجات كاملة عبر منصات الويب، مما جعل التعليم أكثر سهولة للجميع حول العالم.",
    },
    {
      title: "2. صعود الدورات المفتوحة والمنصات المجانية",
      desc:
        "شهد العقد الثاني من القرن الحادي والعشرين إطلاق منصات مثل كورسيرا وedX وأكاديمية خان، التي تقدم دورات مجانية أو منخفضة التكلفة من أفضل الجامعات. أعادت هذه الدورات المفتوحة الضخمة (MOOCs) تشكيل نظرة الناس للتعلم مدى الحياة.",
    },
    {
      title: "3. التعلم التفاعلي والشخصي",
      desc:
        "مكنت التطورات في الذكاء الاصطناعي وتحليل البيانات من تخصيص مسارات التعلم. يحصل الطلاب الآن على توصيات وملاحظات ومحتوى متكيف مع وتيرتهم وفهمهم — مما يعزز التفاعل والنتائج.",
    },
    {
      title: "4. التعلم عبر الجوال والتعلم المصغر",
      desc:
        "بفضل التصميمات الموجهة للجوال والمحتوى القصير، يمكن للمتعلمين الدراسة في أي وقت وأي مكان. أصبح التعلم المصغر شائعًا بشكل خاص بين المهنيين الباحثين عن تطوير سريع ومركّز للمهارات.",
    },
    {
      title: "5. المستقبل: الفصول الافتراضية والتقنيات الغامرة",
      desc:
        "تشمل المرحلة التالية من التعلم عبر الإنترنت الفصول الافتراضية المعتمدة على الواقع المعزز/الافتراضي، والمعلمين الذكاء الاصطناعي، والتعاون العالمي. تهدف هذه الأدوات لمحاكاة بيئات التعلم الواقعية وجعل التعليم أكثر تفاعلية وشمولية.",
    },
  ],
};

const Blog1 = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  // Set RTL/LTR direction for the whole page
  useEffect(() => {
    document.documentElement.dir = ["he", "ar"].includes(language) ? "rtl" : "ltr";
  }, [language]);

  const t = translations[language];

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <section className="cybersecurity-ways">
        {t.map((way, idx) => (
          <div className="way" key={idx}>
            <h3>{way.title}</h3>
            <p>{way.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog1;
