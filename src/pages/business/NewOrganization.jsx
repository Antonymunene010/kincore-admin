import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBusiness } from '../../context/BusinessContext';
import {
    Building2,
    LayoutDashboard,
    Users,
    CreditCard,
    CheckCircle2,
    Upload,
    X,
    Search,
    ArrowRight,
    ArrowLeft,
    ShieldCheck,
    Globe,
    Mail,
    Phone,
    MapPin,
    AlertCircle
} from 'lucide-react';

const StepIndicator = ({ currentStep }) => {
    const steps = ['Branding', 'Summary', 'Staff', 'Billing', 'Active'];
    return (
        <div className="flex items-center justify-between mb-12 max-w-xl mx-auto w-full px-4">
            {steps.map((step, idx) => (
                <div key={step} className="flex flex-col items-center relative group">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all z-10 ${idx + 1 <= currentStep ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' : 'bg-gray-100 dark:bg-brand-darkBg text-gray-400 dark:text-gray-500'}`}>
                        {idx + 1 < currentStep ? <CheckCircle2 size={18} /> : idx + 1}
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-widest mt-3 transition-colors ${idx + 1 <= currentStep ? 'text-brand-orange' : 'text-gray-400 dark:text-gray-600'}`}>
                        {step}
                    </span>
                    {idx < steps.length - 1 && (
                        <div className={`absolute top-5 left-10 w-full h-[2px] -z-0 ${idx + 1 < currentStep ? 'bg-brand-orange' : 'bg-gray-100 dark:bg-brand-darkBg'}`} style={{ width: 'calc(100% * 2.5)' }} />
                    )}
                </div>
            ))}
        </div>
    );
};

const NewOrganization = () => {
    const navigate = useNavigate();
    const { orgData, updateOrgData, resetOrgData } = useBusiness();
    const [step, setStep] = useState(1);
    const [logoPreview, setLogoPreview] = useState(null);

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogoPreview(reader.result);
                updateOrgData({ logo: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="space-y-8 animate-fadeIn">
                        <section className="space-y-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="p-2.5 bg-orange-50 dark:bg-brand-orange/10 rounded-xl text-brand-orange">
                                    <Building2 size={20} />
                                </div>
                                <h3 className="text-lg font-extrabold text-gray-900 dark:text-brand-darkText">Core Branding</h3>
                            </div>

                            <div className="space-y-1.5 text-left">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">Organization Name *</label>
                                <input
                                    type="text"
                                    value={orgData.name}
                                    onChange={(e) => updateOrgData({ name: e.target.value })}
                                    className="w-full px-5 py-4 bg-gray-50 dark:bg-brand-darkBg border-none rounded-2xl text-sm font-bold text-gray-900 dark:text-brand-darkText focus:ring-2 focus:ring-brand-orange/20"
                                    placeholder="e.g. Windsor Global Enterprises"
                                />
                            </div>

                            <div className="space-y-1.5 text-left">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">Description</label>
                                <textarea
                                    rows={4}
                                    value={orgData.description}
                                    onChange={(e) => updateOrgData({ description: e.target.value })}
                                    className="w-full px-5 py-4 bg-gray-50 dark:bg-brand-darkBg border-none rounded-2xl text-sm font-bold text-gray-900 dark:text-brand-darkText focus:ring-2 focus:ring-brand-orange/20 resize-none"
                                    placeholder="What does this organization do?"
                                />
                            </div>

                            <div className="space-y-1.5 text-left">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">Organization Logo</label>
                                <div className="flex items-center space-x-6 bg-gray-50 dark:bg-brand-darkBg p-6 rounded-3xl border-2 border-dashed border-gray-100 dark:border-brand-darkBorder">
                                    <div className="w-24 h-24 rounded-2xl bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder flex items-center justify-center overflow-hidden flex-shrink-0">
                                        {logoPreview || orgData.logo ? (
                                            <img src={logoPreview || orgData.logo} alt="Logo" className="w-full h-full object-contain" />
                                        ) : (
                                            <Building2 size={32} className="text-gray-200" />
                                        )}
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase leading-tight">Recommended: Square PNG/SVG, max 2MB</p>
                                        <div className="flex space-x-3">
                                            <label className="cursor-pointer px-4 py-2 bg-white dark:bg-brand-darkCard border border-gray-200 dark:border-brand-darkBorder rounded-xl text-[10px] font-bold text-gray-700 dark:text-brand-darkText hover:bg-gray-50 transition-all">
                                                <span>Upload Logo</span>
                                                <input type="file" className="hidden" accept="image/*" onChange={handleLogoUpload} />
                                            </label>
                                            {(logoPreview || orgData.logo) && (
                                                <button onClick={() => { setLogoPreview(null); updateOrgData({ logo: null }); }} className="text-[10px] font-bold text-red-500 uppercase hover:underline">Remove</button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                            <div className="space-y-1.5">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">Category</label>
                                <select
                                    value={orgData.category}
                                    onChange={(e) => updateOrgData({ category: e.target.value })}
                                    className="w-full px-5 py-4 bg-gray-50 dark:bg-brand-darkBg border-none rounded-2xl text-sm font-bold text-gray-900 dark:text-brand-darkText focus:ring-2 focus:ring-brand-orange/20"
                                >
                                    <option value="">Select Category</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Retail">Retail</option>
                                    <option value="Services">Services</option>
                                    <option value="Non-Profit">Non-Profit</option>
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest text-left">Country/Region</label>
                                <div className="relative">
                                    <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        value={orgData.region}
                                        onChange={(e) => updateOrgData({ region: e.target.value })}
                                        className="w-full pl-12 pr-5 py-4 bg-gray-50 dark:bg-brand-darkBg border-none rounded-2xl text-sm font-bold text-gray-900 dark:text-brand-darkText focus:ring-2 focus:ring-brand-orange/20"
                                        placeholder="e.g. London, UK"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-8 animate-fadeIn text-left">
                        <section className="bg-orange-50/30 dark:bg-brand-orange/5 p-8 rounded-[2.5rem] border border-orange-100 dark:border-brand-orange/10">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
                                <div className="w-32 h-32 rounded-3xl bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
                                    {orgData.logo ? <img src={orgData.logo} alt="Logo" className="w-full h-full object-contain" /> : <Building2 size={40} className="text-brand-orange/20" />}
                                </div>
                                <div className="flex-1 space-y-4 text-center sm:text-left">
                                    <div>
                                        <h2 className="text-2xl font-black text-gray-900 dark:text-brand-darkText tracking-tight">{orgData.name || 'New Organization'}</h2>
                                        <p className="text-xs font-black text-brand-orange uppercase tracking-widest mt-1">{orgData.category || 'No Category'}</p>
                                    </div>
                                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
                                        {orgData.description || 'No description provided for this organization.'}
                                    </p>
                                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                                        <div className="flex items-center space-x-2 text-[11px] font-bold text-gray-400 uppercase tracking-tight">
                                            <MapPin size={14} className="text-brand-orange" />
                                            <span>{orgData.region || 'Not set'}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-[11px] font-bold text-gray-400 uppercase tracking-tight">
                                            <ShieldCheck size={14} className="text-brand-orange" />
                                            <span>{orgData.visibility}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border border-gray-100 dark:border-brand-darkBorder space-y-4">
                                <div className="flex items-center space-x-3 text-brand-orange">
                                    <Mail size={16} />
                                    <span className="text-[11px] font-black uppercase tracking-widest">Contact Info</span>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-gray-400 uppercase">Email</p>
                                    <p className="text-sm font-black text-gray-900 dark:text-brand-darkText">{orgData.contactEmail || 'N/A'}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-gray-400 uppercase">Phone</p>
                                    <p className="text-sm font-black text-gray-900 dark:text-brand-darkText">{orgData.contactPhone || 'N/A'}</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border border-gray-100 dark:border-brand-darkBorder flex flex-col justify-center">
                                <label className="flex items-center space-x-3 cursor-pointer group mb-1">
                                    <input
                                        type="checkbox"
                                        className="sr-only"
                                        checked={orgData.complianceConfirmed}
                                        onChange={() => updateOrgData({ complianceConfirmed: !orgData.complianceConfirmed })}
                                    />
                                    <div className={`w-6 h-6 rounded-lg border-2 transition-all flex items-center justify-center ${orgData.complianceConfirmed ? 'border-brand-orange bg-brand-orange shadow-lg shadow-brand-orange/20' : 'border-gray-200 dark:border-brand-darkBorder'}`}>
                                        {orgData.complianceConfirmed && <CheckCircle2 size={14} className="text-white" />}
                                    </div>
                                    <span className="text-xs font-black text-gray-900 dark:text-brand-darkText uppercase tracking-tight">Compliance Confirmed</span>
                                </label>
                                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest pl-9">I confirm this organization complies with all policies.</p>
                            </div>
                        </section>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-8 animate-fadeIn text-left">
                        <section className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2.5 bg-orange-50 dark:bg-brand-orange/10 rounded-xl text-brand-orange">
                                        <Users size={20} />
                                    </div>
                                    <h3 className="text-lg font-extrabold text-gray-900 dark:text-brand-darkText tracking-tight">Staff Invitations</h3>
                                </div>
                                <button className="text-[10px] font-black text-brand-orange uppercase tracking-widest hover:underline">Clear All</button>
                            </div>

                            <div className="bg-gray-50 dark:bg-brand-darkBg p-6 rounded-[2rem] border-2 border-dashed border-gray-200 dark:border-brand-darkBorder">
                                <div className="relative mb-6">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Search users to invite..."
                                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-brand-darkCard border-none rounded-2xl text-sm font-bold text-gray-900 dark:text-brand-darkText shadow-sm focus:ring-2 focus:ring-brand-orange/20"
                                    />
                                </div>

                                <div className="space-y-3">
                                    {['Winston Churchill', 'Diana Spencer', 'Jane Austen'].map(name => (
                                        <div key={name} className="flex items-center justify-between p-4 bg-white dark:bg-brand-darkCard rounded-2xl shadow-sm group hover:scale-[1.01] transition-all">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-brand-orange/10 flex items-center justify-center text-brand-orange font-black text-xs">
                                                    {name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-black text-gray-900 dark:text-brand-darkText">{name}</p>
                                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active User</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <select className="text-[10px] font-black uppercase tracking-widest bg-gray-50 dark:bg-brand-darkBg px-3 py-1.5 rounded-lg border-none focus:ring-1 focus:ring-brand-orange/20">
                                                    <option>Admin</option>
                                                    <option>Manager</option>
                                                    <option>Editor</option>
                                                </select>
                                                <button className="p-2 text-gray-300 hover:text-red-500 transition-colors">
                                                    <X size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                );
            case 4:
                return (
                    <div className="space-y-8 animate-fadeIn text-left">
                        <section className="bg-brand-orange/5 p-8 rounded-[2.5rem] border border-brand-orange/10 text-center space-y-6">
                            <div className="w-20 h-20 bg-brand-orange text-white rounded-3xl mx-auto flex items-center justify-center shadow-xl shadow-brand-orange/30">
                                <CreditCard size={40} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-black text-gray-900 dark:text-brand-darkText tracking-tight">Organization Credits & Billing</h3>
                                <p className="text-sm font-bold text-gray-500 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
                                    You can configure specific billing plans and feature entitlements in the next step or during the final publishing phase.
                                </p>
                            </div>
                            <div className="pt-4 border-t border-gray-100 dark:border-brand-darkBorder/50 max-w-xs mx-auto">
                                <button className="w-full py-4 bg-white dark:bg-brand-darkCard rounded-2xl font-black text-xs uppercase tracking-widest text-brand-orange shadow-sm border border-gray-100 dark:border-brand-darkBorder hover:scale-95 transition-all">
                                    Open Detailed Billing
                                </button>
                            </div>
                        </section>

                        <div className="bg-gray-50 dark:bg-brand-darkBg p-6 rounded-3xl border border-gray-100 dark:border-brand-darkBorder flex items-start space-x-4">
                            <div className="p-2 bg-blue-50 dark:bg-blue-900/10 rounded-xl text-blue-500">
                                <AlertCircle size={20} />
                            </div>
                            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 leading-relaxed">
                                Tip: Most organizations start with a <span className="text-gray-900 dark:text-brand-darkText">Standard Plan</span> and adjust their storage quotas after publication.
                            </p>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="space-y-8 animate-fadeIn text-center">
                        <div className="py-12 px-8 space-y-6">
                            <div className="relative inline-block">
                                <div className="absolute inset-0 bg-green-400 blur-2xl opacity-20 animate-pulse" />
                                <div className="w-24 h-24 bg-green-500 text-white rounded-[2rem] flex items-center justify-center relative shadow-2xl shadow-green-500/30">
                                    <Globe size={48} />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h2 className="text-3xl font-black text-gray-900 dark:text-brand-darkText tracking-tight">Ready to Publish?</h2>
                                <p className="text-sm font-bold text-gray-500 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
                                    Your organization "{orgData.name}" is fully configured. Publishing it will make it {orgData.visibility === 'Listed on marketplace' ? 'active on the global marketplace' : 'visible to your internal team'}.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-brand-darkCard p-8 rounded-[2.5rem] border border-gray-100 dark:border-brand-darkBorder text-left space-y-8 shadow-sm">
                            <h4 className="text-[10px] font-black text-brand-orange uppercase tracking-[.25em] mb-4">Final Visibility Settings</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Private (internal only)', 'Listed on marketplace'].map(option => (
                                    <button
                                        key={option}
                                        onClick={() => updateOrgData({ visibility: option })}
                                        className={`p-6 rounded-3xl border-2 text-left transition-all ${orgData.visibility === option ? 'border-brand-orange bg-orange-50/50 dark:bg-brand-orange/5' : 'border-gray-50 dark:border-brand-darkBorder hover:border-gray-200'}`}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className={`text-[11px] font-black uppercase tracking-tight ${orgData.visibility === option ? 'text-brand-orange' : 'text-gray-400'}`}>{option}</span>
                                            {orgData.visibility === option && <CheckCircle2 className="w-4 h-4 text-brand-orange" />}
                                        </div>
                                        <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase leading-relaxed">{option === 'Private (internal only)' ? 'Visible only to staff members.' : 'Open to everyone in the ecosystem.'}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    const handleCreate = () => {
        alert('Organization Published Successfully!');
        resetOrgData();
        navigate('/business/organizations');
    };

    return (
        <div className="flex flex-col min-h-[calc(100vh-100px)] max-w-2xl mx-auto w-full pb-20">
            <header className="mb-10 text-left">
                <div className="flex items-center space-x-2 mb-1">
                    <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 uppercase tracking-widest leading-none">Business Hub</h2>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                    <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 uppercase tracking-widest leading-none">Organization</h2>
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-brand-darkText flex items-center tracking-tight">
                    {step === 5 ? 'Release to Marketplace' : 'New Organization'}
                </h1>
            </header>

            <StepIndicator currentStep={step} />

            <div className="bg-white dark:bg-brand-darkCard rounded-[3rem] border border-gray-100 dark:border-brand-darkBorder shadow-sm p-8 sm:p-12 flex-1 mb-8 overflow-hidden">
                {renderStep()}
            </div>

            {/* Actions */}
            <div className="sticky bottom-0 left-0 right-0 sm:static bg-white/90 dark:bg-brand-darkCard/90 backdrop-blur-md sm:bg-transparent border-t border-gray-100 dark:border-brand-darkBorder sm:border-none p-4 mt-8 flex flex-col-reverse sm:flex-row justify-end gap-3 z-30">
                {step > 1 && (
                    <button
                        onClick={prevStep}
                        className="w-full sm:w-auto px-10 py-4 rounded-[2rem] font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-brand-darkBg hover:bg-gray-200 dark:hover:bg-brand-darkBorder transition-all uppercase text-xs tracking-widest flex items-center justify-center"
                    >
                        <ArrowLeft size={16} className="mr-2" /> Back
                    </button>
                )}
                <button
                    onClick={() => navigate('/business/organizations')}
                    className="w-full sm:w-auto px-10 py-4 rounded-[2rem] font-bold text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-brand-darkBg hover:bg-gray-100 dark:hover:bg-brand-darkBorder transition-all uppercase text-xs tracking-widest"
                >
                    Cancel
                </button>
                <button
                    onClick={step === 5 ? handleCreate : nextStep}
                    className="w-full sm:w-auto px-12 py-4 rounded-[2rem] font-black text-white bg-brand-orange shadow-xl shadow-brand-orange/30 hover:bg-orange-600 active:scale-95 transition-all uppercase text-xs tracking-widest flex items-center justify-center group"
                >
                    {step === 5 ? 'Publish & Activate' : 'Continue'} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default NewOrganization;
