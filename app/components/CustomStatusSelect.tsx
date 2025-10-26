"use client"
import { useState, useEffect, useRef, RefObject } from 'react';

export type Option = {
  value: string;
  label: string;
};

// --- Data for the select options ---
const options: Option[] = [
  { value: 'All', label: 'All Statuses' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Applied', label: 'Applied' },
  { value: 'Interviewing', label: 'Interviewing' },
  { value: 'Offer Received', label: 'Offer Received' },
  { value: 'Rejected', label: 'Rejected' },
];

/**
 * A custom hook to detect clicks outside of a specified element.
 */
const useOutsideClick = (ref : RefObject<HTMLElement | null>, callback : () => void) => {
  useEffect(() => {
    const handleClick = (event : MouseEvent) => {
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

/**
* Renders the custom chevron (arrow) icon.
*/
const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transition-transform duration-200 ${
      isOpen ? 'rotate-180' : ''
    }`}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);


/**
 * Renders a custom select component styled with Tailwind CSS,
 * without shadcn or other UI libraries.
 */
const CustomStatusSelect = () => {
  // State to manage if the dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);
  
  // State to store the currently selected option
  // We store the *entire* option object to access its label
  const [selectedOption, setSelectedOption] = useState(options[0]);

  // Ref for the main wrapper div
  const wrapperRef = useRef(null);

  // Use the custom hook to close the dropdown when clicking outside
  useOutsideClick(wrapperRef, () => setIsOpen(false));

  /**
   * Handles selecting a new option.
   */
  const handleSelectOption = (option: Option) => {
    setSelectedOption(option); // Set the new option
    setIsOpen(false); // Close the dropdown
  };

  return (
    // Main wrapper div. Needs 'relative' for positioning the dropdown.
    // We assign the ref here.
    <div className="relative w-[20%] font-inter" ref={wrapperRef}>
      
      {/* 1. The "Trigger" (the part you see) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-between w-full
          py-3 px-5 border border-[#DEE1E6] rounded 
          text-[#171A1F] font-medium not-italic text-[16px] 
          leading-[157%] 
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
          ${isOpen ? 'ring-2 ring-indigo-500 ring-offset-2' : ''}
        `}
      >
        <span>{selectedOption.label}</span>
        <ChevronDownIcon isOpen={isOpen} />
      </button>

      {/* 2. The "Content" (the dropdown menu) */}
      {isOpen && (
        <div
          className="
            absolute z-10 w-full mt-1 
            bg-white border border-[#DEE1E6] rounded-md shadow-lg
          "
        >
          <ul className="py-1">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelectOption(option)}
                className={`
                  font-inter font-medium text-[16px] py-2 px-3
                  cursor-pointer hover:bg-gray-100
                  ${
                    selectedOption.value === option.value
                      ? 'bg-gray-100' // Style for the selected item
                      : ''
                  }
                `}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomStatusSelect;
