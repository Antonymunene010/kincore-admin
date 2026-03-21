import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MapPin,
    Calendar,
    Type,
    Link as LinkIcon,
    ArrowRight,
    Image as ImageIcon,
    Users,
    Tag,
    Globe,
    X,
    Plus,
    ChevronDown,
    Search
} from 'lucide-react';

const InputField = ({ label, placeholder, type = "text", icon: Icon, value, onChange, error, required = false }) => (
    <div className="space-y-1.5 mb-5 text-left">
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
                className={`block w-full ${Icon ? 'pl-11' : 'px-4'} py-3 bg-[#F3F4F6]/50 dark:bg-brand-darkBg/50 border ${error ? 'border-red-400' : 'border-transparent'} rounded-xl focus:ring-2 focus:ring-brand-orange/20 text-gray-900 dark:text-brand-darkText font-medium transition-all text-sm`}
                placeholder={placeholder}
            />
        </div>
        {error && <p className="text-[10px] font-bold text-red-500 uppercase tracking-tight">{error}</p>}
    </div>
);

const TextArea = ({ label, placeholder, value, onChange, rows = 3, helpText }) => (
    <div className="space-y-1.5 mb-5 text-left">
        <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            {label}
        </label>
        <textarea
            value={value}
            onChange={onChange}
            rows={rows}
            className="block w-full px-4 py-3 bg-[#F3F4F6]/50 dark:bg-brand-darkBg/50 border border-transparent rounded-xl focus:ring-2 focus:ring-brand-orange/20 text-gray-900 dark:text-brand-darkText font-medium transition-all text-sm resize-none"
            placeholder={placeholder}
        />
        {helpText && <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tight">{helpText}</p>}
    </div>
);

const MultiSelect = ({ label, placeholder, items, selectedItems, onAdd, onRemove }) => (
    <div className="space-y-1.5 mb-5 text-left">
        <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            {label}
        </label>
        <div className="relative mb-3">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
                type="text"
                className="block w-full pl-11 py-3 bg-[#F3F4F6]/50 dark:bg-brand-darkBg/50 border border-transparent rounded-xl focus:ring-2 focus:ring-brand-orange/20 text-gray-900 dark:text-brand-darkText font-medium transition-all text-sm"
                placeholder={placeholder}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        onAdd(e.target.value);
                        e.target.value = '';
                    }
                }}
            />
        </div>
        <div className="flex flex-wrap gap-2">
            {selectedItems.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-white dark:bg-brand-darkCard px-3 py-1.5 rounded-lg border border-gray-100 dark:border-brand-darkBorder text-xs font-bold text-gray-700 dark:text-brand-darkText shadow-sm">
                    <span>{item}</span>
                    <button onClick={() => onRemove(item)} className="text-gray-300 hover:text-red-400 transition-colors">
                        <X size={14} />
                    </button>
                </div>
            ))}
        </div>
    </div>
);

const CreateMigrationPoint = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        fromLocation: '',
        toLocation: '',
        dateType: 'Exact Date',
        dateValue: '',
        dateRange: { start: '', end: '' },
        approximatePeriod: '',
        description: '',
        media: [],
        branches: [],
        persons: [],
        tags: [],
        visibility: 'Family',
        sources: ''
    });

    const [errors, setErrors] = useState({});

    const handleAddMigration = () => {
        const newErrors = {};
        if (!formData.title) newErrors.title = 'Title is required';
        if (!formData.fromLocation) newErrors.fromLocation = 'Start location is required';
        if (!formData.toLocation) newErrors.toLocation = 'Destination is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        alert('Migration Point Added Successfully!');
        navigate('/migration');
    };

    const toggleTag = (tag) => {
        const tags = formData.tags.includes(tag)
            ? formData.tags.filter(t => t !== tag)
            : [...formData.tags, tag];
        setFormData({ ...formData, tags });
    };

    return (
        <div className="flex flex-col min-h-[calc(100vh-100px)] max-w-2xl mx-auto w-full">
            <header className="mb-10 text-left">
                <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 mb-1 uppercase tracking-widest">Migration Map</h2>
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-brand-darkText">Add Migration Point</h1>
            </header>

            <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm p-8 flex-1 space-y-8 mb-8">

                {/* Title and Locations */}
                <section className="space-y-6">
                    <InputField
                        label="Point Title"
                        placeholder="e.g. Grandma's Arrival in New York"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        error={errors.title}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                        <InputField
                            label="From Location"
                            placeholder="Starting point"
                            icon={MapPin}
                            required
                            value={formData.fromLocation}
                            onChange={(e) => setFormData({ ...formData, fromLocation: e.target.value })}
                            error={errors.fromLocation}
                        />
                        <div className="hidden sm:flex absolute left-1/2 top-11 -translate-x-1/2 w-8 h-8 rounded-full bg-orange-50 dark:bg-brand-orange/10 items-center justify-center text-brand-orange z-10 border-4 border-white dark:border-brand-darkCard">
                            <ArrowRight size={14} />
                        </div>
                        <InputField
                            label="To Location"
                            placeholder="Destination"
                            icon={MapPin}
                            required
                            value={formData.toLocation}
                            onChange={(e) => setFormData({ ...formData, toLocation: e.target.value })}
                            error={errors.toLocation}
                        />
                    </div>
                </section>

                {/* Date or Period */}
                <section className="pt-8 border-t border-gray-50 dark:border-brand-darkBorder text-left">
                    <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Date or Period</label>
                    <div className="flex bg-gray-100 dark:bg-brand-darkBg p-1 rounded-xl w-fit mb-6">
                        {['Exact Date', 'Date Range', 'Approximate'].map(type => (
                            <button
                                key={type}
                                onClick={() => setFormData({ ...formData, dateType: type })}
                                className={`px-4 py-2 text-[10px] font-extrabold rounded-lg transition-all uppercase tracking-tight ${formData.dateType === type ? 'bg-white dark:bg-brand-darkCard shadow-sm text-brand-orange' : 'text-gray-400'}`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    {formData.dateType === 'Exact Date' && (
                        <InputField label="Migration Date" type="date" icon={Calendar} value={formData.dateValue} onChange={(e) => setFormData({ ...formData, dateValue: e.target.value })} />
                    )}
                    {formData.dateType === 'Date Range' && (
                        <div className="grid grid-cols-2 gap-4">
                            <InputField label="Start Date" type="date" value={formData.dateRange.start} onChange={(e) => setFormData({ ...formData, dateRange: { ...formData.dateRange, start: e.target.value } })} />
                            <InputField label="End Date" type="date" value={formData.dateRange.end} onChange={(e) => setFormData({ ...formData, dateRange: { ...formData.dateRange, end: e.target.value } })} />
                        </div>
                    )}
                    {formData.dateType === 'Approximate' && (
                        <InputField
                            label="Approximate Period"
                            placeholder="e.g. circa 1920s, Summer 1945"
                            value={formData.approximatePeriod}
                            onChange={(e) => setFormData({ ...formData, approximatePeriod: e.target.value })}
                        />
                    )}
                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tight -mt-3">Approximate support allows documenting historical journeys with imprecise records.</p>
                </section>

                {/* Description and Media */}
                <section className="pt-8 border-t border-gray-50 dark:border-brand-darkBorder">
                    <TextArea
                        label="Story / Description"
                        placeholder="Tell the story of this migration..."
                        rows={5}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />

                    <div className="space-y-1.5 mb-5 text-left pt-2">
                        <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Attach Media</label>
                        <div className="bg-[#F3F4F6]/30 dark:bg-brand-darkBg/30 rounded-2xl p-8 border border-dashed border-gray-200 dark:border-brand-darkBorder text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-brand-darkBg/50 transition-all group">
                            <ImageIcon className="mx-auto h-10 w-10 text-gray-300 group-hover:text-brand-orange transition-colors mb-2" />
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Upload Images, Documents, or Audio</p>
                            <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-tighter">JPG, PNG, PDF, MP3 up to 20MB</p>
                        </div>
                    </div>
                </section>

                {/* Linking and Tags */}
                <section className="pt-8 border-t border-gray-50 dark:border-brand-darkBorder space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <MultiSelect
                            label="Link to Branch"
                            placeholder="Search branches..."
                            items={[]}
                            selectedItems={formData.branches}
                            onAdd={(val) => setFormData({ ...formData, branches: [...formData.branches, val] })}
                            onRemove={(val) => setFormData({ ...formData, branches: formData.branches.filter(b => b !== val) })}
                        />
                        <MultiSelect
                            label="Link to Person"
                            placeholder="Search persons..."
                            items={[]}
                            selectedItems={formData.persons}
                            onAdd={(val) => setFormData({ ...formData, persons: [...formData.persons, val] })}
                            onRemove={(val) => setFormData({ ...formData, persons: formData.persons.filter(p => p !== val) })}
                        />
                    </div>

                    <div className="text-left space-y-3">
                        <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tags</label>
                        <div className="flex flex-wrap gap-2">
                            {['War', 'Business', 'Education', 'Relocation', 'Personal'].map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => toggleTag(tag)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${formData.tags.includes(tag) ? 'bg-brand-orange border-brand-orange text-white shadow-md shadow-brand-orange/20' : 'bg-gray-50 dark:bg-brand-darkBg border-gray-100 dark:border-brand-darkBorder text-gray-400 hover:border-brand-orange'}`}
                                >
                                    {tag}
                                </button>
                            ))}
                            <div className="relative">
                                <Plus size={16} className="absolute left-3 top-2.5 text-gray-300" />
                                <input
                                    className="pl-9 pr-4 py-2 bg-gray-50 dark:bg-brand-darkBg border border-gray-100 dark:border-brand-darkBorder rounded-xl text-xs font-bold w-32 outline-none focus:border-brand-orange"
                                    placeholder="Custom..."
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            toggleTag(e.target.value);
                                            e.target.value = '';
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visibility and Sources */}
                <section className="pt-8 border-t border-gray-50 dark:border-brand-darkBorder text-left space-y-8">
                    <div className="space-y-4">
                        <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Visibility Setting</label>
                        <div className="flex flex-wrap gap-8">
                            {['Family', 'Branch', 'Public'].map(v => (
                                <label key={v} className="flex items-center space-x-3 cursor-pointer group">
                                    <div className="relative flex items-center justify-center">
                                        <input
                                            type="radio"
                                            name="visibility"
                                            className="sr-only"
                                            checked={formData.visibility === v}
                                            onChange={() => setFormData({ ...formData, visibility: v })}
                                        />
                                        <div className={`w-5 h-5 rounded-full border-2 transition-all ${formData.visibility === v ? 'border-brand-orange bg-brand-orange' : 'border-gray-200 dark:border-brand-darkBorder group-hover:border-brand-orange/50'}`}>
                                            {formData.visibility === v && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                                        </div>
                                    </div>
                                    <span className={`text-sm font-bold transition-colors ${formData.visibility === v ? 'text-gray-900 dark:text-brand-darkText' : 'text-gray-400 dark:text-gray-500'}`}>{v}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <TextArea
                        label="Sources / Citations"
                        placeholder="Add historical sources, references, or notes"
                        value={formData.sources}
                        onChange={(e) => setFormData({ ...formData, sources: e.target.value })}
                    />
                </section>
            </div>

            {/* Sticky Actions */}
            <div className="sticky bottom-0 left-0 right-0 sm:static bg-white/90 dark:bg-brand-darkCard/90 backdrop-blur-md sm:bg-transparent border-t border-gray-100 dark:border-brand-darkBorder sm:border-none p-4 mt-8 flex flex-col-reverse sm:flex-row justify-end gap-3 z-30">
                <button
                    onClick={() => navigate('/migration')}
                    className="w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-brand-darkBg hover:bg-gray-200 dark:hover:bg-brand-darkBorder transition-all uppercase text-sm tracking-widest"
                >
                    Cancel
                </button>
                <button
                    onClick={handleAddMigration}
                    className="w-full sm:w-auto px-12 py-4 rounded-2xl font-bold text-white bg-brand-orange shadow-lg shadow-brand-orange/25 hover:bg-orange-600 active:scale-95 transition-all uppercase text-sm tracking-widest"
                >
                    Add Migration Point
                </button>
            </div>
        </div>
    );
};

export default CreateMigrationPoint;
