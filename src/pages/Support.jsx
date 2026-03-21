import React, { useState } from 'react';

const SupportCard = ({ icon, title, description }) => (
    <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-gray-100 dark:border-brand-darkBorder p-8 flex flex-col items-start transition-all hover:shadow-md dark:hover:shadow-brand-orange/5 cursor-pointer group">
        <div className="w-12 h-12 bg-orange-50 dark:bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
            {icon}
        </div>
        <h4 className="text-sm font-extrabold text-gray-900 dark:text-brand-darkText mb-2">{title}</h4>
        <p className="text-xs font-medium text-gray-400 dark:text-gray-500 leading-relaxed text-left">{description}</p>
    </div>
);

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="mb-4">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="bg-orange-50 dark:bg-brand-orange/10 rounded-2xl p-6 flex items-center justify-between cursor-pointer hover:bg-orange-100 dark:hover:bg-brand-orange/20 transition-colors"
            >
                <span className="text-sm font-bold text-gray-800 dark:text-brand-darkText">{question}</span>
                <svg
                    className={`w-5 h-5 text-gray-400 dark:text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            {isOpen && (
                <div className="px-6 py-4 text-xs font-medium text-gray-500 dark:text-gray-400 leading-relaxed text-left transition-colors">
                    {answer || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                </div>
            )}
        </div>
    );
};

const Support = () => {
    const faqs = [
        { question: 'How do I add a new administrator?' },
        { question: 'What are the different roles and permissions?' },
        { question: 'How can I manage user accounts?' },
    ];

    return (
        <div className="flex flex-col text-left">
            <header className="mb-10 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-brand-darkText leading-tight">Help & Support Center</h1>
            </header>

            <section className="mb-12 sm:mb-16">
                <h3 className="text-xl font-bold text-gray-800 dark:text-brand-darkText mb-8 border-b-2 border-brand-orange inline-block pb-1">Knowledge Base</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <SupportCard
                        title="Admin Guide"
                        description="Comprehensive guide for platform administrators."
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
                    />
                    <SupportCard
                        title="Video Tutorials"
                        description="Learn how to use genealogy tools with video tutorials."
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>}
                    />
                    <SupportCard
                        title="Submit a Support Ticket"
                        description="Submit a support ticket for assistance with any issues."
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>}
                    />
                </div>
            </section>

            <section>
                <h3 className="text-xl font-bold text-gray-800 dark:text-brand-darkText mb-8 border-b-2 border-brand-orange inline-block pb-1">Frequently Asked Questions</h3>
                <div className="max-w-4xl">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} {...faq} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Support;
