import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    UserPlus,
    Search,
    User,
    Link2,
    Mail,
    Phone,
    ShieldCheck,
    ChevronDown,
    X,
    CheckCircle2,
    Info,
    ArrowRight,
    Users
} from 'lucide-react';

const InputField = ({ label, placeholder, type = "text", icon: Icon, value, onChange, error, required = false, helperText }) => (
    <div className="space-y-1.5 mb-6 text-left">
        <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
            {Icon && (
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Icon className="h-4 w-4 text-gray-400" />
                </div>
            )}
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={`block w-full ${Icon ? 'pl-11' : 'px-4'} py-3.5 bg-[#F3F4F6]/50 dark:bg-brand-darkBg/50 border ${error ? 'border-red-400' : 'border-transparent'} rounded-2xl focus:ring-2 focus:ring-brand-orange/20 text-gray-900 dark:text-brand-darkText font-medium transition-all text-sm`}
                placeholder={placeholder}
            />
        </div>
        {helperText && <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight mt-1">{helperText}</p>}
        {error && <p className="text-[10px] font-bold text-red-500 uppercase tracking-tight">{error}</p>}
    </div>
);

const SelectField = ({ label, options, value, onChange, icon: Icon, placeholder }) => (
    <div className="space-y-1.5 mb-6 text-left">
        <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{label}</label>
        <div className="relative">
            {Icon && (
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Icon className="h-4 w-4 text-gray-400" />
                </div>
            )}
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`block w-full ${Icon ? 'pl-11' : 'px-4'} py-3.5 bg-[#F3F4F6]/50 dark:bg-brand-darkBg/50 border border-transparent rounded-2xl focus:ring-2 focus:ring-brand-orange/20 text-gray-900 dark:text-brand-darkText font-medium transition-all text-sm appearance-none`}
            >
                <option value="" disabled>{placeholder}</option>
                {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
        </div>
    </div>
);

const SearchSelect = ({ label, placeholder, selectedValue, onSelect, required = false }) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className="space-y-1.5 mb-6 text-left relative">
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                    type="text"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                    className="block w-full pl-11 pr-10 py-3.5 bg-[#F3F4F6]/50 dark:bg-brand-darkBg/50 border border-transparent rounded-2xl focus:ring-2 focus:ring-brand-orange/20 text-gray-900 dark:text-brand-darkText font-medium transition-all text-sm"
                    placeholder={selectedValue ? selectedValue.name : placeholder}
                />
                {selectedValue && (
                    <button className="absolute inset-y-0 right-0 pr-4 flex items-center text-brand-orange">
                        <CheckCircle2 size={16} />
                    </button>
                )}
            </div>
            {isFocused && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder rounded-2xl shadow-xl z-50 p-2 animate-fadeIn">
                    <p className="p-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50 dark:border-brand-darkBorder mb-2">Existing Persons</p>
                    {['John Thompson', 'Mary Thompson', 'Robert Thompson'].map(name => (
                        <button
                            key={name}
                            onClick={() => onSelect({ id: Date.now(), name })}
                            className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-brand-darkBg rounded-xl transition-colors flex items-center space-x-3"
                        >
                            <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-brand-orange/10 flex items-center justify-center text-brand-orange">
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

const BranchAddMember = () => {
    const navigate = useNavigate();
    const [path, setPath] = useState('search'); // 'search' or 'create'
    const [formData, setFormData] = useState({
        selectedPerson: null,
        newName: '',
        gender: '',
        age: '',
        relationshipTo: 'Branch Root',
        targetPerson: null,
        relationshipType: '',
        email: '',
        phone: '',
        memberType: 'Unverified node',
        notes: ''
    });

    // Simulated Permission Check
    const hasAddPermission = false; // Branch Member usually doesn't have direct add permission

    const handleAdd = () => {
        if (hasAddPermission) {
            alert('Member added successfully!');
        } else {
            alert('Your request has been sent to the Branch Admin for approval.');
        }
        navigate('/branch/members');
    };

    return (
        <div className="flex flex-col min-h-[calc(100vh-100px)] max-w-2xl mx-auto w-full">
            <header className="mb-10 text-left">
                <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 mb-1 uppercase tracking-widest">Branch Members</h2>
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-brand-darkText leading-tight">Add New Member</h1>
            </header>

            <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm p-8 flex-1 space-y-12 mb-8">

                {/* Section 1: Person Selection */}
                <section>
                    <div className="flex items-center space-x-3 mb-8">
                        <div className="w-10 h-10 bg-orange-50 dark:bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                            <UserPlus size={20} />
                        </div>
                        <h3 className="text-lg font-extrabold text-gray-900 dark:text-brand-darkText tracking-tight">Person Selection</h3>
                    </div>

                    <div className="flex bg-gray-100 dark:bg-brand-darkBg p-1 rounded-2xl mb-8 w-fit mx-auto sm:mx-0">
                        <button
                            onClick={() => setPath('search')}
                            className={`px-6 py-2.5 text-xs font-bold rounded-xl transition-all uppercase tracking-widest ${path === 'search' ? 'bg-white dark:bg-brand-darkCard shadow-sm text-brand-orange' : 'text-gray-400'}`}
                        >
                            Search Existing
                        </button>
                        <button
                            onClick={() => setPath('create')}
                            className={`px-6 py-2.5 text-xs font-bold rounded-xl transition-all uppercase tracking-widest ${path === 'create' ? 'bg-white dark:bg-brand-darkCard shadow-sm text-brand-orange' : 'text-gray-400'}`}
                        >
                            Create New
                        </button>
                    </div>

                    {path === 'search' ? (
                        <SearchSelect
                            label="Search Existing Person"
                            placeholder="Type a name to search..."
                            required
                            selectedValue={formData.selectedPerson}
                            onSelect={(person) => setFormData({ ...formData, selectedPerson: person })}
                        />
                    ) : (
                        <div className="space-y-6 animate-fadeIn">
                            <InputField
                                label="Full Name"
                                placeholder="Enter member's full name"
                                required
                                value={formData.newName}
                                onChange={(e) => setFormData({ ...formData, newName: e.target.value })}
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <SelectField
                                    label="Gender"
                                    options={['Male', 'Female', 'Non-binary', 'Other']}
                                    value={formData.gender}
                                    onChange={(val) => setFormData({ ...formData, gender: val })}
                                    placeholder="Select gender"
                                />
                                <InputField
                                    label="Approximate Age / Birth Year"
                                    placeholder="e.g. 1985 or 38"
                                    value={formData.age}
                                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                />
                            </div>
                        </div>
                    )}
                </section>

                {/* Section 2: Relationship */}
                <section className="pt-10 border-t border-gray-50 dark:border-brand-darkBorder">
                    <div className="flex items-center space-x-3 mb-8">
                        <div className="w-10 h-10 bg-orange-50 dark:bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                            <Link2 size={20} />
                        </div>
                        <h3 className="text-lg font-extrabold text-gray-900 dark:text-brand-darkText tracking-tight">Relationship</h3>
                    </div>

                    <div className="space-y-6 text-left mb-8">
                        <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Define Relationship To</label>
                        <div className="flex flex-wrap gap-6">
                            {['Branch Root', 'Selected Person'].map(target => (
                                <label key={target} className="flex items-center space-x-3 cursor-pointer group">
                                    <input
                                        type="radio"
                                        className="sr-only"
                                        checked={formData.relationshipTo === target}
                                        onChange={() => setFormData({ ...formData, relationshipTo: target })}
                                    />
                                    <div className={`w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${formData.relationshipTo === target ? 'border-brand-orange bg-brand-orange' : 'border-gray-200 dark:border-brand-darkBorder'}`}>
                                        {formData.relationshipTo === target && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                                    </div>
                                    <span className={`text-sm font-bold ${formData.relationshipTo === target ? 'text-gray-900 dark:text-brand-darkText' : 'text-gray-400'}`}>{target}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {formData.relationshipTo === 'Selected Person' && (
                        <SearchSelect
                            label="Target Person"
                            placeholder="Search for target member..."
                            selectedValue={formData.targetPerson}
                            onSelect={(person) => setFormData({ ...formData, targetPerson: person })}
                        />
                    )}

                    <SelectField
                        label="Relationship Type"
                        options={['Child', 'Spouse', 'Parent', 'Sibling', 'Direct Descent']}
                        value={formData.relationshipType}
                        onChange={(val) => setFormData({ ...formData, relationshipType: val })}
                        placeholder="Select relationship"
                    />
                </section>

                {/* Section 3: Invite */}
                <section className="pt-10 border-t border-gray-50 dark:border-brand-darkBorder">
                    <div className="flex items-center space-x-3 mb-8">
                        <div className="w-10 h-10 bg-orange-50 dark:bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                            <Mail size={20} />
                        </div>
                        <h3 className="text-lg font-extrabold text-gray-900 dark:text-brand-darkText tracking-tight">Invite to App (Optional)</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <InputField
                            label="Email Address"
                            placeholder="email@example.com"
                            icon={Mail}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <InputField
                            label="Phone Number"
                            placeholder="+1 (555) 000-0000"
                            icon={Phone}
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center">
                        <Info size={12} className="mr-1.5 text-brand-orange" />
                        Invitation will be sent after member is approved
                    </p>
                </section>

                {/* Section 4: Member Type */}
                <section className="pt-10 border-t border-gray-50 dark:border-brand-darkBorder">
                    <div className="flex items-center space-x-3 mb-8">
                        <div className="w-10 h-10 bg-orange-50 dark:bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                            <ShieldCheck size={20} />
                        </div>
                        <h3 className="text-lg font-extrabold text-gray-900 dark:text-brand-darkText tracking-tight">Member Type</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { id: 'Verified user', desc: 'Can log in and actively manage their own profile and history.' },
                            { id: 'Unverified node', desc: 'A placeholder node for historical records without app access.' }
                        ].map(type => (
                            <button
                                key={type.id}
                                onClick={() => setFormData({ ...formData, memberType: type.id })}
                                className={`p-6 rounded-3xl border-2 text-left transition-all ${formData.memberType === type.id ? 'border-brand-orange bg-orange-50/50 dark:bg-brand-orange/5' : 'border-gray-50 dark:border-brand-darkBorder hover:border-gray-200'}`}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className={`text-[13px] font-black uppercase tracking-tight ${formData.memberType === type.id ? 'text-brand-orange' : 'text-gray-400'}`}>{type.id}</span>
                                    {formData.memberType === type.id && <CheckCircle2 className="w-4 h-4 text-brand-orange" />}
                                </div>
                                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 leading-relaxed whitespace-pre-wrap">{type.desc}</p>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Permissions Awareness */}
                <section className="pt-10 border-t border-gray-50 dark:border-brand-darkBorder">
                    <div className="p-6 bg-gray-50 dark:bg-brand-darkBg/50 rounded-3xl border border-gray-100 dark:border-brand-darkBorder text-left">
                        <div className="flex items-start space-x-3">
                            <div className={`mt-1 w-2 h-2 rounded-full ${hasAddPermission ? 'bg-green-500' : 'bg-brand-orange'}`} />
                            <div>
                                <h4 className="text-[13px] font-black text-gray-900 dark:text-brand-darkText uppercase tracking-tight mb-1">
                                    {hasAddPermission ? 'Direct Access' : 'Approval Required'}
                                </h4>
                                <p className="text-xs font-bold text-gray-400 dark:text-gray-500">
                                    {hasAddPermission
                                        ? 'You have permission to add members directly to this branch.'
                                        : 'Your request will be sent to Branch Admin for approval before the member is added.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Sticky Actions */}
            <div className="sticky bottom-0 left-0 right-0 sm:static bg-white/90 dark:bg-brand-darkCard/90 backdrop-blur-md sm:bg-transparent border-t border-gray-100 dark:border-brand-darkBorder sm:border-none p-4 mt-8 flex flex-col-reverse sm:flex-row justify-end gap-3 z-30">
                <button
                    onClick={() => navigate('/branch/members')}
                    className="w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-brand-darkBg hover:bg-gray-200 dark:hover:bg-brand-darkBorder transition-all uppercase text-sm tracking-widest"
                >
                    Cancel
                </button>
                <button
                    onClick={handleAdd}
                    className="w-full sm:w-auto px-12 py-4 rounded-2xl font-bold text-white bg-brand-orange shadow-lg shadow-brand-orange/25 hover:bg-orange-600 active:scale-95 transition-all uppercase text-sm tracking-widest flex items-center justify-center font-black"
                >
                    {hasAddPermission ? 'Add Member' : 'Request to Add Member'} <ArrowRight size={16} className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default BranchAddMember;
