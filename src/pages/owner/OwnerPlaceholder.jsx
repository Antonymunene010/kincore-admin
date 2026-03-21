import React from 'react';

const OwnerPlaceholder = ({ title }) => {
    return (
        <div className="flex flex-col text-left">
            <header className="mb-10 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-2">{title}</h1>
            </header>
            <div className="text-gray-500">This section is currently under development.</div>
        </div>
    );
};

export default OwnerPlaceholder;
