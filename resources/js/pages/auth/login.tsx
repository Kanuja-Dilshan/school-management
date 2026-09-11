import React, { FormEvent, useState } from "react";
import { Head, useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post("/login");
    };

    return (
        <>
            <Head title="Login" />

            <div className="login-page">
                <div className="login-container">

                    {/* Left side */}
                    <div className="login-brand">
                        <div className="brand-icon">🎓</div>

                        <h1>School<br />Management</h1>

                        <p>
                            Manage students, teachers, subjects and
                            applications easily from one powerful system.
                        </p>

                        <div className="brand-features">
                            <span className="brand-feature">
                                👨‍🎓 Students
                            </span>

                            <span className="brand-feature">
                                👨‍🏫 Teachers
                            </span>

                            <span className="brand-feature">
                                📚 Subjects
                            </span>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="login-form-wrapper">
                        <form
                            className="login-form"
                            onSubmit={submit}
                        >
                            <div className="login-form-header">
                                <h2>Welcome back 👋</h2>

                                <p>
                                    Sign in to your account to continue.
                                </p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    Email address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    className="form-input"
                                    placeholder="admin@school.com"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />

                                {errors.email && (
                                    <small style={{ color: "#dc2626" }}>
                                        {errors.email}
                                    </small>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">
                                    Password
                                </label>

                                <input
                                    id="password"
                                    type="password"
                                    className="form-input"
                                    placeholder="Enter your password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />

                                {errors.password && (
                                    <small style={{ color: "#dc2626" }}>
                                        {errors.password}
                                    </small>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="login-button"
                                disabled={processing}
                            >
                                {processing ? "Signing in..." : "Login"}
                            </button>

                            <div className="demo-login">
                                <strong>Demo Admin Account</strong>
                                <br />
                                admin@school.com / password123
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}