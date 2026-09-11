<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeacherController extends Controller
{
    public function index() { return Inertia::render('admin/teachers/index', ['teachers'=>Teacher::with('subjects')->latest()->paginate(10)]); }
    public function create() { return Inertia::render('admin/teachers/create'); }

    public function store(Request $request)
    {
        $v=$request->validate(['name'=>'required|string|max:255','email'=>'required|email|unique:teachers,email','phone'=>'nullable|string','specialization'=>'nullable|string']);
        Teacher::create($v);
        return redirect()->route('admin.teachers.index')->with('success','Teacher created.');
    }

    public function edit(Teacher $teacher) { return Inertia::render('admin/teachers/edit', compact('teacher')); }

    public function update(Request $request, Teacher $teacher)
    {
        $v=$request->validate(['name'=>'required|string|max:255','email'=>'required|email|unique:teachers,email,'.$teacher->id,'phone'=>'nullable|string','specialization'=>'nullable|string']);
        $teacher->update($v);
        return redirect()->route('admin.teachers.index')->with('success','Teacher updated.');
    }

    public function destroy(Teacher $teacher)
    {
        $teacher->delete();
        return redirect()->route('admin.teachers.index')->with('success','Teacher deleted.');
    }
}