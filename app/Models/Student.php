<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Student extends Model
{
    protected $fillable = ['user_id','student_number','phone','address','date_of_birth'];

    public function user(): BelongsTo { return $this->belongsTo(User::class); }

    public function subjects(): BelongsToMany
    {
        return $this->belongsToMany(Subject::class, 'applications')
            ->withPivot('status')->withTimestamps();
    }
}