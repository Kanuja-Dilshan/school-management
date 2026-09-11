import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";

interface Student {
    id: number;
    student_number: string;
    user: {
        name: string;
        email: string;
    };
}

interface StudentsData {
    data: Student[];
    current_page?: number;
    last_page?: number;
    total?: number;
}

interface StudentsProps {
    students: StudentsData;
}

export default function Students({ students }: StudentsProps) {
    const [search, setSearch] = useState("");

    const filteredStudents = students.data.filter((student) => {
        const text =
            `${student.student_number} ${student.user.name} ${student.user.email}`
                .toLowerCase();

        return text.includes(search.toLowerCase());
    });

    const deleteStudent = (id: number) => {
        if (confirm("Are you sure you want to delete this student?")) {
            router.delete(`/admin/students/${id}`);
        }
    };

    const logout = () => {
        router.post("/logout");
    };

    return (
        <>
            <Head title="Students" />

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
                                Students
                            </h1>

                            <span
                                style={{
                                    fontSize: "13px",
                                    color: "#64748b",
                                }}
                            >
                                Manage all registered students
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

                        {/* Page heading */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "20px",
                                flexWrap: "wrap",
                            }}
                        >
                            <div>
                                <h2 className="page-title">
                                    Students
                                </h2>

                                <p className="page-subtitle">
                                    View, add, edit and manage students.
                                </p>
                            </div>

                            <Link
                                href="/admin/students/create"
                                className="btn btn-primary"
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                + Add Student
                            </Link>
                        </div>

                        {/* ================= SEARCH ================= */}
                        <div
                            style={{
                                marginTop: "28px",
                                background: "white",
                                border: "1px solid #e2e8f0",
                                borderRadius: "16px",
                                padding: "18px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "20px",
                                    }}
                                >
                                    🔎
                                </span>

                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(e.target.value)
                                    }
                                    placeholder="Search by student number, name or email..."
                                    style={{
                                        width: "100%",
                                        border: "none",
                                        outline: "none",
                                        fontSize: "14px",
                                        color: "#334155",
                                    }}
                                />
                            </div>
                        </div>

                        {/* ================= STUDENT TABLE ================= */}
                        <div className="table-container">

                            <div
                                style={{
                                    padding: "22px 24px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    borderBottom: "1px solid #e2e8f0",
                                }}
                            >
                                <div>
                                    <h3
                                        style={{
                                            margin: 0,
                                            fontSize: "18px",
                                            fontWeight: 800,
                                        }}
                                    >
                                        Student List
                                    </h3>

                                    <p
                                        style={{
                                            margin: "5px 0 0",
                                            fontSize: "13px",
                                            color: "#64748b",
                                        }}
                                    >
                                        {filteredStudents.length} student
                                        {filteredStudents.length !== 1
                                            ? "s"
                                            : ""}
                                    </p>
                                </div>
                            </div>

                            <div
                                style={{
                                    overflowX: "auto",
                                }}
                            >
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Student Number</th>
                                            <th>Student</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th
                                                style={{
                                                    textAlign: "center",
                                                }}
                                            >
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {filteredStudents.length > 0 ? (
                                            filteredStudents.map(
                                                (student) => (
                                                    <tr key={student.id}>

                                                        {/* Number */}
                                                        <td>
                                                            <span
                                                                style={{
                                                                    fontWeight: 700,
                                                                    color:
                                                                        "#4f46e5",
                                                                }}
                                                            >
                                                                {
                                                                    student.student_number
                                                                }
                                                            </span>
                                                        </td>

                                                        {/* Name */}
                                                        <td>
                                                            <div
                                                                style={{
                                                                    display:
                                                                        "flex",
                                                                    alignItems:
                                                                        "center",
                                                                    gap: "12px",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        width:
                                                                            "38px",
                                                                        height:
                                                                            "38px",
                                                                        borderRadius:
                                                                            "50%",
                                                                        background:
                                                                            "#eef2ff",
                                                                        display:
                                                                            "flex",
                                                                        alignItems:
                                                                            "center",
                                                                        justifyContent:
                                                                            "center",
                                                                        fontWeight:
                                                                            700,
                                                                        color:
                                                                            "#4f46e5",
                                                                    }}
                                                                >
                                                                    {student.user.name
                                                                        .charAt(
                                                                            0
                                                                        )
                                                                        .toUpperCase()}
                                                                </div>

                                                                <span
                                                                    style={{
                                                                        fontWeight:
                                                                            600,
                                                                    }}
                                                                >
                                                                    {
                                                                        student
                                                                            .user
                                                                            .name
                                                                    }
                                                                </span>
                                                            </div>
                                                        </td>

                                                        {/* Email */}
                                                        <td>
                                                            {
                                                                student.user
                                                                    .email
                                                            }
                                                        </td>

                                                        {/* Status */}
                                                        <td>
                                                            <span
                                                                style={{
                                                                    display:
                                                                        "inline-block",
                                                                    padding:
                                                                        "6px 12px",
                                                                    borderRadius:
                                                                        "999px",
                                                                    background:
                                                                        "#dcfce7",
                                                                    color:
                                                                        "#15803d",
                                                                    fontSize:
                                                                        "12px",
                                                                    fontWeight:
                                                                        700,
                                                                }}
                                                            >
                                                                Active
                                                            </span>
                                                        </td>

                                                        {/* Actions */}
                                                        <td>
                                                            <div
                                                                style={{
                                                                    display:
                                                                        "flex",
                                                                    justifyContent:
                                                                        "center",
                                                                    gap: "8px",
                                                                    flexWrap:
                                                                        "wrap",
                                                                }}
                                                            >

                                                                <Link
                                                                    href={`/admin/students/${student.id}`}
                                                                    style={{
                                                                        textDecoration:
                                                                            "none",
                                                                        padding:
                                                                            "8px 12px",
                                                                        borderRadius:
                                                                            "8px",
                                                                        background:
                                                                            "#eef2ff",
                                                                        color:
                                                                            "#4f46e5",
                                                                        fontSize:
                                                                            "13px",
                                                                        fontWeight:
                                                                            600,
                                                                    }}
                                                                >
                                                                    👁 View
                                                                </Link>

                                                                <Link
                                                                    href={`/admin/students/${student.id}/edit`}
                                                                    style={{
                                                                        textDecoration:
                                                                            "none",
                                                                        padding:
                                                                            "8px 12px",
                                                                        borderRadius:
                                                                            "8px",
                                                                        background:
                                                                            "#f1f5f9",
                                                                        color:
                                                                            "#334155",
                                                                        fontSize:
                                                                            "13px",
                                                                        fontWeight:
                                                                            600,
                                                                    }}
                                                                >
                                                                    ✏ Edit
                                                                </Link>

                                                                <button
                                                                    onClick={() =>
                                                                        deleteStudent(
                                                                            student.id
                                                                        )
                                                                    }
                                                                    style={{
                                                                        padding:
                                                                            "8px 12px",
                                                                        border:
                                                                            "none",
                                                                        borderRadius:
                                                                            "8px",
                                                                        background:
                                                                            "#fee2e2",
                                                                        color:
                                                                            "#dc2626",
                                                                        fontSize:
                                                                            "13px",
                                                                        fontWeight:
                                                                            600,
                                                                        cursor:
                                                                            "pointer",
                                                                    }}
                                                                >
                                                                    🗑 Delete
                                                                </button>

                                                            </div>
                                                        </td>

                                                    </tr>
                                                )
                                            )
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan={5}
                                                    style={{
                                                        textAlign: "center",
                                                        padding: "60px 20px",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            fontSize: "42px",
                                                            marginBottom:
                                                                "12px",
                                                        }}
                                                    >
                                                        👨‍🎓
                                                    </div>

                                                    <h3
                                                        style={{
                                                            margin: 0,
                                                            fontSize: "18px",
                                                            fontWeight: 700,
                                                        }}
                                                    >
                                                        No students found
                                                    </h3>

                                                    <p
                                                        style={{
                                                            color: "#64748b",
                                                            margin:
                                                                "8px 0 20px",
                                                        }}
                                                    >
                                                        Try another search or
                                                        add a new student.
                                                    </p>

                                                    <Link
                                                        href="/admin/students/create"
                                                        className="btn btn-primary"
                                                        style={{
                                                            textDecoration:
                                                                "none",
                                                        }}
                                                    >
                                                        + Add Student
                                                    </Link>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </section>

                </main>
            </div>
        </>
    );
}