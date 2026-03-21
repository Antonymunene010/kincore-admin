import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleRow = ({ role, displayName, description, members }) => (
    <tr className="border-b border-gray-50 dark:border-brand-darkBorder last:border-none transition-colors">
        <td className="py-6 pr-4 text-sm font-bold text-gray-800 dark:text-brand-darkText">{role}</td>
        <td className="py-6 px-4 text-sm font-medium text-brand-orange/60 dark:text-brand-orange/80">{displayName}</td>
        <td className="py-6 px-4 text-sm text-gray-500 dark:text-gray-400 max-w-xs">{description}</td>
        <td className="py-6 pl-4 text-sm font-bold text-gray-800 dark:text-brand-darkText text-center">{members}</td>
    </tr>
);

const RadioOption = ({ label, checked = false }) => (
    <div className="flex items-center space-x-3 p-4 border border-gray-100 dark:border-brand-darkBorder rounded-xl mb-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-brand-darkBorder/30 transition-colors">
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${checked ? 'border-brand-orange' : 'border-gray-200 dark:border-brand-darkBorder'}`}>
            {checked && <div className="w-2.5 h-2.5 bg-brand-orange rounded-full animate-in zoom-in duration-200"></div>}
        </div>
        <span className="text-sm font-bold text-gray-700 dark:text-brand-darkText">{label}</span>
    </div>
);

const GovernanceRoles = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column: Roles Table */}
            <div className="flex-1">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-brand-darkText">Governance & Roles</h1>
                </div>

                <div className="bg-white dark:bg-brand-darkCard rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm overflow-hidden p-6 relative transition-colors">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[600px]">
                            <thead>
                                <tr className="border-b border-gray-100 dark:border-brand-darkBorder text-left text-xs font-bold text-gray-400 dark:text-gray-500">
                                    <th className="pb-4 pr-4">Role</th>
                                    <th className="pb-4 px-4">Display Name</th>
                                    <th className="pb-4 px-4">Description</th>
                                    <th className="pb-4 pl-4 text-center">Members</th>
                                </tr>
                            </thead>
                            <tbody>
                                <RoleRow
                                    role="Branch Admin"
                                    displayName="Branch Admin"
                                    description="Manages a specific branch of the family tree."
                                    members="2"
                                />
                                <RoleRow
                                    role="Family Historian"
                                    displayName="Family Historian"
                                    description="Responsible for documenting and preserving family history."
                                    members="1"
                                />
                                <RoleRow
                                    role="Financial Manager"
                                    displayName="Financial Manager"
                                    description="Oversees family finances and investments."
                                    members="1"
                                />
                                <RoleRow
                                    role="Event Coordinator"
                                    displayName="Event Coordinator"
                                    description="Plans and organizes family events and gatherings."
                                    members="3"
                                />
                                <RoleRow
                                    role="Communications Officer"
                                    displayName="Communications Officer"
                                    description="Handles family communications and announcements."
                                    members="1"
                                />
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-end mt-6">
                        <button
                            onClick={() => navigate('/governance/add-role')}
                            className="bg-brand-orange text-white px-6 py-3 rounded-xl flex items-center space-x-2 font-bold transform translate-y-2 hover:bg-orange-600 transition-all"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            <span>Add Role</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Column: Settings */}
            <div className="lg:w-80">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-brand-darkText mb-8">Privacy & Visibility</h2>

                <div className="mb-8">
                    <p className="text-sm font-bold text-gray-800 dark:text-brand-darkText mb-4">Who can see this role?</p>
                    <RadioOption label="All family members" checked />
                    <RadioOption label="Specific branches" />
                    <RadioOption label="Only admins" />
                </div>

                <div className="mb-8">
                    <p className="text-sm font-bold text-gray-800 dark:text-brand-darkText mb-4">Who can assign this role?</p>
                    <RadioOption label="All family members" checked />
                    <RadioOption label="Specific branches" />
                    <RadioOption label="Only admins" />
                </div>

                <div className="flex justify-end">
                    <button className="bg-brand-orange text-white px-8 py-3 rounded-lg font-bold shadow-sm hover:bg-orange-600 transition-colors">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GovernanceRoles;
