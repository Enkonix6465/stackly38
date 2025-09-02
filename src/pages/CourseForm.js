import React, { useState, useEffect } from "react";
import { useDarkMode } from "../context/Darkmodecontext";
import { useLanguage } from "../context/LanguageContext";

// Add translations for CourseForm page
const translations = {
  en: {
    heading: "Download our course guide",
    desc: "Register your details to download the VU International Course Guide and get all the latest news about exciting scholarships and opportunities.",
    contact: "My contact details",
    firstName: "Given name(s)*",
    lastName: "Family name or surname*",
    email: "Email address*",
    phone: "Mobile phone",
    about: "About Me",
    nationality: "What is your nationality?*",
    countryLivingIn: "Which country are you currently living in?*",
    studyLevel: "Study level interest*",
    areaOfInterest: "Area of interest*",
    startDate: "When do you plan to start your study?*",
    nationalityOptions: ["India", "Australia", "Other"],
    countryOptions: ["India", "Australia", "Other"],
    studyLevelOptions: ["Bachelor", "Master", "Diploma"],
    areaOptions: ["Engineering", "IT", "Business"],
    startDateOptions: ["2025", "2026"],
    marketing: "I agree to receive marketing communications from Victoria University, including news of exciting opportunities.",
    yes: "Yes",
    no: "No",
    privacy: "Refer to our",
    privacyPolicy: "privacy policy",
    dataCollection: "data collection notification statement",
    forMore: "for more information.",
    submit: "Submit",
    success: "🎉 Form Submitted Successfully!",
    successDesc: "You will receive the course guide via your email.",
  },
  he: {
    heading: "הורד את מדריך הקורסים שלנו",
    desc: "הרשם כדי להוריד את מדריך הקורסים הבינלאומי של VU ולקבל את כל החדשות האחרונות על מלגות והזדמנויות מרגשות.",
    contact: "הפרטים שלי",
    firstName: "שם פרטי*",
    lastName: "שם משפחה*",
    email: "כתובת אימייל*",
    phone: "טלפון נייד",
    about: "עליי",
    nationality: "מהי הלאום שלך?*",
    countryLivingIn: "באיזו מדינה אתה מתגורר כעת?*",
    studyLevel: "רמת לימודים שמעניינת אותך*",
    areaOfInterest: "תחום עניין*",
    startDate: "מתי אתה מתכנן להתחיל ללמוד?*",
    nationalityOptions: ["הודו", "אוסטרליה", "אחר"],
    countryOptions: ["הודו", "אוסטרליה", "אחר"],
    studyLevelOptions: ["תואר ראשון", "תואר שני", "דיפלומה"],
    areaOptions: ["הנדסה", "מחשבים", "עסקים"],
    startDateOptions: ["2025", "2026"],
    marketing: "אני מסכים לקבל עדכונים שיווקיים מאוניברסיטת ויקטוריה, כולל חדשות על הזדמנויות מרגשות.",
    yes: "כן",
    no: "לא",
    privacy: "עיין ב",
    privacyPolicy: "מדיניות הפרטיות",
    dataCollection: "הצהרת איסוף נתונים",
    forMore: "למידע נוסף.",
    submit: "שלח",
    success: "🎉 הטופס נשלח בהצלחה!",
    successDesc: "תקבל את מדריך הקורסים בדוא\"ל שלך.",
  },
  ar: {
    heading: "حمّل دليل الدورات الخاص بنا",
    desc: "سجّل بياناتك لتحميل دليل الدورات الدولية لـ VU واحصل على آخر الأخبار حول المنح والفرص المثيرة.",
    contact: "بيانات التواصل الخاصة بي",
    firstName: "الاسم الأول*",
    lastName: "اسم العائلة*",
    email: "البريد الإلكتروني*",
    phone: "رقم الجوال",
    about: "معلومات عني",
    nationality: "ما هي جنسيتك؟*",
    countryLivingIn: "في أي دولة تقيم حالياً؟*",
    studyLevel: "مستوى الدراسة المطلوب*",
    areaOfInterest: "مجال الاهتمام*",
    startDate: "متى تخطط لبدء دراستك؟*",
    nationalityOptions: ["الهند", "أستراليا", "أخرى"],
    countryOptions: ["الهند", "أستراليا", "أخرى"],
    studyLevelOptions: ["بكالوريوس", "ماجستير", "دبلوم"],
    areaOptions: ["الهندسة", "تكنولوجيا المعلومات", "الأعمال"],
    startDateOptions: ["2025", "2026"],
    marketing: "أوافق على تلقي رسائل تسويقية من جامعة فيكتوريا، بما في ذلك أخبار الفرص المثيرة.",
    yes: "نعم",
    no: "لا",
    privacy: "راجع",
    privacyPolicy: "سياسة الخصوصية",
    dataCollection: "بيان جمع البيانات",
    forMore: "لمزيد من المعلومات.",
    submit: "إرسال",
    success: "🎉 تم إرسال النموذج بنجاح!",
    successDesc: "ستتلقى دليل الدورات عبر بريدك الإلكتروني.",
  },
};

const CourseForm = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  const t = translations[language];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    countryLivingIn: "",
    studyLevel: "",
    areaOfInterest: "",
    startDate: "",
    marketingConsent: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? value : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("courseGuideForms")) || [];
    existing.push(formData);
    localStorage.setItem("courseGuideForms", JSON.stringify(existing));
    setSubmitted(true);
  };

  // RTL/LTR support
  useEffect(() => {
    document.documentElement.dir = ["he", "ar"].includes(language) ? "rtl" : "ltr";
  }, [language]);

  const themeStyles = {
    backgroundColor: darkMode ? "#1e1e1e" : "#fff",
    color: darkMode ? "#e6e6e6" : "#000",
  };

  return (
    <div style={{ ...styles.container, ...themeStyles }}>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={{ ...styles.heading, color: themeStyles.color }}>
            {t.heading}
          </h2>
          <p style={{ color: themeStyles.color }}>
            {t.desc}
          </p>

          <h3 style={{ ...styles.sectionTitle, color: themeStyles.color }}>
            {t.contact}
          </h3>
          <div style={styles.row}>
            <input
              type="text"
              name="firstName"
              placeholder={t.firstName}
              value={formData.firstName}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder={t.lastName}
              value={formData.lastName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.row}>
            <input
              type="email"
              name="email"
              placeholder={t.email}
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder={t.phone}
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <h3 style={{ ...styles.sectionTitle, color: themeStyles.color }}>
            {t.about}
          </h3>
          <div style={styles.row}>
            <select
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">{t.nationality}</option>
              {t.nationalityOptions.map((opt, i) => (
                <option value={opt} key={i}>{opt}</option>
              ))}
            </select>
            <select
              name="countryLivingIn"
              value={formData.countryLivingIn}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">{t.countryLivingIn}</option>
              {t.countryOptions.map((opt, i) => (
                <option value={opt} key={i}>{opt}</option>
              ))}
            </select>
          </div>
          <div style={styles.row}>
            <select
              name="studyLevel"
              value={formData.studyLevel}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">{t.studyLevel}</option>
              {t.studyLevelOptions.map((opt, i) => (
                <option value={opt} key={i}>{opt}</option>
              ))}
            </select>
            <select
              name="areaOfInterest"
              value={formData.areaOfInterest}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">{t.areaOfInterest}</option>
              {t.areaOptions.map((opt, i) => (
                <option value={opt} key={i}>{opt}</option>
              ))}
            </select>
          </div>
          <div style={styles.row}>
            <select
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              style={{ ...styles.input, width: "100%" }}
              required
            >
              <option value="">{t.startDate}</option>
              {t.startDateOptions.map((opt, i) => (
                <option value={opt} key={i}>{opt}</option>
              ))}
            </select>
          </div>

          <div style={{ marginTop: "20px", color: themeStyles.color }}>
            <p><strong>{t.marketing}</strong></p>
            <label>
              <input
                type="radio"
                name="marketingConsent"
                value={t.yes}
                onChange={handleChange}
                required
              />{" "}
              {t.yes}
            </label>{" "}
            <label>
              <input
                type="radio"
                name="marketingConsent"
                value={t.no}
                onChange={handleChange}
              />{" "}
              {t.no}
            </label>
          </div>

          <p style={{ fontSize: "14px", color: themeStyles.color }}>
            {t.privacy} <a href="#">{t.privacyPolicy}</a> {t.forMore} <a href="#">{t.dataCollection}</a>.
          </p>

          <button type="submit" style={styles.button}>
            {t.submit}
          </button>
        </form>
      ) : (
        <div style={styles.successBox}>
          <h3>{t.success}</h3>
          <p>{t.successDesc}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  sectionTitle: {
    fontSize: "18px",
    marginTop: "20px",
    marginBottom: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
  },
  input: {
    flex: "1",
    minWidth: "250px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    marginTop: "20px",
    padding: "12px 24px",
    backgroundColor: "#d9534f",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  successBox: {
    textAlign: "center",
    padding: "30px",
    backgroundColor: "#d4edda",
    color: "#155724",
    borderRadius: "10px",
  },
};

export default CourseForm;
