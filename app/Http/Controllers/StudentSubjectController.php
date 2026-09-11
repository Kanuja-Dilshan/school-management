<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentSubjectController extends Controller
{
    public function index()
    {
        $student=auth()->user()->student;
        return Inertia::render('student/subjects', [
            'subjects'=>Subject::with('teacher')->where('is_available',true)->get(),
            'appliedSubjectIds'=>$student->subjects()->pluck('subjects.id'),
        ]);
    }

    public function apply(Subject $subject)
    {
        $student=auth()->user()->student;
        abort_unless($subject->is_available, 422, 'Subject is not available.');
        if ($student->subjects()->where('subjects.id',$subject->id)->exists()) {
            return back()->with('error','You already applied for this subject.');
        }
        if ($student->subjects()->count() >= 20) {
            return back()->with('error','Maximum subject limit reached.');
        }
        $student->subjects()->attach($subject->id, ['status'=>'pending']);
        return back()->with('success','Application submitted.');
    }

    public function applications()
    {
        $student=auth()->user()->student;
        return Inertia::render('student/applications', ['applications'=>$student->subjects()->with('teacher')->get()]);
    }
}