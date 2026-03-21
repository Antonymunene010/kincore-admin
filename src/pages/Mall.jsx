import React from 'react';

const ProductRow = ({ name, seller, category, price }) => (
    <tr className="border-b border-gray-50 dark:border-brand-darkBorder last:border-none group hover:bg-orange-50/10 dark:hover:bg-brand-orange/5 transition-colors">
        <td className="py-6 pr-4">
            <p className="text-sm font-bold text-gray-800 dark:text-brand-darkText leading-relaxed max-w-[200px]">{name}</p>
        </td>
        <td className="py-6 px-4">
            <span className="text-sm font-bold text-brand-orange opacity-70 dark:opacity-90">{seller}</span>
        </td>
        <td className="py-6 px-4">
            <span className="text-sm font-bold text-brand-orange opacity-70 dark:opacity-90">{category}</span>
        </td>
        <td className="py-6 px-4">
            <span className="text-sm font-bold text-brand-orange opacity-70 dark:opacity-90">${price}</span>
        </td>
        <td className="py-6 pl-4">
            <div className="flex flex-col items-start">
                <button className="text-[10px] font-extrabold text-brand-orange uppercase tracking-widest hover:underline mb-1">Approve</button>
                <button className="text-[10px] font-extrabold text-brand-orange uppercase tracking-widest hover:underline">Listing</button>
            </div>
        </td>
    </tr>
);

const Mall = () => {
    const products = [
        { name: 'Eco-Friendly Bamboo Toothbrushes', seller: 'Branch A', category: 'Personal Care', price: '5.99' },
        { name: 'Organic Lavender Essential Oil', seller: 'Branch B', category: 'Health & Wellness', price: '12.50' },
        { name: 'Handcrafted Wooden Toys', seller: 'Branch C', category: 'Toys & Games', price: '25.00' },
        { name: 'Artisan Coffee Beans', seller: 'Branch D', category: 'Food & Beverage', price: '18.75' },
        { name: 'Recycled Paper Notebooks', seller: 'Branch E', category: 'Stationery', price: '8.20' },
    ];

    return (
        <div className="flex flex-col">
            <header className="mb-10 text-left">
                <h2 className="text-gray-900 dark:text-brand-darkText text-sm font-bold opacity-30 dark:opacity-40 mb-2 uppercase tracking-widest">Kinecore</h2>
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-brand-darkText">Product Approval Queue</h1>
            </header>

            <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden p-6 md:p-8 transition-colors">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[700px]">
                        <thead>
                            <tr className="border-b border-gray-100 dark:border-brand-darkBorder text-[10px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                                <th className="pb-6 pr-4">Product Name</th>
                                <th className="pb-6 px-4">Seller Branch</th>
                                <th className="pb-6 px-4">Category</th>
                                <th className="pb-6 px-4">Price</th>
                                <th className="pb-6 pl-4 text-brand-orange opacity-80">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p, i) => (
                                <ProductRow key={i} {...p} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Mall;
