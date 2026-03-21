import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MoreHorizontal, Plus, Download, CreditCard, Ban } from 'lucide-react';

const Badge = ({ variant, children }) => {
    const variants = {
        Enterprise: 'bg-[#FFE8E2] dark:bg-brand-orange/20 text-[#FF6D4D] dark:text-brand-orange',
        Premium: 'bg-[#FDF5E6] dark:bg-orange-950/20 text-[#A0522D] dark:text-orange-400/80',
        Standard: 'bg-[#EAFAEA] dark:bg-green-950/20 text-[#2E8B57] dark:text-green-400/80',
        Basic: 'bg-[#FFF9E5] dark:bg-yellow-950/20 text-[#DAA520] dark:text-yellow-400/80',
        Active: 'bg-[#EAFAEA] dark:bg-green-900/20 text-[#2E8B57] dark:text-green-400',
        Suspended: 'bg-[#FFE8E2] dark:bg-red-900/20 text-[#FF6D4D] dark:text-red-400',
    };
    return (
        <span className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${variants[variant] || 'bg-gray-100 dark:bg-brand-darkBg text-gray-600 dark:text-gray-400'}`}>
            {children}
        </span>
    );
};

const ProgressBar = ({ progress }) => (
    <div className="w-full bg-gray-100 dark:bg-brand-darkBg rounded-full h-1.5 overflow-hidden transition-colors">
        <div
            className="bg-[#FF6D4D] h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
        />
    </div>
);

const Organizations = () => {
    const navigate = useNavigate();
    const [selectedOrg, setSelectedOrg] = useState({
        name: 'Acme Corp',
        tier: 'Enterprise',
        owner: 'Alex Bennett',
        members: 120,
        status: 'Active',
        billingStatus: 'Paid',
        nextPayment: 'March 15, 2024',
        storage: 75
    });

    const organizations = [
        { name: 'Acme Corp', tier: 'Enterprise', owner: 'Alex Bennett', members: 120, storage: 75, status: 'Active' },
        { name: 'Tech Solutions Inc', tier: 'Premium', owner: 'Sophia Carter', members: 85, storage: 40, status: 'Active' },
        { name: 'Global Innovations Ltd', tier: 'Standard', owner: 'Ethan Davis', members: 50, storage: 25, status: 'Active' },
        { name: 'Future Dynamics LLC', tier: 'Basic', owner: 'Olivia Evans', members: 20, storage: 10, status: 'Active' },
        { name: 'Pioneer Ventures Co.', tier: 'Enterprise', owner: 'Liam Foster', members: 150, storage: 90, status: 'Active' },
        { name: 'Summit Enterprises Group', tier: 'Premium', owner: 'Ava Green', members: 95, storage: 50, status: 'Active' },
        { name: 'Apex Systems Corp.', tier: 'Standard', owner: 'Noah Harris', members: 60, storage: 30, status: 'Active' },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Main Content */}
            <div className="flex-1 space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-brand-darkText transition-colors">Organizations</h1>
                    <button
                        onClick={() => navigate('/business/organizations/create')}
                        className="flex items-center space-x-2 bg-[#FF6D4D] text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm hover:bg-[#FF5D3D] transition-all active:scale-95 leading-none w-fit"
                    >
                        <Plus size={18} />
                        <span>New Organization</span>
                    </button>
                </div>

                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600" size={18} />
                    <input
                        type="text"
                        placeholder="Search organizations"
                        className="w-full pl-10 pr-4 py-2.5 bg-[#F9FAFB] dark:bg-brand-darkCard border-none rounded-xl text-sm focus:ring-2 focus:ring-[#FF6D4D]/20 dark:text-brand-darkText placeholder-gray-400 dark:placeholder-gray-600 transition-colors"
                    />
                </div>

                {/* Table */}
                <div className="bg-white dark:bg-brand-darkCard rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden transition-colors">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/50 dark:bg-brand-darkBg/50 border-b border-gray-100 dark:border-brand-darkBorder transition-colors">
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Organization Name</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Plan Tier</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Owner</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Member Count</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Storage Usage</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                                {organizations.map((org, idx) => (
                                    <tr
                                        key={idx}
                                        className={`hover:bg-gray-50/50 cursor-pointer transition-colors ${selectedOrg.name === org.name ? 'bg-gray-50' : ''}`}
                                        onClick={() => setSelectedOrg(org)}
                                    >
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-brand-orange transition-colors">{org.name}</td>
                                        <td className="px-6 py-4">
                                            <Badge variant={org.tier}>{org.tier}</Badge>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{org.owner}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{org.members}</td>
                                        <td className="px-6 py-4 w-48">
                                            <div className="flex items-center space-x-3">
                                                <div className="flex-1"><ProgressBar progress={org.storage} /></div>
                                                <span className="text-xs font-bold text-gray-400 dark:text-gray-500">{org.storage}%</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant={org.status}>{org.status}</Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Right Panel: Organization Details */}
            <div className="w-full lg:w-96 space-y-6 lg:border-l border-gray-100 dark:border-brand-darkBorder lg:pl-8 lg:h-[calc(100vh-80px)] lg:sticky top-6 transition-colors">
                <h3 className="text-lg font-bold text-gray-800 dark:text-brand-darkText transition-colors">Organization Details</h3>
                <div className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase">Organization Name</label>
                        <input type="text" value={selectedOrg.name} readOnly className="w-full px-4 py-2 bg-white dark:bg-brand-darkBg border border-gray-100 dark:border-brand-darkBorder rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none transition-colors" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase">Plan Tier</label>
                        <input type="text" value={selectedOrg.tier} readOnly className="w-full px-4 py-2 bg-white dark:bg-brand-darkBg border border-gray-100 dark:border-brand-darkBorder rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none transition-colors" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase">Owner</label>
                        <input type="text" value={selectedOrg.owner} readOnly className="w-full px-4 py-2 bg-white dark:bg-brand-darkBg border border-gray-100 dark:border-brand-darkBorder rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none transition-colors" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase">Member Count</label>
                            <input type="text" value={selectedOrg.members} readOnly className="w-full px-4 py-2 bg-white dark:bg-brand-darkBg border border-gray-100 dark:border-brand-darkBorder rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none transition-colors" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase">Status</label>
                            <input type="text" value={selectedOrg.status} readOnly className="w-full px-4 py-2 bg-white dark:bg-brand-darkBg border border-gray-100 dark:border-brand-darkBorder rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none transition-colors" />
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-brand-darkBorder space-y-4 transition-colors">
                    <h4 className="font-bold text-gray-800 dark:text-brand-darkText">Billing</h4>
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase">Billing Status</label>
                        <input type="text" value="Active" readOnly className="w-full px-4 py-2 bg-white dark:bg-brand-darkBg border border-gray-100 dark:border-brand-darkBorder rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none transition-colors" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase">Next Payment Date</label>
                        <input type="text" value="March 15, 2024" readOnly className="w-full px-4 py-2 bg-white dark:bg-brand-darkBg border border-gray-100 dark:border-brand-darkBorder rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none transition-colors" />
                    </div>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-brand-darkBorder space-y-4 transition-colors">
                    <div className="flex items-center justify-between">
                        <h4 className="font-bold text-gray-800 dark:text-brand-darkText">Storage</h4>
                        <span className="text-xs font-bold text-gray-400 dark:text-gray-500">Total Storage Used {selectedOrg.storage}%</span>
                    </div>
                    <ProgressBar progress={selectedOrg.storage} />
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-medium transition-colors">750 GB / 1 TB</p>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-2">
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase">Document</p>
                        <p className="text-xs font-bold text-gray-700 dark:text-gray-300">200 GB</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase">Images</p>
                        <p className="text-xs font-bold text-gray-700 dark:text-gray-300">300 GB</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase">Vid</p>
                        <p className="text-xs font-bold text-gray-700 dark:text-gray-300">150 GB</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase">Other</p>
                        <p className="text-xs font-bold text-gray-700 dark:text-gray-300">100 GB</p>
                    </div>
                </div>
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-brand-darkBorder space-y-3 transition-colors">
                <button className="w-full py-2.5 bg-[#FFE8E2] dark:bg-red-900/20 text-[#FF6D4D] dark:text-red-400 rounded-xl font-bold text-sm hover:bg-[#FFD8D2] dark:hover:bg-red-900/40 transition-all active:scale-95 leading-none">
                    Suspend Organization
                </button>
                <button className="w-full py-2.5 bg-[#FFE8E2] dark:bg-brand-orange/20 text-[#FF6D4D] dark:text-brand-orange rounded-xl font-bold text-sm hover:bg-[#FFD8D2] dark:hover:bg-brand-orange/30 transition-all active:scale-95 leading-none">
                    Grant Credits
                </button>
                <button className="w-full py-2.5 bg-[#FFE8E2] dark:bg-gray-800 text-[#FF6D4D] dark:text-gray-300 rounded-xl font-bold text-sm hover:bg-[#FFD8D2] dark:hover:bg-gray-700 transition-all active:scale-95 leading-none flex items-center justify-center space-x-2">
                    <Download size={16} />
                    <span>Export Data</span>
                </button>
            </div>
        </div>
    );
};

export default Organizations;