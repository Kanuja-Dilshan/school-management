import { Head, Link } from "@inertiajs/react";

export default function Show({ subject }: any) {
    return (
        <>
            <Head title={`Subject - ${subject.name}`} />

            <div className="min-h-screen bg-slate-50">
                {/* Header */}
                <header className="bg-white border-b border-slate-200">
                    <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-extrabold text-slate-900">
                                Subject Information
                            </h1>
                            <p className="text-sm text-slate-500 mt-1">
                                View complete subject details.
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <Link
                                href="/admin/subjects"
                                className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 font-semibold hover:bg-slate-50 transition"
                            >
                                Back
                            </Link>

                            <Link
                                href={`/admin/subjects/${subject.id}/edit`}
                                className="px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                            >
                                Edit Subject
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="max-w-6xl mx-auto px-6 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Main Details */}
                        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="px-6 py-5 border-b border-slate-200">
                                <h2 className="text-lg font-bold text-slate-900">
                                    Subject Details
                                </h2>
                            </div>

                            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                                        Subject Name
                                    </p>
                                    <p className="mt-2 text-base font-semibold text-slate-900">
                                        {subject.name}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                                        Subject Code
                                    </p>
                                    <p className="mt-2 text-base font-semibold text-indigo-600">
                                        {subject.code}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                                        Teacher
                                    </p>
                                    <p className="mt-2 text-base font-semibold text-slate-900">
                                        {subject.teacher?.name ?? "Not assigned"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                                        Capacity
                                    </p>
                                    <p className="mt-2 text-base font-semibold text-slate-900">
                                        {subject.capacity} Students
                                    </p>
                                </div>

                                <div className="md:col-span-2">
                                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                                        Description
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        {subject.description ||
                                            "No description provided."}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Status Card */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 h-fit">
                            <h2 className="text-lg font-bold text-slate-900">
                                Status
                            </h2>

                            <div className="mt-6">
                                {subject.is_available ? (
                                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">
                                        ● Available
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-bold">
                                        ● Unavailable
                                    </span>
                                )}
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                                    Subject ID
                                </p>

                                <p className="mt-2 text-sm font-semibold text-slate-700">
                                    #{subject.id}
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}