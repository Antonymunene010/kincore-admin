import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Building2,
    CreditCard,
    ShoppingBag,
    ShieldCheck,
    Megaphone,
    ShieldAlert,
    Settings2,
    Activity,
    History,
    Bell,
    User,
    Menu,
    X
} from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';

const SidebarItem = ({ icon: Icon, label, path, active, onClick }) => (
    <div
        onClick={onClick}
        className={`flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${active
            ? 'bg-[#FFE8E2] text-[#FF6D4D] dark:bg-brand-orange/10'
            : 'text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-brand-darkBorder'
            }`}
    >
        <Icon size={20} className={active ? 'text-[#FF6D4D]' : 'text-gray-400'} />
        <span className={`text-sm font-medium ${active ? 'font-semibold' : ''}`}>{label}</span>
    </div>
);

const BusinessLayout = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const storedUser = localStorage.getItem('user');
    const userRole = storedUser ? JSON.parse(storedUser).role : 'business';

    const menuConfigs = {
        business: [
            { label: 'Dashboard', icon: LayoutDashboard, path: '/business/dashboard' },
            { label: 'Organizations', icon: Building2, path: '/business/organizations' },
            { label: 'Billing', icon: CreditCard, path: '/business/billing' },
            { label: 'Mall', icon: ShoppingBag, path: '/business/operations' },
            { label: 'Governance', icon: ShieldCheck, path: '/business/governance' },
            { label: 'Ads & Promotions', icon: Megaphone, path: '/business/ads' },
            { label: 'Trust & Safety', icon: ShieldAlert, path: '/business/safety' },
            { label: 'System Config', icon: Settings2, path: '/business/config' },
            { label: 'Reliability', icon: Activity, path: '/business/reliability' },
            { label: 'Audit Logs', icon: History, path: '/business/audit' },
        ],
        devops: [
            { label: 'Dashboard', icon: LayoutDashboard, path: '/devops/dashboard' },
            { label: 'Modify System Config', icon: Settings2, path: '/devops/config' },
            { label: 'Background Job Control', icon: Activity, path: '/devops/jobs' },
        ],
        auditor: [
            { label: 'Dashboard', icon: LayoutDashboard, path: '/auditor/dashboard' },
            { label: 'View Billing', icon: CreditCard, path: '/auditor/billing' },
            { label: 'Access Audit Logs', icon: History, path: '/auditor/audit' },
            { label: 'Abuse Workflow', icon: ShieldAlert, path: '/auditor/abuse' },
        ]
    };

    const menuItems = menuConfigs[userRole] || menuConfigs.business;

    const getDashboardTitle = () => {
        switch (userRole) {
            case 'devops': return 'DevOps Panel';
            case 'auditor': return 'Audit Portal';
            default: return 'Business Dashboard';
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div className="flex min-h-screen bg-white dark:bg-brand-darkBg font-sans">
            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-brand-darkCard border-r border-gray-100 dark:border-brand-darkBorder p-6 flex flex-col transition-transform duration-300 lg:translate-x-0
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="mb-10 lg:block">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText">{getDashboardTitle()}</h2>
                </div>

                <nav className="flex-1 space-y-1 overflow-y-auto custom-scrollbar">
                    {menuItems.map((item) => (
                        <SidebarItem
                            key={item.path}
                            {...item}
                            active={location.pathname === item.path}
                            onClick={() => {
                                navigate(item.path);
                                setIsMobileMenuOpen(false);
                            }}
                        />
                    ))}
                </nav>

                <div className="pt-6 mt-6 border-t border-gray-100 dark:border-brand-darkBorder">
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 text-red-500 hover:bg-red-50 w-full"
                    >
                        <User size={20} />
                        <span className="text-sm font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Mobile Header Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Main Content Area */}
            <div className="flex-1 lg:ml-64 flex flex-col min-h-screen overflow-x-hidden">
                {/* Header */}
                <header className="h-20 bg-white dark:bg-brand-darkCard border-b border-gray-100 dark:border-brand-darkBorder px-4 md:px-8 flex items-center justify-between sticky top-0 z-30">
                    <div className="flex items-center lg:hidden">
                        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 -ml-2 text-gray-500 dark:text-gray-400">
                            <Menu size={24} />
                        </button>
                        <h2 className="ml-4 text-lg font-bold text-gray-800 dark:text-brand-darkText uppercase tracking-tight">{userRole}</h2>
                    </div>

                    <div className="flex-1"></div>

                    <div className="flex items-center space-x-4 md:space-x-6">
                        <ThemeToggle />
                        <button className="relative p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                            < Bell size={22} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="flex items-center space-x-3 pl-4 md:pl-6 border-l border-gray-100 dark:border-brand-darkBorder">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-semibold text-gray-800 dark:text-brand-darkText">{userRole.charAt(0).toUpperCase() + userRole.slice(1)} Admin</p>
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">{getDashboardTitle()}</p>
                            </div>
                            <div className="w-10 h-10 bg-gray-200 dark:bg-brand-darkBorder rounded-full overflow-hidden border border-gray-100 dark:border-brand-darkBorder">
                                <img
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userRole}`}
                                    alt="Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-4 md:p-8 bg-white dark:bg-brand-darkBg overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
};


export default BusinessLayout;
