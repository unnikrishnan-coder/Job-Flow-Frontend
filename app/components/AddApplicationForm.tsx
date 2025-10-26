"use client";
import { useState } from 'react';
import { ApplicationStatus } from '../types/application_page_types';

// --- Types ---

// This type is for the form state
type ApplicationFormData = {
  company: string;
  jobTitle: string;
  status: ApplicationStatus;
  deadline: string;
  jobUrl: string;
  jobDescription: string;
};

// --- Helper Data ---
const statuses: ApplicationStatus[] = [
  'Pending',
  'Applied',
  'Interviewing',
  'Offer Received',
  'Rejected',
];

interface FormInputProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
}

const FormInput = ({ label, id, ...props }: FormInputProps) => (
  <div>
    <label
      htmlFor={id || props.name}
      className="block font-inter text-sm font-medium text-[#171A1F]"
    >
      {label}
    </label>
    <div className="mt-1">
      <input
        id={id || props.name}
        {...props}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  </div>
);

interface FormSelectProps extends React.ComponentPropsWithoutRef<'select'> {
  label: string;
}

const FormSelect = ({ label, id, children, ...props }: FormSelectProps) => (
  <div>
    <label
      htmlFor={id || props.name}
      className="block font-inter text-sm font-medium text-[#171A1F]"
    >
      {label}
    </label>
    <div className="mt-1">
      <select
        id={id || props.name}
        {...props}
        className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      >
        {children}
      </select>
    </div>
  </div>
);

interface FormTextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  label: string;
}

const FormTextArea = ({ label, id, ...props }: FormTextAreaProps) => (
  <div>
    <label
      htmlFor={id || props.name}
      className="block font-inter text-sm font-medium text-[#171A1F]"
    >
      {label}
    </label>
    <div className="mt-1">
      <textarea
        id={id || props.name}
        rows={6}
        {...props}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  </div>
);

// --- Main Form Component ---

const AddApplicationForm = () => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    company: '',
    jobTitle: '',
    status: 'Pending',
    deadline: '',
    jobUrl: '',
    jobDescription: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: 
    // 1. Generate a new `ApplicationData` object from `formData`
    //    (e.g., create an ID, generate a logo object)
    // 2. Send this new object to your database/API
    
    console.log('Form Submitted:', formData);
    
    // Optional: Reset form
    // setFormData({
    //   company: '',
    //   jobTitle: '',
    //   status: 'Pending',
    //   deadline: '',
    //   jobUrl: '',
    //   jobDescription: '',
    // });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 sm:p-8"
    >
      <div className="space-y-6">
        {/* Row 1: Company & Job Title */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormInput
            label="Company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g., Tech Innovations"
            required
          />
          <FormInput
            label="Job Title"
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="e.g., Senior Software Engineer"
            required
          />
        </div>

        {/* Row 2: Status & Deadline */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormSelect
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </FormSelect>
          <FormInput
            label="Deadline"
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
          />
        </div>

        {/* Row 3: Job URL */}
        <FormInput
          label="Job URL"
          type="url"
          name="jobUrl"
          value={formData.jobUrl}
          onChange={handleChange}
          placeholder="https://www.company.com/careers/job-id"
        />

        {/* Row 4: Job Description */}
        <FormTextArea
          label="Job Description"
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          placeholder="Copy and paste the job description here..."
        />

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 font-inter text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save Application
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddApplicationForm;

