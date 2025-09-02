import React, { useEffect } from "react";
import "./Home.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useLanguage } from "../context/LanguageContext"; // <-- Import language context
import { useNavigate } from "react-router-dom";
import home from "../images/home.mp4";
import health from "../images/health.png";
import computer from "../images/computer.png";
import education from "../images/education.png";
import classroom from "../images/classroom.png";
import business from "../images/business.png";
import building from "../images/building.png";
import students from "../images/students.jpg";
import safety from "../images/safety.jpg";
import oncampus from "../images/oncampus.jpg";
import offcampus from "../images/offcampus.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

// Add translations for Home page
const translations = {
  en: {
    heroTitle: "Welcome to Our University",
    heroDesc: "The purpose of education is to turn mirrors into windows.",
    heroBtn: "Buy eSchool Now",
    features: [
      { title: "Trending Courses", description: "Explore the most in-demand topics and stay ahead.", icon: "📚" },
      { title: "Books & Library", description: "Access a vast collection of learning materials.", icon: "📖" },
      { title: "Certified Teachers", description: "Learn from experienced and verified instructors.", icon: "👩‍🏫" },
      { title: "Certification", description: "Get recognized with valid and sharable certificates.", icon: "🎓" },
    ],
    welcome: "WELCOME TO STACKLY",
    welcomeDesc1: "Discover new opportunities and make memories that last forever. In this journey of growth, every moment is a new discovery.",
    welcomeDesc2: "We believe every student has the potential to shine with the right guidance. At eShkool, we’re committed to unlocking new possibilities through knowledge. Join our community and take your first step toward a brighter future.",
    courseHeader: "Find the right course for you",
    courseDesc1: "Whether you're looking for a university degree, a hands-on TAFE course, a pathway program or an English-language course, VU offers a wide range of options to suit your goals.",
    courseDesc2: "When you study with us, you'll gain real-world experience, build industry connections and unlock career opportunities – often before you graduate. Explore our diverse range of courses, all designed to equip you with practical skills for success in the global workforce.",
    courseBtn: "Download our course guide",
    courseList: [
      "Business",
      "Computers & IT",
      "Engineering, science & built environment",
      "Education",
      "Health & biomedicine",
      "All courses A–Z"
    ],
    supportTitle: "Find support",
    supportData: [
      {
        title: "Safety concerns",
        image: safety,
        items: [
          "Personal safety",
          "Physical safety",
          "Online safety",
          "Family support",
          "Stalking",
          "Discrimination or harassment",
        ],
      },
      {
        title: "On-campus support",
        image: oncampus,
        items: [
          "Student counselling",
          "Welfare support",
          "Advocacy assistance",
          "Disability and accessibility help",
          "International student support",
          "Campus security",
        ],
      },
      {
        title: "Off-campus support",
        image: offcampus,
        items: [
          "1800 Respect",
          "CASA House",
          "Safe Steps",
          "eSafety Commissioner",
          "GenWest",
          "Rainbow Door",
        ],
      },
    ],
    bannerText: "Have questions or need help? Reach out to us — we're here to support you.",
    bannerBtn: "Get Connected",
  },
  he: {
    heroTitle: "ברוכים הבאים לאוניברסיטה שלנו",
    heroDesc: "מטרת החינוך היא להפוך מראות לחלונות.",
    heroBtn: "קנה eSchool עכשיו",
    features: [
      { title: "קורסים מובילים", description: "גלה את הנושאים המבוקשים ביותר והישאר מעודכן.", icon: "📚" },
      { title: "ספרים וספריה", description: "גישה לאוסף רחב של חומרי לימוד.", icon: "📖" },
      { title: "מורים מוסמכים", description: "למד ממדריכים מנוסים ומאומתים.", icon: "👩‍🏫" },
      { title: "הסמכה", description: "קבל תעודות מוכרות וניתנות לשיתוף.", icon: "🎓" },
    ],
    welcome: "ברוכים הבאים ל-STACKLY",
    welcomeDesc1: "גלה הזדמנויות חדשות וצור זיכרונות שיישארו לנצח. במסע הזה של צמיחה, כל רגע הוא גילוי חדש.",
    welcomeDesc2: "אנו מאמינים שלכל תלמיד יש פוטנציאל לזהור עם ההכוונה הנכונה. ב-eShkool, אנו מחויבים לפתוח אפשרויות חדשות דרך הידע. הצטרף לקהילה שלנו וקח את הצעד הראשון לעתיד מזהיר.",
    courseHeader: "מצא את הקורס המתאים עבורך",
    courseDesc1: "בין אם אתה מחפש תואר אקדמי, קורס מעשי, תוכנית מעבר או קורס אנגלית, VU מציעה מגוון רחב של אפשרויות שיתאימו למטרותיך.",
    courseDesc2: "בלימודים אצלנו תרכוש ניסיון מעשי, תבנה קשרים בתעשייה ותפתח הזדמנויות קריירה – לעיתים עוד לפני סיום הלימודים. גלה את מגוון הקורסים שלנו, כולם נועדו להעניק לך מיומנויות מעשיות להצלחה בשוק העבודה הגלובלי.",
    courseBtn: "הורד מדריך קורסים",
    courseList: [
      "עסקים",
      "מחשבים וטכנולוגיה",
      "הנדסה, מדעים וסביבה בנויה",
      "חינוך",
      "בריאות וביומד",
      "כל הקורסים A–Z"
    ],
    supportTitle: "מצא תמיכה",
    supportData: [
      {
        title: "חששות בטיחות",
        image: safety,
        items: [
          "בטיחות אישית",
          "בטיחות פיזית",
          "בטיחות ברשת",
          "תמיכה משפחתית",
          "מעקב",
          "הטרדה או אפליה",
        ],
      },
      {
        title: "תמיכה בקמפוס",
        image: oncampus,
        items: [
          "ייעוץ לסטודנטים",
          "תמיכה רווחה",
          "סיוע בהגנה",
          "עזרה בנגישות ונכות",
          "תמיכה לסטודנטים בינלאומיים",
          "אבטחת קמפוס",
        ],
      },
      {
        title: "תמיכה מחוץ לקמפוס",
        image: offcampus,
        items: [
          "1800 Respect",
          "CASA House",
          "Safe Steps",
          "נציב הבטיחות ברשת",
          "GenWest",
          "Rainbow Door",
        ],
      },
    ],
    bannerText: "יש לך שאלות או זקוק לעזרה? פנה אלינו — אנחנו כאן בשבילך.",
    bannerBtn: "התחבר",
  },
  ar: {
    heroTitle: "مرحبًا بكم في جامعتنا",
    heroDesc: "هدف التعليم هو تحويل المرايا إلى نوافذ.",
    heroBtn: "اشترِ eSchool الآن",
    features: [
      { title: "الدورات الرائجة", description: "استكشف أكثر المواضيع طلبًا وابقَ في المقدمة.", icon: "📚" },
      { title: "الكتب والمكتبة", description: "الوصول إلى مجموعة واسعة من مواد التعلم.", icon: "📖" },
      { title: "معلمون معتمدون", description: "تعلم من مدربين ذوي خبرة ومعتمدين.", icon: "👩‍🏫" },
      { title: "شهادة", description: "احصل على شهادات معترف بها وقابلة للمشاركة.", icon: "🎓" },
    ],
    welcome: "مرحبًا بكم في STACKLY",
    welcomeDesc1: "اكتشف فرصًا جديدة واصنع ذكريات تدوم للأبد. في هذه الرحلة نحو النمو، كل لحظة هي اكتشاف جديد.",
    welcomeDesc2: "نؤمن أن لكل طالب القدرة على التألق مع التوجيه الصحيح. في eShkool، نحن ملتزمون بفتح إمكانيات جديدة من خلال المعرفة. انضم إلى مجتمعنا واتخذ خطوتك الأولى نحو مستقبل أكثر إشراقًا.",
    courseHeader: "ابحث عن الدورة المناسبة لك",
    courseDesc1: "سواء كنت تبحث عن شهادة جامعية، أو دورة عملية، أو برنامج تمهيدي أو دورة لغة إنجليزية، تقدم VU مجموعة واسعة من الخيارات لتناسب أهدافك.",
    courseDesc2: "عند الدراسة معنا، ستكتسب خبرة عملية، وتبني علاقات في المجال وتفتح فرص عمل – غالبًا قبل التخرج. استكشف مجموعة الدورات المتنوعة لدينا، جميعها مصممة لتزويدك بمهارات عملية للنجاح في سوق العمل العالمي.",
    courseBtn: "تحميل دليل الدورات",
    courseList: [
      "الأعمال",
      "الحواسيب وتقنية المعلومات",
      "الهندسة والعلوم والبيئة المبنية",
      "التعليم",
      "الصحة والطب الحيوي",
      "جميع الدورات من A–Z"
    ],
    supportTitle: "ابحث عن الدعم",
    supportData: [
      {
        title: "مخاوف السلامة",
        image: safety,
        items: [
          "السلامة الشخصية",
          "السلامة الجسدية",
          "السلامة عبر الإنترنت",
          "دعم الأسرة",
          "المتابعة",
          "التمييز أو المضايقة",
        ],
      },
      {
        title: "الدعم داخل الحرم الجامعي",
        image: oncampus,
        items: [
          "إرشاد الطلاب",
          "دعم الرفاهية",
          "المساعدة في الحماية",
          "المساعدة في الإعاقة والوصول",
          "دعم الطلاب الدوليين",
          "أمن الحرم الجامعي",
        ],
      },
      {
        title: "الدعم خارج الحرم الجامعي",
        image: offcampus,
        items: [
          "1800 Respect",
          "CASA House",
          "Safe Steps",
          "مفوض السلامة الإلكترونية",
          "GenWest",
          "Rainbow Door",
        ],
      },
    ],
    bannerText: "هل لديك أسئلة أو تحتاج إلى مساعدة؟ تواصل معنا — نحن هنا لدعمك.",
    bannerBtn: "تواصل الآن",
  },
};

function Home() {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const { language } = useLanguage(); // <-- Get selected language

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const t = translations[language];

  return (
    <div className={darkMode ? "home-wrapper dark-theme" : "home-wrapper light-theme"}>
      {/* === Hero Section === */}
      <section className="aboutus-hero-banner">
        <video
          className="aboutus-hero-video"
          src={home}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="aboutus-hero-content">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroDesc}</p>
          <button className="hero-button" onClick={() => navigate("/about")}>
            {t.heroBtn}
          </button>
        </div>
      </section>

      {/* === Features Section === */}
      <section className="feature-section">
        <div className="feature-container">
          {t.features.map((feature, index) => (
            <div className="feature-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === Welcome Section === */}
      <section className="welcome-section">
        <div className="welcome-container">
          <div className="welcome-text">
            <h2>{t.welcome}</h2>
            <p>{t.welcomeDesc1}</p>
            <p>{t.welcomeDesc2}</p>
          </div>
          <div className="welcome-image">
            <img src={students} alt="Students" />
          </div>
        </div>
      </section>

      {/* === Courses Section === */}
      <section className="course-section" id="courses">
        <div className="course-header" data-aos="fade-up">
          <h2>{t.courseHeader}</h2>
          <p>{t.courseDesc1}</p>
          <p>{t.courseDesc2}</p>
          <button className="course-btn" onClick={() => navigate("/CourseForm")}>
            {t.courseBtn}
          </button>
        </div>

        <div className="course-grid" data-aos="fade-up">
          {t.courseList.map((course, idx) => (
            <div className="course-item" key={idx}>
              <img src={[business, computer, building, education, health, classroom][idx]} alt={course} />
              <span>{course}</span>
            </div>
          ))}
        </div>
      </section>

      {/* === Find Support Section === */}
      <section className="support-container">
        <h1 className="support-title">{t.supportTitle}</h1>
        <div className="support-grid">
          {t.supportData.map((section, index) => (
            <div key={index} className="support-card">
              <img src={section.image} alt={section.title} className="support-image" />
              <h2 className="support-card-title">{section.title}</h2>
              <ul className="support-list">
                {section.items.map((item, i) => (
                  <li key={i} className="support-list-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="vu-banner">
        <div className="vu-banner-text">
          <h2>{t.bannerText}</h2>
        </div>
        <div className="vu-banner-button">
          <button
            className="vu-download-button"
            onClick={() => navigate("/Contact")}
          >
            {t.bannerBtn}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
