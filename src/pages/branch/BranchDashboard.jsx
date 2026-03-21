import React from 'react';

const MemberCard = ({ name, dob, location, avatar, isActive = false }) => (
    <div className={`flex items-center p-3 rounded-2xl border transition-all hover:scale-105 cursor-pointer w-44 shrink-0 ${isActive ? 'border-brand-orange bg-orange-50/50 dark:bg-brand-orange/10 ring-2 ring-brand-orange/20 shadow-sm' : 'border-gray-100 dark:border-brand-darkBorder bg-white dark:bg-brand-darkCard shadow-xs'}`}>
        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-orange-100 dark:border-brand-orange/30 transition-colors">
            <img src={avatar || `https://ui-avatars.com/api/?name=${name}&background=random`} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="ml-3 text-left overflow-hidden">
            <h4 className="text-[10px] font-extrabold text-gray-900 dark:text-brand-darkText leading-tight truncate transition-colors">{name}</h4>
            <p className="text-[8px] font-bold text-gray-400 dark:text-gray-500 mt-0.5 whitespace-nowrap transition-colors">{dob}</p>
            <p className="text-[8px] font-medium text-gray-400 dark:text-gray-500 truncate transition-colors">{location}</p>
        </div>
    </div>
);

const BranchDashboard = () => {
    return (
        <div className="flex h-full -m-4 sm:-m-8 relative overflow-hidden bg-white dark:bg-brand-darkBg transition-colors">
            <div className="flex-1 p-4 sm:p-8 overflow-auto relative min-h-[calc(100vh-64px)] custom-scrollbar">
                {/* Header */}
                <div className="sticky top-0 left-0 z-20 mb-12">
                    <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-brand-darkText leading-none transition-colors">Branch Dashboard</h1>
                </div>

                {/* Generation Badge */}
                <div className="absolute top-4 sm:top-12 left-1/2 -translate-x-1/2 z-20">
                    <div className="inline-flex items-center px-6 py-2 bg-[#FFE5DE] dark:bg-brand-orange/10 rounded-full text-[10px] font-black text-brand-orange uppercase tracking-[0.1em] transition-colors whitespace-nowrap">
                        4 generation / 24 Member
                    </div>
                </div>

                {/* Zoom Controls */}
                <div className="absolute top-24 right-4 sm:right-12 flex flex-col space-y-2 z-20">
                    <div className="bg-white dark:bg-brand-darkCard rounded-2xl flex flex-col overflow-hidden shadow-sm border border-gray-100 dark:border-brand-darkBorder transition-colors">
                        <button className="w-11 h-11 flex items-center justify-center text-brand-orange hover:bg-orange-50 dark:hover:bg-brand-orange/10 transition-colors border-b border-gray-50 dark:border-brand-darkBorder">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
                        </button>
                        <button className="w-11 h-11 flex items-center justify-center text-brand-orange hover:bg-orange-50 dark:hover:bg-brand-orange/10 transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" /></svg>
                        </button>
                    </div>
                    <button className="w-11 h-11 bg-white dark:bg-brand-darkCard rounded-2xl flex items-center justify-center text-brand-orange hover:bg-orange-50 dark:hover:bg-brand-orange/10 shadow-sm border border-gray-100 dark:border-brand-darkBorder transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    </button>
                </div>

                {/* Tree Area */}
                <div className="mt-24 sm:mt-48 flex flex-col items-center pb-24 min-w-max">
                    {/* Root */}
                    <div className="mb-20 relative">
                        <MemberCard name="Arthur Harrison" dob="DD.MM.YYYY" location="Location" avatar="https://i.pravatar.cc/150?u=arthur" isActive={true} />
                        <div className="absolute left-1/2 top-full w-[2px] h-10 bg-brand-orange/40 dark:bg-brand-orange/60 -translate-x-1/2 transition-colors" />
                    </div>

                    {/* L2 */}
                    <div className="relative mb-20 flex flex-col items-center">
                        <div className="absolute top-0 left-[-110px] right-[-110px] h-[2px] bg-brand-orange/40 dark:bg-brand-orange/60 transition-colors" />
                        <div className="flex space-x-28">
                            <div className="relative pt-10">
                                <div className="absolute top-0 left-1/2 w-[2px] h-10 bg-brand-orange/40 dark:bg-brand-orange/60 -translate-x-1/2 transition-colors" />
                                <MemberCard name="Arthur Harrison" dob="DD.MM.YYYY" location="Location" avatar="https://i.pravatar.cc/150?u=a2" />
                                <div className="absolute left-1/2 top-full w-[2px] h-10 bg-brand-orange/40 dark:bg-brand-orange/60 -translate-x-1/2 transition-colors" />
                            </div>
                            <div className="relative pt-10">
                                <div className="absolute top-0 left-1/2 w-[2px] h-10 bg-brand-orange/40 dark:bg-brand-orange/60 -translate-x-1/2 transition-colors" />
                                <MemberCard name="Arthur Harrison" dob="DD.MM.YYYY" location="Location" avatar="https://i.pravatar.cc/150?u=a3" />
                                <div className="absolute left-1/2 top-full w-[2px] h-10 bg-brand-orange/40 dark:bg-brand-orange/60 -translate-x-1/2 transition-colors" />
                            </div>
                        </div>
                    </div>

                    {/* L3 */}
                    <div className="relative flex flex-col items-center">
                        <div className="flex space-x-8">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="relative pt-10 pb-10">
                                    <div className="absolute top-0 left-1/2 w-[1px] h-10 bg-brand-orange/20 dark:bg-brand-orange/40 -translate-x-1/2 transition-colors" />
                                    <MemberCard name="Arthur Harrison" dob="DD.MM.YYYY" location="Location" avatar={`https://i.pravatar.cc/150?u=a${i + 10}`} />
                                    {i < 3 && <div className="absolute left-1/2 top-full w-[1px] h-10 bg-brand-orange/20 dark:bg-brand-orange/40 -translate-x-1/2 transition-colors" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BranchDashboard;
