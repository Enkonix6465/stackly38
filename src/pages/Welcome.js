import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import loginBg from "../images/login.jpg";
import logoImg from "../images/logo.png"; // <-- Import your logo image

// Add translations for Welcome page
const translations = {
  en: {
    welcome: "Welcome to",
    brand: "STACKLY",
    email: "Email",
    password: "Password",
    forgot: "Forgot Password?",
    login: "Login",
    dontHave: "Don’t have an account?",
    signUp: "Sign Up",
    firstName: "First Name",
    lastName: "Last Name",
    already: "Already have an account?",
    reset: "Reset Password",
    enterEmail: "Enter your email",
    sendReset: "Send Reset Link",
    back: "Back to Login",
    signupSuccess: "Signup successful! Please login.",
    invalid: "Invalid email or password.",
    adminEmail: "Cannot register with admin email.",
    exists: "User already exists with this email.",
    noUser: "No user found with this email.",
    resetMsg: "User found. Please check your email for password reset instructions. (Simulation)",
  },
  he: {
    welcome: "ברוכים הבאים ל",
    brand: "STACKLY",
    email: "אימייל",
    password: "סיסמה",
    forgot: "שכחת סיסמה?",
    login: "התחבר",
    dontHave: "אין לך חשבון?",
    signUp: "הרשמה",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    already: "כבר יש לך חשבון?",
    reset: "איפוס סיסמה",
    enterEmail: "הזן את האימייל שלך",
    sendReset: "שלח קישור איפוס",
    back: "חזרה להתחברות",
    signupSuccess: "ההרשמה הצליחה! אנא התחבר.",
    invalid: "אימייל או סיסמה לא נכונים.",
    adminEmail: "לא ניתן להירשם עם אימייל מנהל.",
    exists: "משתמש כבר קיים עם אימייל זה.",
    noUser: "לא נמצא משתמש עם אימייל זה.",
    resetMsg: "משתמש נמצא. בדוק את האימייל שלך להוראות איפוס (סימולציה).",
  },
  ar: {
    welcome: "مرحبًا بك في",
    brand: "STACKLY",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    forgot: "هل نسيت كلمة المرور؟",
    login: "تسجيل الدخول",
    dontHave: "ليس لديك حساب؟",
    signUp: "إنشاء حساب",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    already: "لديك حساب بالفعل؟",
    reset: "إعادة تعيين كلمة المرور",
    enterEmail: "أدخل بريدك الإلكتروني",
    sendReset: "إرسال رابط إعادة التعيين",
    back: "العودة لتسجيل الدخول",
    signupSuccess: "تم التسجيل بنجاح! الرجاء تسجيل الدخول.",
    invalid: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
    adminEmail: "لا يمكن التسجيل ببريد المدير.",
    exists: "يوجد مستخدم بهذا البريد الإلكتروني.",
    noUser: "لا يوجد مستخدم بهذا البريد.",
    resetMsg: "تم العثور على المستخدم. تحقق من بريدك لإرشادات إعادة التعيين (محاكاة).",
  },
};

const Welcome = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (
      loginData.email === "admin@enkonix.in" &&
      loginData.password === "admin123"
    ) {
      setError("");
      localStorage.setItem("loggedInUserEmail", loginData.email);
      const logins = JSON.parse(localStorage.getItem("userLogins")) || {};
      logins[loginData.email] = new Date().toISOString();
      localStorage.setItem("userLogins", JSON.stringify(logins));
      navigate("/AdminDashboard");
      return;
    }

    const user = users.find(
      (user) =>
        user.email === loginData.email &&
        user.password === loginData.password
    );

    if (user) {
      setError("");
      localStorage.setItem("loggedInUserEmail", user.email);
      const logins = JSON.parse(localStorage.getItem("userLogins")) || {};
      logins[user.email] = new Date().toISOString();
      localStorage.setItem("userLogins", JSON.stringify(logins));
      navigate("/home");
    } else {
      setError(t.invalid);
    }
  };

  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (signUpData.email === "admin@enkonix.in") {
      setError(t.adminEmail);
      return;
    }

    if (users.find((user) => user.email === signUpData.email)) {
      setError(t.exists);
      return;
    }

    users.push(signUpData);
    localStorage.setItem("users", JSON.stringify(users));
    setError("");
    alert(t.signupSuccess);
    setSignUpData({ firstName: "", lastName: "", email: "", password: "" });
    setIsLogin(true);
  };

  const handleForgotPasswordChange = (e) => {
    setForgotEmail(e.target.value);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === forgotEmail);

    if (!user) {
      setError(t.noUser);
      setResetMessage("");
    } else {
      setError("");
      setResetMessage(t.resetMsg);
    }
  };

  // RTL/LTR support
  React.useEffect(() => {
    document.documentElement.dir = ["he", "ar"].includes(language) ? "rtl" : "ltr";
  }, [language]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Logo image at the top, clickable to toggle login/signup */}
        <div style={styles.logoWrapper}>
          <img
            src={logoImg}
            alt="Stackly Logo"
            style={styles.logoImg}
            onClick={() => {
              setError("");
              setIsLogin((prev) => !prev);
            }}
          />
        </div>
        <h1 style={styles.heading}>
          {t.welcome} <span style={styles.brand}>{t.brand}</span>
        </h1>

        {!isForgotPassword ? (
          isLogin ? (
            <form onSubmit={handleLoginSubmit} style={styles.form}>
              <label style={styles.label}>
                {t.email} <span style={styles.required}>*</span>
              </label>
              <input
                style={styles.input}
                type="email"
                name="email"
                placeholder={t.email}
                value={loginData.email}
                onChange={handleLoginChange}
                required
              />
              <label style={styles.label}>
                {t.password} <span style={styles.required}>*</span>
              </label>
              <input
                style={styles.input}
                type="password"
                name="password"
                placeholder={t.password}
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />
              <p
                style={styles.link}
                onClick={() => {
                  setError("");
                  setIsForgotPassword(true);
                }}
              >
                {t.forgot}
              </p>
              <button style={styles.button} type="submit">
                {t.login}
              </button>
              <div style={styles.toggle}>
                Don’t have an account?{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setError("");
                    setIsLogin(false);
                  }}
                >
                  {t.signUp}
                </span>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSignUpSubmit} style={styles.form}>
              <label style={styles.label}>
                {t.firstName} <span style={styles.required}>*</span>
              </label>
              <input
                style={styles.input}
                type="text"
                name="firstName"
                placeholder={t.firstName}
                value={signUpData.firstName}
                onChange={handleSignUpChange}
                required
              />
              <label style={styles.label}>
                {t.lastName} <span style={styles.required}>*</span>
              </label>
              <input
                style={styles.input}
                type="text"
                name="lastName"
                placeholder={t.lastName}
                value={signUpData.lastName}
                onChange={handleSignUpChange}
                required
              />
              <label style={styles.label}>
                {t.email} <span style={styles.required}>*</span>
              </label>
              <input
                style={styles.input}
                type="email"
                name="email"
                placeholder={t.email}
                value={signUpData.email}
                onChange={handleSignUpChange}
                required
              />
              <label style={styles.label}>
                {t.password} <span style={styles.required}>*</span>
              </label>
              <input
                style={styles.input}
                type="password"
                name="password"
                placeholder={t.password}
                value={signUpData.password}
                onChange={handleSignUpChange}
                required
              />
              <button style={styles.button} type="submit">
                {t.signUp}
              </button>
              <div style={styles.toggle}>
                Already have an account?{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setError("");
                    setIsLogin(true);
                  }}
                >
                  {t.login}
                </span>
              </div>
            </form>
          )
        ) : (
          <form onSubmit={handleForgotPasswordSubmit} style={styles.form}>
            <h2 style={styles.subheading}>{t.reset}</h2>
            <label style={styles.label}>
              {t.email} <span style={styles.required}>*</span>
            </label>
            <input
              style={styles.input}
              type="email"
              placeholder={t.enterEmail}
              value={forgotEmail}
              onChange={handleForgotPasswordChange}
              required
            />
            <button style={styles.button} type="submit">
              {t.sendReset}
            </button>
            <p
              style={styles.toggle}
              onClick={() => {
                setError("");
                setResetMessage("");
                setIsForgotPassword(false);
              }}
            >
              {t.back}
            </p>
          </form>
        )}

        {error && <p style={styles.error}>{error}</p>}
        {resetMessage && <p style={styles.success}>{resetMessage}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    backgroundImage: `url(${loginBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  card: {
    background: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(12px)",
    borderRadius: "16px",
    padding: "40px 30px",
    maxWidth: "400px",
    width: "100%",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.8)",
    color: "white",
  },
  logoWrapper: {
    textAlign: "center",
    marginBottom: "10px",
  },
  logoImg: {
    height: "60px",
    cursor: "pointer",
    userSelect: "none",
  },
  heading: {
    fontSize: "28px",
    textAlign: "center",
    marginBottom: "20px",
  },
  brand: {
    color: "#ff4a57",
    textShadow: "0 1px 6px rgba(255, 74, 87, 0.7)",
  },
  subheading: {
    fontSize: "22px",
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid rgba(255, 74, 87, 0.5)",
    background: "rgba(0, 0, 0, 0.3)",
    color: "#ff4a57",
    fontSize: "16px",
    outline: "none",
  },
  button: {
    padding: "12px",
    backgroundColor: "#d83645",
    border: "none",
    borderRadius: "8px",
    color: "#ffb3b8",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  toggle: {
    textAlign: "center",
    color: "#ff8c96",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "10px",
  },
  link: {
    textAlign: "right",
    fontSize: "13px",
    color: "#ff8c96",
    cursor: "pointer",
    textDecoration: "underline",
    marginBottom: "-10px",
  },
  error: {
    color: "#ff6b6b",
    marginTop: "10px",
    textAlign: "center",
  },
  success: {
    color: "#ffb3b8",
    marginTop: "10px",
    textAlign: "center",
  },
  label: {
    fontSize: "14px",
    color: "#ffb3b8",
    marginBottom: "5px",
    textAlign: "left",
  },
  required: {
    color: "#ff6b6b",
    marginLeft: "5px",
  },
};

export default Welcome;
