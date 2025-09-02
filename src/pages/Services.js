import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/Darkmodecontext";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import "./Services.css";
import services from "../images/service.mp4";
import abroad from "../images/abroad.jpg";
import consulting from "../images/consulting.jpg";
import teacher from "../images/teacher.jpg";
import tutoring from "../images/tutoring.jpg";
import curriculam from "../images/curriculam.jpg";
import online from "../images/online.jpg";
import innovative from "../images/innovative.jpg";
import featured from "../images/featured.jpg";

// --- Translations ---
const translations = {
  en: {
    heroTitle: "Empowering Minds, Inspiring Futures",
    heroDesc: "Unlock your potential with personalized learning solutions tailored for every student.",
    servicesHeading: "Our Educational Services",
    servicesIntro: "Empowering learners at every stage with innovative and personalized solutions.",
    serviceCards: [
      {
        img: online,
        alt: "Online Learning",
        title: "Online Learning Programs",
        desc: "Interactive courses designed to provide flexible, accessible education from anywhere.",
        btn: "Learn More",
        path: "/onlinelearning",
      },
      {
        img: tutoring,
        alt: "Personalized Tutoring",
        title: "Personalized Tutoring",
        desc: "One-on-one academic support tailored to each student’s unique needs and goals.",
        btn: "Get Tutoring",
        path: "/personalizedtutoring",
      },
      {
        img: curriculam,
        alt: "Curriculum Development",
        title: "Curriculum Development",
        desc: "Custom curriculum design to meet educational standards and foster student success.",
        btn: "Explore",
        path: "/curriculumdevelopment",
      },
      {
        img: teacher,
        alt: "Teacher Training",
        title: "Teacher Training",
        desc: "Professional development programs to enhance instructional skills and strategies.",
        btn: "Learn More",
        path: "/teachertraining",
      },
      {
        img: consulting,
        alt: "Educational Consulting",
        title: "Educational Consulting",
        desc: "Expert advice and strategic planning for schools, districts, and education providers.",
        btn: "Request Info",
        path: "/educationalconsulting",
      },
      {
        img: abroad,
        alt: "Study Abroad Programs",
        title: "Study Abroad Programs",
        desc: "Support and guidance for students pursuing educational opportunities internationally.",
        btn: "Apply Now",
        path: "/studyabroad",
      },
    ],
    portfolioHeading: "Success Stories: Transforming Education",
    portfolioIntro: "We don’t just provide services — we create impactful learning experiences. Here’s a glimpse into one of our standout education projects.",
    caseStudyTag: "Innovative Learning",
    caseStudyTitle: "Revamping STEM Education at Greenfield High",
    caseStudyChallenge: "Greenfield High aimed to modernize their STEM curriculum to engage students more deeply and prepare them for future careers in technology and engineering.",
    caseStudySolution: "We collaborated with educators to design hands-on project modules, integrated cutting-edge lab equipment, and provided teacher training on new pedagogical methods. The result was a vibrant, interactive STEM program that boosted student interest and achievement significantly.",
    caseStudyBtn: "Explore the Full Case Study",
    featuresHeading: "Core Features That Empower Education",
    featuresIntro: "Explore the innovative tools and approaches we use to elevate learning experiences for students and educators alike.",
    features: [
      {
        icon: (
          <svg width="24" height="24" fill="#ff4a57" viewBox="0 0 24 24">
            <path d="M3 3h18v2H3V3zm2 4h14v2H5V7zm-2 4h18v2H3v-2zm2 4h14v2H5v-2zm-2 4h18v2H3v-2z" />
          </svg>
        ),
        title: "Interactive Learning Modules",
        desc: "Engage students with multimedia-rich lessons that adapt to different learning styles.",
      },
      {
        icon: (
          <svg width="24" height="24" fill="#ff4a57" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
          </svg>
        ),
        title: "Real-time Progress Tracking",
        desc: "Teachers and parents can monitor student achievements and provide timely feedback.",
      },
      {
        icon: (
          <svg width="24" height="24" fill="#ff4a57" viewBox="0 0 24 24">
            <path d="M12 7a2 2 0 110 4 2 2 0 010-4zm0 10c3.33 0 6-1.67 6-3.75v-1.25H6v1.25c0 2.08 2.67 3.75 6 3.75z" />
          </svg>
        ),
        title: "Customizable Curriculum",
        desc: "Flexible course structures tailored to school needs and local education standards.",
      },
      {
        icon: (
          <svg width="24" height="24" fill="#ff4a57" viewBox="0 0 24 24">
            <path d="M7 17h10v2H7v-2zm-4-6h18v2H3v-2z" />
          </svg>
        ),
        title: "Mobile Accessibility",
        desc: "Students and teachers can access materials and assignments anytime on any device.",
      },
    ],
    packagesHeading: "Flexible Learning Packages",
    packagesIntro: "Choose the educational support that fits your goals and schedule. We offer flexible packages for every learner.",
    packages: [
      {
        title: "Supplemental Support",
        desc: "Ideal for students who need targeted help with specific subjects or skills.",
        features: [
          "Subject-focused tutoring sessions",
          "Homework help and assignment review",
          "Study strategies and test prep",
          "Progress tracking and feedback",
        ],
        btn: "Learn More",
      },
      {
        title: "Comprehensive Learning Plan",
        desc: "A full-service package for students seeking ongoing academic coaching and personalized curriculum support.",
        features: [
          "All Supplemental Support features",
          "Customized curriculum design",
          "One-on-one mentorship and guidance",
          "Regular performance assessments",
        ],
        btn: "Choose This Plan",
        featured: true,
      },
      {
        title: "Specialized Workshops",
        desc: "Flexible workshops focusing on key skills such as leadership, technology, and creative thinking.",
        features: [
          "Interactive skill-building sessions",
          "Group and individual formats",
          "Expert facilitators and guest speakers",
          "Certificates of completion",
        ],
        btn: "Contact for Details",
      },
    ],
    mostPopular: "Most Popular",
  },
  he: {
    heroTitle: "להעצים מוחות, להשריש עתיד",
    heroDesc: "פתח את הפוטנציאל שלך עם פתרונות למידה מותאמים אישית לכל תלמיד.",
    servicesHeading: "שירותי החינוך שלנו",
    servicesIntro: "מעצימים לומדים בכל שלב עם פתרונות חדשניים ומותאמים אישית.",
    serviceCards: [
      {
        img: online,
        alt: "למידה מקוונת",
        title: "תוכניות למידה מקוונת",
        desc: "קורסים אינטראקטיביים המאפשרים לימוד גמיש ונגיש מכל מקום.",
        btn: "למידע נוסף",
        path: "/online-learning",
      },
      {
        img: tutoring,
        alt: "הדרכה אישית",
        title: "הדרכה אישית",
        desc: "תמיכה אקדמית אישית המותאמת לצרכים ולמטרות של כל תלמיד.",
        btn: "קבל הדרכה",
        path: "/tutoring-services",
      },
      {
        img: curriculam,
        alt: "פיתוח תוכניות לימוד",
        title: "פיתוח תוכניות לימוד",
        desc: "עיצוב תוכניות לימוד מותאמות לסטנדרטים חינוכיים והצלחת תלמידים.",
        btn: "גלה",
        path: "/curriculum-development",
      },
      {
        img: teacher,
        alt: "הכשרת מורים",
        title: "הכשרת מורים",
        desc: "תוכניות לפיתוח מקצועי לשיפור מיומנויות והוראה.",
        btn: "למידע נוסף",
        path: "/teacher-training",
      },
      {
        img: consulting,
        alt: "ייעוץ חינוכי",
        title: "ייעוץ חינוכי",
        desc: "ייעוץ מקצועי ותכנון אסטרטגי לבתי ספר, מחוזות וספקי חינוך.",
        btn: "בקשת מידע",
        path: "/educational-consulting",
      },
      {
        img: abroad,
        alt: "תוכניות לימודים בחו\"ל",
        title: "תוכניות לימודים בחו\"ל",
        desc: "תמיכה והכוונה לסטודנטים המבקשים הזדמנויות לימוד בינלאומיות.",
        btn: "הגש בקשה",
        path: "/study-abroad",
      },
    ],
    portfolioHeading: "סיפורי הצלחה: שינוי החינוך",
    portfolioIntro: "אנחנו לא רק מספקים שירותים — אנו יוצרים חוויות למידה משמעותיות. הנה הצצה לאחד הפרויקטים הבולטים שלנו.",
    caseStudyTag: "למידה חדשנית",
    caseStudyTitle: "חידוש לימודי STEM בתיכון גרינפילד",
    caseStudyChallenge: "תיכון גרינפילד ביקש לחדש את תוכנית ה-STEM כדי להעמיק את מעורבות התלמידים ולהכין אותם לקריירות עתידיות בטכנולוגיה והנדסה.",
    caseStudySolution: "שיתפנו פעולה עם מורים לעיצוב מודולים מעשיים, שילבנו ציוד מעבדה מתקדם והעברנו הכשרות פדגוגיות. התוצאה: תוכנית STEM אינטראקטיבית שהעלתה את העניין וההישגים של התלמידים.",
    caseStudyBtn: "לצפייה במחקר המלא",
    featuresHeading: "תכונות ליבה שמעצימות חינוך",
    featuresIntro: "גלה את הכלים החדשניים והגישות שאנו משתמשים בהם לשיפור חוויית הלמידה לתלמידים ולמורים.",
    features: [
      {
        icon: (
          <svg width="24" height="24" fill="#ff4a57" viewBox="0 0 24 24">
            <path d="M3 3h18v2H3V3zm2 4h14v2H5V7zm-2 4h18v2H3v-2zm2 4h14v2H5v-2zm-2 4h18v2H3v-2z" />
          </svg>
        ),
        title: "מודולים אינטראקטיביים",
        desc: "שיעורים עשירים במדיה המותאמים לסגנונות למידה שונים.",
      },
      {
        icon: (
          <svg width="24" height="24" fill="#ff4a57" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
          </svg>
        ),
        title: "מעקב התקדמות בזמן אמת",
        desc: "מורים והורים יכולים לעקוב אחרי הישגי התלמידים ולספק משוב מיידי.",
      },
      {
        icon: (
          <svg width="24" height="24" fill="#ff4a57" viewBox="0 0 24 24">
            <path d="M12 7a2 2 0 110 4 2 2 0 010-4zm0 10c3.33 0 6-1.67 6-3.75v-1.25H6v1.25c0 2.08 2.67 3.75 6 3.75z" />
          </svg>
        ),
        title: "תוכנית לימודים מותאמת",
        desc: "מבנה קורסים גמיש המותאם לצרכי בית הספר ולסטנדרטים מקומיים.",
      },
      {
        icon: (
          <svg width="24" height="24" fill="#ff4a57" viewBox="0 0 24 24">
            <path d="M7 17h10v2H7v-2zm-4-6h18v2H3v-2z" />
          </svg>
        ),
        title: "נגישות במובייל",
        desc: "גישה לחומרים ומשימות מכל מכשיר ובכל זמן.",
      },
    ],
    packagesHeading: "חבילות למידה גמישות",
    packagesIntro: "בחר את התמיכה החינוכית המתאימה למטרותיך וללוח הזמנים שלך. אנו מציעים חבילות גמישות לכל לומד.",
    packages: [
      {
        title: "תמיכה משלימה",
        desc: "מתאים לתלמידים הזקוקים לעזרה ממוקדת במקצועות או מיומנויות מסוימות.",
        features: [
          "מפגשי הדרכה ממוקדי מקצוע",
          "עזרה בשיעורי בית ובדיקת מטלות",
          "אסטרטגיות למידה והכנה למבחנים",
          "מעקב התקדמות ומשוב",
        ],
        btn: "למידע נוסף",
      },
      {
        title: "תוכנית למידה מקיפה",
        desc: "חבילה מלאה לתלמידים המעוניינים בליווי אקדמי מתמשך ותמיכה בתוכנית לימודים מותאמת.",
        features: [
          "כל תכונות התמיכה המשלימה",
          "עיצוב תוכנית לימודים מותאמת",
          "חונכות והכוונה אישית",
          "הערכות ביצועים קבועות",
        ],
        btn: "בחר חבילה זו",
        featured: true,
      },
      {
        title: "סדנאות מתמחות",
        desc: "סדנאות גמישות המתמקדות במיומנויות מפתח כמו מנהיגות, טכנולוגיה וחשיבה יצירתית.",
        features: [
          "מפגשי פיתוח מיומנויות אינטראקטיביים",
          "פורמטים קבוצתיים ואישיים",
          "מנחים ומרצים אורחים מומחים",
          "תעודות סיום",
        ],
        btn: "צור קשר לפרטים",
      },
    ],
    mostPopular: "הכי פופולרי",
  },
  ar: {
    heroTitle: "تمكين العقول، إلهام المستقبل",
    heroDesc: "اكتشف إمكانياتك مع حلول تعليمية مخصصة لكل طالب.",
    servicesHeading: "خدماتنا التعليمية",
    servicesIntro: "تمكين المتعلمين في كل مرحلة من خلال حلول مبتكرة وشخصية.",
    serviceCards: [
      {
        img: online,
        alt: "التعلم عبر الإنترنت",
        title: "برامج التعلم عبر الإنترنت",
        desc: "دورات تفاعلية مصممة لتوفير تعليم مرن وسهل الوصول من أي مكان.",
        btn: "اعرف المزيد",
        path: "/online-learning",
      },
      {
        img: tutoring,
        alt: "دروس خصوصية",
        title: "دروس خصوصية",
        desc: "دعم أكاديمي فردي مصمم لاحتياجات وأهداف كل طالب.",
        btn: "احصل على دروس",
        path: "/tutoring-services",
      },
      {
        img: curriculam,
        alt: "تطوير المناهج",
        title: "تطوير المناهج",
        desc: "تصميم مناهج مخصصة لتلبية المعايير التعليمية وتعزيز نجاح الطلاب.",
        btn: "استكشف",
        path: "/curriculum-development",
      },
      {
        img: teacher,
        alt: "تدريب المعلمين",
        title: "تدريب المعلمين",
        desc: "برامج تطوير مهني لتعزيز مهارات واستراتيجيات التدريس.",
        btn: "اعرف المزيد",
        path: "/teacher-training",
      },
      {
        img: consulting,
        alt: "استشارات تعليمية",
        title: "استشارات تعليمية",
        desc: "نصائح وخطط استراتيجية للمدارس والمؤسسات التعليمية.",
        btn: "اطلب معلومات",
        path: "/educational-consulting",
      },
      {
        img: abroad,
        alt: "برامج الدراسة بالخارج",
        title: "برامج الدراسة بالخارج",
        desc: "الدعم والإرشاد للطلاب الراغبين في فرص تعليمية دولية.",
        btn: "قدّم الآن",
        path: "/study-abroad",
      },
    ],
    portfolioHeading: "قصص نجاح: تحويل التعليم",
    portfolioIntro: "نحن لا نقدم خدمات فقط — بل نخلق تجارب تعليمية مؤثرة. إليك لمحة عن أحد مشاريعنا البارزة.",
    caseStudyTag: "تعلم مبتكر",
    caseStudyTitle: "تجديد تعليم STEM في مدرسة جرينفيلد الثانوية",
    caseStudyChallenge: "سعت مدرسة جرينفيلد الثانوية إلى تحديث منهج STEM لجذب الطلاب بشكل أعمق وإعدادهم لمهن المستقبل في التكنولوجيا والهندسة.",
    caseStudySolution: "تعاونّا مع المعلمين لتصميم وحدات عملية، ودمجنا معدات مختبر حديثة، وقدمنا تدريبًا للمعلمين على طرق التدريس الجديدة. النتيجة: برنامج STEM تفاعلي زاد من اهتمام الطلاب وإنجازاتهم بشكل ملحوظ.",
    caseStudyBtn: "استكشف الدراسة الكاملة",
    featuresHeading: "ميزات أساسية تعزز التعليم",
    featuresIntro: "استكشف الأدوات والأساليب المبتكرة التي نستخدمها للارتقاء بتجربة التعلم للطلاب والمعلمين.",
    features: [
      {
        icon: (
          <svg width="24" height="24" fill="#ff4a57" viewBox="0 0 24 24">
            <path d="M3 3h18v2H3V3zm2 4h14v2H5V7zm-2 4h18v2H3v-2zm2 4h14v2H5v-2zm-2 4h18v2H3v-2z" />
          </svg>
        ),
        title: "وحدات تعلم تفاعلية",
        desc: "إشراك الطلاب بدروس غنية بالوسائط تتكيف مع أنماط التعلم المختلفة.",
      },
      {
        icon: (
          <svg width="24" height="24" fill="#ff4a57" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
          </svg>
        ),
        title: "تتبع التقدم في الوقت الفعلي",
        desc: "يمكن للمعلمين وأولياء الأمور متابعة إنجازات الطلاب وتقديم ملاحظات فورية.",
      },
      {
        icon: (
          <svg width="24" height="24" fill="#ff4a57" viewBox="0 0 24 24">
            <path d="M12 7a2 2 0 110 4 2 2 0 010-4zm0 10c3.33 0 6-1.67 6-3.75v-1.25H6v1.25c0 2.08 2.67 3.75 6 3.75z" />
          </svg>
        ),
        title: "مناهج قابلة للتخصيص",
        desc: "هياكل دورات مرنة مصممة لاحتياجات المدارس والمعايير المحلية.",
      },
      {
        icon: (
          <svg width="24" height="24" fill="#ff4a57" viewBox="0 0 24 24">
            <path d="M7 17h10v2H7v-2zm-4-6h18v2H3v-2z" />
          </svg>
        ),
        title: "إمكانية الوصول عبر الجوال",
        desc: "يمكن للطلاب والمعلمين الوصول إلى المواد والمهام في أي وقت ومن أي جهاز.",
      },
    ],
    packagesHeading: "باقات تعلم مرنة",
    packagesIntro: "اختر الدعم التعليمي الذي يناسب أهدافك وجدولك الزمني. نقدم باقات مرنة لكل متعلم.",
    packages: [
      {
        title: "دعم إضافي",
        desc: "مثالي للطلاب الذين يحتاجون إلى مساعدة مركزة في مواد أو مهارات محددة.",
        features: [
          "جلسات دروس مركزة على المواد",
          "مساعدة في الواجبات ومراجعة المهام",
          "استراتيجيات الدراسة والاستعداد للاختبارات",
          "تتبع التقدم والتغذية الراجعة",
        ],
        btn: "اعرف المزيد",
      },
      {
        title: "خطة تعلم شاملة",
        desc: "حزمة كاملة للطلاب الذين يبحثون عن تدريب أكاديمي مستمر ودعم منهج مخصص.",
        features: [
          "جميع ميزات الدعم الإضافي",
          "تصميم منهج مخصص",
          "إرشاد وتوجيه فردي",
          "تقييمات أداء منتظمة",
        ],
        btn: "اختر هذه الخطة",
        featured: true,
      },
      {
        title: "ورش عمل متخصصة",
        desc: "ورش عمل مرنة تركز على المهارات الأساسية مثل القيادة والتكنولوجيا والتفكير الإبداعي.",
        features: [
          "جلسات تطوير مهارات تفاعلية",
          "تنسيقات جماعية وفردية",
          "مُيسّرون وخبراء ضيوف",
          "شهادات إتمام",
        ],
        btn: "اتصل للتفاصيل",
      },
    ],
    mostPopular: "الأكثر شيوعًا",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  const navigate = useNavigate();

  // RTL/LTR support
  useEffect(() => {
    document.documentElement.dir = ["he", "ar"].includes(language) ? "rtl" : "ltr";
  }, [language]);

  useEffect(() => {
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach((question) => {
      question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector("i");
        answer.classList.toggle("open");
        icon.classList.toggle("rotate");
      });
    });
    return () => {
      faqQuestions.forEach((question) => {
        question.removeEventListener("click", () => {});
      });
    };
  }, []);

  const handleGetStarted = (path) => {
    navigate(path);
  };

  const t = translations[language];

  return (
    <div className={darkMode ? "service-page dark-mode" : "service-page light-mode"}>
      <div className="hero-container-service">
        <video
          className="hero-video-service"
          src={services}
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-service">
          <h1 className="hero-tagline-service">{t.heroTitle}</h1>
          <p className="hero-paragraph-service">{t.heroDesc}</p>
        </div>
      </div>

      {/* Services Section */}
      <section className="services-section-service">
        <div className="services-container-service">
          <h2 className="services-heading-service">{t.servicesHeading}</h2>
          <p className="services-intro-service">{t.servicesIntro}</p>
          <div className="services-grid-service">
            {t.serviceCards.map((card, idx) => (
              <div className="service-card-service" key={idx}>
                <img
                  src={card.img}
                  alt={card.alt}
                  className="service-image-service"
                />
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <button
                  className={`service-btn-service`}
                  onClick={() => handleGetStarted(card.path)}
                >
                  {card.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio & Case Studies Section */}
      <section className="portfolio-section">
        <div className="portfolio-container">
          <div className="portfolio-content">
            <h2 className="portfolio-heading">{t.portfolioHeading}</h2>
            <p className="portfolio-intro">{t.portfolioIntro}</p>
            <div className="case-study-card">
              <img
                src={innovative}
                alt="Innovative school classroom setup"
                className="case-study-image"
              />
              <div className="case-study-details">
                <span className="case-study-tag">{t.caseStudyTag}</span>
                <h3>{t.caseStudyTitle}</h3>
                <p>
                  <strong>
                    {language === "en"
                      ? "Challenge:"
                      : language === "he"
                      ? "אתגר:"
                      : "التحدي:"}
                  </strong>{" "}
                  {t.caseStudyChallenge}
                </p>
                <p>
                  <strong>
                    {language === "en"
                      ? "Our Solution:"
                      : language === "he"
                      ? "הפתרון שלנו:"
                      : "حلنا:"}
                  </strong>{" "}
                  {t.caseStudySolution}
                </p>
                <button
                  className="case-study-btn"
                  onClick={() => handleGetStarted("/education-projects")}
                >
                  {t.caseStudyBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        style={{
          backgroundColor: darkMode ? "#121212" : "#fff",
          color: darkMode ? "#e0e0e0" : "#000",
          padding: "4rem 1rem",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            textAlign: "center",
            marginBottom: "3rem",
            padding: "0 1rem",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "0.5rem",
              color: darkMode ? "#fff" : undefined,
            }}
          >
            {t.featuresHeading}
          </h2>
          <p
            style={{
              maxWidth: 700,
              margin: "0 auto",
              fontSize: "1.1rem",
              color: darkMode ? "#bbb" : "#555",
            }}
          >
            {t.featuresIntro}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "3rem",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {/* Left feature cards */}
          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: "2rem", flex: 1, minWidth: 280 }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[t.features[0], t.features[1]].map((feature, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "1rem 1.5rem",
                  borderRadius: "10px",
                  backgroundColor: darkMode ? "#2c2c2c" : "#ffe6e9",
                  boxShadow: darkMode
                    ? "0 2px 6px rgba(255,74,87,0.4)"
                    : "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                <div>{feature.icon}</div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "700",
                      marginBottom: "0.25rem",
                      color: "#ff4a57",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p style={{ color: darkMode ? "#ccc" : "#555", fontSize: "1rem" }}>
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center image */}
          <motion.div
            style={{ flex: 1, minWidth: 280, textAlign: "center" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src={featured}
              alt="Education Features"
              style={{
                width: "100%",
                maxWidth: 320,
                borderRadius: 12,
                boxShadow: darkMode
                  ? "0 8px 16px rgba(255,74,87,0.6)"
                  : "0 8px 16px rgba(0,0,0,0.1)",
                filter: darkMode ? "brightness(0.9)" : "none",
              }}
            />
          </motion.div>

          {/* Right feature cards */}
          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: "2rem", flex: 1, minWidth: 280 }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[t.features[2], t.features[3]].map((feature, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "1rem 1.5rem",
                  borderRadius: "10px",
                  backgroundColor: darkMode ? "#2c2c2c" : "#ffe6e9",
                  boxShadow: darkMode
                    ? "0 2px 6px rgba(255,74,87,0.4)"
                    : "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                <div>{feature.icon}</div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "700",
                      marginBottom: "0.25rem",
                      color: "#ff4a57",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p style={{ color: darkMode ? "#ccc" : "#555", fontSize: "1rem" }}>
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section">
        <div className="packages-container">
          <h2 className="packages-heading">{t.packagesHeading}</h2>
          <p className="packages-intro">{t.packagesIntro}</p>
          <div className="package-tiers">
            {t.packages.map((pkg, idx) => (
              <div
                className={`package-box${pkg.featured ? " featured-package" : ""}`}
                key={idx}
              >
                {pkg.featured && <span>{t.mostPopular}</span>}
                <h3>{pkg.title}</h3>
                <p className="package-description">{pkg.desc}</p>
                <ul className="package-features">
                  {pkg.features.map((f, i) => (
                    <li key={i}>
                      <i className="fas fa-check-circle"></i> {f}
                    </li>
                  ))}
                </ul>
                <button className="package-btn" onClick={() => handleGetStarted("/contact")}>
                  {pkg.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
