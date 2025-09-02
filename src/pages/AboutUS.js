import React, { useState, useRef, useEffect } from "react";
import "./AboutUs.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import aboutUsVideo from "../images/aboutus.mp4";
import au from "../images/au.jpg";
import coll from "../images/coll.jpg";
import team from "../images/team.jpg";
import openbook from "../images/openbook.png";
import board from "../images/board.png";
import graduate from "../images/child.png";
import alumniBenefits from "../images/alumniBenefits.jpg";
import alumniStories from "../images/alumniStories.jpg";
import getInvolved from "../images/getInvolved.jpg";
import stayConnected from "../images/stayConnected.jpg";

import { motion } from "framer-motion";

// Translations for all sections
const translations = {
  en: {
    heroTitle: "About Us",
    heroDesc: "We are dedicated to transforming education through technology, creativity, and a passion for lifelong learning.",
    ourStoryTitle: "Our Story",
    ourStoryDesc: "From a single classroom to a global learning platform, our story is rooted in a passion for education. Over the last two decades, we've empowered students, supported educators, and built a community where learning never stops. Our commitment to accessibility, innovation, and excellence continues to drive us forward.",
    ourStoryServices: [
      ["Global Learning Solutions", "24/7 Student Support", "Smart Classrooms"],
      ["Experienced Faculty", "International Programs", "Career-Oriented Curriculum"]
    ],
    contactBtn: "Contact Us",
    haveQuestions: "Have Questions?",
    phone: "+01 546 378 333",
    experienceYears: "20+",
    experienceLabel: "Years of Excellence",
    eduMission: "🎯 Our Mission",
    eduMissionDesc: "To inspire lifelong learning and empower students with smart education solutions.",
    eduVision: "🌍 Our Vision",
    eduVisionDesc: "To become a global leader in transforming education through technology and innovation.",
    eduGoal: "🎓 Our Goal",
    eduGoalDesc: "To make learning accessible, inclusive, and impactful for learners worldwide.",
    whyChooseLabel: "Why Choose Us",
    whyChooseHeading: "Empower Your Future with Quality Education",
    whyChooseDesc: "We are committed to providing a transformative learning experience through expert educators, innovative technology, and student support. Join thousands of students who trust us to guide their educational journey.",
    bulletPoints: [
      "Comprehensive Curriculum",
      "Experienced Faculty",
      "24/7 Student Support",
      "Free Educational Resources"
    ],
    getStarted: "Get Started",
    statsData: [
      { icon: openbook, number: "98%", label: "Successful Students" },
      { icon: board, number: "500+", label: "Courses Offered" },
      { icon: graduate, number: "120+", label: "Expert Educators" },
    ],
    teamTitle: "Our Team",
    alumniHeading: "You are now part of a global network of over 300,000 alumni.",
    alumniDesc1: "Enjoy exclusive benefits and opportunities – we’re here to help you engage with industry, network and further your career.",
    alumniDesc2: "You can also give back to, and stay in touch with, your VU community.",
    alumniContent: [
      {
        img: alumniBenefits,
        title: "Alumni benefits",
        description: "Enjoy exclusive benefits and opportunities to advance your career and personal growth.",
      },
      {
        img: alumniStories,
        title: "Alumni stories & events",
        description: "Stay inspired by stories from your fellow alumni and join community events.",
      },
      {
        img: getInvolved,
        title: "Get involved",
        description: "Connect with your network and engage with opportunities to give back.",
      },
      {
        img: stayConnected,
        title: "Stay connected",
        description: "Maintain lifelong friendships and keep in touch with your Stackly community.",
      },
    ],
  },
  he: {
    heroTitle: "עלינו",
    heroDesc: "אנו מחויבים לשנות את החינוך באמצעות טכנולוגיה, יצירתיות ותשוקה ללמידה לכל החיים.",
    ourStoryTitle: "הסיפור שלנו",
    ourStoryDesc: "מכיתה אחת לפלטפורמת לימוד גלובלית, הסיפור שלנו מושרש בתשוקה לחינוך. בעשרים השנים האחרונות העצמנו תלמידים, תמכנו במורים ובנינו קהילה שבה הלמידה אינה נפסקת. המחויבות שלנו לנגישות, חדשנות ומצוינות ממשיכה להניע אותנו קדימה.",
    ourStoryServices: [
      ["פתרונות לימוד גלובליים", "תמיכה לסטודנטים 24/7", "כיתות חכמות"],
      ["סגל מנוסה", "תוכניות בינלאומיות", "תוכנית לימודים מוכוונת קריירה"]
    ],
    contactBtn: "צור קשר",
    haveQuestions: "יש שאלות?",
    phone: "+01 546 378 333",
    experienceYears: "20+",
    experienceLabel: "שנות מצוינות",
    eduMission: "🎯 המשימה שלנו",
    eduMissionDesc: "להעניק השראה ללמידה לכל החיים ולהעצים תלמידים עם פתרונות חינוך חכמים.",
    eduVision: "🌍 החזון שלנו",
    eduVisionDesc: "להפוך למובילים גלובליים בשינוי החינוך באמצעות טכנולוגיה וחדשנות.",
    eduGoal: "🎓 המטרה שלנו",
    eduGoalDesc: "להפוך את הלמידה לנגישה, כוללת ובעלת השפעה לכל הלומדים בעולם.",
    whyChooseLabel: "למה לבחור בנו",
    whyChooseHeading: "העצם את עתידך עם חינוך איכותי",
    whyChooseDesc: "אנו מחויבים לספק חווית לימוד משנת חיים באמצעות מורים מומחים, טכנולוגיה חדשנית ותמיכה בסטודנטים. הצטרף לאלפי תלמידים שסומכים עלינו להוביל את מסע הלמידה שלהם.",
    bulletPoints: [
      "תוכנית לימודים מקיפה",
      "סגל מנוסה",
      "תמיכה לסטודנטים 24/7",
      "משאבים חינוכיים חינם"
    ],
    getStarted: "התחל עכשיו",
    statsData: [
      { icon: openbook, number: "98%", label: "סטודנטים מצליחים" },
      { icon: board, number: "500+", label: "קורסים מוצעים" },
      { icon: graduate, number: "120+", label: "מחנכים מומחים" },
    ],
    teamTitle: "הצוות שלנו",
    alumniHeading: "אתה חלק מרשת גלובלית של מעל 300,000 בוגרים.",
    alumniDesc1: "תהנה מהטבות והזדמנויות בלעדיות – אנו כאן כדי לעזור לך להתחבר לתעשייה, ליצור קשרים ולקדם את הקריירה שלך.",
    alumniDesc2: "אתה גם יכול להחזיר ולשמור על קשר עם קהילת VU שלך.",
    alumniContent: [
      {
        img: alumniBenefits,
        title: "הטבות לבוגרים",
        description: "תהנה מהטבות והזדמנויות בלעדיות לקידום הקריירה וההתפתחות האישית שלך.",
      },
      {
        img: alumniStories,
        title: "סיפורי בוגרים ואירועים",
        description: "קבל השראה מסיפורי בוגרים והצטרף לאירועי קהילה.",
      },
      {
        img: getInvolved,
        title: "השתלב",
        description: "התחבר לרשת שלך והשתלב בהזדמנויות לתרום.",
      },
      {
        img: stayConnected,
        title: "שמור על קשר",
        description: "שמור על חברויות לכל החיים והישאר בקשר עם קהילת Stackly שלך.",
      },
    ],
  },
  ar: {
    heroTitle: "من نحن",
    heroDesc: "نحن ملتزمون بتحويل التعليم من خلال التكنولوجيا والإبداع والشغف بالتعلم مدى الحياة.",
    ourStoryTitle: "قصتنا",
    ourStoryDesc: "من فصل دراسي واحد إلى منصة تعليمية عالمية، قصتنا متجذرة في الشغف بالتعليم. على مدار العقدين الماضيين، قمنا بتمكين الطلاب ودعم المعلمين وبناء مجتمع لا يتوقف فيه التعلم. التزامنا بإمكانية الوصول والابتكار والتميز يدفعنا دائمًا للأمام.",
    ourStoryServices: [
      ["حلول تعليمية عالمية", "دعم الطلاب على مدار الساعة", "فصول ذكية"],
      ["هيئة تدريس ذات خبرة", "برامج دولية", "مناهج موجهة نحو الوظائف"]
    ],
    contactBtn: "اتصل بنا",
    haveQuestions: "هل لديك أسئلة؟",
    phone: "+01 546 378 333",
    experienceYears: "20+",
    experienceLabel: "سنوات من التميز",
    eduMission: "🎯 مهمتنا",
    eduMissionDesc: "إلهام التعلم مدى الحياة وتمكين الطلاب بحلول تعليمية ذكية.",
    eduVision: "🌍 رؤيتنا",
    eduVisionDesc: "أن نصبح روادًا عالميين في تحويل التعليم من خلال التكنولوجيا والابتكار.",
    eduGoal: "🎓 هدفنا",
    eduGoalDesc: "جعل التعلم متاحًا وشاملًا وذا تأثير لجميع المتعلمين حول العالم.",
    whyChooseLabel: "لماذا تختارنا",
    whyChooseHeading: "عزز مستقبلك مع التعليم الجيد",
    whyChooseDesc: "نحن ملتزمون بتقديم تجربة تعليمية تحويلية من خلال المعلمين الخبراء والتكنولوجيا المبتكرة ودعم الطلاب. انضم إلى آلاف الطلاب الذين يثقون بنا في توجيه رحلتهم التعليمية.",
    bulletPoints: [
      "منهج شامل",
      "هيئة تدريس ذات خبرة",
      "دعم الطلاب على مدار الساعة",
      "موارد تعليمية مجانية"
    ],
    getStarted: "ابدأ الآن",
    statsData: [
      { icon: openbook, number: "98%", label: "طلاب ناجحون" },
      { icon: board, number: "500+", label: "الدورات المقدمة" },
      { icon: graduate, number: "120+", label: "معلمون خبراء" },
    ],
    teamTitle: "فريقنا",
    alumniHeading: "أنت الآن جزء من شبكة عالمية تضم أكثر من 300,000 خريج.",
    alumniDesc1: "استمتع بالمزايا والفرص الحصرية – نحن هنا لمساعدتك على التواصل مع الصناعة، وبناء العلاقات، وتعزيز حياتك المهنية.",
    alumniDesc2: "يمكنك أيضًا رد الجميل والبقاء على اتصال مع مجتمع VU الخاص بك.",
    alumniContent: [
      {
        img: alumniBenefits,
        title: "مزايا الخريجين",
        description: "استمتع بالمزايا والفرص الحصرية لتعزيز حياتك المهنية والشخصية.",
      },
      {
        img: alumniStories,
        title: "قصص وأحداث الخريجين",
        description: "استلهم من قصص الخريجين الآخرين وانضم إلى فعاليات المجتمع.",
      },
      {
        img: getInvolved,
        title: "شارك",
        description: "تواصل مع شبكتك وشارك في فرص رد الجميل.",
      },
      {
        img: stayConnected,
        title: "ابق على اتصال",
        description: "حافظ على صداقات مدى الحياة وابقَ على اتصال مع مجتمع Stackly الخاص بك.",
      },
    ],
  },
};

function AboutUs() {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  const t = translations[language];

  const [expandedReasons, setExpandedReasons] = useState([]);

  const toggleReason = (index) => {
    setExpandedReasons((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const teamMembers = [
    {
      name: "Dr. Emily Carter",
      role: "Mathematics Professor",
      bio: "Passionate about calculus and inspiring students to solve real-world problems.",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      expertise: 90,
      socials: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Mr. Jason Lee",
      role: "Physics Instructor",
      bio: "Specializes in quantum mechanics and experimental physics.",
      photo: "https://randomuser.me/api/portraits/men/43.jpg",
      expertise: 75,
      socials: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Ms. Sara Kim",
      role: "English Literature",
      bio: "Loves Shakespeare and engaging students with classic & modern texts.",
      photo: "https://randomuser.me/api/portraits/women/32.jpg",
      expertise: 85,
      socials: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Dr. Miguel Torres",
      role: "Computer Science",
      bio: "Expert in AI & Machine Learning with hands-on coding workshops.",
      photo: "https://randomuser.me/api/portraits/men/56.jpg",
      expertise: 95,
      socials: { twitter: "#", linkedin: "#" },
    },
  ];

  const R = 45;
  const CIRCUMFERENCE = 2 * Math.PI * R;

  function TeamCard({ member }) {
    const [flipped, setFlipped] = useState(false);

    return (
      <div
        className={`team-card ${flipped ? "flipped" : ""}`}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        tabIndex={0}
        onFocus={() => setFlipped(true)}
        onBlur={() => setFlipped(false)}
        aria-label={`Team member ${member.name}, ${member.role}`}
      >
        <div className="card-front">
          <div className="photo-wrapper">
            <svg className="skill-ring" width="110" height="110" aria-hidden="true">
              <circle
                className="ring-bg"
                cx="55"
                cy="55"
                r={R}
                strokeWidth="8"
                fill="none"
              />
              <circle
                className="ring-progress"
                cx="55"
                cy="55"
                r={R}
                strokeWidth="8"
                fill="none"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={
                  CIRCUMFERENCE - (member.expertise / 100) * CIRCUMFERENCE
                }
              />
            </svg>
            <img src={member.photo} alt={`${member.name} portrait`} />
          </div>
          <h3>{member.name}</h3>
          <p className="role">{member.role}</p>
        </div>
        <div className="card-back" aria-hidden={!flipped}>
          <p className="bio">{member.bio}</p>
          <div className="social-links"></div>
        </div>
      </div>
    );
  }

  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    function onMouseDown(e) {
      isDown.current = true;
      slider.classList.add("active");
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
    }
    function onMouseLeave() {
      isDown.current = false;
      slider.classList.remove("active");
    }
    function onMouseUp() {
      isDown.current = false;
      slider.classList.remove("active");
    }
    function onMouseMove(e) {
      if (!isDown.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 2;
      slider.scrollLeft = scrollLeft.current - walk;
    }

    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseleave", onMouseLeave);
    slider.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("mousemove", onMouseMove);

    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("mouseleave", onMouseLeave);
      slider.removeEventListener("mouseup", onMouseUp);
      slider.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Hero Banner */}
      <section className="aboutus-hero-banner">
        <video
          className="aboutus-hero-video"
          src={aboutUsVideo}
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

      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="our-story-content">
          <h2>{t.ourStoryTitle}</h2>
          <p>{t.ourStoryDesc}</p>
          <div className="our-story-services">
            <ul>
              {t.ourStoryServices[0].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <ul>
              {t.ourStoryServices[1].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="our-story-contact">
            <button className="contact-btn" onClick={() => navigate("/contact")}>
  {t.contactBtn}
</button>

            <div className="phone-info">
              <strong>{t.haveQuestions}</strong>
              <p>{t.phone}</p>
            </div>
          </div>
        </div>
        <div className="our-story-image">
          <div className="image-wrapper">
            <img src={coll} alt="Happy Students" className="img-back" />
            <img src={au} alt="Classroom Interaction" className="img-front" />
            <div className="experience-badge">
              <h4>{t.experienceYears}</h4>
              <p>{t.experienceLabel}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="edu-section">
        <div className="edu-left">
          <div className="edu-card">
            <h3>{t.eduMission}</h3>
            <p>{t.eduMissionDesc}</p>
          </div>
          <div className="edu-card highlight">
            <h3>{t.eduVision}</h3>
            <p>{t.eduVisionDesc}</p>
          </div>
          <div className="edu-card">
            <h3>{t.eduGoal}</h3>
            <p>{t.eduGoalDesc}</p>
          </div>
        </div>
        <div className="edu-right">
          <img src={team} alt="Team image" className="edu-image" />
        </div>
      </section>

      {/* Why Choose Us - Education Section */}
      <section className={darkMode ? "edu-why-choose dark" : "edu-why-choose"}>
        <motion.div
          className="stats-column"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {t.statsData.map((stat, idx) => (
            <motion.div key={idx} className="stat-box" variants={itemVariants}>
              <div className="icon">
                <img src={stat.icon} alt={stat.label} />
              </div>
              <div className="number">{stat.number}</div>
              <div className="label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="image-column"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={team} alt="Education" />
        </motion.div>
        <motion.div
          className="content-column"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.p className="section-label" variants={itemVariants}>
            {t.whyChooseLabel}
          </motion.p>
          <motion.h2 className="main-heading" variants={itemVariants}>
            {t.whyChooseHeading}
          </motion.h2>
          <motion.p className="description" variants={itemVariants}>
            {t.whyChooseDesc}
          </motion.p>
          <motion.ul className="features-list" variants={containerVariants}>
            {t.bulletPoints.map((point, i) => (
              <motion.li key={i} variants={itemVariants}>
                <FaCheckCircle className="check-icon" />
                {point}
              </motion.li>
            ))}
          </motion.ul>
          <motion.button
  className="cta-button"
  variants={itemVariants}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate("/services")}
>
  {t.getStarted}
</motion.button>
        </motion.div>
      </section>

      {/* Our Team Section */}
      <section className="team-section">
        <h2>{t.teamTitle}</h2>
        <div className="team-slider" ref={scrollRef}>
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </section>

      {/* Alumni Section */}
      <section className={darkMode ? "alumni-section dark" : "alumni-section"}>
        <h2>{t.alumniHeading}</h2>
        <p>{t.alumniDesc1}</p>
        <p>{t.alumniDesc2}</p>
        <div className="alumni-cards">
          {t.alumniContent.map(({ img, title, description }, idx) => (
            <div key={idx} className="alumni-card">
              <img src={img} alt={title} />
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="underline" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
