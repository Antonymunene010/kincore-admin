import React from 'react';
import { useNavigate } from 'react-router-dom';

const OverviewCard = ({ title, value, subtext, image }) => (
    <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden flex flex-col md:flex-row items-center p-6 mb-6 transition-colors">
        <div className="w-full md:w-1/2 h-48 rounded-2xl overflow-hidden mb-4 md:mb-0 md:mr-8 bg-gray-50 dark:bg-brand-darkBg flex items-center justify-center">
            <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 text-left">
            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">{title}</p>
            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-brand-darkText mb-1">{value}</h3>
            <p className="text-sm font-medium text-gray-400 dark:text-gray-500">{subtext}</p>
        </div>
    </div>
);

const EventListItem = ({ title, type, date, icon }) => (
    <div className="flex items-center justify-between py-4 border-b border-gray-50 dark:border-brand-darkBorder last:border-none transition-colors">
        <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-orange-50 dark:bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                {icon}
            </div>
            <div>
                <h4 className="text-sm font-bold text-gray-800 dark:text-brand-darkText">{title}</h4>
                <p className="text-xs font-medium text-gray-400 dark:text-gray-500">{type}</p>
            </div>
        </div>
        <p className="text-xs font-bold text-gray-400 dark:text-gray-500">{date}</p>
    </div>
);

const EventsEngagement = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col">
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-brand-darkText leading-tight">Events & Engagement Overview</h1>
                <button
                    onClick={() => navigate('/events/create')}
                    className="w-full sm:w-auto bg-brand-orange text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-brand-orange/20 hover:bg-orange-600 transform active:scale-95 transition-all text-sm"
                >
                    Create New Event
                </button>
            </header>

            <section className="mb-10">
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText mb-6">Overview</h2>
                <div className="grid grid-cols-1 gap-6">
                    <OverviewCard
                        title="RSVP Stats"
                        value="1200"
                        subtext="Total RSVPs"
                        image="file:///C:/Users/uvdsg/.gemini/antigravity/brain/6332a07c-dddc-4f49-b611-f36a751f27be/rsvp_illustration_1770179083635.png"
                    />
                    <OverviewCard
                        title="Upcoming Reunions"
                        value="3"
                        subtext="Reunions Scheduled"
                        image="file:///C:/Users/uvdsg/.gemini/antigravity/brain/6332a07c-dddc-4f49-b611-f36a751f27be/reunion_illustration_1770179119913.png"
                    />
                    <OverviewCard
                        title="Global Participation Rate"
                        value="75%"
                        subtext="Average Participation"
                        image="file:///C:/Users/uvdsg/.gemini/antigravity/brain/6332a07c-dddc-4f49-b611-f36a751f27be/world_map_minimal_1770179135805.png"
                    />
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-800 dark:text-brand-darkText mb-6">Upcoming Events</h2>
                <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm p-6 transition-colors">
                    <EventListItem
                        title="Celebration of Life"
                        type="Milestone Ritual"
                        date="July 15, 2024"
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                    />
                    <EventListItem
                        title="Naming Ceremony"
                        type="Milestone Ritual"
                        date="August 20, 2024"
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                    />
                    <EventListItem
                        title="Family Picnic"
                        type="Celebration"
                        date="September 5, 2024"
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                    />
                    <EventListItem
                        title="Annual Gathering"
                        type="Celebration"
                        date="October 12, 2024"
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                    />
                </div>
            </section>
        </div>
    );
};

export default EventsEngagement;
