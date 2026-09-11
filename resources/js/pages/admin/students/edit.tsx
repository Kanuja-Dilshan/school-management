import React, { FormEvent } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ student }: any) {
    const { data, setData, put, processing, errors } = useForm({
        name: student.user?.name ?? "",
        email: student.user?.email ?? "",
        student_number: student.student_number ?? "",
        phone: student.phone ?? "",
        address: student.address ?? "",
        date_of_birth: student.date_of_birth
            ? student.date_of_birth.substring(0, 10)
            : "",
    });
    
const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updateUrl = `/admin/students/${student.id}`;

    console.log("Student ID:", student.id);
    console.log("Update URL:", updateUrl);

    put(updateUrl, {
        preserveScroll: true,
    });
};
    return (
        <>
            <Head title="Edit Student" />

            <div className="min-h-screen bg-slate-50">

                {/* Sidebar */}
                <aside className="fixed left-0 top-0 h-screen w-[315px] bg-[#0f172a] text-white px-5 py-8">

                    {/* Logo */}
                    <div className="flex items-center gap-4 px-3 mb-14">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-500 flex items-center justify-center text-2xl">
                            🎓
                        </div>

                        <div className="text-2xl font-extrabold leading-tight">
                            School
                            <br />
                            Management
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-2">

                        <Link
                            href="/dashboard"
                            className="flex items-center gap-4 px-5 py-4 rounded-xl text-slate-300 hover:bg-slate-800 transition"
                        >
                            🏠
                            <span className="font-medium">
                                Dashboard
                            </span>
                        </Link>

                        <Link
                            href="/admin/students"
                            className="flex items-center gap-4 px-5 py-4 rounded-xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                        >
                            👨‍🎓
                            <span className="font-semibold">
                                Students
                            </span>
                        </Link>

                        <Link
                            href="/admin/teachers"
                            className="flex items-center gap-4 px-5 py-4 rounded-xl text-slate-300 hover:bg-slate-800 transition"
                        >
                            🧑‍🏫
                            <span className="font-medium">
                                Teachers
                            </span>
                        </Link>

                        <Link
                            href="/admin/subjects"
                            className="flex items-center gap-4 px-5 py-4 rounded-xl text-slate-300 hover:bg-slate-800 transition"
                        >
                            📚
                            <span className="font-medium">
                                Subjects
                            </span>
                        </Link>

                        <Link
                            href="/admin/applications"
                            className="flex items-center gap-4 px-5 py-4 rounded-xl text-slate-300 hover:bg-slate-800 transition"
                        >
                            📄
                            <span className="font-medium">
                                Applications
                            </span>
                        </Link>

                    </nav>

                    {/* Logout */}
                    <form
                        action="/logout"
                        method="POST"
                        className="absolute bottom-6 left-5 right-5"
                    >
                        <button
                            type="submit"
                            className="w-full flex items-center gap-4 px-5 py-4 rounded-xl text-slate-300 hover:bg-slate-800 transition"
                        >
                            🚪
                            <span className="font-medium">
                                Logout
                            </span>
                        </button>
                    </form>

                </aside>

                {/* Main */}
                <main className="ml-[315px] min-h-screen">

                    {/* Header */}
                    <header className="h-[88px] bg-white border-b border-slate-200 flex items-center justify-between px-10">

                        <div>
                            <h2 className="text-2xl font-extrabold text-slate-900">
                                Students
                            </h2>

                            <p className="text-slate-500 mt-1">
                                Edit student information
                            </p>
                        </div>

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
                                A
                            </div>

                            <div>
                                <p className="font-bold text-slate-900">
                                    Administrator
                                </p>

                                <p className="text-sm text-slate-500">
                                    admin@school.com
                                </p>
                            </div>

                        </div>

                    </header>

                    {/* Content */}
                    <div className="px-10 py-10 max-w-[1100px]">

                        {/* Back */}
                        <Link
                            href="/admin/students"
                            className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition mb-8"
                        >
                            ← Back to Students
                        </Link>

                        {/* Page title */}
                        <div className="mb-8">
                            <h1 className="text-4xl font-extrabold text-slate-900">
                                Edit Student
                            </h1>

                            <p className="text-lg text-slate-500 mt-2">
                                Update the student's information below.
                            </p>
                        </div>

                        {/* Form Card */}
                        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">

                            <div className="p-10">

                                <div className="flex items-center gap-4 mb-2">
                                    <div className="text-3xl">
                                        🎓
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-extrabold text-slate-900">
                                            Student Information
                                        </h2>

                                        <p className="text-slate-500 mt-1">
                                            Update basic information about the student.
                                        </p>
                                    </div>
                                </div>

                                <form
                                    onSubmit={submit}
                                    className="mt-8"
                                >

                                    {/* Row 1 */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Student Name
                                            </label>

                                            <input
                                                type="text"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData("name", e.target.value)
                                                }
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                placeholder="Enter student name"
                                            />

                                            {errors.name && (
                                                <p className="text-red-500 text-sm mt-2">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
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
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                placeholder="e.g. STU-001"
                                            />

                                            {errors.student_number && (
                                                <p className="text-red-500 text-sm mt-2">
                                                    {errors.student_number}
                                                </p>
                                            )}
                                        </div>

                                    </div>

                                    {/* Row 2 */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Email Address
                                            </label>

                                            <input
                                                type="email"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData("email", e.target.value)
                                                }
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                placeholder="student@example.com"
                                            />

                                            {errors.email && (
                                                <p className="text-red-500 text-sm mt-2">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Phone Number
                                            </label>

                                            <input
                                                type="text"
                                                value={data.phone}
                                                onChange={(e) =>
                                                    setData("phone", e.target.value)
                                                }
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                placeholder="Enter phone number"
                                            />

                                            {errors.phone && (
                                                <p className="text-red-500 text-sm mt-2">
                                                    {errors.phone}
                                                </p>
                                            )}
                                        </div>

                                    </div>

                                    {/* Date of Birth */}
                                    <div className="mt-6">
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
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
                                            className="w-full md:w-1/2 px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />

                                        {errors.date_of_birth && (
                                            <p className="text-red-500 text-sm mt-2">
                                                {errors.date_of_birth}
                                            </p>
                                        )}
                                    </div>

                                    {/* Address */}
                                    <div className="mt-6">
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            Address
                                        </label>

                                        <textarea
                                            value={data.address}
                                            onChange={(e) =>
                                                setData("address", e.target.value)
                                            }
                                            rows={4}
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                                            placeholder="Enter student's address"
                                        />

                                        {errors.address && (
                                            <p className="text-red-500 text-sm mt-2">
                                                {errors.address}
                                            </p>
                                        )}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex items-center justify-end gap-4 mt-8 pt-6 border-t border-slate-200">

                                        <Link
                                            href="/admin/students"
                                            className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition"
                                        >
                                            Cancel
                                        </Link>

                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="px-7 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
                                        >
                                            {processing
                                                ? "Updating..."
                                                : "Update Student"}
                                        </button>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </main>

            </div>
        </>
    );
}