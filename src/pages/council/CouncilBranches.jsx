import React from 'react';
import { useNavigate } from 'react-router-dom';

const BranchCard = ({ name, leader, members, activity, color, crest }) => (
    <div className="flex flex-col group cursor-pointer">
        <div className={`aspect-square rounded-[2rem] flex items-center justify-center mb-6 overflow-hidden shadow-sm transition-all group-hover:shadow-md dark:group-hover:shadow-brand-orange/5 dark:group-hover:-translate-y-1 ${color} dark:bg-brand-darkCard dark:border-brand-darkBorder`}>
            <img src={crest} alt={name} className="w-1/2 h-1/2 object-contain" />
        </div>
        <div className="px-2">
            <h3 className="text-base font-black text-gray-900 dark:text-brand-darkText mb-1 tracking-tight">The {name} Branch</h3>
            <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 mb-1">Branch Leader: {leader}</p>
            <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 opacity-80">{members} members • {activity} activity</p>
        </div>
    </div>
);

const CouncilBranches = () => {
    const navigate = useNavigate();
    const branches = [
        { name: 'Windsor', leader: 'Charles Windsor', members: 125, activity: 'High', color: 'bg-white border border-gray-50', crest: 'https://img.icons8.com/color/144/coat-of-arms.png' },
        { name: 'Spencer', leader: 'Diana Spencer', members: 85, activity: 'Medium', color: 'bg-[#F2EADA]', crest: 'https://img.icons8.com/color/144/royal-crown.png' },
        { name: 'Churchill', leader: 'Winston Churchill', members: 60, activity: 'Low', color: 'bg-[#433422]', crest: 'https://img.icons8.com/color/144/shield.png' },
        { name: 'Austen', leader: 'Jane Austen', members: 45, activity: 'Medium', color: 'bg-[#F1F3F4]', crest: 'https://img.icons8.com/color/144/heraldry.png' },
        { name: 'Bronte', leader: 'Charlotte Bronte', members: 30, activity: 'Low', color: 'bg-[#121212]', crest: 'https://img.icons8.com/color/144/castle.png' },
        { name: 'Darwin', leader: 'Charles Darwin', members: 20, activity: 'Low', color: 'bg-[#F1F3F4]', crest: 'https://img.icons8.com/color/144/ship.png' },
    ];

    return (
        <div className="max-w-6xl mx-auto text-left py-4 pb-20">
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-14">
                <h1 className="text-[32px] font-black text-gray-900 dark:text-brand-darkText leading-tight">Global Branches Management</h1>
                <button
                    onClick={() => navigate('/council/branches/create')}
                    className="bg-[#FFE5DE] dark:bg-brand-orange/10 text-gray-900 dark:text-brand-darkText px-6 py-3.5 rounded-xl font-black text-xs hover:bg-orange-100 dark:hover:bg-brand-orange/20 transition-all active:scale-95 leading-none w-fit"
                >
                    Create New Branch
                </button>
            </header>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
                {branches.map((branch, idx) => (
                    <BranchCard key={idx} {...branch} />
                ))}
            </div>
        </div>
    );
};

export default CouncilBranches;
