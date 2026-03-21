import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronDown, X } from 'lucide-react';

const AddRole = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedRole, setSelectedRole] = useState('');
    const [notes, setNotes] = useState('');
    const [notifyUser, setNotifyUser] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [showRoleDropdown, setShowRoleDropdown] = useState(false);
    const [errors, setErrors] = useState({});

    const userDropdownRef = useRef(null);
    const roleDropdownRef = useRef(null);

    // Sample users
    const users = [
        { id: 1, name: 'Rahul Sharma', email: 'rahul.sharma@example.com' },
        { id: 2, name: 'Ayesha Khan', email: 'ayesha.khan@example.com' },
        { id: 3, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 4, name: 'Priya Patel', email: 'priya.patel@example.com' },
        { id: 5, name: 'Michael Chen', email: 'michael.chen@example.com' },
        { id: 6, name: 'Sarah Johnson', email: 'sarah.johnson@example.com' },
    ];

    // Role options
    const roles = [
        'Owner',
        'Council Elder',
        'Family Admin',
        'Branch Admin',
        'Editor',
        'Member'
    ];

    // Filter users based on search query
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
                setShowUserDropdown(false);
            }
            if (roleDropdownRef.current && !roleDropdownRef.current.contains(event.target)) {
                setShowRoleDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle notify toggle
    const handleNotifyToggle = () => {
        if (!notifyUser) {
            setShowConfirmModal(true);
        } else {
            setNotifyUser(false);
        }
    };

    // Confirm notification
    const confirmNotification = () => {
        setNotifyUser(true);
        setShowConfirmModal(false);
    };

    // Cancel notification
    const cancelNotification = () => {
        setShowConfirmModal(false);
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        if (!selectedUser) {
            newErrors.user = 'Please select a user';
        }

        if (!selectedRole) {
            newErrors.role = 'Please select a role';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Here you would typically send the data to your backend
            console.log({
                user: selectedUser,
                role: selectedRole,
                notes,
                notifyUser
            });

            // Navigate back or show success message
            navigate('/governance');
        }
    };

    // Handle cancel
    const handleCancel = () => {
        navigate('/governance');
    };

    return (
        <div className="min-h-screen bg-[#F3F4F6] dark:bg-brand-darkBg p-4 sm:p-6 lg:p-8">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-brand-darkText mb-2">
                        Add New Role
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Assign a governance role to a family member
                    </p>
                </div>

                {/* Main Form Card */}
                <div className="bg-white dark:bg-brand-darkCard rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm p-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Search Bar */}
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-800 dark:text-brand-darkText">
                                Search User
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onFocus={() => setShowUserDropdown(true)}
                                    className="block w-full pl-12 pr-4 py-4 bg-[#F3F4F6]/50 dark:bg-brand-darkBg/50 border-none rounded-2xl focus:ring-2 focus:ring-brand-orange/20 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-brand-darkText font-medium transition-all"
                                    placeholder="Search user"
                                    aria-label="Search for a user"
                                />
                            </div>
                        </div>

                        {/* Select User Dropdown */}
                        <div className="space-y-2" ref={userDropdownRef}>
                            <label className="block text-sm font-bold text-gray-800 dark:text-brand-darkText">
                                Select User <span className="text-brand-orange">*</span>
                            </label>
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                                    className={`w-full flex items-center justify-between px-4 py-4 bg-[#F3F4F6]/50 dark:bg-brand-darkBg/50 border ${errors.user ? 'border-red-300 dark:border-red-500' : 'border-transparent'
                                        } rounded-2xl focus:ring-2 focus:ring-brand-orange/20 text-left transition-all hover:bg-[#F3F4F6] dark:hover:bg-brand-darkBg`}
                                    aria-haspopup="listbox"
                                    aria-expanded={showUserDropdown}
                                >
                                    <span className={`font-medium ${selectedUser
                                        ? 'text-gray-900 dark:text-brand-darkText'
                                        : 'text-gray-400 dark:text-gray-500'
                                        }`}>
                                        {selectedUser ? selectedUser.name : 'Choose a user'}
                                    </span>
                                    <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${showUserDropdown ? 'rotate-180' : ''
                                        }`} />
                                </button>

                                {/* User Dropdown Menu */}
                                {showUserDropdown && (
                                    <div className="absolute z-10 w-full mt-2 bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder rounded-2xl shadow-lg max-h-64 overflow-y-auto">
                                        {filteredUsers.length > 0 ? (
                                            <ul role="listbox" className="py-2">
                                                {filteredUsers.map((user) => (
                                                    <li
                                                        key={user.id}
                                                        onClick={() => {
                                                            setSelectedUser(user);
                                                            setShowUserDropdown(false);
                                                            setSearchQuery('');
                                                            setErrors({ ...errors, user: '' });
                                                        }}
                                                        className={`px-4 py-3 cursor-pointer transition-colors ${selectedUser?.id === user.id
                                                            ? 'bg-brand-orange/10 dark:bg-brand-orange/20'
                                                            : 'hover:bg-gray-50 dark:hover:bg-brand-darkBorder/30'
                                                            }`}
                                                        role="option"
                                                        aria-selected={selectedUser?.id === user.id}
                                                    >
                                                        <div className="font-medium text-gray-900 dark:text-brand-darkText">
                                                            {user.name}
                                                        </div>
                                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                                            {user.email}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                                                No users found
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            {errors.user && (
                                <p className="text-sm text-red-500 dark:text-red-400 mt-1">{errors.user}</p>
                            )}
                        </div>

                        {/* Role Dropdown */}
                        <div className="space-y-2" ref={roleDropdownRef}>
                            <label className="block text-sm font-bold text-gray-800 dark:text-brand-darkText">
                                Select Role <span className="text-brand-orange">*</span>
                            </label>
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                                    className={`w-full flex items-center justify-between px-4 py-4 bg-[#F3F4F6]/50 dark:bg-brand-darkBg/50 border ${errors.role ? 'border-red-300 dark:border-red-500' : 'border-transparent'
                                        } rounded-2xl focus:ring-2 focus:ring-brand-orange/20 text-left transition-all hover:bg-[#F3F4F6] dark:hover:bg-brand-darkBg`}
                                    aria-haspopup="listbox"
                                    aria-expanded={showRoleDropdown}
                                >
                                    <span className={`font-medium ${selectedRole
                                        ? 'text-gray-900 dark:text-brand-darkText'
                                        : 'text-gray-400 dark:text-gray-500'
                                        }`}>
                                        {selectedRole || 'Choose a role'}
                                    </span>
                                    <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${showRoleDropdown ? 'rotate-180' : ''
                                        }`} />
                                </button>

                                {/* Role Dropdown Menu */}
                                {showRoleDropdown && (
                                    <div className="absolute z-10 w-full mt-2 bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-brand-darkBorder rounded-2xl shadow-lg">
                                        <ul role="listbox" className="py-2">
                                            {roles.map((role) => (
                                                <li
                                                    key={role}
                                                    onClick={() => {
                                                        setSelectedRole(role);
                                                        setShowRoleDropdown(false);
                                                        setErrors({ ...errors, role: '' });
                                                    }}
                                                    className={`px-4 py-3 cursor-pointer transition-colors ${selectedRole === role
                                                        ? 'bg-brand-orange/10 dark:bg-brand-orange/20 font-medium'
                                                        : 'hover:bg-gray-50 dark:hover:bg-brand-darkBorder/30'
                                                        } text-gray-900 dark:text-brand-darkText`}
                                                    role="option"
                                                    aria-selected={selectedRole === role}
                                                >
                                                    {role}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            {errors.role && (
                                <p className="text-sm text-red-500 dark:text-red-400 mt-1">{errors.role}</p>
                            )}
                        </div>

                        {/* Notes Textbox */}
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-800 dark:text-brand-darkText">
                                Notes
                            </label>
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                rows={4}
                                className="block w-full px-4 py-4 bg-[#F3F4F6]/50 dark:bg-brand-darkBg/50 border-none rounded-2xl focus:ring-2 focus:ring-brand-orange/20 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-brand-darkText font-medium resize-none transition-all focus:rows-6"
                                placeholder="Add notes (optional)"
                                aria-label="Additional notes"
                            />
                        </div>

                        {/* Notify User Toggle */}
                        <div className="flex items-center justify-between p-4 bg-[#F3F4F6]/30 dark:bg-brand-darkBg/30 rounded-2xl">
                            <div>
                                <label htmlFor="notify-toggle" className="block text-sm font-bold text-gray-800 dark:text-brand-darkText cursor-pointer">
                                    Notify user
                                </label>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    Send an email notification about the role assignment
                                </p>
                            </div>
                            <button
                                type="button"
                                id="notify-toggle"
                                onClick={handleNotifyToggle}
                                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:ring-offset-2 ${notifyUser ? 'bg-brand-orange' : 'bg-gray-300 dark:bg-gray-600'
                                    }`}
                                role="switch"
                                aria-checked={notifyUser}
                                aria-label="Toggle user notification"
                            >
                                <span
                                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${notifyUser ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="flex-1 px-6 py-4 border-2 border-gray-200 dark:border-brand-darkBorder text-gray-700 dark:text-brand-darkText font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-brand-darkBorder/30 transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="flex-1 px-6 py-4 bg-brand-orange text-white font-bold rounded-2xl hover:bg-orange-600 transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-sm"
                            >
                                Add Role
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Confirmation Modal */}
            {showConfirmModal && (
                <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-brand-darkCard rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-xl max-w-md w-full p-6 animate-in zoom-in duration-200">
                        <div className="flex items-start mb-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-brand-orange/10 dark:bg-brand-orange/20 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                            <div className="ml-4 flex-1">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-brand-darkText mb-2">
                                    Confirm Notification
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Are you sure you want to notify this user about their new role?
                                </p>
                            </div>
                            <button
                                onClick={cancelNotification}
                                className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={cancelNotification}
                                className="flex-1 px-4 py-3 border-2 border-gray-200 dark:border-brand-darkBorder text-gray-700 dark:text-brand-darkText font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-brand-darkBorder/30 transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmNotification}
                                className="flex-1 px-4 py-3 bg-brand-orange text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-sm"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddRole;
