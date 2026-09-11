<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ApplicationController extends Controller
{
    public function index()
    {
        $applications = Application::with([
            'student.user',
            'subject.teacher',
        ])
        ->latest()
        ->paginate(10);

        return Inertia::render('admin/applications/index', [
            'applications' => $applications,
        ]);
    }

    public function updateStatus(Request $request, Application $application)
    {
        $validated = $request->validate([
            'status' => 'required|in:pending,approved,rejected',
        ]);

        $application->update([
            'status' => $validated['status'],
        ]);

        return back()->with(
            'success',
            'Application status updated successfully.'
        );
    }
}