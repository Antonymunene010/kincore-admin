import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ title, date, time, location, status, attendees, bannerUrl }) => {
    const statusColors = {
        'Join Now': 'bg-brand-orange text-white',
        'Not Attended': 'bg-orange-400 text-white',
        'Attended': 'bg-red-800/70 text-white'
    };

    return (
        <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-gray-100 dark:border-brand-darkBorder overflow-hidden shadow-sm hover:shadow-md dark:hover:shadow-brand-orange/5 transition-all mb-8 text-left">
            <div className="h-48 sm:h-64 relative overflow-hidden">
                <img src={bannerUrl} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
                <div className="space-y-4">
                    <h3 className="text-xl font-extrabold text-gray-900 dark:text-brand-darkText leading-tight">{title}</h3>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-3 text-sm font-bold text-gray-700 dark:text-gray-300 transition-colors">
                            <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <span>{date} / {time}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm font-bold text-gray-700 dark:text-gray-300 transition-colors">
                            <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <span>{location}</span>
                        </div>
                    </div>
                    <div className="flex -space-x-2 overflow-hidden py-2">
                        {attendees.map((a, i) => (
                            <img key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-brand-darkCard" src={a} alt="Attendee" />
                        ))}
                    </div>
                </div>
                <button className={`px-12 py-3 rounded-2xl font-bold transition-all active:scale-95 text-sm ${statusColors[status] || 'bg-gray-100'}`}>
                    {status}
                </button>
            </div>
        </div>
    );
};

const FamilyEvent = () => {
    const navigate = useNavigate();
    const bannerImg = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop";

    const events = [
        {
            title: "Grandma's 80th Birthday",
            date: "29 July 2025",
            time: "12:30 PM",
            location: "Central Park",
            status: "Join Now",
            attendees: [
                "https://i.pravatar.cc/150?u=1",
                "https://i.pravatar.cc/150?u=2",
                "https://i.pravatar.cc/150?u=3"
            ],
            bannerUrl: bannerImg
        },
        {
            title: "Grandma's 80th Birthday",
            date: "29 July 2025",
            time: "12:30 PM",
            location: "Central Park",
            status: "Not Attended",
            attendees: [
                "https://i.pravatar.cc/150?u=4",
                "https://i.pravatar.cc/150?u=5",
                "https://i.pravatar.cc/150?u=6"
            ],
            bannerUrl: bannerImg
        },
        {
            title: "Grandma's 80th Birthday",
            date: "29 July 2025",
            time: "12:30 PM",
            location: "Central Park",
            status: "Attended",
            attendees: [
                "https://i.pravatar.cc/150?u=7",
                "https://i.pravatar.cc/150?u=8",
                "https://i.pravatar.cc/150?u=9"
            ],
            bannerUrl: bannerImg
        }
    ];

    return (
        <div className="max-w-6xl mx-auto flex flex-col text-left">
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-brand-darkText leading-tight">Family Event</h1>
                <div className="flex items-center space-x-6">
                    <button className="w-12 h-12 bg-orange-100/50 dark:bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange relative transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 border-2 border-white dark:border-brand-darkBg rounded-full"></span>
                    </button>
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-200 dark:border-brand-orange/50 transition-colors">
                        <img src="https://i.pravatar.cc/150?u=owner" alt="Owner" className="w-full h-full object-cover" />
                    </div>
                </div>
            </header>

            <div className="flex flex-col sm:flex-row gap-6 mb-10">
                <div className="relative flex-1">
                    <input type="text" placeholder="Search" className="w-full bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder rounded-2xl py-4 px-12 text-sm font-medium text-gray-400 dark:text-gray-500 outline-none shadow-sm transition-colors" />
                    <svg className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <button
                    onClick={() => navigate('/owner/events/create')}
                    className="bg-brand-orange text-white px-16 py-4 rounded-2xl font-bold shadow-lg shadow-brand-orange/20 hover:bg-orange-600 transition-all active:scale-95"
                >
                    Add Event
                </button>
            </div>

            <div className="space-y-4">
                {events.map((event, index) => (
                    <EventCard key={index} {...event} />
                ))}
            </div>
        </div>
    );
};

export default FamilyEvent;
