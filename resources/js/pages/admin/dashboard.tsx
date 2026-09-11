import React from "react";
import { Head, Link, router } from "@inertiajs/react";

interface DashboardProps {
    students?: number;
    teachers?: number;
    subjects?: number;
    applications?: number;
}

export default function Dashboard({
    students = 0,
    teachers = 0,
    subjects = 0,
    applications = 0,
}: DashboardProps) {
    const logout = () => {
        router.post("/logout");
    };

    return (
        <>
            <Head title="Admin Dashboard" />

            <div className="dashboard-layout">

                {/* ================= SIDEBAR ================= */}
                <aside className="sidebar">

                    <div className="sidebar-logo">
                        <div className="sidebar-logo-icon">
                            🎓
                        </div>

                        <span>School Management</span>
                    </div>

                    <nav className="sidebar-menu">

                        <Link
                            href="/dashboard"
                            className="sidebar-link active"
                        >
                            🏠
                            <span>Dashboard</span>
                        </Link>

                        <Link
                            href="/admin/students"
                            className="sidebar-link"
                        >
                            👨‍🎓
                            <span>Students</span>
                        </Link>

                        <Link
                            href="/admin/teachers"
                            className="sidebar-link"
                        >
                            👨‍🏫
                            <span>Teachers</span>
                        </Link>

                        <Link
                            href="/admin/subjects"
                            className="sidebar-link"
                        >
                            📚
                            <span>Subjects</span>
                        </Link>
<Link
    href="/admin/applications"
    className="sidebar-link"
>
    📝
    <span>Applications</span>
</Link>

                    </nav>

                    <div
                        style={{
                            position: "absolute",
                            left: "16px",
                            right: "16px",
                            bottom: "24px",
                        }}
                    >
                        <button
                            onClick={logout}
                            className="sidebar-link"
                            style={{
                                width: "100%",
                                border: "none",
                                background: "transparent",
                                cursor: "pointer",
                                textAlign: "left",
                            }}
                        >
                            🚪
                            <span>Logout</span>
                        </button>
                    </div>

                </aside>

                {/* ================= MAIN ================= */}
                <main className="dashboard-main">

                    {/* Header */}
                    <header className="dashboard-header">

                        <div>
                            <h1
                                style={{
                                    margin: 0,
                                    fontSize: "18px",
                                    fontWeight: 700,
                                }}
                            >
                                Admin Dashboard
                            </h1>

                            <span
                                style={{
                                    fontSize: "13px",
                                    color: "#64748b",
                                }}
                            >
                                School Management System
                            </span>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                            }}
                        >
                            <div
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    background:
                                        "linear-gradient(135deg, #4f46e5, #6366f1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    fontWeight: 700,
                                }}
                            >
                                A
                            </div>

                            <div>
                                <div
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: 700,
                                    }}
                                >
                                    Administrator
                                </div>

                                <div
                                    style={{
                                        fontSize: "12px",
                                        color: "#64748b",
                                    }}
                                >
                                    admin@school.com
                                </div>
                            </div>
                        </div>

                    </header>

                    {/* Content */}
                    <section className="dashboard-content">

                        <div>
                            <h2 className="page-title">
                                Welcome back, Admin 👋
                            </h2>

                            <p className="page-subtitle">
                                Here's what's happening in your school today.
                            </p>
                        </div>

                        {/* ================= STATS ================= */}
                        <div className="stats-grid">

                            <div className="stat-card">
                                <div className="stat-card-icon">
                                    👨‍🎓
                                </div>

                                <h3>{students}</h3>

                                <p>Total Students</p>
                            </div>

                            <div className="stat-card">
                                <div className="stat-card-icon">
                                    👨‍🏫
                                </div>

                                <h3>{teachers}</h3>

                                <p>Total Teachers</p>
                            </div>

                            <div className="stat-card">
                                <div className="stat-card-icon">
                                    📚
                                </div>

                                <h3>{subjects}</h3>

                                <p>Total Subjects</p>
                            </div>

                            <div className="stat-card">
                                <div className="stat-card-icon">
                                    📝
                                </div>

                                <h3>{applications}</h3>

                                <p>Applications</p>
                            </div>

                        </div>

                        {/* ================= QUICK ACTIONS ================= */}
                        <div
                            style={{
                                marginTop: "32px",
                                display: "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fit, minmax(220px, 1fr))",
                                gap: "20px",
                            }}
                        >

                            <Link
                                href="/admin/students/create"
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                <div className="stat-card">
                                    <div className="stat-card-icon">
                                        ➕
                                    </div>

                                    <h3
                                        style={{
                                            fontSize: "18px",
                                        }}
                                    >
                                        Add Student
                                    </h3>

                                    <p>
                                        Register a new student
                                    </p>
                                </div>
                            </Link>

                            <Link
                                href="/admin/teachers/create"
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                <div className="stat-card">
                                    <div className="stat-card-icon">
                                        👨‍🏫
                                    </div>

                                    <h3
                                        style={{
                                            fontSize: "18px",
                                        }}
                                    >
                                        Add Teacher
                                    </h3>

                                    <p>
                                        Register a new teacher
                                    </p>
                                </div>
                            </Link>

                            <Link
                                href="/admin/subjects/create"
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                <div className="stat-card">
                                    <div className="stat-card-icon">
                                        📖
                                    </div>

                                    <h3
                                        style={{
                                            fontSize: "18px",
                                        }}
                                    >
                                        Add Subject
                                    </h3>

                                    <p>
                                        Create a new subject
                                    </p>
                                </div>
                            </Link>

                        </div>

                        {/* ================= WELCOME CARD ================= */}
                        <div
                            className="table-container"
                            style={{
                                padding: "30px",
                            }}
                        >
                            <h2
                                style={{
                                    margin: "0 0 10px",
                                    fontSize: "20px",
                                    fontWeight: 800,
                                }}
                            >
                                School Management System
                            </h2>

                            <p
                                style={{
                                    margin: 0,
                                    color: "#64748b",
                                    lineHeight: 1.7,
                                }}
                            >
                                Manage your students, teachers, subjects
                                and applications from one centralized
                                dashboard.
                            </p>
                        </div>

                    </section>

                </main>

            </div>
        </>
    );
}