import { Head, Link, router } from "@inertiajs/react";

export default function Applications({ applications }: any) {
    const updateStatus = (id: number, status: "approved" | "rejected") => {
        const action = status === "approved" ? "approve" : "reject";

        if (confirm(`Are you sure you want to ${action} this application?`)) {
            router.patch(
                `/admin/applications/${id}/status`,
                { status },
                { preserveScroll: true }
            );
        }
    };

    return (
        <>
            <Head title="Applications" />

            <div className="min-h-screen bg-slate-50 flex">

                {/* Sidebar */}
                <aside className="w-[290px] bg-[#0f172a] text-white fixed left-0 top-0 bottom-0">
                    <div className="px-7 py-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center text-2xl">
                                🎓
                            </div>

                            <div>
                                <h1 className="text-xl font-extrabold">
                                    School
                                </h1>
                                <h1 className="text-xl font-extrabold">
                                    Management
                                </h1>
                            </div>
                        </div>
                    </div>

                    <nav className="px-4 mt-5 space-y-2">
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-4 px-5 py-4 rounded-xl text-slate-300 hover:bg-slate-800 transition"
                        >
                            🏠
                            <span>Dashboard</span>
                        </Link>

                        <Link
                            href="/admin/students"
                            className="flex items-center gap-4 px-5 py-4 rounded-xl text-slate-300 hover:bg-slate-800 transition"
                        >
                            🎓
                            <span>Students</span>
                        </Link>

                        <Link
                            href="/admin/teachers"
                            className="flex items-center gap-4 px-5 py-4 rounded-xl text-slate-300 hover:bg-slate-800 transition"
                        >
                            👨‍🏫
                            <span>Teachers</span>
                        </Link>

                        <Link
                            href="/admin/subjects"
                            className="flex items-center gap-4 px-5 py-4 rounded-xl text-slate-300 hover:bg-slate-800 transition"
                        >
                            📚
                            <span>Subjects</span>
                        </Link>

                        <Link
                            href="/admin/applications"
                            className="flex items-center gap-4 px-5 py-4 rounded-xl bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-500/20"
                        >
                            📄
                            <span>Applications</span>
                        </Link>
                    </nav>

                    <div className="absolute bottom-7 left-4 right-4">
                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="w-full flex items-center gap-4 px-5 py-4 rounded-xl text-slate-300 hover:bg-slate-800 transition"
                        >
                            🚪
                            <span>Logout</span>
                        </Link>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="ml-[290px] flex-1">

                    {/* Header */}
                    <header className="h-[86px] bg-white border-b border-slate-200 flex items-center justify-between px-9">
                        <div>
                            <h2 className="text-2xl font-extrabold text-slate-900">
                                Applications
                            </h2>

                            <p className="text-sm text-slate-500 mt-1">
                                Manage student subject applications
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">
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

                    {/* Page */}
                    <main className="p-9">

                        <div className="mb-8">
                            <h1 className="text-4xl font-extrabold text-slate-900">
                                Student Applications
                            </h1>

                            <p className="text-lg text-slate-500 mt-3">
                                Review and manage applications submitted by students.
                            </p>
                        </div>

                        {/* Application Card */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

                            <div className="px-7 py-6 border-b border-slate-200 flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-extrabold text-slate-900">
                                        Application List
                                    </h2>

                                    <p className="text-sm text-slate-500 mt-1">
                                        Review student applications and update their status.
                                    </p>
                                </div>

                                <div className="px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600 font-bold">
                                    {applications?.total ?? applications?.data?.length ?? 0} Applications
                                </div>
                            </div>

                            {applications?.data?.length > 0 ? (
                                <div className="overflow-x-auto">

                                    <table className="w-full">

                                        <thead className="bg-slate-50 border-b border-slate-200">
                                            <tr>
                                                <th className="px-7 py-4 text-left text-xs font-bold text-slate-500 uppercase">
                                                    Student
                                                </th>

                                                <th className="px-7 py-4 text-left text-xs font-bold text-slate-500 uppercase">
                                                    Subject
                                                </th>

                                                <th className="px-7 py-4 text-left text-xs font-bold text-slate-500 uppercase">
                                                    Teacher
                                                </th>

                                                <th className="px-7 py-4 text-center text-xs font-bold text-slate-500 uppercase">
                                                    Status
                                                </th>

                                                <th className="px-7 py-4 text-center text-xs font-bold text-slate-500 uppercase">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-slate-100">

                                            {applications.data.map((application: any) => {

                                                const status = application.status;

                                                return (
                                                    <tr
                                                        key={application.id}
                                                        className="hover:bg-slate-50 transition"
                                                    >

                                                        {/* Student */}
                                                        <td className="px-7 py-6">
                                                            <div className="flex items-center gap-4">

                                                                <div className="w-11 h-11 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                                                    {application.student?.user?.name
                                                                        ?.charAt(0)
                                                                        ?.toUpperCase() ?? "S"}
                                                                </div>

                                                                <div>
                                                                    <p className="font-bold text-slate-900">
                                                                        {application.student?.user?.name ?? "Unknown Student"}
                                                                    </p>

                                                                    <p className="text-sm text-slate-500 mt-1">
                                                                        {application.student?.student_number ?? "-"}
                                                                    </p>
                                                                </div>

                                                            </div>
                                                        </td>

                                                        {/* Subject */}
                                                        <td className="px-7 py-6">
                                                            <p className="font-bold text-slate-900">
                                                                {application.subject?.name ?? "Unknown Subject"}
                                                            </p>

                                                            <p className="text-sm text-indigo-600 font-medium mt-1">
                                                                {application.subject?.code ?? "-"}
                                                            </p>
                                                        </td>

                                                        {/* Teacher */}
                                                        <td className="px-7 py-6">
                                                            <p className="text-sm font-semibold text-slate-700">
                                                                {application.subject?.teacher?.name ?? "Not assigned"}
                                                            </p>
                                                        </td>

                                                        {/* Status */}
                                                        <td className="px-7 py-6 text-center">

                                                            {status === "approved" && (
                                                                <span className="inline-flex px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold capitalize">
                                                                    Approved
                                                                </span>
                                                            )}

                                                            {status === "rejected" && (
                                                                <span className="inline-flex px-3 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold capitalize">
                                                                    Rejected
                                                                </span>
                                                            )}

                                                            {status === "pending" && (
                                                                <span className="inline-flex px-3 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold capitalize">
                                                                    Pending
                                                                </span>
                                                            )}

                                                        </td>

                                                        {/* Actions */}
                                                        <td className="px-7 py-6">

                                                            {status === "pending" ? (
                                                                <div className="flex items-center justify-center gap-2">

                                                                    <button
                                                                        onClick={() =>
                                                                            updateStatus(
                                                                                application.id,
                                                                                "approved"
                                                                            )
                                                                        }
                                                                        className="px-4 py-2 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-sm hover:bg-emerald-100 transition"
                                                                    >
                                                                        ✓ Approve
                                                                    </button>

                                                                    <button
                                                                        onClick={() =>
                                                                            updateStatus(
                                                                                application.id,
                                                                                "rejected"
                                                                            )
                                                                        }
                                                                        className="px-4 py-2 rounded-lg bg-red-50 text-red-700 font-bold text-sm hover:bg-red-100 transition"
                                                                    >
                                                                        ✕ Reject
                                                                    </button>

                                                                </div>
                                                            ) : (
                                                                <div className="text-center text-sm text-slate-400 font-medium">
                                                                    No actions
                                                                </div>
                                                            )}

                                                        </td>

                                                    </tr>
                                                );
                                            })}

                                        </tbody>
                                    </table>

                                </div>
                            ) : (
                                <div className="px-7 py-20 text-center">

                                    <div className="text-6xl mb-5">
                                        📄
                                    </div>

                                    <h3 className="text-xl font-extrabold text-slate-900">
                                        No applications found
                                    </h3>

                                    <p className="text-slate-500 mt-2">
                                        There are currently no student applications.
                                    </p>

                                </div>
                            )}

                            {/* Pagination */}
                            {applications?.links && applications.links.length > 3 && (
                                <div className="px-7 py-5 border-t border-slate-200 flex flex-wrap gap-2">
                                    {applications.links.map((link: any, index: number) => (
                                        <Link
                                            key={index}
                                            href={link.url || "#"}
                                            preserveScroll
                                            className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                                                link.active
                                                    ? "bg-indigo-600 text-white"
                                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                            } ${
                                                !link.url
                                                    ? "opacity-50 pointer-events-none"
                                                    : ""
                                            }`}
                                            dangerouslySetInnerHTML={{
                                                __html: link.label,
                                            }}
                                        />
                                    ))}
                                </div>
                            )}

                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}