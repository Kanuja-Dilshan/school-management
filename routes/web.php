<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\StudentSubjectController;
use App\Http\Controllers\Admin\StudentController;
use App\Http\Controllers\Admin\TeacherController;
use App\Http\Controllers\Admin\SubjectController;
use App\Http\Controllers\Admin\ApplicationController;

Route::get('/', fn()=>redirect()->route('dashboard'));

Route::middleware('guest')->group(function () {
    Route::get('/login',[AuthController::class,'showLogin'])->name('login');
    Route::post('/login',[AuthController::class,'login'])->name('login.store');
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard',[DashboardController::class,'index'])->name('dashboard');
    Route::post('/logout',[AuthController::class,'logout'])->name('logout');

    Route::get('/student/subjects',[StudentSubjectController::class,'index'])->name('student.subjects');
    Route::post('/student/subjects/{subject}/apply',[StudentSubjectController::class,'apply'])->name('student.subjects.apply');
    Route::get('/student/applications',[StudentSubjectController::class,'applications'])->name('student.applications');

    Route::middleware('admin')->prefix('admin')->name('admin.')->group(function () {
        Route::resource('students',StudentController::class);
        Route::resource('teachers',TeacherController::class);
        Route::resource('subjects',SubjectController::class);

Route::get('applications', [ApplicationController::class, 'index'])
    ->name('applications.index');

Route::patch('applications/{application}/status', [ApplicationController::class, 'updateStatus'])
    ->name('applications.status');
    });
});