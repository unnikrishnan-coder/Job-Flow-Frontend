import AddNewButton from "@/app/components/AddNewButton"
import CustomStatusSelect from "@/app/components/CustomStatusSelect"
import LinkCard from "@/app/components/LinkCard";
import Image from "next/image";

export type LinkData = {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
};

// --- Mock Data Array ---

const myLinks: LinkData[] = [
  {
    id: 'l1',
    title: 'My Personal Portfolio',
    description: 'My main design and development portfolio website.',
    url: 'https://my-portfolio-site.com',
    tags: ['Portfolio'],
  },
  {
    id: 'l2',
    title: 'LeetCode 75',
    description: 'A good list of 75 practice problems for interviews.',
    url: 'https://leetcode.com/studyplan/leetcode-75/',
    tags: ['Interview Prep'],
  },
  {
    id: 'l3',
    title: 'John Doe - LinkedIn Profile',
    description: 'Contact at Google, met at the tech fair.',
    url: 'https://www.linkedin.com/in/johndoe',
    tags: ['Networking'],
  },
  {
    id: 'l4',
    title: 'React New Docs (Beta)',
    description: 'The official new documentation for React.',
    url: 'https://react.dev/',
    tags: ['Resource'],
  },
  {
    id: 'l5',
    title: 'Figma Community',
    description: 'Great resource for design system examples.',
    url: 'https://www.figma.com/community',
    tags: ['Resource', 'Portfolio'],
  },
];

const LinksPage = () => {
  return (
    <div className="my-[50px] mx-[200px] flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <h1 className="font-inter font-bold not-italic text-[35px] leading-[120%]">My Links</h1>
                <AddNewButton buttonTitle="Link" formPageLink="/dashboard/new_application"/>
            </div>
            <div className="flex gap-4 items-center">
                <div className="relative flex-1">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <Image
                            src="/search-icon.png"
                            alt="Search"
                            width={16}
                            height={16}
                            className="text-gray-400"
                        />
                    </div>
                    <input
                        type="search"
                        name="search"
                        id="search"
                        className="py-3 pl-10 pr-5 w-full border border-[#DEE1E6] rounded font-inter font-normal not-italic text-[16px] text-[#565D6D] leading-[157%]"
                        placeholder="Search by company or job title..."
                    />
                </div>
                
                <CustomStatusSelect />
            </div>
            <div className="grid gap-8 grid-cols-3">
                {
                    myLinks.map((link) => (
                        <LinkCard key={link.id} link={link} />
                    ))
                }
            </div>
        </div>
  )
}

export default LinksPage