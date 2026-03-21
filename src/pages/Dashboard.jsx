import React from 'react';

const StatsCard = ({ title, value, change, isPositive }) => (
    <div className="bg-white dark:bg-brand-darkCard p-5 rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm transition-colors">
        <p className="text-gray-500 dark:text-gray-400 text-xs font-semibold mb-2">{title}</p>
        <h3 className="text-2xl font-black text-gray-900 dark:text-brand-darkText mb-1">{value}</h3>
        <p className={`text-xs font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {change}%
        </p>
    </div>
);

const Dashboard = () => {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <header className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-brand-darkText">Dashboard</h1>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
                <StatsCard title="Total Members" value="1,234" change="+10" isPositive={true} />
                <StatsCard title="Active Claims" value="567" change="-5" isPositive={false} />
                <StatsCard title="Trees Planted" value="890" change="+15" isPositive={true} />
                <StatsCard title="Storage Used" value="75%" change="+2" isPositive={true} />
                <StatsCard title="KCC Balance" value="$1,500" change="-3" isPositive={false} />
            </div>

            {/* Performance Overview */}
            <div className="mb-8">
                <h2 className="text-xl font-black text-gray-900 dark:text-brand-darkText mb-5">Performance Overview</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {/* Member Growth Chart */}
                    <div className="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm transition-colors">
                        <div className="mb-6">
                            <p className="text-gray-500 dark:text-gray-400 text-xs font-semibold mb-2">Member Growth</p>
                            <h3 className="text-3xl font-black text-gray-900 dark:text-brand-darkText">+15%</h3>
                            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 mt-1">
                                Last 30 Days <span className="text-green-500">+5%</span>
                            </p>
                        </div>
                        <div className="h-40 flex items-end justify-between relative">
                            {/* SVG Curve */}
                            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 160">
                                <path
                                    d="M0,120 Q50,80 100,100 T200,60 T300,90 T400,40"
                                    fill="none"
                                    stroke="#FF6D4D"
                                    strokeWidth="3"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </svg>
                            <div className="flex justify-between w-full mt-auto pt-2 relative z-10">
                                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map(m => (
                                    <span key={m} className="text-[10px] font-bold text-gray-400 dark:text-gray-500">{m}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Claim Resolution Rate Chart */}
                    <div className="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm transition-colors">
                        <div className="mb-6">
                            <p className="text-gray-500 dark:text-gray-400 text-xs font-semibold mb-2">Claim Resolution Rate</p>
                            <h3 className="text-3xl font-black text-gray-900 dark:text-brand-darkText">95%</h3>
                            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 mt-1">
                                Last Quarter <span className="text-green-500">+2%</span>
                            </p>
                        </div>
                        <div className="h-40 flex items-end justify-between gap-2">
                            {[85, 88, 90, 92, 94, 96].map((height, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center">
                                    <div
                                        className="w-full bg-orange-100 dark:bg-brand-orange/20 rounded-t-lg transition-all"
                                        style={{ height: `${height}%` }}
                                    ></div>
                                    <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 mt-2">
                                        Q{(i % 4) + 1}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Sections */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
                {/* Left Side: Quick Actions & Primary CTAs */}
                <div className="space-y-6">
                    {/* Quick Actions */}
                    <div>
                        <h2 className="text-xl font-black text-gray-900 dark:text-brand-darkText mb-4">Quick Actions</h2>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="py-3 px-4 rounded-xl border-2 border-brand-orange text-brand-orange text-sm font-bold hover:bg-orange-50 dark:hover:bg-brand-orange/10 transition-colors">
                                Add Person
                            </button>
                            <button className="py-3 px-4 rounded-xl border-2 border-brand-orange text-brand-orange text-sm font-bold hover:bg-orange-50 dark:hover:bg-brand-orange/10 transition-colors">
                                Approve Requests
                            </button>
                            <button className="py-3 px-4 rounded-xl border-2 border-brand-orange text-brand-orange text-sm font-bold hover:bg-orange-50 dark:hover:bg-brand-orange/10 transition-colors">
                                Create Branch
                            </button>
                            <button className="py-3 px-4 rounded-xl border-2 border-brand-orange text-brand-orange text-sm font-bold hover:bg-orange-50 dark:hover:bg-brand-orange/10 transition-colors">
                                Create Event
                            </button>
                        </div>
                    </div>

                    {/* Primary CTAs */}
                    <div>
                        <h2 className="text-xl font-black text-gray-900 dark:text-brand-darkText mb-4">Primary CTAs</h2>
                        <div className="flex flex-wrap gap-3">
                            <button className="py-3 px-5 rounded-xl border-2 border-brand-orange text-brand-orange text-sm font-bold hover:bg-orange-50 dark:hover:bg-brand-orange/10 transition-colors">
                                View Pending Approvals
                            </button>
                            <button className="py-3 px-5 rounded-xl border-2 border-brand-orange text-brand-orange text-sm font-bold hover:bg-orange-50 dark:hover:bg-brand-orange/10 transition-colors">
                                Manage Tree
                            </button>
                            <button className="py-3 px-5 rounded-xl border-2 border-brand-orange text-brand-orange text-sm font-bold hover:bg-orange-50 dark:hover:bg-brand-orange/10 transition-colors">
                                Go to Billing
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side: Activity Feed & Alerts Panel */}
                <div className="space-y-6">
                    {/* Activity Feed */}
                    <div className="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm transition-colors">
                        <h2 className="text-xl font-black text-gray-900 dark:text-brand-darkText mb-5">Activity Feed</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-orange-100 dark:bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-gray-900 dark:text-brand-darkText">Claims Approved</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">5 claims approved</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-orange-100 dark:bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-gray-900 dark:text-brand-darkText">Tree Changes</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">3 tree changes</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-orange-100 dark:bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-gray-900 dark:text-brand-darkText">Coin Adjustments</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">10 coin adjustments</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Alerts Panel */}
                    <div className="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm transition-colors">
                        <h2 className="text-xl font-black text-gray-900 dark:text-brand-darkText mb-5">Alerts Panel</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-orange-100 dark:bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-gray-900 dark:text-brand-darkText">Pending moderation</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">5 items pending</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-orange-100 dark:bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-gray-900 dark:text-brand-darkText">Subscription warnings</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">2 warnings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
