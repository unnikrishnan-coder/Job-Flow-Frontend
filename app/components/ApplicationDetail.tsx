"use client";
import { useState, useRef } from 'react';
import { ApplicationData } from '../types/application_page_types';
import { StatusBadge,CompanyAvatar } from './ApplicationsTable';

// --- Mock Data (for a single application) ---

// This is a placeholder for your resume.
// In a real app, you'd fetch this from your database or user settings.
const userResumeText = `
  SENIOR SOFTWARE ENGINEER
  - 10 years of experience in full-stack development.
  - Proficient in React, Node.js, TypeScript, and AWS.
  - Led a team of 5 engineers to launch a product in 6 months.
  - Passionate about clean code and user-centric design.
`;

const mockApplication: ApplicationData = {
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
  jobUrl: 'https://www.techinnovations.com/careers/swe',
  jobDescription: `
Tech Innovations is seeking a Senior Software Engineer with a passion for building scalable and reliable systems.
Responsibilities:
- Design and implement new features for our core platform.
- Mentor junior engineers and participate in code reviews.
- Collaborate with product managers and designers.
- Improve system performance and reliability.
Requirements:
- 5+ years of experience with React and Node.js.
- Strong understanding of cloud infrastructure (AWS/GCP).
- Excellent communication skills.
`,
};

// --- Helper Components ---

// --- AI Cover Letter Component ---

const CoverLetterGenerator = ({
  jobTitle,
  company,
  jobDescription,
  resume,
}: {
  jobTitle: string;
  company: string;
  jobDescription: string;
  resume: string;
}) => {
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copyButtonText, setCopyButtonText] = useState('Copy Text');
  const letterTextareaRef = useRef<HTMLTextAreaElement>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setError('');
    setGeneratedLetter('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const mockLetter = `Dear Hiring Team,\n\nI am writing to express my interest in the ${jobTitle} position at ${company}.\n\nBased on my 10 years of experience in full-stack development and my proficiency in React and Node.js, as mentioned in my resume, I am confident I possess the skills required for this role.\n\nThank you for your time and consideration.\n\nSincerely,\n[Your Name]`;
      setGeneratedLetter(mockLetter);
      // --- End of simulation ---

    } catch (err: any) {
      console.error('Cover letter generation failed:', err);
      setError(`Failed to generate cover letter. ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!letterTextareaRef.current) return;

    // Use document.execCommand for iframe compatibility
    letterTextareaRef.current.select();
    try {
      document.execCommand('copy');
      setCopyButtonText('Copied!');
      setTimeout(() => setCopyButtonText('Copy Text'), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setCopyButtonText('Failed to copy');
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 space-y-4">
      <h3 className="font-inter font-semibold text-lg text-[#171A1F]">
        AI Cover Letter Generator
      </h3>
      
      <div className="text-sm p-4 bg-gray-50 rounded-md border border-gray-200 space-y-2">
        <p className="font-medium text-gray-800">Using Inputs:</p>
        <div className="flex items-center gap-2 text-gray-600">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          <span>Your Resume (my_resume.pdf)</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>This Job&apos;s Description</span>
        </div>
      </div>
      
      <button
        onClick={handleGenerate}
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-300"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        {isLoading ? 'Generating...' : (generatedLetter ? 'Regenerate' : 'Generate Letter')}
      </button>
      
      {isLoading && (
        <div className="w-full p-4 rounded-md border border-gray-200">
          <div className="animate-pulse space-y-3">
            <div className="h-2 bg-gray-200 rounded"></div>
            <div className="h-2 bg-gray-200 rounded"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-gray-200 rounded col-span-2"></div>
              <div className="h-2 bg-gray-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-gray-200 rounded"></div>
          </div>
        </div>
      )}
      
      {error && (
        <p className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
          {error}
        </p>
      )}

      {generatedLetter && !isLoading && (
        <div className="space-y-3">
          <textarea
            ref={letterTextareaRef}
            readOnly
            value={generatedLetter}
            className="w-full h-80 p-3 font-mono text-sm border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none"
          />
          <button
            onClick={handleCopy}
            className="w-full px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {copyButtonText}
          </button>
        </div>
      )}
    </div>
  );
};

// --- Main Page Component ---

export const ApplicationDetailComponent = () => {
  // In a real app, you would fetch this data based on `params.id`
  const application = mockApplication;

  if (!application) {
    return <div>Application not found.</div>;
  }

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto font-inter">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-4">
          <CompanyAvatar logo={application.logo} />
          <div>
            <h1 className="font-inter font-bold text-2xl md:text-3xl text-[#171A1F]">
              {application.jobTitle}
            </h1>
            <p className="text-lg text-gray-600">{application.company}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <StatusBadge status={application.status} />
          <button className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z"></path></svg>
            Edit Application
          </button>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Details & Description */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Details Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-inter font-semibold text-lg text-[#171A1F] p-5 border-b border-gray-200">
              Application Details
            </h3>
            <dl className="divide-y divide-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5">
                <dt className="text-sm font-medium text-gray-500">Deadline</dt>
                <dd className={`sm:col-span-2 text-sm ${application.isUrgent ? 'text-red-600 font-semibold' : 'text-gray-900'}`}>
                  {application.deadline}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5">
                <dt className="text-sm font-medium text-gray-500">Job URL</dt>
                <dd className="sm:col-span-2 text-sm">
                  <a href={application.jobUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline break-all">
                    {application.jobUrl}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Job Description Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-inter font-semibold text-lg text-[#171A1F] p-5 border-b border-gray-200">
              Job Description
            </h3>
            <div className="p-5">
              {/* 'prose' gives nice default typography for the description */}
              <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-line">
                {application.jobDescription}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Tools */}
        <div className="lg:col-span-1 space-y-8">
          <CoverLetterGenerator
            jobTitle={application.jobTitle}
            company={application.company}
            jobDescription={application.jobDescription}
            resume={userResumeText}
          />
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetailComponent;

