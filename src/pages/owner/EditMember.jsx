import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Calendar, Briefcase, FileText, Eye, Shield, MapPin, X, ArrowLeft } from 'lucide-react';

const FormSection = ({ title, children }) => (
    <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-gray-100 dark:border-brand-darkBorder p-8 mb-8 shadow-sm transition-colors text-left">
        <h3 className="text-xl font-extrabold text-gray-900 dark:text-brand-darkText mb-8">{title}</h3>
        <div className="space-y-6">
            {children}
        </div>
    </div>
);

const PremiumInput = ({ label, placeholder, icon: Icon, type = "text", value }) => (
    <div className="space-y-2">
        <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">{label}</label>
        <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-brand-darkCard rounded-2xl shadow-sm flex items-center justify-center group-focus-within:scale-110 transition-transform z-10">
                <Icon size={22} className="text-brand-orange" />
            </div>
            {type === "textarea" ? (
                <textarea
                    rows="4"
                    placeholder={placeholder}
                    defaultValue={value}
                    className="w-full bg-gray-50 dark:bg-brand-darkBg/50 border-none rounded-[1.5rem] py-5 pl-[4.5rem] pr-8 text-sm font-bold text-gray-700 dark:text-brand-darkText outline-none focus:ring-4 focus:ring-brand-orange/5 transition-all resize-none"
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    defaultValue={value}
                    className="w-full bg-gray-50 dark:bg-brand-darkBg/50 border-none rounded-[1.5rem] py-5 pl-[4.5rem] pr-8 text-sm font-bold text-gray-700 dark:text-brand-darkText outline-none focus:ring-4 focus:ring-brand-orange/5 transition-all"
                />
            )}
        </div>
    </div>
);

const EditMember = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-4xl mx-auto text-left">
            <header className="mb-10 flex items-center justify-between">
                <div>
                    <h2 className="text-brand-orange text-[10px] font-black uppercase tracking-widest mb-1">Owner Admin</h2>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-brand-darkText leading-tight">Edit Member Profile</h1>
                </div>
                <button onClick={() => navigate('/owner/members')} className="p-4 bg-gray-50 dark:bg-brand-darkBg/50 rounded-2xl text-gray-400 hover:text-brand-orange transition-colors">
                    <X size={24} />
                </button>
            </header>

            <FormSection title="Basic Information">
                <div className="flex flex-col items-center mb-10">
                    <div className="w-32 h-32 rounded-[2.5rem] bg-orange-50 dark:bg-brand-orange/10 border-4 border-white dark:border-brand-darkBorder shadow-xl flex items-center justify-center relative overflow-hidden group cursor-pointer transition-all hover:scale-105">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arthur" alt="Avatar" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Briefcase className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <p className="mt-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Tap to change photo</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <PremiumInput label="First Name" icon={User} value="Arthur" />
                    <PremiumInput label="Last Name" icon={User} value="Harrison" />
                </div>

                <div>
                    <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-4 ml-1">Gender Identity</label>
                    <div className="flex space-x-4">
                        {['Female', 'Male', 'Other'].map((gender) => (
                            <button key={gender} className={`px-10 py-4 rounded-2xl text-xs font-black transition-all ${gender === 'Male' ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30' : 'bg-gray-50 dark:bg-brand-darkBg text-gray-400 hover:bg-gray-100 dark:hover:bg-brand-darkBorder'}`}>
                                {gender}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between p-6 bg-orange-50/30 dark:bg-brand-orange/5 rounded-[2rem] border border-orange-100/50 dark:border-brand-darkBorder transition-colors">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white dark:bg-brand-darkCard rounded-2xl flex items-center justify-center shadow-sm">
                            <Eye className="text-brand-orange" size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-black text-gray-900 dark:text-brand-darkText uppercase tracking-tight">Living Status</p>
                            <p className="text-[10px] font-bold text-gray-400 uppercase">Current health status</p>
                        </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-14 h-7 bg-gray-200 dark:bg-brand-darkBg peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-orange"></div>
                    </label>
                </div>

                <PremiumInput label="Date of Birth" icon={Calendar} value="05/22/1985" />
            </FormSection>

            <FormSection title="Relationship Setup">
                <PremiumInput label="Relationship Type" icon={Briefcase} value="Spouse" />

                <div className="p-6 bg-brand-active/30 dark:bg-brand-orange/5 border border-brand-orange/10 rounded-[2rem] flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-md">
                            <img src="https://i.pravatar.cc/150?u=jane" alt="Spouse" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-sm font-black text-gray-900 dark:text-brand-darkText uppercase tracking-tight">Jane Harrison</p>
                            <p className="text-[10px] font-bold text-gray-500 uppercase">Spouse (Linked)</p>
                        </div>
                    </div>
                    <button className="text-brand-orange hover:bg-white dark:hover:bg-brand-darkCard p-3 rounded-2xl transition-all shadow-sm">
                        <X size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <PremiumInput label="Anniversary Date" icon={Calendar} value="06/12/2010" />
                    <PremiumInput label="Occupation" icon={Briefcase} value="Architect" />
                </div>
            </FormSection>

            <FormSection title="Additional Details">
                <PremiumInput label="Place of Birth" icon={MapPin} value="London, UK" />
                <PremiumInput label="Biography / Personal Notes" icon={FileText} type="textarea" value="Passionate about history and family genealogy. Lead architect for municipal projects." />
            </FormSection>

            <div className="flex flex-col sm:flex-row gap-4 mt-12 mb-20 justify-end">
                <button
                    onClick={() => navigate('/owner/members')}
                    className="w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-brand-darkBg hover:bg-gray-200 dark:hover:bg-brand-darkBorder transition-all uppercase text-sm tracking-widest"
                >
                    Discard Changes
                </button>
                <button
                    onClick={() => navigate('/owner/members')}
                    className="w-full sm:w-auto px-12 py-4 rounded-2xl font-bold text-white bg-brand-orange shadow-lg shadow-brand-orange/25 hover:bg-orange-600 active:scale-95 transition-all uppercase text-sm tracking-widest flex items-center justify-center"
                >
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default EditMember;
