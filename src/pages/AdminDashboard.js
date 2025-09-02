import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";
import { Doughnut, Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

// Add translations for AdminDashboard page
const translations = {
  en: {
    dashboard: "Education Admin Dashboard",
    logout: "Logout",
    totalStudents: "Total Students",
    activeStudentsToday: "Active Students Today",
    totalCourses: "Total Courses",
    newEnrollments: "New Enrollments This Month",
    engagement: "User Engagement",
    totalLogins: "Total Logins",
    avgSession: "Avg. Session Time",
    assignments: "Assignments Submitted",
    emailDomains: "User Email Domains",
    registrations: "Registrations Over Last 6 Months",
    studentDetails: "Student Details",
    name: "Name",
    email: "Email",
    lastLogin: "Last Login",
    signupDate: "Signup Date",
    na: "N/A",
  },
  he: {
    dashboard: "לוח ניהול חינוך",
    logout: "התנתק",
    totalStudents: "סה\"כ תלמידים",
    activeStudentsToday: "תלמידים פעילים היום",
    totalCourses: "סה\"כ קורסים",
    newEnrollments: "הרשמות חדשות החודש",
    engagement: "מעורבות משתמשים",
    totalLogins: "סה\"כ כניסות",
    avgSession: "משך ממוצע למפגש",
    assignments: "משימות שהוגשו",
    emailDomains: "דומיינים של מיילים",
    registrations: "הרשמות ב-6 חודשים אחרונים",
    studentDetails: "פרטי תלמידים",
    name: "שם",
    email: "אימייל",
    lastLogin: "כניסה אחרונה",
    signupDate: "תאריך הרשמה",
    na: "לא זמין",
  },
  ar: {
    dashboard: "لوحة إدارة التعليم",
    logout: "تسجيل خروج",
    totalStudents: "إجمالي الطلاب",
    activeStudentsToday: "الطلاب النشطون اليوم",
    totalCourses: "إجمالي الدورات",
    newEnrollments: "التحاق جديد هذا الشهر",
    engagement: "تفاعل المستخدمين",
    totalLogins: "إجمالي تسجيلات الدخول",
    avgSession: "متوسط مدة الجلسة",
    assignments: "الواجبات المقدمة",
    emailDomains: "نطاقات البريد الإلكتروني",
    registrations: "التسجيلات خلال آخر 6 أشهر",
    studentDetails: "تفاصيل الطلاب",
    name: "الاسم",
    email: "البريد الإلكتروني",
    lastLogin: "آخر تسجيل دخول",
    signupDate: "تاريخ التسجيل",
    na: "غير متوفر",
  },
};

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [logins, setLogins] = useState({});
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const t = translations[language];

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("users")) || [];
    const localLogins = JSON.parse(localStorage.getItem("userLogins")) || {};
    const localCourses = JSON.parse(localStorage.getItem("courses")) || [];
    const localAssignments = JSON.parse(localStorage.getItem("assignments")) || [];

    setUsers(localUsers);
    setLogins(localLogins);
    setCourses(localCourses);
    setAssignments(localAssignments);
    document.documentElement.dir = ["he", "ar"].includes(language) ? "rtl" : "ltr";
  }, [language]);

  const today = new Date().toISOString().split("T")[0];
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const totalStudents = users.length;
  const activeStudentsToday = Object.values(logins).filter((time) =>
    time.startsWith(today)
  ).length;

  const totalCourses = courses.length;
  const enrollmentsThisMonth = users.filter((user) => {
    if (!user.createdAt) return false;
    const date = new Date(user.createdAt);
    return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
  }).length;

  const assignmentsThisMonth = assignments.filter((a) => {
    if (!a.submittedAt) return false;
    const date = new Date(a.submittedAt);
    return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
  }).length;

  const totalLogins = Object.keys(logins).length;
  const avgSessionMins = 25;

  const emailDomains = {};
  users.forEach((user) => {
    const domain = user.email.split("@")[1];
    emailDomains[domain] = (emailDomains[domain] || 0) + 1;
  });

  const registrationsByMonth = new Array(6).fill(0);
  users.forEach((user) => {
    if (!user.createdAt) return;
    const d = new Date(user.createdAt);
    const monthDiff =
      (currentYear - d.getFullYear()) * 12 + (currentMonth - d.getMonth());
    if (monthDiff >= 0 && monthDiff < 6) registrationsByMonth[5 - monthDiff]++;
  });

  const doughnutData = {
    labels: Object.keys(emailDomains),
    datasets: [
      {
        data: Object.values(emailDomains),
        backgroundColor: [
          "#ff4a57",
          "#ff6b75",
          "#ff2d45",
          "#ff7f8a",
          "#ff5b64",
          "#ff1c34",
          "#ff8c96",
        ],
        hoverOffset: 30,
      },
    ],
  };

  const monthLabels = [];
  for (let i = 5; i >= 0; i--) {
    const d = new Date(currentYear, currentMonth - i, 1);
    monthLabels.push(d.toLocaleString("default", { month: "short" }));
  }

  const barData = {
    labels: monthLabels,
    datasets: [
      {
        label: t.registrations,
        data: registrationsByMonth,
        backgroundColor: "#ff4a57",
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="admin-dashboard-container">
        <header className="dashboard-header">
          <h1>{t.dashboard}</h1>
          <button
            className="btn-logout"
            onClick={() => {
              localStorage.removeItem("loggedInUserEmail");
              navigate("/welcome");
            }}
          >
            {t.logout}
          </button>
        </header>

        {/* First 4 cards only */}
        <section className="overview-cards">
          <div className="card gradient-pink">
            <h3>{t.totalStudents}</h3>
            <p>{totalStudents}</p>
          </div>
          <div className="card gradient-pink-light">
            <h3>{t.activeStudentsToday}</h3>
            <p>{activeStudentsToday}</p>
          </div>
          <div className="card gradient-pink">
            <h3>{t.totalCourses}</h3>
            <p>{totalCourses}</p>
          </div>
          <div className="card gradient-pink-light">
            <h3>{t.newEnrollments}</h3>
            <p>{enrollmentsThisMonth}</p>
          </div>
        </section>

        {/* Engagement card including Assignments Submitted */}
        <section className="engagement-section">
          <div className="card engagement-card">
            <h3>{t.engagement}</h3>
            <p>
              <strong>{t.totalLogins}:</strong> {totalLogins}
            </p>
            <p>
              <strong>{t.avgSession}:</strong> {avgSessionMins} mins
            </p>
            <p>
              <strong>{t.assignments}:</strong> {assignmentsThisMonth}
            </p>
          </div>
        </section>

        <section className="charts-section">
          <div className="chart-card doughnut-small">
            <h3>{t.emailDomains}</h3>
            <Doughnut data={doughnutData} />
          </div>
          <div className="chart-card bar-large">
            <h3>{t.registrations}</h3>
            <Bar data={barData} />
          </div>
        </section>

        <section className="users-table-section">
          <h2>{t.studentDetails}</h2>
          <table className="users-table">
            <thead>
              <tr>
                <th>{t.name}</th>
                <th>{t.email}</th>
                <th>{t.lastLogin}</th>
                <th>{t.signupDate}</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email}>
                  <td>{`${user.firstName} ${user.lastName}`}</td>
                  <td>{user.email}</td>
                  <td>
                    {logins[user.email]
                      ? new Date(logins[user.email]).toLocaleString()
                      : t.na}
                  </td>
                  <td>
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : t.na}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;
