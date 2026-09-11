import { Head, Link } from "@inertiajs/react";

export default function Applications({ applications }: any) {
    return (
        <>
            <Head title="My Applications" />

            <div className="min-h-screen bg-slate-50">
                {/* Header */}
                <header className="bg-white border-b border-slate-200">
                    <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-extrabold text-slate-900">
                                My Applications
                            </h1>
                            <p className="text-sm text-slate-500 mt-1">
                                View your subject applications and their status.
                            </p>
                        </div>

                        <Link
                            href="/student/subjects"
                            className="px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                        >
                            Browse Subjects
                        </Link>
                    </div>
                </header>

                {/* Content */}
                <main className="max-w-6xl mx-auto px-6 py-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="px-6 py-5 border-b border-slate-200">
                            <h2 className="text-lg font-bold text-slate-900">
                                Application List
                            </h2>
                        </div>

                        {applications?.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase">
                                                Subject
                                            </th>

                                            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase">
                                                Code
                                            </th>

                                            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase">
                                                Teacher
                                            </th>

                                            <th className="px-6 py-4 text-center text-xs font-bold text-slate-500 uppercase">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-slate-100">
                                        {applications.map((application: any) => {
                                            const status =
                                                application.pivot?.status ??
                                                application.status ??
                                                "pending";

                                            return (
                                                <tr
                                                    key={application.id}
                                                    className="hover:bg-slate-50 transition"
                                                >
                                                    <td className="px-6 py-5">
                                                        <div className="font-semibold text-slate-900">
                                                            {application.name}
                                                        </div>

                                                        {application.description && (
                                                            <div className="text-xs text-slate-500 mt-1">
                                                                {application.description}
                                                            </div>
                                                        )}
                                                    </td>

                                                    <td className="px-6 py-5 text-sm font-medium text-slate-600">
                                                        {application.code}
                                                    </td>

                                                    <td className="px-6 py-5 text-sm text-slate-600">
                                                        {application.teacher?.name ??
                                                            "Not assigned"}
                                                    </td>

                                                    <td className="px-6 py-5 text-center">
                                                        <span
                                                            className={`inline-flex px-3 py-1.5 rounded-full text-xs font-bold capitalize ${
                                                                status ===
                                                                "approved"
                                                                    ? "bg-emerald-100 text-emerald-700"
                                                                    : status ===
                                                                      "rejected"
                                                                    ? "bg-red-100 text-red-700"
                                                                    : "bg-amber-100 text-amber-700"
                                                            }`}
                                                        >
                                                            {status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="px-6 py-16 text-center">
                                <div className="text-5xl mb-4">📄</div>

                                <h3 className="text-lg font-bold text-slate-900">
                                    No applications yet
                                </h3>

                                <p className="text-sm text-slate-500 mt-2 mb-6">
                                    You haven't applied for any subjects yet.
                                </p>

                                <Link
                                    href="/student/subjects"
                                    className="inline-flex px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                                >
                                    Browse Subjects
                                </Link>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}