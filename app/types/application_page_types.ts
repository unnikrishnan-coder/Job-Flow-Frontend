/**
 * Defines the set of all possible job application statuses.
 */
export type ApplicationStatus =
  | 'Applied'
  | 'Interviewing'
  | 'Offer Received'
  | 'Rejected'
  | 'Pending';

/**
 * Defines the data structure for the company logo.
 * This is a "discriminated union" based on the 'type' field.
 */
export type LogoData =
  | {
      type: 'initials';
      content: string; // The initials, e.g., "TI"
      classes: string; // The Tailwind classes for styling, e.g., "bg-black text-white"
    }
  | {
      type: 'dash'; // For items with no logo
    };

/**
 * Represents the complete data structure for a single job application row.
 */
export type ApplicationData = {
  id: string;
  company: string;
  jobTitle: string;
  status: ApplicationStatus;
  deadline: string; // You could also use 'Date' if you parse the string
  logo: LogoData;
  isUrgent?: boolean; // Optional property to make the deadline red
  jobUrl: string;
  jobDescription: string; // Key field for AI summarization
};
