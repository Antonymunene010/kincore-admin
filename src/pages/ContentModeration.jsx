import React from 'react';
import { useNavigate } from 'react-router-dom';

const ModerationRow = ({ content, reason, author, urgency }) => {
    const navigate = useNavigate();

    const getUrgencyStyles = (u) => {
        switch (u.toLowerCase()) {
            case 'critical': return 'bg-brand-urgency-critical dark:bg-rose-500/20 text-brand-errorText dark:text-rose-400';
            case 'high': return 'bg-brand-urgency-high dark:bg-orange-500/20 text-brand-errorText dark:text-orange-400';
            case 'medium': return 'bg-brand-urgency-medium dark:bg-amber-500/20 text-amber-700 dark:text-amber-400';
            case 'low': return 'bg-brand-urgency-low dark:bg-emerald-500/20 text-brand-successText dark:text-emerald-400';
            default: return 'bg-gray-100 dark:bg-brand-darkBg text-gray-500';
        }
    };

    return (
        <tr className="border-b border-gray-50 dark:border-brand-darkBorder last:border-none transition-colors">
            <td className="py-6 pr-4 text-sm font-medium text-gray-800 dark:text-brand-darkText max-w-xs">{content}</td>
            <td className="py-6 px-4 text-sm text-gray-500 dark:text-gray-400">{reason}</td>
            <td className="py-6 px-4 text-sm text-gray-500 dark:text-gray-400">{author}</td>
            <td className="py-6 px-4">
                <span className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider block text-center w-24 ${getUrgencyStyles(urgency)}`}>
                    {urgency}
                </span>
            </td>
            <td className="py-6 pl-4 text-sm font-bold">
                <button
                    onClick={() => navigate('/restrict-author')}
                    className="text-brand-orange hover:text-orange-600 dark:hover:text-brand-orange/80 underline transition-colors"
                >
                    Resolve
                </button>
            </td>
        </tr>
    );
};

const ContentModeration = () => {
    const data = [
        { content: 'Post about inappropriate content', reason: 'Inappropriate Content', author: 'Sophia Clark', urgency: 'High' },
        { content: 'Comment with offensive language', reason: 'Offensive Language', author: 'Ethan Bennett', urgency: 'Medium' },
        { content: 'Image violating guidelines', reason: 'Violation of Guidelines', author: 'Olivia Carter', urgency: 'High' },
        { content: 'Video with harmful content', reason: 'Harmful Content', author: 'Liam Davis', urgency: 'Critical' },
        { content: 'Post promoting violence', reason: 'Promotion of Violence', author: 'Ava Evans', urgency: 'Critical' },
        { content: 'Comment with hate speech', reason: 'Hate Speech', author: 'Noah Foster', urgency: 'Critical' },
        { content: 'Image with explicit content', reason: 'Explicit Content', author: 'Isabella Green', urgency: 'High' },
        { content: 'Video with misleading information', reason: 'Misleading Information', author: 'Jackson Hayes', urgency: 'Medium' },
        { content: 'Post with spam content', reason: 'Spam Content', author: 'Mia Ingram', urgency: 'Low' },
        { content: 'Comment with personal attacks', reason: 'Personal Attacks', author: 'Lucas Johnson', urgency: 'Medium' },
    ];

    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 mb-2 uppercase tracking-widest">Kinecore</h2>
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-brand-darkText">Content Moderation - Flag Queue</h1>
                </div>
            </div>

            <div className="bg-white dark:bg-brand-darkCard rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden p-6 transition-colors">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[800px]">
                        <thead>
                            <tr className="border-b border-gray-100 dark:border-brand-darkBorder text-left text-xs font-bold text-gray-400 dark:text-gray-500">
                                <th className="pb-4 pr-4 uppercase tracking-wider">Content</th>
                                <th className="pb-4 px-4 uppercase tracking-wider">Reason for Report</th>
                                <th className="pb-4 px-4 uppercase tracking-wider">Author</th>
                                <th className="pb-4 px-4 uppercase tracking-wider text-center w-24">Urgency Level</th>
                                <th className="pb-4 pl-4 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, i) => (
                                <ModerationRow key={i} {...row} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ContentModeration;
