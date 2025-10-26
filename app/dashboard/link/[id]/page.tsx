"use client";

import React from 'react';

// --- Types (from our previous files) ---

export type LinkTag = 'Portfolio' | 'Interview Prep' | 'Networking' | 'Resource';

export type LinkData = {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: LinkTag[];
};

// --- Helper Components ---

const TagBadge = ({ tag }: { tag: LinkTag }) => {
  // Simple styling for a tag
  return (
    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
      {tag}
    </span>
  );
};

const LinkIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
    />
  </svg>
);

const EditIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z"
    />
  </svg>
);

const link : LinkData = {
    id: 'l1',
    title: 'My Personal Portfolio',
    description: 'My main design and development portfolio website.',
    url: 'https://my-portfolio-site.com',
    tags: ['Portfolio'],
};

const LinkDetailPage = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden my-[50px] mx-[200px]">
      {/* Header with Title and Actions */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
          <h1 className="font-inter font-bold text-2xl text-[#171A1F] mb-3 sm:mb-0">
            {link.title}
          </h1>
          <div className="flex-shrink-0 flex items-center gap-3">
            <button className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800">
              <EditIcon />
              Edit
            </button>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <LinkIcon />
              Go to Link
            </a>
          </div>
        </div>
      </div>

      {/* Body with Details */}
      <div className="p-6 space-y-6">
        {/* Description Section */}
        <div>
          <h3 className="font-inter font-medium text-gray-700 mb-1">
            Description
          </h3>
          <p className="font-inter font-normal text-base text-gray-900 whitespace-pre-line">
            {link.description || (
              <span className="italic text-gray-500">No description provided.</span>
            )}
          </p>
        </div>

        {/* URL Section */}
        <div>
          <h3 className="font-inter font-medium text-gray-700 mb-1">URL</h3>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter font-normal text-base text-indigo-600 hover:underline break-all"
          >
            {link.url}
          </a>
        </div>

        {/* Tags Section */}
        <div>
          <h3 className="font-inter font-medium text-gray-700 mb-2">Tags</h3>
          {link.tags.length > 0 ? (
            <div className="flex gap-2 flex-wrap">
              {link.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          ) : (
            <p className="font-inter italic text-base text-gray-500">
              No tags added.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkDetailPage;
