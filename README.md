# JobFlow: Job Application Tracker (Frontend)

This is the official Next.js frontend for JobFlow, a modern dashboard designed to help users manage their job application process from start to finish.

## 📝 Description

JobFlow provides a centralized dashboard for job seekers to track applications, manage deadlines, generate AI-powered cover letters, and store important links. It's built to be fast, responsive, and intuitive, helping users stay organized and focused.

## ✨ Features

  * **Dashboard:** A clean overview of all job applications. Add new applications and track their status (Applied, Interviewing, Offer, etc.) and deadlines.
  * **AI Cover Letter Generator:** Users can upload their resume and, for each application, provide a job description to generate a tailored cover letter.
  * **Deadline Notifications:** The system is set up to send notifications (via a backend service) based on upcoming application deadlines.
  * **Link Repository:** A dedicated page for storing and organizing important links (e.g., portfolios, networking sites, interview prep resources). Links can be categorized, tagged, and searched.
  * **Profile Management:** Users can manage their profile details, settings, and upload/update their primary resume.

## 💻 Tech Stack

  * **Framework:** [Next.js](https://nextjs.org/) (v14+ with App Router)
  * **Language:** [TypeScript](https://www.typescriptlang.org/)
  * **Styling:** [Tailwind CSS](https://tailwindcss.com/) (or your preferred choice like Shadcn/ui, MUI, etc.)
  * **State Management:** React Context / Zustand / Redux (Specify your choice)
  * **Data Fetching:** SWR / React Query
  * **Form Handling:** React Hook Form

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (v18 or later) and [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/) installed.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/jobflow-frontend.git
    cd jobflow-frontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add the necessary environment variables.

    ```ini
    # Example
    NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api/v1
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

The project uses the Next.js App Router structure:

```
/
├── app/
│   ├── (auth)/             # Auth routes (login, sign-up)
│   │   ├── login/
│   │   └── page.tsx
│   ├── (dashboard)/        # Protected routes requiring auth
│   │   ├── dashboard/      # Main dashboard page
│   │   ├── links/          # "My Links" page
│   │   ├── profile/        # Profile & settings page
│   │   └── layout.tsx      # Dashboard layout (nav, sidebar)
│   ├── api/                # API routes (if any, e.g., for proxying)
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── components/
│   ├── ui/                 # Reusable UI components (Button, Card, Input)
│   ├── shared/             # Shared components (Navbar, Footer)
│   └── features/           # Components specific to a feature (e.g., ApplicationTable)
├── hooks/                  # Custom React hooks
├── lib/                    # Helper functions, utilities, API client
└── public/                 # Static assets (images, fonts)
```

## 📜 Available Scripts

In the project directory, you can run:

  * `npm run dev`: Starts the development server.
  * `npm run build`: Builds the app for production.
  * `npm run start`: Starts the production server.
  * `npm run lint`: Runs the linter to check for code quality issues.

-----

## 🤝 Contributing

Contributions are welcome\! Please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.