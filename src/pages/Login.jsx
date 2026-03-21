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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === 'family@admin.com' && password === '123456') {
            localStorage.setItem('user', JSON.stringify({ email, role: 'family' }));
            navigate('/dashboard');
        } else if (email === 'owner@admin.com' && password === '123456') {
            localStorage.setItem('user', JSON.stringify({ email, role: 'owner' }));
            navigate('/owner/dashboard');
        } else if (email === 'council@admin.com' && password === '123456') {
            localStorage.setItem('user', JSON.stringify({ email, role: 'council' }));
            navigate('/council/dashboard');
        } else if (email === 'branch@admin.com' && password === '123456') {
            localStorage.setItem('user', JSON.stringify({ email, role: 'branch' }));
            navigate('/branch/dashboard');
        } else if (email === 'business@admin.com' && password === '123456') {
            localStorage.setItem('user', JSON.stringify({ email, role: 'business' }));
            navigate('/business/dashboard');
        } else if (email === 'devops@admin.com' && password === '123456') {
            localStorage.setItem('user', JSON.stringify({ email, role: 'devops' }));
            navigate('/devops/dashboard');
        } else if (email === 'auditor@admin.com' && password === '123456') {
            localStorage.setItem('user', JSON.stringify({ email, role: 'auditor' }));
            navigate('/auditor/dashboard');
        } else {
            alert('Invalid credentials');
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

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-full shadow-md text-sm font-bold text-white bg-[#FF6D4D] hover:bg-[#FF5D3D] transition-all transform hover:scale-[1.01] active:scale-[0.99] mt-4"
                        >
                            Get Started
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
