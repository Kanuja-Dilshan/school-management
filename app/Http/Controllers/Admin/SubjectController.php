<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Subject;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubjectController extends Controller
{
    public function index() { return Inertia::render('admin/subjects/index', ['subjects'=>Subject::with('teacher')->latest()->paginate(10)]); }

    public function create() { return Inertia::render('admin/subjects/create', ['teachers'=>Teacher::orderBy('name')->get()]); }

    public function store(Request $request)
    {
        $v=$request->validate(['name'=>'required|string|max:255','code'=>'required|string|unique:subjects,code','description'=>'nullable|string','teacher_id'=>'nullable|exists:teachers,id','capacity'=>'required|integer|min:1','is_available'=>'boolean']);
        $v['is_available']=$request->boolean('is_available');
        Subject::create($v);
        return redirect()->route('admin.subjects.index')->with('success','Subject created.');
    }
public function show(Subject $subject)
{
    $subject->load('teacher');

    return Inertia::render('admin/subjects/show', [
        'subject' => $subject,
    ]);
}

    public function edit(Subject $subject) { return Inertia::render('admin/subjects/edit', ['subject'=>$subject,'teachers'=>Teacher::orderBy('name')->get()]); }

    public function update(Request $request, Subject $subject)
    {
        $v=$request->validate(['name'=>'required|string|max:255','code'=>'required|string|unique:subjects,code,'.$subject->id,'description'=>'nullable|string','teacher_id'=>'nullable|exists:teachers,id','capacity'=>'required|integer|min:1','is_available'=>'boolean']);
        $v['is_available']=$request->boolean('is_available');
        $subject->update($v);
        return redirect()->route('admin.subjects.index')->with('success','Subject updated.');
    }

    public function destroy(Subject $subject) { $subject->delete(); return redirect()->route('admin.subjects.index')->with('success','Subject deleted.'); }
}