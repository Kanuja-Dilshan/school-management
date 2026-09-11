<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Subject extends Model
{
    protected $fillable = ['name','code','description','teacher_id','capacity','is_available'];

    protected function casts(): array { return ['is_available' => 'boolean']; }

    public function teacher(): BelongsTo { return $this->belongsTo(Teacher::class); }

    public function students(): BelongsToMany
    {
        return $this->belongsToMany(Student::class, 'applications')
            ->withPivot('status')->withTimestamps();
    }
}