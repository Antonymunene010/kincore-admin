import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBranch } from '../../context/BranchContext';
import {
    GitBranch,
    MapPin,
    User,
    Users,
    Shield,
    X,
    ArrowRight,
    CheckCircle2,
    Info,
    FileText,
    Search
} from 'lucide-react';

const PremiumInput = ({ label, placeholder, icon: Icon, value, onChange, type = "text", error, required }) => (
    <div className="space-y-2 mb-8">
        <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-brand-darkCard rounded-2xl shadow-sm flex items-center justify-center group-focus-within:scale-110 transition-transform z-10">
                <Icon size={22} className="text-brand-orange" />
            </div>
            {type === "textarea" ? (
                <textarea
                    rows="4"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`w-full bg-gray-50 dark:bg-brand-darkBg/50 border-none rounded-[1.5rem] py-5 pl-[4.5rem] pr-8 text-sm font-bold text-gray-700 dark:text-brand-darkText outline-none focus:ring-4 ${error ? 'focus:ring-red-400/20 ring-1 ring-red-400' : 'focus:ring-brand-orange/5'} transition-all resize-none`}
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`w-full bg-gray-50 dark:bg-brand-darkBg/50 border-none rounded-[1.5rem] py-5 pl-[4.5rem] pr-8 text-sm font-bold text-gray-700 dark:text-brand-darkText outline-none focus:ring-4 ${error ? 'focus:ring-red-400/20 ring-1 ring-red-400' : 'focus:ring-brand-orange/5'} transition-all`}
                />
            )}
        </div>
        {error && <p className="text-[10px] font-bold text-red-500 uppercase tracking-tight ml-1">{error}</p>}
    </div>
);

const SearchSelect = ({ label, placeholder, icon: Icon, selectedValue, onSelect, required }) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className="space-y-2 mb-8 relative">
            <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-brand-darkCard rounded-2xl shadow-sm flex items-center justify-center group-focus-within:scale-110 transition-transform z-10">
                    <Icon size={22} className="text-brand-orange" />
                </div>
                <input
                    type="text"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                    className="w-full bg-gray-50 dark:bg-brand-darkBg/50 border-none rounded-[1.5rem] py-5 pl-[4.5rem] pr-12 text-sm font-bold text-gray-700 dark:text-brand-darkText outline-none focus:ring-4 focus:ring-brand-orange/5 transition-all"
                    placeholder={selectedValue ? selectedValue.name : placeholder}
                />
                {selectedValue && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-orange">
                        <CheckCircle2 size={18} />
                    </div>
                )}
            </div>
            {isFocused && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder rounded-[2rem] shadow-2xl z-50 p-4 animate-fadeIn">
                    <p className="p-2 text-[8px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50 dark:border-brand-darkBorder mb-2">Search Results</p>
                    {['Winston Churchill', 'Diana Spencer', 'Jane Austen'].map(name => (
                        <button
                            key={name}
                            onClick={() => onSelect({ id: Date.now(), name })}
                            className="w-full text-left px-4 py-3 hover:bg-orange-50 dark:hover:bg-brand-orange/10 rounded-xl transition-colors flex items-center space-x-3"
                        >
                            <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-brand-darkBg flex items-center justify-center text-brand-orange">
                                <User size={14} />
                            </div>
                            <span className="text-sm font-bold text-gray-700 dark:text-brand-darkText">{name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const PermissionToggle = ({ label, options, value, onChange }) => (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-gray-50 dark:border-brand-darkBorder last:border-0 group">
        <label className="text-sm font-black text-gray-700 dark:text-brand-darkText uppercase tracking-tight mb-3 sm:mb-0">{label}</label>
        <div className="flex bg-gray-100 dark:bg-brand-darkBg p-1.5 rounded-2xl w-fit shadow-inner">
            {options.map(opt => (
                <button
                    key={opt}
                    onClick={() => onChange(opt)}
                    className={`px-5 py-2 text-[9px] font-black rounded-xl transition-all uppercase tracking-widest ${value === opt ? 'bg-white dark:bg-brand-darkCard shadow-md text-brand-orange' : 'text-gray-400 hover:text-gray-500'}`}
                >
                    {opt}
                </button>
            ))}
        </div>
    </div>
);

const SectionHeader = ({ icon: Icon, title, subtitle }) => (
    <div className="flex items-center space-x-4 mb-8">
        <div className="w-14 h-14 bg-orange-50 dark:bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange shadow-sm">
            <Icon size={24} />
        </div>
        <div className="text-left">
            <h3 className="text-xl font-black text-gray-900 dark:text-brand-darkText uppercase tracking-tight">{title}</h3>
            {subtitle && <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{subtitle}</p>}
        </div>
    </div>
);

const CreateBranch = () => {
    const navigate = useNavigate();
    const { branchData, updateBranchData } = useBranch();
    const [errors, setErrors] = useState({});

    const handleCreate = () => {
        const newErrors = {};
        if (!branchData.name) newErrors.name = 'Branch name is required';
        if (!branchData.rootAncestor) newErrors.rootAncestor = 'Root ancestor is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        alert('Branch Created Successfully!');
        navigate('/owner/branches');
    };

    return (
        <div className="flex flex-col min-h-[calc(100vh-100px)] max-w-3xl mx-auto w-full text-left">
            <header className="mb-10 flex items-center justify-between">
                <div>
                    <h2 className="text-brand-orange text-[10px] font-black uppercase tracking-widest mb-1">Global Management</h2>
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-brand-darkText">Create New Branch</h1>
                </div>
                <button onClick={() => navigate('/owner/branches')} className="p-4 bg-gray-50 dark:bg-brand-darkBg/50 rounded-2xl text-gray-400 hover:text-brand-orange transition-colors">
                    <X size={24} />
                </button>
            </header>

            <div className="bg-white dark:bg-brand-darkCard rounded-[3rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm p-10 space-y-12 mb-8">

                {/* Core Info */}
                <section>
                    <SectionHeader icon={GitBranch} title="Identity Details" subtitle="Core branch identification" />
                    <PremiumInput
                        label="Branch Title"
                        icon={GitBranch}
                        placeholder="e.g. The Churchill Branch"
                        required
                        value={branchData.name}
                        onChange={(e) => updateBranchData({ name: e.target.value })}
                        error={errors.name}
                    />
                    <PremiumInput
                        label="Historical Description"
                        icon={FileText}
                        type="textarea"
                        placeholder="Define the purpose and history of this branch..."
                        value={branchData.description}
                        onChange={(e) => updateBranchData({ description: e.target.value })}
                    />
                    <PremiumInput
                        label="Origin Region"
                        icon={MapPin}
                        placeholder="City, Country or Region"
                        value={branchData.region}
                        onChange={(e) => updateBranchData({ region: e.target.value })}
                    />
                </section>

                {/* Leadership */}
                <section className="pt-12 border-t border-gray-50 dark:border-brand-darkBorder">
                    <SectionHeader icon={Users} title="Lineage & Leadership" subtitle="Connect to the family tree" />
                    <SearchSelect
                        label="Root Ancestor Node"
                        placeholder="Search existing persons..."
                        icon={Users}
                        required
                        selectedValue={branchData.rootAncestor}
                        onSelect={(node) => updateBranchData({ rootAncestor: node })}
                    />
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight -mt-4 mb-8 text-left flex items-center">
                        <Info size={12} className="mr-1 inline text-brand-orange" /> Starting point for this branch lineage
                    </p>

                    <SearchSelect
                        label="Branch Head"
                        placeholder="Select person leader..."
                        icon={Shield}
                        selectedValue={branchData.branchHead}
                        onSelect={(node) => updateBranchData({ branchHead: node })}
                    />
                </section>

                {/* Governance */}
                <section className="pt-12 border-t border-gray-50 dark:border-brand-darkBorder">
                    <SectionHeader icon={Shield} title="Governance & Access" subtitle="Access and permission rules" />

                    <div className="space-y-4 mb-10">
                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Invite Policy</label>
                        <div className="flex flex-wrap gap-6">
                            {['Open invite', 'Admin approval required'].map(policy => (
                                <button
                                    key={policy}
                                    onClick={() => updateBranchData({ invitePolicy: policy })}
                                    className={`flex items-center space-x-3 px-6 py-4 rounded-2xl border transition-all ${branchData.invitePolicy === policy ? 'border-brand-orange bg-orange-50 dark:bg-brand-orange/10' : 'border-gray-100 dark:border-brand-darkBorder bg-white dark:bg-brand-darkCard'}`}
                                >
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${branchData.invitePolicy === policy ? 'border-brand-orange' : 'border-gray-200'}`}>
                                        {branchData.invitePolicy === policy && <div className="w-2 h-2 bg-brand-orange rounded-full" />}
                                    </div>
                                    <span className={`text-sm font-black uppercase tracking-tight ${branchData.invitePolicy === policy ? 'text-gray-900 dark:text-brand-darkText' : 'text-gray-400'}`}>{policy}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-brand-darkBg/30 rounded-[2.5rem] p-8">
                        <p className="text-[10px] font-black text-brand-orange uppercase tracking-widest mb-6">Default Permissions</p>
                        <PermissionToggle
                            label="Who can add members"
                            options={['Branch Head', 'All Members']}
                            value={branchData.permissions.addMembers}
                            onChange={(val) => updateBranchData({ permissions: { ...branchData.permissions, addMembers: val } })}
                        />
                        <PermissionToggle
                            label="Edit branch history"
                            options={['Branch Head', 'All Members']}
                            value={branchData.permissions.editHistory}
                            onChange={(val) => updateBranchData({ permissions: { ...branchData.permissions, editHistory: val } })}
                        />
                        <PermissionToggle
                            label="Media Upload privileges"
                            options={['Branch Head', 'All Members']}
                            value={branchData.permissions.uploadMedia}
                            onChange={(val) => updateBranchData({ permissions: { ...branchData.permissions, uploadMedia: val } })}
                        />
                    </div>
                </section>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-20 justify-end">
                <button
                    onClick={() => navigate('/owner/branches')}
                    className="w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-brand-darkBg hover:bg-gray-200 dark:hover:bg-brand-darkBorder transition-all uppercase text-sm tracking-widest"
                >
                    Cancel
                </button>
                <button
                    onClick={handleCreate}
                    className="w-full sm:w-auto px-12 py-4 rounded-2xl font-bold text-white bg-brand-orange shadow-lg shadow-brand-orange/25 hover:bg-orange-600 active:scale-95 transition-all uppercase text-sm tracking-widest flex items-center justify-center gap-2"
                >
                    Create Branch <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default CreateBranch;
