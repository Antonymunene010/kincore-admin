import React from 'react';
import { useNavigate } from 'react-router-dom';

const AvatarCard = ({ name, role, location, color = "bg-orange-100", highlight = false }) => (
    <div className={`p-4 rounded-2xl border ${highlight ? 'border-brand-orange bg-orange-50/30 dark:bg-brand-orange/5' : 'border-gray-100 dark:border-brand-darkBorder bg-white dark:bg-brand-darkCard'} shadow-sm flex items-center space-x-4 min-w-[180px] transition-colors`}>
        <div className={`w-12 h-12 rounded-xl ${color} dark:bg-brand-orange/20 flex items-center justify-center overflow-hidden transition-colors`}>
            <img src="file:///C:/Users/uvdsg/.gemini/antigravity/brain/6332a07c-dddc-4f49-b611-f36a751f27be/family_portraits_grid_1770179154905.png" alt={name} className="w-full h-full object-cover scale-150" />
        </div>
        <div className="text-left">
            <h4 className="text-sm font-extrabold text-gray-900 dark:text-brand-darkText leading-tight">{name}</h4>
            <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 mt-1 uppercase tracking-tight">{role}</p>
            <p className="text-[10px] font-medium text-gray-300 dark:text-gray-600 uppercase tracking-tighter">{location}</p>
        </div>
    </div>
);

const TimelineItem = ({ year, event, description }) => (
    <div className="flex items-start space-x-6 relative pb-8 group">
        <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gray-100 dark:bg-brand-darkBorder group-last:hidden transition-colors" />
        <div className="z-10 w-6 h-6 rounded-full border-2 border-brand-orange bg-white dark:bg-brand-darkCard flex items-center justify-center p-1.5 transition-colors">
            <svg className="w-full h-full text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        </div>
        <div className="text-left">
            <h4 className="text-sm font-extrabold text-gray-900 dark:text-brand-darkText uppercase tracking-widest">{year}: {event}</h4>
            <p className="text-sm text-gray-400 dark:text-gray-500 font-medium mt-1">{description}</p>
        </div>
    </div>
);

const MigrationMap = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col text-left">
            <header className="mb-10 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-brand-darkText mb-4 leading-tight">Migration Map & Timeline Editor</h1>
                <p className="text-sm font-medium text-gray-400 dark:text-gray-500">Document your family's journey through time and across the globe.</p>
            </header>

            {/* Family Tree Visualization */}
            <section className="mb-16">
                <div className="flex justify-center mb-8">
                    <span className="bg-orange-100 dark:bg-brand-orange/20 text-brand-orange px-6 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest transition-colors">
                        4 Generation / 24 Member
                    </span>
                </div>

                <div className="overflow-x-auto pb-8 no-scrollbar">
                    <div className="flex flex-col items-center space-y-12 min-w-[max-content] px-4">
                        {/* Level 1 */}
                        <div className="relative">
                            <AvatarCard name="Arthur Harrison" role="DD.MM.YYYY" location="location" color="bg-orange-200" highlight={true} />
                            <div className="absolute left-1/2 bottom-[-48px] w-0.5 h-12 bg-orange-100 dark:bg-brand-darkBorder transition-colors" />
                        </div>

                        {/* Level 2 */}
                        <div className="flex space-x-12 sm:space-x-24 relative">
                            <div className="absolute top-[-30px] left-1/2 right-1/2 h-0.5 bg-orange-100 dark:bg-brand-darkBorder transition-colors" />
                            <div className="relative">
                                <div className="absolute left-1/2 top-[-48px] w-0.5 h-12 bg-orange-100 dark:bg-brand-darkBorder transition-colors" />
                                <AvatarCard name="Arthur Harrison" role="DD.MM.YYYY" location="location" />
                            </div>
                            <div className="relative">
                                <div className="absolute left-1/2 top-[-48px] w-0.5 h-12 bg-orange-100 dark:bg-brand-darkBorder transition-colors" />
                                <AvatarCard name="Arthur Harrison" role="DD.MM.YYYY" location="location" />
                            </div>
                        </div>

                        {/* Level 3 */}
                        <div className="flex space-x-4 sm:space-x-8 relative">
                            {[1, 2, 3, 4, 5].map(i => (
                                <AvatarCard key={i} name="Arthur Harrison" role="DD.MM.YYYY" location="location" />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="max-w-3xl">
                <div className="space-y-4">
                    <TimelineItem year="1880" event="Arrival in New York" description="Immigrated from Europe" />
                    <TimelineItem year="1920" event="Settlement in Chicago" description="Established a family business" />
                    <TimelineItem year="1950" event="Expansion to Los Angeles" description="Expanded business operations" />
                    <TimelineItem year="1980" event="Establishment in Miami" description="Opened a new branch" />
                    <TimelineItem year="2020" event="Global Family Network" description="Connected with global relatives" />
                </div>

                <div className="mt-8 flex justify-end">
                    <button
                        onClick={() => navigate('/migration/add')}
                        className="w-full sm:w-auto bg-brand-orange text-white px-10 py-3 rounded-2xl font-bold shadow-lg shadow-brand-orange/20 hover:bg-orange-600 transition-all flex items-center justify-center space-x-2"
                    >
                        <span>Add Migration Point</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default MigrationMap;
