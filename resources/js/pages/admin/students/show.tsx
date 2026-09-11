import React from "react";
import { Head, Link, router } from "@inertiajs/react";

interface Student {
    id: number;
    student_number: string;
    phone?: string;
    address?: string;
    date_of_birth?: string;
    user: {
        name: string;
        email: string;
    };
}

interface ShowProps {
    student: Student;
}

export default function Show({ student }: ShowProps) {
    const deleteStudent = () => {
        if (confirm("Are you sure you want to delete this student?")) {
            router.delete(`/admin/students/${student.id}`);
        }
    };

    return (
        <>
            <Head title="Student Details" />

            <div className="dashboard-layout">

                {/* ================= SIDEBAR ================= */}
                <aside className="sidebar">

                    <div className="sidebar-logo">
                        <div className="sidebar-logo-icon">
                            🎓
                        </div>

                        <span>
                            School
                            <br />
                            Management
                        </span>
                    </div>

                    <nav className="sidebar-menu">

                        <Link
                            href="/dashboard"
                            className="sidebar-link"
                        >
                            🏠
                            <span>Dashboard</span>
                        </Link>

                        <Link
                            href="/admin/students"
                            className="sidebar-link active"
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
                            href="/student/applications"
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
                        <Link
                            href="/logout"
                            className="sidebar-link"
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            🚪
                            <span>Logout</span>
                        </Link>
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
                                Students
                            </h1>

                            <span
                                style={{
                                    fontSize: "13px",
                                    color: "#64748b",
                                }}
                            >
                                Student details
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

                    {/* ================= CONTENT ================= */}
                    <section className="dashboard-content">

                        {/* Back */}
                        <Link
                            href="/admin/students"
                            style={{
                                textDecoration: "none",
                                color: "#4f46e5",
                                fontSize: "14px",
                                fontWeight: 600,
                            }}
                        >
                            ← Back to Students
                        </Link>

                        {/* Title */}
                        <div
                            style={{
                                marginTop: "22px",
                                marginBottom: "28px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: "20px",
                                flexWrap: "wrap",
                            }}
                        >

                            <div>
                                <h2 className="page-title">
                                    Student Details
                                </h2>

                                <p className="page-subtitle">
                                    View complete information about this
                                    student.
                                </p>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                }}
                            >
                                <Link
                                    href={`/admin/students/${student.id}/edit`}
                                    style={{
                                        textDecoration: "none",
                                        padding: "11px 18px",
                                        borderRadius: "10px",
                                        background: "#eef2ff",
                                        color: "#4f46e5",
                                        fontSize: "14px",
                                        fontWeight: 700,
                                    }}
                                >
                                    ✏ Edit Student
                                </Link>

                                <button
                                    onClick={deleteStudent}
                                    style={{
                                        padding: "11px 18px",
                                        border: "none",
                                        borderRadius: "10px",
                                        background: "#fee2e2",
                                        color: "#dc2626",
                                        fontSize: "14px",
                                        fontWeight: 700,
                                        cursor: "pointer",
                                    }}
                                >
                                    🗑 Delete
                                </button>
                            </div>

                        </div>

                        {/* ================= PROFILE CARD ================= */}
                        <div
                            className="table-container"
                            style={{
                                padding: "30px",
                            }}
                        >

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "20px",
                                    paddingBottom: "28px",
                                    borderBottom:
                                        "1px solid #e2e8f0",
                                }}
                            >

                                {/* Avatar */}
                                <div
                                    style={{
                                        width: "78px",
                                        height: "78px",
                                        borderRadius: "20px",
                                        background:
                                            "linear-gradient(135deg, #eef2ff, #e0e7ff)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "34px",
                                    }}
                                >
                                    {student.user.name
                                        .charAt(0)
                                        .toUpperCase()}
                                </div>

                                <div>

                                    <h3
                                        style={{
                                            margin: 0,
                                            fontSize: "25px",
                                            fontWeight: 800,
                                            color: "#0f172a",
                                        }}
                                    >
                                        {student.user.name}
                                    </h3>

                                    <p
                                        style={{
                                            margin:
                                                "6px 0 10px",
                                            color: "#64748b",
                                            fontSize: "14px",
                                        }}
                                    >
                                        {student.student_number}
                                    </p>

                                    <span
                                        style={{
                                            display: "inline-block",
                                            padding:
                                                "6px 14px",
                                            borderRadius:
                                                "999px",
                                            background:
                                                "#dcfce7",
                                            color:
                                                "#15803d",
                                            fontSize: "12px",
                                            fontWeight: 700,
                                        }}
                                    >
                                        ● Active
                                    </span>

                                </div>

                            </div>

                            {/* ================= INFORMATION ================= */}
                            <div style={{ paddingTop: "28px" }}>

                                <h3
                                    style={{
                                        margin:
                                            "0 0 20px",
                                        fontSize: "19px",
                                        fontWeight: 800,
                                    }}
                                >
                                    Personal Information
                                </h3>

                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns:
                                            "repeat(auto-fit, minmax(250px, 1fr))",
                                        gap: "18px",
                                    }}
                                >

                                    {/* Student Number */}
                                    <div className="detail-box">
                                        <span className="detail-label">
                                            Student Number
                                        </span>

                                        <strong>
                                            {student.student_number}
                                        </strong>
                                    </div>

                                    {/* Email */}
                                    <div className="detail-box">
                                        <span className="detail-label">
                                            Email Address
                                        </span>

                                        <strong>
                                            {student.user.email}
                                        </strong>
                                    </div>

                                    {/* Phone */}
                                    <div className="detail-box">
                                        <span className="detail-label">
                                            Phone Number
                                        </span>

                                        <strong>
                                            {student.phone ||
                                                "Not provided"}
                                        </strong>
                                    </div>

                                    {/* Date */}
                                    <div className="detail-box">
                                        <span className="detail-label">
                                            Date of Birth
                                        </span>

                                        <strong>
                                            {student.date_of_birth ||
                                                "Not provided"}
                                        </strong>
                                    </div>

                                </div>

                                {/* Address */}
                                <div
                                    className="detail-box"
                                    style={{
                                        marginTop: "18px",
                                    }}
                                >
                                    <span className="detail-label">
                                        Address
                                    </span>

                                    <strong>
                                        {student.address ||
                                            "Not provided"}
                                    </strong>
                                </div>

                            </div>

                        </div>

                    </section>

                </main>

            </div>
        </>
    );
}