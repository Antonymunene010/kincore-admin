import React from 'react';

const CreateEvent = () => {
    return (
        <div className="max-w-6xl mx-auto py-4 px-4 sm:px-0">
            <header className="flex justify-between items-center mb-10">
                <h1 className="text-2xl sm:text-[32px] font-black text-gray-900 dark:text-brand-darkText leading-none transition-colors">Create Event</h1>
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#FFE5DE] dark:bg-brand-orange/20 flex items-center justify-center text-brand-orange transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    </div>
                </div>
            </header>

            <div className="bg-white dark:bg-brand-darkBg border-2 border-dashed border-[#FFE5DE] dark:border-brand-orange/20 rounded-[2rem] p-8 sm:p-12 text-center mb-12 flex flex-col items-center justify-center bg-[#F9FAFB]/30 dark:bg-brand-orange/5 transition-colors">
                <div className="w-16 h-16 bg-white dark:bg-brand-darkCard rounded-full flex items-center justify-center shadow-lg shadow-orange-100 dark:shadow-brand-orange/5 border border-orange-50 dark:border-brand-darkBorder mb-6 transition-colors">
                    <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <h2 className="text-xl font-black text-gray-900 dark:text-brand-darkText mb-2 transition-colors">Add Event Cover Photo</h2>
                <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mb-8 transition-colors">Upload PNG, JPG File Support</p>
                <button className="bg-[#FFE5DE] dark:bg-brand-orange/20 text-brand-orange px-12 sm:px-16 py-4 rounded-2xl font-black text-sm hover:bg-[#FFD5CC] dark:hover:bg-brand-orange/30 transition-all active:scale-95 leading-none uppercase tracking-wider">
                    Upload
                </button>
            </div>

            <div className="bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder rounded-[2.5rem] p-8 sm:p-12 shadow-sm mb-12 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 dark:text-brand-darkText mb-10 text-left transition-colors uppercase tracking-tight">Event Detail</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                    <div className="text-left">
                        <label className="block text-[13px] font-black text-gray-900 dark:text-brand-darkText mb-4 ml-1 uppercase tracking-wide">Event Title</label>
                        <input type="text" placeholder="Add title" className="w-full bg-white dark:bg-brand-darkBg border border-gray-100 dark:border-brand-darkBorder rounded-2xl py-5 px-6 text-sm font-bold text-gray-800 dark:text-brand-darkText outline-none focus:border-brand-orange/20 dark:focus:border-brand-orange/40 transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600" />
                    </div>
                    <div className="text-left">
                        <label className="block text-[13px] font-black text-gray-900 dark:text-brand-darkText mb-4 ml-1 uppercase tracking-wide">Location</label>
                        <input type="text" placeholder="Add location" className="w-full bg-white dark:bg-brand-darkBg border border-gray-100 dark:border-brand-darkBorder rounded-2xl py-5 px-6 text-sm font-bold text-gray-800 dark:text-brand-darkText outline-none focus:border-brand-orange/20 dark:focus:border-brand-orange/40 transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600" />
                    </div>
                    <div className="md:col-span-2 text-left">
                        <label className="block text-[13px] font-black text-gray-900 dark:text-brand-darkText mb-4 ml-1 uppercase tracking-wide">Description</label>
                        <textarea placeholder="Describe your event..." className="w-full bg-white dark:bg-brand-darkBg border border-gray-100 dark:border-brand-darkBorder rounded-2xl py-6 px-6 text-sm font-bold text-gray-800 dark:text-brand-darkText outline-none focus:border-brand-orange/20 dark:focus:border-brand-orange/40 min-h-[160px] resize-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600" />
                    </div>
                    <div className="text-left">
                        <label className="block text-[13px] font-black text-gray-900 dark:text-brand-darkText mb-4 ml-1 uppercase tracking-wide">Start Date</label>
                        <div className="relative">
                            <input type="text" placeholder="MM/DD/YYYY" className="w-full bg-white dark:bg-brand-darkBg border border-gray-100 dark:border-brand-darkBorder rounded-2xl py-5 px-14 text-sm font-bold text-gray-800 dark:text-brand-darkText outline-none focus:border-brand-orange/20 dark:focus:border-brand-orange/40 transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600" />
                            <svg className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                    </div>
                    <div className="text-left">
                        <label className="block text-[13px] font-black text-gray-900 dark:text-brand-darkText mb-4 ml-1 uppercase tracking-wide">End Date</label>
                        <div className="relative">
                            <input type="text" placeholder="MM/DD/YYYY" className="w-full bg-white dark:bg-brand-darkBg border border-gray-100 dark:border-brand-darkBorder rounded-2xl py-5 px-14 text-sm font-bold text-gray-800 dark:text-brand-darkText outline-none focus:border-brand-orange/20 dark:focus:border-brand-orange/40 transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600" />
                            <svg className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                    </div>
                    <div className="text-left">
                        <label className="block text-[13px] font-black text-gray-900 dark:text-brand-darkText mb-4 ml-1 uppercase tracking-wide">Time</label>
                        <div className="relative">
                            <input type="text" placeholder="Add time" className="w-full bg-white dark:bg-brand-darkBg border border-gray-100 dark:border-brand-darkBorder rounded-2xl py-5 px-14 text-sm font-bold text-gray-800 dark:text-brand-darkText outline-none focus:border-brand-orange/20 dark:focus:border-brand-orange/40 transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600" />
                            <svg className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-left mb-16">
                <h3 className="text-xl font-bold text-gray-900 dark:text-brand-darkText mb-8 uppercase tracking-tight">Invite Family Member</h3>
                <div className="flex items-start space-x-8 sm:space-x-12 overflow-x-auto pb-6 pt-4 px-1 custom-scrollbar">
                    <div className="flex flex-col items-center space-y-3 cursor-pointer group shrink-0">
                        <div className="w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-orange/20 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
                        </div>
                        <span className="text-[11px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-tight transition-colors">Add</span>
                    </div>
                    {['Mary Rigby', 'John Rigby', 'Emily', 'Paul', 'Mary Rigby', 'John Rigby', 'Emily', 'Paul'].map((name, i) => (
                        <div key={i} className="flex flex-col items-center space-y-3 shrink-0 cursor-pointer group">
                            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-transparent group-hover:border-brand-orange transition-all p-0.5">
                                <img src={`https://i.pravatar.cc/150?u=${name}${i}`} alt={name} className="w-full h-full object-cover rounded-full" />
                            </div>
                            <span className="text-[11px] font-black text-gray-800 dark:text-brand-darkText uppercase tracking-tight transition-colors group-hover:text-brand-orange">{name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center pb-20">
                <button className="bg-brand-orange text-white px-20 sm:px-32 py-5 rounded-[2rem] font-black text-base shadow-2xl shadow-brand-orange/30 hover:bg-orange-600 transition-all active:scale-95 w-full sm:w-auto uppercase tracking-widest">
                    Create Event
                </button>
            </div>
        </div>
    );
};

export default CreateEvent;
