import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import ThemeToggle from '../components/common/ThemeToggle';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        setIsLoading(true);

        const cleanEmail = email.trim();
        const cleanPassword = password;

        try {
            const apiBase = (import.meta.env.VITE_API_BASE_URL || 'https://uat-api.kincore.com/api').replace(/\/$/, '');
            const res = await fetch(`${apiBase}/auth/kcc/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    identifier: cleanEmail,
                    password: cleanPassword
                })
            });

            const data = await res.json().catch(() => ({}));

            if (res.ok && data.token) {
                const userRole = data.user?.role === 'member' || !data.user?.role ? 'family' : data.user.role;
                const sessionUser = {
                    ...data.user,
                    email: data.user?.email || cleanEmail,
                    role: userRole,
                    token: data.token
                };
                localStorage.setItem('user', JSON.stringify(sessionUser));
                localStorage.setItem('token', data.token);

                if (userRole === 'owner') navigate('/owner/dashboard');
                else if (userRole === 'council') navigate('/council/dashboard');
                else if (userRole === 'branch') navigate('/branch/dashboard');
                else if (userRole === 'business') navigate('/business/dashboard');
                else if (userRole === 'devops') navigate('/devops/dashboard');
                else if (userRole === 'auditor') navigate('/auditor/dashboard');
                else navigate('/dashboard');
                return;
            }

            // Fallback for local mock accounts
            if (cleanEmail === 'family@admin.com' && cleanPassword === '123456') {
                localStorage.setItem('user', JSON.stringify({ email: cleanEmail, role: 'family' }));
                navigate('/dashboard');
            } else if (cleanEmail === 'owner@admin.com' && cleanPassword === '123456') {
                localStorage.setItem('user', JSON.stringify({ email: cleanEmail, role: 'owner' }));
                navigate('/owner/dashboard');
            } else if (cleanEmail === 'council@admin.com' && cleanPassword === '123456') {
                localStorage.setItem('user', JSON.stringify({ email: cleanEmail, role: 'council' }));
                navigate('/council/dashboard');
            } else if (cleanEmail === 'branch@admin.com' && cleanPassword === '123456') {
                localStorage.setItem('user', JSON.stringify({ email: cleanEmail, role: 'branch' }));
                navigate('/branch/dashboard');
            } else if (cleanEmail === 'business@admin.com' && cleanPassword === '123456') {
                localStorage.setItem('user', JSON.stringify({ email: cleanEmail, role: 'business' }));
                navigate('/business/dashboard');
            } else if (cleanEmail === 'devops@admin.com' && cleanPassword === '123456') {
                localStorage.setItem('user', JSON.stringify({ email: cleanEmail, role: 'devops' }));
                navigate('/devops/dashboard');
            } else if (cleanEmail === 'auditor@admin.com' && cleanPassword === '123456') {
                localStorage.setItem('user', JSON.stringify({ email: cleanEmail, role: 'auditor' }));
                navigate('/auditor/dashboard');
            } else {
                setErrorMsg(data.error || 'Invalid credentials');
            }
        } catch (err) {
            if (cleanEmail === 'family@admin.com' && cleanPassword === '123456') {
                localStorage.setItem('user', JSON.stringify({ email: cleanEmail, role: 'family' }));
                navigate('/dashboard');
            } else if (cleanEmail === 'owner@admin.com' && cleanPassword === '123456') {
                localStorage.setItem('user', JSON.stringify({ email: cleanEmail, role: 'owner' }));
                navigate('/owner/dashboard');
            } else {
                setErrorMsg(err.message || 'Login network error');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F3F4F6] dark:bg-brand-darkBg flex items-center justify-center p-4">
            <div className="fixed top-4 right-4 z-50">
                <ThemeToggle className="bg-white dark:bg-brand-darkCard shadow-sm rounded-full p-3" />
            </div>
            <div className="w-full max-w-[480px]">
                {/* Logo and Title */}
                <div className="text-center mb-8">
                    <h1 className="text-[#FF6D4D] text-4xl font-bold mb-2 tracking-tight">Kincore</h1>
                    <h2 className="text-black dark:text-brand-darkText text-2xl font-bold mb-1 uppercase tracking-tight">Admin Portal</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Secure access for enterprise management</p>
                </div>

                {/* Main Card */}
                <div className="bg-white dark:bg-brand-darkCard p-6 sm:p-10 rounded-[2.5rem] shadow-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Email Address */}
                        <div className="space-y-2">
                            <label className="block text-black dark:text-brand-darkText font-bold text-sm ml-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full pl-12 pr-4 py-4 bg-[#F3F4F6]/50 dark:bg-brand-darkBg/50 border-none rounded-2xl focus:ring-2 focus:ring-[#FF6D4D]/20 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-brand-darkText font-medium"
                                    placeholder="admin@gmail.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label className="block text-black dark:text-brand-darkText font-bold text-sm ml-1">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-12 pr-12 py-4 bg-[#F3F4F6]/50 dark:bg-brand-darkBg/50 border-none rounded-2xl focus:ring-2 focus:ring-[#FF6D4D]/20 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-brand-darkText font-medium"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Remember & Forgot */}
                        <div className="flex items-center justify-between py-1">
                            <div className="flex items-center">
                                <div className="relative flex items-center">
                                    <input
                                        id="remember-me"
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="h-5 w-5 bg-[#F3F4F6] dark:bg-brand-darkBg border-none rounded focus:ring-0 text-[#FF6D4D] cursor-pointer"
                                    />
                                </div>
                                <label htmlFor="remember-me" className="ml-3 block text-sm font-bold text-gray-800 dark:text-brand-darkText cursor-pointer">
                                    Remember me?
                                </label>
                            </div>
                            <div>
                                <Link
                                    to="/forgot-password"
                                    className="text-sm font-bold text-[#FF6D4D] hover:underline"
                                >
                                    Forgot Password
                                </Link>
                            </div>
                        </div>

                        {errorMsg && (
                            <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm font-medium text-center">
                                {errorMsg}
                            </div>
                        )}

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-full shadow-md text-sm font-bold text-white bg-[#FF6D4D] hover:bg-[#FF5D3D] disabled:opacity-60 transition-all transform hover:scale-[1.01] active:scale-[0.99] mt-4"
                        >
                            {isLoading ? 'Signing in...' : 'Get Started'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
