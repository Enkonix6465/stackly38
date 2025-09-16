import React, { useEffect } from "react";
import "./Blog.css";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/Darkmodecontext";
import { useLanguage } from "../context/LanguageContext";
import blog from "../images/bloog.mp4";
import oc from "../images/oc.jpg";
import ai from "../images/ai.jpg";
import stem from "../images/stem.jpg";
import all from "../images/all.jpg";
import future from "../images/future.jpg";
import remote from "../images/remote.jpg";
import fund from "../images/fund.jpg";
import leader from "../images/leader.jpg";
import ed from "../images/ed.jpg";

// Add translations for Blog page
const translations = {
  en: {
    heroTitle: "Education Blog",
    heroDesc: "Inspiring Minds Through Knowledge and Innovation.",
    latestInsights: "Latest Educational Insights",
    featuredTopics: "Featured Education Topics",
    leadership: "Leadership & Innovation in Education",
    blogCards: [
      {
        img: oc,
        alt: "Online Learning",
        title: "The Evolution of Online Learning",
        desc: "Explore how digital platforms are transforming education and making learning accessible to everyone, anywhere.",
        path: "/blog1",
      },
      {
        img: stem,
        alt: "STEM Education",
        title: "Why STEM Education Matters",
        desc: "Learn why science, technology, engineering, and math are vital for the future and how to engage students effectively.",
        path: "/blog2",
      },
      {
        img: ai,
        alt: "AI in Classrooms",
        title: "AI’s Role in Modern Classrooms",
        desc: "Discover how artificial intelligence is helping personalize learning, automate assessments, and support teachers.",
        path: "/blog3",
      },
    ],
    featured: [
      {
        img: future,
        alt: "Future of Education",
        title: "The Future of Higher Education",
        desc: "Universities are evolving to meet the needs of digital-native students. From hybrid degrees to micro-credentials, higher education is adapting to a fast-changing world. Institutions are embracing flexible learning models that combine online convenience with on-campus experiences. They are also leveraging AI, virtual labs, and immersive technologies to personalize learning journeys. Micro-credentials and short-term certifications are gaining popularity as students and professionals seek targeted, career-relevant skills. Global collaborations and industry partnerships are ensuring that academic programs remain future-ready, equipping graduates with both technical expertise and soft skills.",
      },
      {
        img: ed,
        alt: "EdTech",
        title: "EdTech Shaping Learning",
        desc: "From virtual labs to AI tutors, educational technology is reshaping how we teach and learn. Learn about tools that improve engagement and outcomes in classrooms around the world. Interactive platforms are making lessons more collaborative, while gamified learning keeps students motivated. Data-driven insights help educators track progress and customize support for every learner. Virtual and augmented reality are bringing complex concepts to life in ways that textbooks never could. As technology continues to advance, classrooms are evolving into dynamic, personalized spaces that prepare students for the future of work.",
      },
      {
        img: all,
        alt: "Inclusive Education",
        title: "Inclusive Education for All",
        desc: "Inclusive classrooms celebrate diversity and empower all students to succeed. Learn strategies for supporting learners with different needs, backgrounds, and learning styles. Culturally responsive teaching helps create a sense of belonging for every student. Assistive technologies and flexible lesson designs ensure accessibility for learners with disabilities. Collaborative activities encourage peer support and mutual respect across differences. By fostering empathy, adaptability, and equity, inclusive education equips students with the skills to thrive in a global society.",
      },
    ],
    leadershipList: [
      {
        img: leader,
        alt: "Education Leadership",
        title: "Transforming Education Leadership",
        desc: "School leaders are rethinking traditional models and leading with data, compassion, and community-focused strategies.",
        path: "/blog10",
      },
      {
        img: remote,
        alt: "Remote Learning",
        title: "Remote Learning: Best Practices",
        desc: "Discover effective methods for remote instruction, digital classroom management, and student engagement online.",
        path: "/blog11",
      },
      {
        img: fund,
        alt: "Education Funding",
        title: "Funding Education Innovation",
        desc: "Learn how schools and institutions can secure funding and invest in programs that foster future-ready learning.",
        path: "/blog12",
      },
    ],
    readMore: "Read more →",
  },
  he: {
    heroTitle: "בלוג חינוך",
    heroDesc: "להעניק השראה דרך ידע וחדשנות.",
    latestInsights: "תובנות חינוכיות עדכניות",
    featuredTopics: "נושאים חינוכיים נבחרים",
    leadership: "מנהיגות וחדשנות בחינוך",
    blogCards: [
      {
        img: oc,
        alt: "למידה מקוונת",
        title: "התפתחות הלמידה המקוונת",
        desc: "גלה כיצד פלטפורמות דיגיטליות משנות את החינוך והופכות אותו לנגיש לכולם, מכל מקום.",
        path: "/blog1",
      },
      {
        img: stem,
        alt: "חינוך STEM",
        title: "מדוע חינוך STEM חשוב",
        desc: "למד מדוע מדע, טכנולוגיה, הנדסה ומתמטיקה חיוניים לעתיד וכיצד להניע תלמידים ביעילות.",
        path: "/blog2",
      },
      {
        img: ai,
        alt: "בינה מלאכותית בכיתה",
        title: "תפקיד הבינה המלאכותית בכיתות מודרניות",
        desc: "גלה כיצד בינה מלאכותית מסייעת בהתאמת הלמידה, אוטומציה של הערכות ותמיכה במורים.",
        path: "/blog3",
      },
    ],
    featured: [
      {
        img: future,
        alt: "עתיד החינוך",
        title: "עתיד ההשכלה הגבוהה",
        desc: "האוניברסיטאות משתנות כדי להתאים לדור הדיגיטלי. מגישות היברידיות ועד מיקרו-תעודות, למד כיצד ההשכלה הגבוהה מתאימה את עצמה לעולם משתנה.",
      },
      {
        img: ed,
        alt: "טכנולוגיה בחינוך",
        title: "כלי אדטק שמשנים את הכיתה",
        desc: "ממעבדות וירטואליות ועד מורים מבוססי בינה מלאכותית, הטכנולוגיה משנה את ההוראה והלמידה. למד על כלים שמגבירים מעורבות והישגים.",
      },
      {
        img: all,
        alt: "חינוך כוללני",
        title: "חינוך כוללני לכולם",
        desc: "כיתות כוללות חוגגות גיוון ומעצימות כל תלמיד להצליח. למד אסטרטגיות לתמיכה בלומדים עם צרכים ורקעים שונים.",
      },
    ],
    leadershipList: [
      {
        img: leader,
        alt: "מנהיגות בחינוך",
        title: "להפוך את מנהיגות החינוך",
        desc: "מנהלי בתי ספר חושבים מחדש על מודלים מסורתיים ומובילים עם נתונים, חמלה ואסטרטגיות קהילתיות.",
        path: "/blog10",
      },
      {
        img: remote,
        alt: "למידה מרחוק",
        title: "למידה מרחוק: שיטות מומלצות",
        desc: "גלה שיטות יעילות להוראה מרחוק, ניהול כיתה דיגיטלית ומעורבות תלמידים אונליין.",
        path: "/blog11",
      },
      {
        img: fund,
        alt: "מימון חינוך",
        title: "מימון חדשנות בחינוך",
        desc: "למד כיצד מוסדות יכולים לגייס משאבים ולהשקיע בתוכניות שמקדמות למידה עתידית.",
        path: "/blog12",
      },
    ],
    readMore: "קרא עוד →",
  },
  ar: {
    heroTitle: "مدونة التعليم",
    heroDesc: "إلهام العقول من خلال المعرفة والابتكار.",
    latestInsights: "أحدث الرؤى التعليمية",
    featuredTopics: "مواضيع تعليمية مميزة",
    leadership: "القيادة والابتكار في التعليم",
    blogCards: [
      {
        img: oc,
        alt: "التعلم عبر الإنترنت",
        title: "تطور التعلم عبر الإنترنت",
        desc: "استكشف كيف تغير المنصات الرقمية التعليم وتجعل التعلم متاحًا للجميع في أي مكان.",
        path: "/blog1",
      },
      {
        img: stem,
        alt: "تعليم STEM",
        title: "لماذا تعليم STEM مهم",
        desc: "تعرف على أهمية العلوم والتكنولوجيا والهندسة والرياضيات للمستقبل وكيفية تحفيز الطلاب بفعالية.",
        path: "/blog2",
      },
      {
        img: ai,
        alt: "الذكاء الاصطناعي في الفصول",
        title: "دور الذكاء الاصطناعي في الفصول الحديثة",
        desc: "اكتشف كيف يساعد الذكاء الاصطناعي في تخصيص التعلم وأتمتة التقييمات ودعم المعلمين.",
        path: "/blog3",
      },
    ],
    featured: [
      {
        img: future,
        alt: "مستقبل التعليم",
        title: "مستقبل التعليم العالي",
        desc: "تتطور الجامعات لتلبية احتياجات الطلاب الرقميين. من الدرجات الهجينة إلى الشهادات المصغرة، استكشف كيف يتكيف التعليم العالي مع عالم سريع التغير.",
      },
      {
        img: ed,
        alt: "تكنولوجيا التعليم",
        title: "أدوات التقنية التعليمية التي تغير الفصول",
        desc: "من المختبرات الافتراضية إلى المعلمين الذكاء الاصطناعي، تعيد التكنولوجيا تشكيل طرق التدريس والتعلم. تعرف على الأدوات التي تعزز التفاعل والنتائج.",
      },
      {
        img: all,
        alt: "التعليم الشامل",
        title: "التعليم الشامل للجميع",
        desc: "تحتفل الفصول الشاملة بالتنوع وتمكن جميع الطلاب من النجاح. تعرف على استراتيجيات دعم المتعلمين باختلاف احتياجاتهم وخلفياتهم.",
      },
    ],
    leadershipList: [
      {
        img: leader,
        alt: "قيادة التعليم",
        title: "تحويل قيادة التعليم",
        desc: "يعيد قادة المدارس التفكير في النماذج التقليدية ويقودون بالبيانات والتعاطف واستراتيجيات تركز على المجتمع.",
        path: "/blog10",
      },
      {
        img: remote,
        alt: "التعلم عن بعد",
        title: "التعلم عن بعد: أفضل الممارسات",
        desc: "اكتشف طرقًا فعالة للتدريس عن بعد وإدارة الفصول الرقمية وتحفيز الطلاب عبر الإنترنت.",
        path: "/blog11",
      },
      {
        img: fund,
        alt: "تمويل التعليم",
        title: "تمويل الابتكار في التعليم",
        desc: "تعرف على كيفية حصول المدارس والمؤسسات على التمويل والاستثمار في برامج تعزز التعلم المستقبلي.",
        path: "/blog12",
      },
    ],
    readMore: "اقرأ المزيد →",
  },
};

const Blog = () => {
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
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      {/* Hero Section */}
      <section className="aboutus-hero-banner">
        <video
          className="aboutus-hero-video"
          src={blog}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="aboutus-hero-content">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroDesc}</p>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="blog-cards-section">
        <h2 className="section-title">{t.latestInsights}</h2>
        <div className="blog-cards-container">
          {t.blogCards.map((card, idx) => (
            <div className="blog-card" key={idx} onClick={() => handleGetStarted(card.path)}>
              <img src={card.img} alt={card.alt} />
              <div className="blog-card-content">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <span className="read-more">{t.readMore}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured-blogs">
        <h2 className="section-title">{t.featuredTopics}</h2>
        {t.featured.map((item, idx) => (
          <div className={`feature-row${idx % 2 === 1 ? " reverse" : ""}`} key={idx}>
            <div className="feature-text">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            <div className="feature-image">
              <img src={item.img} alt={item.alt} />
            </div>
          </div>
        ))}
      </section>

      {/* Leadership Section */}
      <section className="leadership-section">
        <h2 className="section-title">{t.leadership}</h2>
        <div className="leadership-list">
          {t.leadershipList.map((item, idx) => (
            <article
              className="leadership-item"
              key={idx}
            >
              <div className="leadership-text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <img src={item.img} alt={item.alt} />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
