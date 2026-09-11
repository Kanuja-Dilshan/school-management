import { Head, Link, useForm } from "@inertiajs/react";
import { FormEvent } from "react";

export default function Create({ teachers }: any) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        code: "",
        description: "",
        teacher_id: "",
        capacity: 30,
        is_available: true,
    });

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post("/admin/subjects", {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title="Add Subject" />

            <div className="min-h-screen bg-slate-50">
                {/* Sidebar */}
                <aside className="fixed left-0 top-0 h-screen w-[315px] bg-[#0f172a] text-white px-5 py-8">
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

                    <nav className="space-y-2">
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-4 px-5 py-4 rounded-xl text-slate-300 hover:bg-slate-800 transition"
                        >
                            🏠
                            <span className="font-medium">Dashboard</span>
                        </Link>

                        <Link
                            href="/admin/students"
                            className="flex items-center gap-4 px-5 py-4 rounded-xl text-slate-300 hover:bg-slate-800 transition"
                        >
                            👨‍🎓
                            <span className="font-medium">Students</span>
                        </Link>

                        <Link
                            href="/admin/teachers"
                            className="flex items-center gap-4 px-5 py-4 rounded-xl text-slate-300 hover:bg-slate-800 transition"
                        >
                            🧑‍🏫
                            <span className="font-medium">Teachers</span>
                        </Link>

                        <Link
                            href="/admin/subjects"
                            className="flex items-center gap-4 px-5 py-4 rounded-xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                        >
                            📚
                            <span className="font-semibold">Subjects</span>
                        </Link>

                        <Link
                            href="/admin/applications"
                            className="flex items-center gap-4 px-5 py-4 rounded-xl text-slate-300 hover:bg-slate-800 transition"
                        >
                            📄
                            <span className="font-medium">Applications</span>
                        </Link>
                    </nav>

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
                            <span className="font-medium">Logout</span>
                        </button>
                    </form>
                </aside>

                {/* Main */}
                <main className="ml-[315px] min-h-screen">
                    {/* Header */}
                    <header className="h-[88px] bg-white border-b border-slate-200 flex items-center justify-between px-10">
                        <div>
                            <h2 className="text-2xl font-extrabold text-slate-900">
                                Subjects
                            </h2>

                            <p className="text-slate-500 mt-1">
                                Add a new subject
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
                        <Link
                            href="/admin/subjects"
                            className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition mb-8"
                        >
                            ← Back to Subjects
                        </Link>

                        <div className="mb-8">
                            <h1 className="text-4xl font-extrabold text-slate-900">
                                Add Subject
                            </h1>

                            <p className="text-lg text-slate-500 mt-2">
                                Enter the subject information below.
                            </p>
                        </div>

                        {/* Form Card */}
                        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="p-10">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-3xl">
                                        📚
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-extrabold text-slate-900">
                                            Subject Information
                                        </h2>

                                        <p className="text-slate-500 mt-1">
                                            Add basic information about the
                                            subject.
                                        </p>
                                    </div>
                                </div>

                                <form onSubmit={submit} className="mt-8">
                                    {/* Subject Name + Code */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Subject Name
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
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                placeholder="e.g. Mathematics"
                                            />

                                            {errors.name && (
                                                <p className="text-red-500 text-sm mt-2">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Subject Code
                                            </label>

                                            <input
                                                type="text"
                                                value={data.code}
                                                onChange={(e) =>
                                                    setData(
                                                        "code",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                placeholder="e.g. MAT-101"
                                            />

                                            {errors.code && (
                                                <p className="text-red-500 text-sm mt-2">
                                                    {errors.code}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Teacher + Capacity */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Assign Teacher
                                            </label>

                                            <select
                                                value={data.teacher_id}
                                                onChange={(e) =>
                                                    setData(
                                                        "teacher_id",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            >
                                                <option value="">
                                                    Select a teacher
                                                </option>

                                                {teachers?.map(
                                                    (teacher: any) => (
                                                        <option
                                                            key={teacher.id}
                                                            value={teacher.id}
                                                        >
                                                            {teacher.name}
                                                        </option>
                                                    )
                                                )}
                                            </select>

                                            {errors.teacher_id && (
                                                <p className="text-red-500 text-sm mt-2">
                                                    {errors.teacher_id}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Student Capacity
                                            </label>

                                            <input
                                                type="number"
                                                min="1"
                                                value={data.capacity}
                                                onChange={(e) =>
                                                    setData(
                                                        "capacity",
                                                        Number(
                                                            e.target.value
                                                        )
                                                    )
                                                }
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                placeholder="30"
                                            />

                                            {errors.capacity && (
                                                <p className="text-red-500 text-sm mt-2">
                                                    {errors.capacity}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="mt-6">
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            Description
                                        </label>

                                        <textarea
                                            value={data.description}
                                            onChange={(e) =>
                                                setData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            rows={4}
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                                            placeholder="Enter subject description"
                                        />

                                        {errors.description && (
                                            <p className="text-red-500 text-sm mt-2">
                                                {errors.description}
                                            </p>
                                        )}
                                    </div>

                                    {/* Availability */}
                                    <div className="mt-6">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={data.is_available}
                                                onChange={(e) =>
                                                    setData(
                                                        "is_available",
                                                        e.target.checked
                                                    )
                                                }
                                                className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                            />

                                            <span className="font-semibold text-slate-700">
                                                Subject is available for
                                                students
                                            </span>
                                        </label>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex items-center justify-end gap-4 mt-8 pt-6 border-t border-slate-200">
                                        <Link
                                            href="/admin/subjects"
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
                                                ? "Creating..."
                                                : "Create Subject"}
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