import React from 'react';

const EventCard = ({ title, date, time, location, status, banner }) => {
    const statusColors = {
        'Join Now': 'bg-brand-orange text-white',
        'Not Attended': 'bg-brand-orange/80 text-white',
        'Attended': 'bg-brand-orange/60 text-white',
    };

    return (
        <div className="bg-white dark:bg-brand-darkCard rounded-[2rem] overflow-hidden border border-gray-100 dark:border-brand-darkBorder shadow-sm transition-all hover:shadow-md dark:hover:shadow-brand-orange/5 group">
            <div className="h-48 overflow-hidden relative">
                <img src={banner} alt={title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
            </div>
            <div className="p-8 text-left">
                <h3 className="text-xl font-bold text-gray-900 dark:text-brand-darkText mb-4 transition-colors">{title}</h3>
                <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span className="text-sm font-bold text-gray-800 dark:text-brand-darkText transition-colors">{date} / {time}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <span className="text-sm font-bold text-gray-800 dark:text-brand-darkText transition-colors">{location}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50 dark:border-brand-darkBorder transition-colors">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                            <img key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-brand-darkCard" src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="attendee" />
                        ))}
                        <div className="w-8 h-8 rounded-full border-2 border-white dark:border-brand-darkCard bg-gray-100 dark:bg-brand-darkBg flex items-center justify-center text-[10px] font-bold text-gray-400 dark:text-gray-500 transition-colors">+3</div>
                    </div>
                    <button className={`px-6 sm:px-12 py-2.5 rounded-xl font-bold text-[13px] shadow-sm transition-all active:scale-95 leading-none uppercase tracking-wider ${statusColors[status]}`}>
                        {status}
                    </button>
                </div>
            </div>
        </div>
    );
};

const BranchEvents = () => {
    const events = [
        { title: "Grandma's 80th Birthday", date: "29 July 2025", time: "12:30 PM", location: "Central Park", status: "Join Now", banner: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000" },
        { title: "Grandma's 80th Birthday", date: "29 July 2025", time: "12:30 PM", location: "Central Park", status: "Not Attended", banner: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000" },
        { title: "Grandma's 80th Birthday", date: "29 July 2025", time: "12:30 PM", location: "Central Park", status: "Attended", banner: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000" },
    ];

    return (
        <div className="max-w-7xl mx-auto text-left py-4 px-4 sm:px-0">
            <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-12 space-y-6 xl:space-y-0">
                <h1 className="text-3xl sm:text-[40px] font-black text-gray-900 dark:text-brand-darkText leading-none transition-colors">Family Event</h1>
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto">
                    <div className="relative w-full sm:w-80">
                        <input type="text" placeholder="Search events" className="w-full bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder rounded-xl py-4.5 px-12 text-sm font-bold text-gray-800 dark:text-brand-darkText outline-none focus:border-brand-orange/20 dark:focus:border-brand-orange/40 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600" />
                        <svg className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <a href="/branch/create-event" className="bg-brand-orange text-white px-12 py-4.5 rounded-xl font-bold text-sm shadow-xl shadow-brand-orange/20 hover:bg-orange-600 transition-all active:scale-95 leading-none w-full sm:w-fit text-center uppercase tracking-wider">
                        Add Event
                    </a>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12">
                {events.map((event, idx) => (
                    <EventCard key={idx} {...event} />
                ))}
            </div>
        </div>
    );
};

export default BranchEvents;
