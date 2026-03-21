import React from 'react';

const ReportCard = ({ title, description, buttonLabel, image }) => (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 group transition-colors">
        <div className="flex-1 text-left md:mr-8 mb-6 md:mb-0">
            <h4 className="text-sm font-extrabold text-gray-900 dark:text-brand-darkText mb-2 uppercase tracking-tight">{title}</h4>
            <p className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-6 leading-relaxed max-w-sm">{description}</p>
            <button className="bg-orange-50 dark:bg-brand-orange/10 text-brand-orange px-8 py-2.5 rounded-2xl text-[10px] font-extrabold uppercase tracking-widest hover:bg-orange-100 dark:hover:bg-brand-orange/20 transition-colors">
                {buttonLabel}
            </button>
        </div>
        <div className="w-full md:w-64 h-40 rounded-2xl overflow-hidden bg-gray-50 dark:bg-brand-darkBg flex items-center justify-center p-4 group-hover:shadow-md dark:group-hover:shadow-brand-orange/5 transition-all">
            <img src={image} alt={title} className="w-full h-full object-contain" />
        </div>
    </div>
);

const ExportRow = ({ name, date, status }) => (
    <tr className="border-b border-gray-50 dark:border-brand-darkBorder last:border-none transition-colors">
        <td className="py-6 px-4 text-xs font-medium text-gray-400 dark:text-gray-500">{name}</td>
        <td className="py-6 px-4 text-xs font-bold text-gray-400 dark:text-gray-600 uppercase tracking-widest">{date}</td>
        <td className="py-6 px-4">
            <span className="bg-orange-100 dark:bg-brand-orange/10 text-brand-orange px-8 py-2 rounded-2xl text-[10px] font-extrabold uppercase tracking-widest">
                {status}
            </span>
        </td>
        <td className="py-6 px-4 text-[10px] font-extrabold text-gray-900 dark:text-brand-darkText uppercase tracking-widest cursor-pointer hover:underline">
            Download
        </td>
    </tr>
);

const Reports = () => {
    const exports = [
        { name: 'Descendant Tree - Carter Family', date: '2024-01-15', status: 'Completed' },
        { name: 'Branch Growth - Carter - Ethan\'s Branch', date: '2024-01-10', status: 'Completed' },
        { name: 'Financial Audit - Carter Family', date: '2023-12-20', status: 'Completed' },
        { name: 'Descendant Tree - Carter Family', date: '2023-12-15', status: 'Completed' },
        { name: 'Branch Growth - Carter - Olivia\'s Branch', date: '2023-12-10', status: 'Completed' },
    ];

    return (
        <div className="flex flex-col text-left">
            <header className="mb-10 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-brand-darkText mb-8 sm:mb-12 leading-tight">Reports & Exports</h1>

                <div className="space-y-6 mb-16">
                    <ReportCard
                        title="Descendant PDF Generator"
                        description="Generate a PDF document detailing all descendants in the family tree."
                        buttonLabel="Generate PDF"
                        image="file:///C:/Users/uvdsg/.gemini/antigravity/brain/6332a07c-dddc-4f49-b611-f36a751f27be/family_tree_minimal_1_1770179753799.png"
                    />
                    <ReportCard
                        title="Branch Growth Report"
                        description="Analyze the growth of specific branches within the family tree over time."
                        buttonLabel="View Report"
                        image="file:///C:/Users/uvdsg/.gemini/antigravity/brain/6332a07c-dddc-4f49-b611-f36a751f27be/family_tree_detailed_1_1770179768087.png"
                    />
                    <ReportCard
                        title="Financial Audit Summary"
                        description="Review a summary of financial transactions and contributions within the family platform."
                        buttonLabel="View Summary"
                        image="file:///C:/Users/uvdsg/.gemini/antigravity/brain/6332a07c-dddc-4f49-b611-f36a751f27be/family_portraits_grid_1770179154905.png"
                    />
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-brand-darkText mb-8 sm:mb-10">Recent Exports</h3>
                <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden p-6 md:p-8 transition-colors">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left min-w-[700px]">
                            <thead>
                                <tr className="border-b border-gray-100 dark:border-brand-darkBorder text-[10px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                                    <th className="pb-6 px-4">Document Name</th>
                                    <th className="pb-6 px-4">Date</th>
                                    <th className="pb-6 px-4">Status</th>
                                    <th className="pb-6 px-4">Download</th>
                                </tr>
                            </thead>
                            <tbody>
                                {exports.map((e, i) => (
                                    <ExportRow key={i} {...e} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Reports;
