# School Management System

Laravel + React + Inertia + MySQL school management system.

## Requirements
- PHP 8.2+
- Composer
- Node.js 20+
- MySQL 8+

## Setup

1. Extract the project.
2. Copy `.env.example` to `.env`.
3. Create a MySQL database named `school_management`.
4. Update `.env` with your MySQL username/password.
5. Run:

```bash
composer install
php artisan key:generate
php artisan migrate --seed
npm install
npm run build
php artisan serve
```

For development, use two terminals:

```bash
php artisan serve
npm run dev
```

Admin login:
- Email: admin@school.com
- Password: password123

Students cannot self-register. Admin creates student accounts from the Admin panel.

## Main features
- Admin authentication and role protection
- Student authentication
- Student CRUD
- Teacher CRUD
- Subject CRUD
- Teacher assignment
- Subject availability
- Student subject applications
- Application status management
- Search/filter students
- Eloquent relationships
