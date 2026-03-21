import React from 'react';
import { useNavigate } from 'react-router-dom';

const StatusBadge = ({ status }) => {
    const isActive = status === 'Active';
    return (
        <span className={`px-4 sm:px-12 py-2 rounded-xl text-[13px] font-bold transition-all whitespace-nowrap ${isActive ? 'bg-[#FFE5DE] dark:bg-brand-orange/20 text-brand-orange' : 'bg-[#F9FAFB] dark:bg-brand-darkBg text-gray-400 dark:text-gray-500'}`}>
            {status}
        </span>
    );
};

const BranchMembers = () => {
    const navigate = useNavigate();
    const members = [
        { name: 'Clara Thompson', role: 'Branch Admin', status: 'Active', action: 'Edit' },
        { name: 'Owen Thompson', role: 'Member', status: 'Active', action: 'Edit' },
        { name: 'Isabella Thompson', role: 'Member', status: 'Active', action: 'Edit' },
        { name: 'Liam Thompson', role: 'Member', status: 'Pending', action: 'Approve' },
        { name: 'Ava Thompson', role: 'Member', status: 'Active', action: 'Edit' },
    ];

    return (
        <div className="max-w-6xl mx-auto text-left py-4 px-4 sm:px-0">
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
                <h1 className="text-2xl sm:text-[32px] font-bold text-gray-900 dark:text-brand-darkText leading-tight transition-colors">My Branch Members</h1>
                <button
                    onClick={() => navigate('/branch/members/add')}
                    className="bg-brand-orange text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-brand-orange/20 hover:bg-orange-600 transition-all active:scale-95 leading-none w-full sm:w-fit"
                >
                    Add Member
                </button>
            </header>

            <div className="bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder rounded-[2rem] overflow-hidden shadow-sm transition-colors">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-50 dark:border-brand-darkBorder transition-colors">
                                <th className="px-6 sm:px-10 py-6 text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider transition-colors">Name</th>
                                <th className="px-6 sm:px-10 py-6 text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider transition-colors">Role</th>
                                <th className="px-6 sm:px-10 py-6 text-sm font-medium text-gray-400 dark:text-gray-500 text-center uppercase tracking-wider transition-colors">Status</th>
                                <th className="px-6 sm:px-10 py-6 text-sm font-medium text-gray-400 dark:text-gray-500 text-right pr-6 sm:pr-20 uppercase tracking-wider transition-colors">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-brand-darkBorder">
                            {members.map((member, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/30 dark:hover:bg-brand-darkBg transition-colors group">
                                    <td className="px-6 sm:px-10 py-6 text-[15px] font-medium text-gray-800 dark:text-brand-darkText group-hover:text-brand-orange transition-colors">{member.name}</td>
                                    <td className="px-6 sm:px-10 py-6 text-[15px] font-medium text-gray-400 dark:text-gray-500 transition-colors uppercase tracking-tight">{member.role}</td>
                                    <td className="px-6 sm:px-10 py-6 text-center">
                                        <StatusBadge status={member.status} />
                                    </td>
                                    <td className="px-6 sm:px-10 py-6 text-right pr-6 sm:pr-20">
                                        <button className="text-gray-900 dark:text-brand-darkText font-black text-[15px] hover:text-brand-orange hover:underline transition-all uppercase tracking-tighter">
                                            {member.action}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BranchMembers;
