import React from 'react';
import { useNavigate } from 'react-router-dom';

const BranchCard = ({ emblem, name, leader, members, activity, bgColor = 'bg-white' }) => {
    const navigate = useNavigate();
    return (
        <div
            className="flex flex-col items-start text-left group cursor-pointer"
            onClick={() => navigate('/owner/branches/edit')}
        >
            <div className={`w-full aspect-square ${bgColor} dark:bg-brand-darkCard rounded-[2rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm flex items-center justify-center p-8 mb-6 transition-all group-hover:shadow-md dark:group-hover:shadow-brand-orange/5 group-hover:-translate-y-1`}>
                <div className="w-full h-full flex items-center justify-center text-4xl">
                    {emblem}
                </div>
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 dark:text-brand-darkText mb-1">{name}</h3>
            <div className="flex justify-between items-center w-full">
                <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Leader: {leader}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{members} members • {activity}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-orange font-black text-[10px] uppercase">Edit</div>
            </div>
        </div>
    );
};

const GlobalBranches = () => {
    const navigate = useNavigate();
    const branches = [
        {
            name: 'The Windsor Branch',
            leader: 'Charles Windsor',
            members: 125,
            activity: 'High',
            bgColor: 'bg-white',
            emblem: '🏰'
        },
        {
            name: 'The Spencer Branch',
            leader: 'Diana Spencer',
            members: 85,
            activity: 'Medium',
            bgColor: 'bg-[#EEE6D8]',
            emblem: '🛡️'
        },
        {
            name: 'The Churchill Branch',
            leader: 'Winston Churchill',
            members: 60,
            activity: 'Low',
            bgColor: 'bg-[#3D2F28]',
            emblem: '🦅'
        },
        {
            name: 'The Austen Branch',
            leader: 'Jane Austen',
            members: 45,
            activity: 'Medium',
            bgColor: 'bg-[#F3F4F6]',
            emblem: '🖋️'
        },
        {
            name: 'The Bronte Branch',
            leader: 'Charlotte Bronte',
            members: 30,
            activity: 'Low',
            bgColor: 'bg-[#1C1C1C]',
            emblem: '📖'
        },
        {
            name: 'The Darwin Branch',
            leader: 'Charles Darwin',
            members: 20,
            activity: 'Low',
            bgColor: 'bg-[#F0F9FF]',
            emblem: '🔬'
        }
    ];

    return (
        <div className="flex flex-col text-left">
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-brand-darkText leading-tight">Global Branches Management</h1>
                <button
                    onClick={() => navigate('/owner/branches/create')}
                    className="bg-orange-50 dark:bg-brand-orange/10 text-brand-orange px-8 py-3 rounded-xl font-bold hover:bg-orange-100 dark:hover:bg-brand-orange/20 transition-all"
                >
                    Create New Branch
                </button>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-12">
                {branches.map((branch, index) => (
                    <BranchCard key={index} {...branch} />
                ))}
            </div>
        </div>
    );
};

export default GlobalBranches;
