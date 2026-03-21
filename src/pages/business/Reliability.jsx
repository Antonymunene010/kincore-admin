import React from 'react';

const StatusBadge = ({ children }) => {
    const variants = {
        Success: 'bg-[#EAFAEA] dark:bg-green-950/20 text-[#2E8B57] dark:text-green-400',
        Warning: 'bg-[#FFF5EB] dark:bg-yellow-950/20 text-[#D88C50] dark:text-yellow-400',
        Danger: 'bg-[#FFE2E2] dark:bg-red-950/20 text-[#E25C5C] dark:text-red-400',
        Error: 'bg-[#FFE2E2] dark:bg-red-950/20 text-[#E25C5C] dark:text-red-400',
        Info: 'bg-[#E3F2FD] dark:bg-blue-950/20 text-[#1D72B8] dark:text-blue-400',
    };
    return (
        <span className={`px-4 py-1.5 rounded-lg text-xs font-bold leading-none transition-colors ${variants[children] || 'bg-gray-100 dark:bg-brand-darkBg text-gray-600 dark:text-gray-400'}`}>
            {children}
        </span>
    );
};

const SectionHeader = ({ title }) => (
    <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText leading-none transition-colors">{title}</h2>
);

const Reliability = () => {
    const backgroundJobs = [
        { name: 'Data Ingestion', status: 'Success', lastRun: '2024-03-15 10:00 AM', duration: '15 min', nextRun: '2024-03-16 10:00 AM' },
        { name: 'Report Generation', status: 'Warning', lastRun: '2024-03-15 09:00 AM', duration: '20 min', nextRun: '2024-03-16 09:00 AM' },
        { name: 'System Backup', status: 'Success', lastRun: '2024-03-15 08:00 AM', duration: '60 min', nextRun: '2024-03-16 08:00 AM' },
        { name: 'Email Notifications', status: 'Danger', lastRun: '2024-03-15 07:00 AM', duration: '5 min', nextRun: '2024-03-16 07:00 AM' },
        { name: 'Database Cleanup', status: 'Success', lastRun: '2024-03-15 06:00 AM', duration: '30 min', nextRun: '2024-03-16 06:00 AM' },
    ];

    const webhooks = [
        { name: 'User Registration', status: 'Success', attempt: '2024-03-15 11:00 AM', retries: '1', next: '2024-03-16 11:00 AM' },
        { name: 'Payment Processing', status: 'Warning', attempt: '2024-03-15 12:00 PM', retries: '2', next: '2024-03-16 12:00 PM' },
        { name: 'Order Fulfillment', status: 'Danger', attempt: '2024-03-15 01:00 PM', retries: '3', next: '2024-03-16 01:00 PM' },
    ];

    const errorLogs = [
        { time: '2024-03-15 02:00 PM', severity: 'Error', message: 'Failed to connect to database', source: 'Database Service' },
        { time: '2024-03-15 03:00 PM', severity: 'Warning', message: 'High CPU usage detected', source: 'Compute Service' },
        { time: '2024-03-15 04:00 PM', severity: 'Info', message: 'User login successful', source: 'Auth Service' },
        { time: '2024-03-15 05:00 PM', severity: 'Error', message: 'Invalid API request', source: 'API Gateway' },
        { time: '2024-03-15 06:00 PM', severity: 'Warning', message: 'Disk space low', source: 'Storage Service' },
    ];

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl pb-20 px-4 sm:px-0">
            <header>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Observability & Reliability</h1>
            </header>

            {/* Background Job Monitor */}
            <section className="space-y-6">
                <SectionHeader title="Background Job Monitor" />
                <div className="bg-white dark:bg-brand-darkCard rounded-[2rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden transition-colors">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/30 dark:bg-brand-darkBg/50 border-b border-gray-100 dark:border-brand-darkBorder transition-colors">
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Job Name</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider text-center">Status</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Last Run</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Duration</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Next Run</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                                {backgroundJobs.map((job, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-brand-darkBg transition-colors group">
                                        <td className="px-6 py-5 text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-brand-orange transition-colors">{job.name}</td>
                                        <td className="px-6 py-5 text-center">
                                            <StatusBadge>{job.status}</StatusBadge>
                                        </td>
                                        <td className="px-6 py-5 text-xs font-semibold text-[#B28E86] dark:text-orange-900/60 leading-relaxed w-40 transition-colors">{job.lastRun}</td>
                                        <td className="px-6 py-5 text-xs font-semibold text-[#B28E86] dark:text-orange-900/60 transition-colors">{job.duration}</td>
                                        <td className="px-6 py-5 text-xs font-semibold text-[#B28E86] dark:text-orange-900/60 leading-relaxed w-40 transition-colors">{job.nextRun}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Webhook Retry Manager */}
            <section className="space-y-6">
                <SectionHeader title="Webhook Retry Manager" />
                <div className="bg-white dark:bg-brand-darkCard rounded-[2rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden transition-colors">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/30 dark:bg-brand-darkBg/50 border-b border-gray-100 dark:border-brand-darkBorder transition-colors">
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Webhook Name</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider text-center">Status</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Last Attempt</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Retries</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Next Retry</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                                {webhooks.map((hook, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-brand-darkBg transition-colors group">
                                        <td className="px-6 py-5 text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-brand-orange transition-colors">{hook.name}</td>
                                        <td className="px-6 py-5 text-center">
                                            <StatusBadge>{hook.status}</StatusBadge>
                                        </td>
                                        <td className="px-6 py-5 text-xs font-semibold text-[#B28E86] dark:text-orange-900/60 leading-relaxed w-40 transition-colors">{hook.attempt}</td>
                                        <td className="px-6 py-5 text-xs font-semibold text-[#B28E86] dark:text-orange-900/60 transition-colors">{hook.retries}</td>
                                        <td className="px-6 py-5 text-xs font-semibold text-[#B28E86] dark:text-orange-900/60 leading-relaxed w-40 transition-colors">{hook.next}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Error Logs & Alerts */}
            <section className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Error Logs & Alerts</h2>
                <div className="bg-white dark:bg-brand-darkCard rounded-[2rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden transition-colors">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/30 dark:bg-brand-darkBg/50 border-b border-gray-100 dark:border-brand-darkBorder transition-colors">
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Timestamp</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider text-center">Severity</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Message</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Source</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                                {errorLogs.map((log, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-brand-darkBg transition-colors group">
                                        <td className="px-6 py-5 text-xs font-semibold text-[#B28E86] dark:text-orange-900/60 leading-relaxed w-40 transition-colors uppercase">{log.timestamp || log.time}</td>
                                        <td className="px-6 py-5 text-center">
                                            <StatusBadge>{log.severity}</StatusBadge>
                                        </td>
                                        <td className="px-6 py-5 text-xs font-semibold text-[#B28E86] dark:text-orange-900/60 leading-relaxed max-w-sm transition-colors">{log.message}</td>
                                        <td className="px-6 py-5 text-xs font-semibold text-brand-orange uppercase tracking-wider transition-colors">{log.source}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Backup & Restore Status */}
            <section className="space-y-6">
                <SectionHeader title="Backup & Restore Status" />
                <div className="bg-white dark:bg-brand-darkCard rounded-[2rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden transition-colors">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/30 dark:bg-brand-darkBg/50 border-b border-gray-100 dark:border-brand-darkBorder transition-colors">
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Environment</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider text-center">Backup Status</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Last Backup</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider text-center">Restore Status</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Last Restore</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                                {['Staging', 'Production'].map((env, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-brand-darkBg transition-colors group">
                                        <td className="px-6 py-5 text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-brand-orange transition-colors">{env}</td>
                                        <td className="px-6 py-5 text-center">
                                            <StatusBadge>Success</StatusBadge>
                                        </td>
                                        <td className="px-6 py-5 text-xs font-semibold text-[#B28E86] dark:text-orange-900/60 leading-relaxed w-40 transition-colors">2024-03-15 07:00 AM</td>
                                        <td className="px-6 py-5 text-center">
                                            <StatusBadge>Success</StatusBadge>
                                        </td>
                                        <td className="px-6 py-5 text-xs font-semibold text-[#B28E86] dark:text-orange-900/60 leading-relaxed w-40 transition-colors">2024-03-14 07:00 AM</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reliability;