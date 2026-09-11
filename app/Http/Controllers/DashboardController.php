<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\Teacher;
use App\Models\Subject;
use App\Models\Application;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/dashboard', [
            'students' => Student::count(),
            'teachers' => Teacher::count(),
            'subjects' => Subject::count(),
            'applications' => Application::count(),
        ]);
    }
}