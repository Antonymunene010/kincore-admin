import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart
} from 'recharts';

const KPICard = ({ title, value, growth, color }) => (
    <div className="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm transition-all hover:shadow-md dark:shadow-brand-orange/5">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-brand-darkText mb-2 transition-colors">{value}</h3>
        <p className={`text-sm font-semibold transition-colors ${growth.startsWith('+') ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
            {growth}
        </p>
    </div>
);

const RevenueRow = ({ category, amount, change }) => (
    <div className="flex items-center justify-between py-4 border-b border-gray-50 dark:border-brand-darkBorder last:border-0 hover:bg-gray-50/50 dark:hover:bg-brand-darkBg px-4 transition-colors group">
        <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-brand-orange transition-colors">{category}</span>
        <div className="flex items-center space-x-12">
            <span className="text-[#FF6D4D] font-medium transition-colors">{amount}</span>
            <span className="text-[#FF6D4D] font-medium w-16 text-right transition-colors">{change}</span>
        </div>
    </div>
);

const DashboardOverview = () => {
    const chartData = [
        { month: 'Jan', value: 20 },
        { month: 'Feb', value: 45 },
        { month: 'Mar', value: 38 },
        { month: 'Apr', value: 55 },
        { month: 'May', value: 48 },
        { month: 'Jun', value: 70 },
        { month: 'Jul', value: 65 },
    ];

    const revenueData = [
        { category: 'Subscriptions', amount: '$12,345', change: '+10%' },
        { category: 'One-off Purchases', amount: '$6,789', change: '+5%' },
        { category: 'Marketplace Commissions', amount: '$3,456', change: '+3%' },
        { category: 'Advertising Spend', amount: '$1,234', change: '+2%' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-12">
            <h1 className="text-2xl font-bold text-[#1A1A1A] dark:text-brand-darkText transition-colors">Platform Overview</h1>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KPICard title="Total Organizations" value="1,234" growth="+12%" />
                <KPICard title="Total Users" value="5,678" growth="+5%" />
                <KPICard title="DAU / MAU Growth" value="23%" growth="+3%" />
                <KPICard title="Aggregate Storage Usage" value="456 GB" growth="+10%" />
            </div>

            {/* Growth Trends Chart */}
            <div className="bg-white dark:bg-brand-darkCard p-8 rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm transition-colors overflow-hidden">
                <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-brand-darkText transition-colors">Growth Trends</h3>
                    <div className="flex items-center space-x-3 mt-1">
                        <span className="text-3xl font-bold text-[#1A1A1A] dark:text-brand-darkText transition-all">+15%</span>
                    </div>
                    <p className="text-sm font-medium text-[#FF6D4D] mt-1 transition-colors">Last 30 Days +15%</p>
                </div>

                <div className="h-[300px] w-full mt-8">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#FF6D4D" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#FF6D4D" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F1F1F1" />
                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#A3A3A3', fontSize: 12 }}
                                dy={10}
                            />
                            <YAxis hide />
                            <Tooltip
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#FF6D4D"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorValue)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Revenue Summary */}
            <div className="space-y-4 pb-8">
                <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-brand-darkText transition-colors">Revenue Summary</h3>
                <div className="bg-white dark:bg-brand-darkCard rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden transition-colors">
                    <div className="flex items-center justify-between bg-gray-50/50 dark:bg-brand-darkBg py-3 px-8 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider border-b border-gray-100 dark:border-brand-darkBorder transition-colors">
                        <span>Category</span>
                        <div className="flex items-center space-x-12">
                            <span>Amount</span>
                            <span className="w-16 text-right">Change</span>
                        </div>
                    </div>
                    <div className="px-4">
                        {revenueData.map((item, index) => (
                            <RevenueRow key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;