<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function index(Request $request)
    {
        $students = Student::with('user')
            ->when($request->search, fn($q, $s) => $q->where('student_number','like',"%$s%")
                ->orWhereHas('user', fn($u) => $u->where('name','like',"%$s%")->orWhere('email','like',"%$s%")))
            ->latest()->paginate(10)->withQueryString();

        return Inertia::render('admin/students/index', compact('students'));
    }

    public function create() { return Inertia::render('admin/students/create'); }

    public function store(Request $request)
    {
        $v = $request->validate([
            'name'=>'required|string|max:255','email'=>'required|email|unique:users,email',
            'password'=>'required|string|min:8','student_number'=>'required|string|unique:students,student_number',
            'phone'=>'nullable|string','address'=>'nullable|string','date_of_birth'=>'nullable|date',
        ]);

        $user = User::create([
            'name'=>$v['name'],'email'=>$v['email'],'password'=>Hash::make($v['password']),'role'=>'student'
        ]);
        Student::create([
            'user_id'=>$user->id,'student_number'=>$v['student_number'],'phone'=>$v['phone']??null,
            'address'=>$v['address']??null,'date_of_birth'=>$v['date_of_birth']??null
        ]);

        return redirect()->route('admin.students.index')->with('success','Student created successfully.');
    }

    public function show(Student $student)
    {
        $student->load(['user','subjects.teacher']);
        return Inertia::render('admin/students/show', compact('student'));
    }

    public function edit(Student $student)
    {
        $student->load('user');
        return Inertia::render('admin/students/edit', compact('student'));
    }

    public function update(Request $request, Student $student)
    {
        $v = $request->validate([
            'name'=>'required|string|max:255','email'=>'required|email|unique:users,email,'.$student->user_id,
            'student_number'=>'required|string|unique:students,student_number,'.$student->id,
            'phone'=>'nullable|string','address'=>'nullable|string','date_of_birth'=>'nullable|date',
        ]);
        $student->user->update(['name'=>$v['name'],'email'=>$v['email']]);
        $student->update(collect($v)->except(['name','email'])->all());
        return redirect()->route('admin.students.index')->with('success','Student updated.');
    }

    public function destroy(Student $student)
    {
        $student->user()->delete();
        return redirect()->route('admin.students.index')->with('success','Student deleted.');
    }
}