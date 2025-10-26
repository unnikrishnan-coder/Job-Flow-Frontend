"use client";
import { useState, useEffect, useRef } from 'react';
import {
    ApplicationData,
    ApplicationStatus,
    LogoData,
} from '../types/application_page_types';
import { useRouter } from 'next/navigation';

// --- DATA (from user) ---
const applications: ApplicationData[] = [
    {
        id: '1',
        company: 'Tech Innovations',
        jobTitle: 'Senior Software Engineer',
        status: 'Applied',
        deadline: 'Nov 9, 2025',
        logo: {
            type: 'initials',
            content: 'TI',
            classes: 'bg-black text-white',
        },
    },
    {
        id: '2',
        company: 'Global Solutions',
        jobTitle: 'Product Manager',
        status: 'Interviewing',
        deadline: 'Oct 28, 2025',
        logo: {
            type: 'initials',
            content: 'GS',
            classes: 'bg-black text-white',
        },
        isUrgent: true, // For the red deadline text
    },
    {
        id: '3',
        company: 'Creative Minds Agency',
        jobTitle: 'UX Designer',
        status: 'Offer Received',
        deadline: 'Nov 2, 2025',
        logo: {
            type: 'initials',
            content: 'CM',
            classes: 'bg-gray-100 text-gray-600 border border-gray-200',
        },
    },
    {
        id: '4',
        company: 'Data Analytics Corp',
        jobTitle: 'Data Scientist',
        status: 'Rejected',
        deadline: 'Sep 26, 2025',
        logo: {
            type: 'initials',
            content: 'DA',
            classes: 'bg-red-50 text-red-700 border border-red-100',
        },
    },
    {
        id: '5',
        company: 'Innovate Systems',
        jobTitle: 'Junior Frontend Developer',
        status: 'Pending',
        deadline: 'Oct 31, 2025',
        logo: { type: 'dash' }, // For the "—"
    },
    {
        id: '6',
        company: 'Future Tech Lab',
        jobTitle: 'Cloud Architect',
        status: 'Applied',
        deadline: 'Nov 16, 2025',
        logo: {
            type: 'initials',
            content: 'FL',
            classes: 'bg-black text-white',
        },
    },
];

// --- HELPER HOOK ---

/**
 * A custom hook to detect clicks outside of a specified element.
 */
const useOutsideClick = (ref: React.RefObject<HTMLElement | null>, callback: () => void) => {
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [ref, callback]);
};

// --- SUB-COMPONENTS (from user) ---

export const StatusBadge = ({ status }: { status: ApplicationStatus }) => {
    let classes = 'px-3 py-0.5 inline-flex text-xs font-semibold rounded-full';
    switch (status) {
        case 'Applied':
            classes += ' bg-cyan-100 text-cyan-800';
            break;
        case 'Interviewing':
            classes += ' bg-purple-100 text-purple-800 border border-purple-200';
            break;
        case 'Offer Received':
            classes += ' bg-green-100 text-green-800 border border-green-200';
            break;
        case 'Rejected':
            classes += ' bg-red-100 text-red-800 border border-red-200';
            break;
        case 'Pending':
            classes += ' bg-yellow-100 text-yellow-800 border border-yellow-200';
            break;
        default:
            classes += ' bg-gray-100 text-gray-800';
    }
    return <span className={classes}>{status}</span>;
};

export const CompanyAvatar = ({ logo }: { logo: LogoData }) => {
    const baseClasses =
        'flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center';
    if (logo.type === 'dash') {
        return (
            <span className={`${baseClasses} text-gray-400 text-base font-medium`}>
                —
            </span>
        );
    }
    return (
        <div className={`${baseClasses} text-xs font-semibold ${logo.classes}`}>
            {logo.content}
        </div>
    );
};

const DotsIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-5 h-5"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
    </svg>
);

// --- NEW ACTION MENU COMPONENT ---

/**
 * A self-contained component for the "..." actions menu.
 */
const ActionMenu = ({ application }: { application: ApplicationData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Use the hook to close the menu when clicking outside
    useOutsideClick(menuRef, () => setIsOpen(false));

    // Placeholder functions for actions
    const onEdit = () => {
        console.log('Edit:', application.id);
        router.push(`/dashboard/edit_application/${application.id}`);
        setIsOpen(false);
    };
    const onDelete = () => {
        console.log('Delete:', application.id);
        setIsOpen(false);
    };
    const onChangeStatus = () => {
        console.log('Change Status:', application.id);
        setIsOpen(false);
    };

    return (
        // Use the ref here
        <div className="relative" ref={menuRef}>
            {/* The "..." button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-gray-600"
            >
                <span className="sr-only">Actions for {application.company}</span>
                <DotsIcon />
            </button>

            {/* The Dropdown Menu */}
            {isOpen && (
                <div
                    className="
            absolute right-0 z-10 mt-2 w-48 
            origin-top-right rounded-md bg-white 
            py-1 shadow-lg ring-1 ring-black ring-opacity-5 
            focus:outline-none
          "
                >
                    <a
                        href="#"
                        onClick={onEdit}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Edit
                    </a>
                    <a
                        href="#"
                        onClick={onChangeStatus}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Change Status
                    </a>
                    <a
                        href="#"
                        onClick={onDelete}
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                        Delete
                    </a>
                </div>
            )}
        </div>
    );
};

// --- Main Table Component (Updated) ---

const ApplicationsTable = () => {
    const router = useRouter();
    return (
        <div className="font-inter bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <table className="w-full text-left divide-y divide-gray-200">
                {/* Table Header */}
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-sm font-medium text-gray-600 tracking-wide"
                        >
                            Company
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-sm font-medium text-gray-600 tracking-wide"
                        >
                            Job Title
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-sm font-medium text-gray-600 tracking-wide"
                        >
                            Status
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-sm font-medium text-gray-600 tracking-wide"
                        >
                            Deadline
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-sm font-medium text-gray-600 tracking-wide text-right"
                        >
                            Actions
                        </th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-gray-200">
                    {applications.map((app) => (
                        <tr key={app.id} onClick={()=>{router.push(`/dashboard/application/${app.id}`)}} className="hover:bg-gray-50 cursor-pointer">
                            {/* Company Cell */}
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center gap-3">
                                    <CompanyAvatar logo={app.logo} />
                                    <div className="text-sm font-medium text-gray-900">
                                        {app.company}
                                    </div>
                                </div>
                            </td>
                            {/* Job Title Cell */}
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                {app.jobTitle}
                            </td>
                            {/* Status Cell */}
                            <td className="px-6 py-4 whitespace-nowrap">
                                <StatusBadge status={app.status} />
                            </td>
                            {/* Deadline Cell */}
                            <td
                                className={`px-6 py-4 whitespace-nowrap text-sm ${app.isUrgent ? 'text-red-600 font-medium' : 'text-gray-700'
                                    }`}
                            >
                                {app.deadline}
                            </td>
                            {/* Actions Cell - MODIFIED */}
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div className="flex justify-end">
                                    <ActionMenu application={app} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApplicationsTable;
