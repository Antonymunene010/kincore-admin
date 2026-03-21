import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Heart, Baby, Users } from 'lucide-react';

const TreeNode = ({ name, id, location, avatar, isActive = false }) => (
    <div className={`flex items-center p-3 rounded-2xl border transition-all hover:scale-105 cursor-pointer w-44 ${isActive ? 'border-brand-orange bg-orange-50/50 dark:bg-brand-orange/10 ring-2 ring-brand-orange/20 shadow-sm' : 'border-gray-100 dark:border-brand-darkBorder bg-white dark:bg-brand-darkCard shadow-xs'}`}>
        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-orange-100 dark:border-brand-orange/30">
            <img src={avatar || `https://ui-avatars.com/api/?name=${name}&background=random`} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="ml-3 text-left overflow-hidden">
            <h4 className="text-[10px] font-extrabold text-gray-900 dark:text-brand-darkText leading-tight truncate">{name}</h4>
            <p className="text-[8px] font-bold text-gray-400 dark:text-gray-500 mt-0.5 whitespace-nowrap">{id}</p>
            <p className="text-[8px] font-medium text-gray-400 dark:text-gray-500 truncate">{location}</p>
        </div>
    </div>
);

const FamilyTree = () => {
    const navigate = useNavigate();
    const [selectedMember, setSelectedMember] = useState({
        name: 'Olivia Bennett',
        role: 'Tribe Sovereign',
        avatar: 'https://i.pravatar.cc/150?u=olivia'
    });

    const handleAction = (action) => {
        switch (action) {
            case 'Add Spouse':
                navigate('/owner/add-member', { state: { title: 'Add New Spouse' } });
                break;
            case 'Add Child':
                navigate('/owner/tree/add-child');
                break;
            case 'Add Parents':
                navigate('/owner/tree/add-parents');
                break;
            case 'Add Family Member':
                navigate('/owner/add-member', { state: { title: 'Add New Member' } });
                break;
            default:
                break;
        }
    };

    return (
        <div className="flex h-full -m-8 relative overflow-hidden bg-[#F9FAFB]/50 dark:bg-brand-darkBg transition-colors">
            {/* Tree Area */}
            <div className="flex-1 p-8 overflow-auto relative scroll-hide">
                {/* Header */}
                <div className="absolute top-8 left-8 z-20 text-left">
                    <h1 className="text-3xl font-black text-gray-900 dark:text-brand-darkText leading-none">Family Tree</h1>
                </div>

                {/* Generation Badge - Centered */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20">
                    <div className="inline-flex items-center px-6 py-2 bg-[#FFE5DE] dark:bg-brand-orange/20 rounded-full text-[10px] font-black text-brand-orange uppercase tracking-[0.1em] transition-colors whitespace-nowrap">
                        4 generation / 24 Member
                    </div>
                </div>

                {/* Zoom Controls Overlay */}
                <div className="absolute top-24 right-12 flex flex-col space-y-2 z-20">
                    <div className="bg-[#FFE5DE]/80 dark:bg-brand-darkCard/80 backdrop-blur-sm rounded-2xl flex flex-col overflow-hidden shadow-sm border border-orange-100 dark:border-brand-darkBorder transition-colors">
                        <button className="w-11 h-11 flex items-center justify-center text-brand-orange hover:bg-white dark:hover:bg-brand-darkBg transition-colors border-b border-orange-100 dark:border-brand-darkBorder">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
                        </button>
                        <button className="w-11 h-11 flex items-center justify-center text-brand-orange hover:bg-white dark:hover:bg-brand-darkBg transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" /></svg>
                        </button>
                    </div>
                    <button className="w-11 h-11 bg-[#FFE5DE]/80 dark:bg-brand-darkCard/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-brand-orange hover:bg-white dark:hover:bg-brand-darkBg shadow-sm border border-orange-100 dark:border-brand-darkBorder transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    </button>
                </div>

                {/* Tree Structure */}
                <div className="mt-48 flex flex-col items-center">
                    {/* Root */}
                    <div className="mb-20 relative">
                        <TreeNode name="Arthur Harrison" id="12345/YYYY" location="London" isActive={true} />
                        {/* Line Down */}
                        <div className="absolute left-1/2 top-full w-[2px] h-10 bg-brand-orange/40 dark:bg-brand-orange/20 -translate-x-1/2 transition-colors" />
                    </div>

                    {/* Level 2 Wrapper */}
                    <div className="relative mb-20 flex flex-col items-center">
                        {/* Horizontal Connector Line */}
                        <div className="absolute top-0 left-[-110px] right-[-110px] h-[2px] bg-brand-orange/40 dark:bg-brand-orange/20 transition-colors" />

                        <div className="flex space-x-28">
                            {/* Child 1 */}
                            <div className="relative pt-10">
                                <div className="absolute top-0 left-1/2 w-[2px] h-10 bg-brand-orange/40 dark:bg-brand-orange/20 -translate-x-1/2 transition-colors" />
                                <TreeNode name="Arthur Harrison" id="12345/YYYY" location="London" />
                                <div className="absolute left-1/2 top-full w-[2px] h-10 bg-brand-orange/40 dark:bg-brand-orange/20 -translate-x-1/2 transition-colors" />
                            </div>
                            {/* Child 2 */}
                            <div className="relative pt-10">
                                <div className="absolute top-0 left-1/2 w-[2px] h-10 bg-brand-orange/40 dark:bg-brand-orange/20 -translate-x-1/2 transition-colors" />
                                <TreeNode name="Arthur Harrison" id="12345/YYYY" location="London" />
                                <div className="absolute left-1/2 top-full w-[2px] h-10 bg-brand-orange/40 dark:bg-brand-orange/20 -translate-x-1/2 transition-colors" />
                            </div>
                        </div>
                    </div>

                    {/* Level 3 Wrapper */}
                    <div className="relative flex flex-col items-center">
                        <div className="flex space-x-8">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="relative pt-10 pb-10">
                                    <div className="absolute top-0 left-1/2 w-[1px] h-10 bg-brand-orange/20 dark:bg-brand-orange/10 -translate-x-1/2 transition-colors" />
                                    <TreeNode name="Arthur Harrison" id="12345/YYYY" location="London" />
                                    {i < 3 && <div className="absolute left-1/2 top-full w-[1px] h-10 bg-brand-orange/20 dark:bg-brand-orange/10 -translate-x-1/2 transition-colors" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side Detail Panel */}
            <div className="w-[360px] bg-white dark:bg-brand-darkCard border-l border-gray-100 dark:border-brand-darkBorder flex flex-col h-full shadow-2xl relative z-30 transition-colors text-left">
                <div className="flex-1 overflow-y-auto px-8 py-10 scroll-hide">
                    {/* User Header */}
                    <div className="flex flex-col items-center mb-12">
                        <div className="w-28 h-28 rounded-full overflow-hidden mb-6 border-4 border-white dark:border-brand-darkBorder ring-4 ring-orange-50 dark:ring-brand-orange/10 shadow-md transition-colors">
                            <img src={selectedMember.avatar} alt={selectedMember.name} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-brand-darkText leading-tight tracking-tight">{selectedMember.name}</h3>
                        <p className="text-xs font-bold text-gray-400 dark:text-gray-500 mt-1 uppercase tracking-widest">{selectedMember.role}</p>
                    </div>

                    {/* Information Sections */}
                    <div className="space-y-10">
                        <div className="relative">
                            <h4 className="text-sm font-black text-gray-900 dark:text-brand-darkText mb-6 bg-white dark:bg-brand-darkCard pr-4 relative z-10 transition-colors">Personal Information</h4>
                            <div className="absolute top-2.5 left-0 right-0 h-[1px] bg-gray-50 dark:bg-brand-darkBorder z-0 transition-colors" />
                        </div>

                        <div className="space-y-6">
                            {[
                                { label: 'Full Name', value: selectedMember.name, readOnly: true },
                                { label: 'Date of Birth', placeholder: 'DD/MM/YYYY' },
                                { label: 'Place of Birth', placeholder: 'Location' },
                                { label: 'DNA Data', placeholder: 'Data sequence' }
                            ].map((field, idx) => (
                                <div key={idx}>
                                    <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2.5 ml-1">{field.label}</label>
                                    <input
                                        type="text"
                                        defaultValue={field.value}
                                        readOnly={field.readOnly}
                                        placeholder={field.placeholder}
                                        className={`w-full rounded-2xl py-4 px-5 text-sm font-bold text-gray-800 dark:text-brand-darkText outline-none transition-all ${field.readOnly ? 'bg-[#F9FAFB] dark:bg-brand-darkBg' : 'bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder focus:border-brand-orange/20 focus:ring-4 focus:ring-brand-orange/5 dark:placeholder:text-gray-600'}`}
                                    />
                                </div>
                            ))}
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2.5 ml-1">Private Notes</label>
                                <textarea rows="4" className="w-full bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder rounded-2xl py-4 px-5 text-sm font-bold text-gray-800 dark:text-brand-darkText outline-none focus:border-brand-orange/20 focus:ring-4 focus:ring-brand-orange/5 resize-none shadow-xs transition-colors"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fixed Footer Actions */}
                <div className="p-8 bg-white dark:bg-brand-darkCard border-t border-gray-50 dark:border-brand-darkBorder flex flex-col space-y-6 transition-colors shadow-inner">
                    <div className="space-y-3">
                        <div className="relative mb-3">
                            <h4 className="text-sm font-black text-gray-900 dark:text-brand-darkText bg-white dark:bg-brand-darkCard pr-4 relative z-10 w-fit transition-colors text-left uppercase tracking-widest">Family Actions</h4>
                            <div className="absolute top-2.5 left-0 right-0 h-[1px] bg-gray-50 dark:bg-brand-darkBorder z-0 transition-colors" />
                        </div>

                        <div className="flex flex-col space-y-4">
                            {/* Main Actions Row */}
                            <button
                                onClick={() => handleAction('Add Spouse')}
                                className="w-full bg-brand-orange text-white p-4 rounded-2xl font-black text-sm shadow-xl shadow-brand-orange/20 hover:bg-orange-600 transition-all active:scale-95 flex items-center justify-center space-x-3 group"
                            >
                                <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Heart className="w-4 h-4 fill-white" />
                                </div>
                                <span>Add Spouse</span>
                            </button>

                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => handleAction('Add Child')}
                                    className="bg-brand-orange text-white p-4 rounded-2xl font-black text-xs shadow-xl shadow-brand-orange/20 hover:bg-orange-600 transition-all active:scale-95 flex flex-col items-center space-y-2 group"
                                >
                                    <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Baby className="w-4 h-4" strokeWidth={3} />
                                    </div>
                                    <span>Add Child</span>
                                </button>
                                <button
                                    onClick={() => handleAction('Add Parents')}
                                    className="bg-brand-orange text-white p-4 rounded-2xl font-black text-xs shadow-xl shadow-brand-orange/20 hover:bg-orange-600 transition-all active:scale-95 flex flex-col items-center space-y-2 group"
                                >
                                    <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Users className="w-4 h-4" strokeWidth={3} />
                                    </div>
                                    <span>Add Parents</span>
                                </button>
                            </div>

                            <button
                                onClick={() => handleAction('Add Family Member')}
                                className="w-full bg-[#FFE5DE] dark:bg-brand-orange/10 text-[#FF6B3D] dark:text-brand-orange p-4 rounded-2xl font-black text-sm hover:bg-orange-100 dark:hover:bg-brand-orange/20 transition-all active:scale-95 flex items-center justify-center space-x-3 group"
                            >
                                <div className="w-8 h-8 bg-brand-orange/10 dark:bg-brand-orange/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Plus className="w-4 h-4" strokeWidth={3} />
                                </div>
                                <span>Add Family Member</span>
                            </button>
                        </div>
                    </div>

                    {/* Merge Families Section */}
                    <div className="pt-6 border-t border-gray-50 dark:border-brand-darkBorder">
                        <h4 className="text-xl font-black text-[#0A2540] dark:text-brand-darkText mb-2 text-left">Merge Families</h4>
                        <p className="text-[12px] font-medium text-gray-500 dark:text-gray-400 mb-6 leading-relaxed text-left">
                            Search and link other family trees to consolidate lineage data. This action is irreversible and requires careful consideration.
                        </p>

                        <div className="space-y-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for Family Tree"
                                    className="w-full bg-gray-50 dark:bg-brand-darkBg border border-gray-100 dark:border-brand-darkBorder rounded-xl py-4 px-5 text-sm font-medium text-gray-700 dark:text-brand-darkText outline-none focus:ring-4 focus:ring-brand-orange/5 transition-all text-left"
                                />
                            </div>
                            <button className="bg-[#FFE5DE] text-[#0A2540] px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#FFD6CA] transition-all active:scale-95 inline-flex items-center justify-center">
                                Merge Families
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View Support - Horizontal Scroll logic */}
            <div className="lg:hidden absolute bottom-6 left-1/2 -translate-x-1/2 bg-gray-900/80 backdrop-blur-md px-6 py-2.5 rounded-full text-[10px] font-bold text-white z-50 flex items-center space-x-2">
                <svg className="w-4 h-4 animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                <span>Scroll to explore the tree</span>
            </div>
        </div>
    );
};

export default FamilyTree;
