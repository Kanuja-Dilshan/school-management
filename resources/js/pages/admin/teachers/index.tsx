import { Head, Link, router } from "@inertiajs/react";

export default function Index({ teachers }: any) {
    const deleteTeacher = (id: number) => {
        if (confirm("Are you sure you want to delete this teacher?")) {
            router.delete(`/admin/teachers/${id}`);
        }
    };

    return (
        <>
            <Head title="Teachers" />

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
                            className="flex items-center gap-4 px-5 py-4 rounded-xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                        >
                            🧑‍🏫
                            <span className="font-semibold">Teachers</span>
                        </Link>

                        <Link
                            href="/admin/subjects"
                            className="flex items-center gap-4 px-5 py-4 rounded-xl text-slate-300 hover:bg-slate-800 transition"
                        >
                            📚
                            <span className="font-medium">Subjects</span>
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
                                Teachers
                            </h2>

                            <p className="text-slate-500 mt-1">
                                Manage teachers and their information
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
                    <div className="px-10 py-10">
                        <div className="flex items-end justify-between mb-8">
                            <div>
                                <h1 className="text-4xl font-extrabold text-slate-900">
                                    Teachers
                                </h1>

                                <p className="text-lg text-slate-500 mt-2">
                                    View and manage all teachers in the school.
                                </p>
                            </div>

                            <Link
                                href="/admin/teachers/create"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 transition"
                            >
                                <span className="text-xl">+</span>
                                Add Teacher
                            </Link>
                        </div>

                        {/* Table Card */}
                        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="px-8 py-6 border-b border-slate-200">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-2xl">
                                        🧑‍🏫
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-extrabold text-slate-900">
                                            Teacher List
                                        </h2>

                                        <p className="text-sm text-slate-500 mt-1">
                                            All registered teachers
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-200">
                                            <th className="px-8 py-4 text-left text-sm font-bold text-slate-600">
                                                Teacher
                                            </th>

                                            <th className="px-8 py-4 text-left text-sm font-bold text-slate-600">
                                                Email
                                            </th>

                                            <th className="px-8 py-4 text-left text-sm font-bold text-slate-600">
                                                Specialization
                                            </th>

                                            <th className="px-8 py-4 text-center text-sm font-bold text-slate-600">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {teachers.data.map((teacher: any) => (
                                            <tr
                                                key={teacher.id}
                                                className="border-b border-slate-100 hover:bg-slate-50 transition"
                                            >
                                                <td className="px-8 py-5">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-11 h-11 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                                                            {teacher.name
                                                                ?.charAt(0)
                                                                ?.toUpperCase()}
                                                        </div>

                                                        <div>
                                                            <p className="font-bold text-slate-900">
                                                                {teacher.name}
                                                            </p>

                                                            <p className="text-sm text-slate-500">
                                                                Teacher
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-8 py-5 text-slate-600">
                                                    {teacher.email}
                                                </td>

                                                <td className="px-8 py-5">
                                                    <span className="inline-flex px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold">
                                                        {teacher.specialization ||
                                                            "Not specified"}
                                                    </span>
                                                </td>

                                                <td className="px-8 py-5">
                                                    <div className="flex items-center justify-center gap-3">
                                                        <Link
                                                            href={`/admin/teachers/${teacher.id}/edit`}
                                                            className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition"
                                                        >
                                                            Edit
                                                        </Link>

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                deleteTeacher(
                                                                    teacher.id
                                                                )
                                                            }
                                                            className="px-4 py-2 rounded-lg bg-red-50 text-red-600 font-semibold hover:bg-red-100 transition"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {teachers.data.length === 0 && (
                                <div className="text-center py-16">
                                    <div className="text-5xl mb-4">🧑‍🏫</div>

                                    <h3 className="text-xl font-bold text-slate-900">
                                        No teachers found
                                    </h3>

                                    <p className="text-slate-500 mt-2">
                                        Start by adding a new teacher.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}