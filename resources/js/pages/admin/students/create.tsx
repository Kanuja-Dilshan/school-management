import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        student_number: "",
        phone: "",
        address: "",
        date_of_birth: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/admin/students");
    };

    return (
        <>
            <Head title="Add Student" />

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
                                Add a new student
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

                        {/* Heading */}
                        <div style={{ marginBottom: "28px" }}>

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

                            <h2
                                className="page-title"
                                style={{
                                    marginTop: "18px",
                                }}
                            >
                                Add New Student
                            </h2>

                            <p className="page-subtitle">
                                Enter the student's information below.
                            </p>

                        </div>

                        {/* ================= FORM ================= */}
                        <div
                            className="table-container"
                            style={{
                                maxWidth: "900px",
                            }}
                        >

                            <form
                                onSubmit={submit}
                                style={{
                                    padding: "32px",
                                }}
                            >

                                {/* Section */}
                                <div
                                    style={{
                                        marginBottom: "28px",
                                    }}
                                >
                                    <h3
                                        style={{
                                            margin: 0,
                                            fontSize: "19px",
                                            fontWeight: 800,
                                        }}
                                    >
                                        Student Information
                                    </h3>

                                    <p
                                        style={{
                                            marginTop: "6px",
                                            color: "#64748b",
                                            fontSize: "14px",
                                        }}
                                    >
                                        Basic information about the student.
                                    </p>
                                </div>

                                {/* ================= NAME + NUMBER ================= */}
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns:
                                            "repeat(auto-fit, minmax(260px, 1fr))",
                                        gap: "22px",
                                    }}
                                >

                                    <div>
                                        <label className="form-label">
                                            Student Name
                                        </label>

                                        <input
                                            type="text"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData(
                                                    "name",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Enter student name"
                                            className="form-input"
                                        />

                                        {errors.name && (
                                            <p className="form-error">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="form-label">
                                            Student Number
                                        </label>

                                        <input
                                            type="text"
                                            value={data.student_number}
                                            onChange={(e) =>
                                                setData(
                                                    "student_number",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="e.g. STU-001"
                                            className="form-input"
                                        />

                                        {errors.student_number && (
                                            <p className="form-error">
                                                {errors.student_number}
                                            </p>
                                        )}
                                    </div>

                                </div>

                                {/* ================= EMAIL + PHONE ================= */}
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns:
                                            "repeat(auto-fit, minmax(260px, 1fr))",
                                        gap: "22px",
                                        marginTop: "22px",
                                    }}
                                >

                                    <div>
                                        <label className="form-label">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData(
                                                    "email",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="student@example.com"
                                            className="form-input"
                                        />

                                        {errors.email && (
                                            <p className="form-error">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="form-label">
                                            Phone Number
                                        </label>

                                        <input
                                            type="text"
                                            value={data.phone}
                                            onChange={(e) =>
                                                setData(
                                                    "phone",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Enter phone number"
                                            className="form-input"
                                        />

                                        {errors.phone && (
                                            <p className="form-error">
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>

                                </div>

                                {/* ================= PASSWORD + DOB ================= */}
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns:
                                            "repeat(auto-fit, minmax(260px, 1fr))",
                                        gap: "22px",
                                        marginTop: "22px",
                                    }}
                                >

                                    <div>
                                        <label className="form-label">
                                            Password
                                        </label>

                                        <input
                                            type="password"
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Create password"
                                            className="form-input"
                                        />

                                        {errors.password && (
                                            <p className="form-error">
                                                {errors.password}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="form-label">
                                            Date of Birth
                                        </label>

                                        <input
                                            type="date"
                                            value={data.date_of_birth}
                                            onChange={(e) =>
                                                setData(
                                                    "date_of_birth",
                                                    e.target.value
                                                )
                                            }
                                            className="form-input"
                                        />

                                        {errors.date_of_birth && (
                                            <p className="form-error">
                                                {errors.date_of_birth}
                                            </p>
                                        )}
                                    </div>

                                </div>

                                {/* ================= ADDRESS ================= */}
                                <div style={{ marginTop: "22px" }}>

                                    <label className="form-label">
                                        Address
                                    </label>

                                    <textarea
                                        value={data.address}
                                        onChange={(e) =>
                                            setData(
                                                "address",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Enter student's address"
                                        className="form-input"
                                        rows={4}
                                        style={{
                                            resize: "vertical",
                                            minHeight: "110px",
                                        }}
                                    />

                                    {errors.address && (
                                        <p className="form-error">
                                            {errors.address}
                                        </p>
                                    )}

                                </div>

                                {/* ================= BUTTONS ================= */}
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        gap: "12px",
                                        marginTop: "32px",
                                        paddingTop: "24px",
                                        borderTop: "1px solid #e2e8f0",
                                    }}
                                >

                                    <Link
                                        href="/admin/students"
                                        style={{
                                            padding: "12px 22px",
                                            borderRadius: "10px",
                                            background: "#f1f5f9",
                                            color: "#334155",
                                            textDecoration: "none",
                                            fontWeight: 600,
                                            fontSize: "14px",
                                        }}
                                    >
                                        Cancel
                                    </Link>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="btn btn-primary"
                                        style={{
                                            border: "none",
                                            cursor: processing
                                                ? "not-allowed"
                                                : "pointer",
                                            opacity: processing ? 0.7 : 1,
                                        }}
                                    >
                                        {processing
                                            ? "Creating..."
                                            : "✓ Create Student"}
                                    </button>

                                </div>

                            </form>

                        </div>

                    </section>

                </main>

            </div>
        </>
    );
}